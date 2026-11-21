import { useEffect, useRef, useState, type ReactNode } from 'react'
import { isTouch, navigate, reducedMotion } from './hooks'

/** Splits text into words that rise into place when an ancestor gets `.in`. */
export function Split({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) {
  const lines = text.split('\n')
  let i = 0
  return (
    <span className={`split ${className}`} aria-label={text.replace(/\n/g, ' ')}>
      {lines.map((line, li) => (
        <span key={li} className="split__line" aria-hidden>
          {line.split(' ').map((w, wi) => {
            const idx = i++
            const italic = w.startsWith('_')
            return (
              <span key={wi}>
                <span className="split__mask">
                  <span className={`split__word${italic ? ' it' : ''}`} style={{ transitionDelay: `${delay + idx * 0.06}s` }}>
                    {italic ? w.slice(1) : w}
                  </span>
                </span>{' '}
              </span>
            )
          })}
        </span>
      ))}
    </span>
  )
}

/** Animated number that counts up when scrolled into view. */
export function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(() => (reducedMotion() ? to : 0))
  useEffect(() => {
    const el = ref.current!
    if (reducedMotion()) return
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const dur = 1800
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / dur)
        setVal(Math.round(to * (1 - Math.pow(1 - p, 4))))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.6 })
    io.observe(el)
    return () => io.disconnect()
  }, [to])
  return (
    <span ref={ref}>
      {val.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

/** Wraps children so they drift toward the pointer. */
export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const el = ref.current!
    if (isTouch() || reducedMotion()) return
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
    }
    const leave = () => (el.style.transform = '')
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  }, [strength])
  return (
    <span ref={ref} className="magnetic">
      {children}
    </span>
  )
}

/** 3D tilt on hover. */
export function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const onMove = (e: React.PointerEvent) => {
    if (isTouch() || reducedMotion()) return
    const el = ref.current!
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`
    el.style.setProperty('--gx', `${(px + 0.5) * 100}%`)
    el.style.setProperty('--gy', `${(py + 0.5) * 100}%`)
  }
  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={onMove} onPointerLeave={() => (ref.current!.style.transform = '')}>
      {children}
    </div>
  )
}

/** YouTube facade: thumbnail until clicked, then the real player. */
export function YouTube({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false)
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`)
  return (
    <div className="yt">
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button className="yt__facade" onClick={() => setPlay(true)} aria-label={`Play: ${title}`}>
          <img
            src={thumb}
            alt=""
            loading="lazy"
            onLoad={(e) => {
              // YouTube serves a 120px grey placeholder when maxres is missing
              if ((e.target as HTMLImageElement).naturalWidth < 200) setThumb(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)
            }}
            onError={() => setThumb(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)}
          />
          <span className="yt__play">
            <svg viewBox="0 0 24 24" width="28" height="28"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
          </span>
        </button>
      )}
    </div>
  )
}

/** Auto-playing muted video that only plays while visible. */
export function LoopVideo({ src, poster, className = '' }: { src: string; poster: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current!
    if (reducedMotion()) return
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.2 })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return <video ref={ref} className={className} src={src} poster={poster} muted loop playsInline preload="metadata" />
}

export function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 24 24" width="14" height="14" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

/** Internal link that uses the client-side router. */
export function Link({ to, children, className, onClick, ...rest }: { to: string; children: ReactNode; className?: string; onClick?: () => void; 'aria-current'?: 'page' | undefined }) {
  return (
    <a
      href={to}
      className={className}
      {...rest}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
        e.preventDefault()
        onClick?.()
        navigate(to)
      }}
    >
      {children}
    </a>
  )
}

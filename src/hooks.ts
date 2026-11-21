import { useEffect, useState } from 'react'

export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const isTouch = () => typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

/** Adds `.in` to every `.reveal` element as it enters the viewport. */
export function useRevealObserver(ready: boolean, key: string) {
  useEffect(() => {
    if (!ready) return
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    if (reducedMotion()) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ready, key])
}

/** Parallax for `[data-speed]` elements + scroll progress bar + nav hide/show. */
export function useScrollEffects(key: string) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-speed]'))
    const bar = document.querySelector<HTMLElement>('.progress')
    const nav = document.querySelector<HTMLElement>('.nav')
    let last = window.scrollY
    let raf = 0
    const tick = () => {
      raf = 0
      const y = window.scrollY
      const h = document.documentElement.scrollHeight - window.innerHeight
      if (bar) bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`
      if (nav) {
        nav.classList.toggle('nav--solid', y > 40)
        nav.classList.toggle('nav--hidden', y > last && y > 400)
      }
      last = y
      if (reducedMotion()) return
      const vh = window.innerHeight
      for (const el of els) {
        const r = el.parentElement!.getBoundingClientRect()
        if (r.bottom < -200 || r.top > vh + 200) continue
        const speed = parseFloat(el.dataset.speed || '0')
        const offset = (r.top + r.height / 2 - vh / 2) * speed
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }
    tick()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [key])
}


/* ───────── Tiny History-API router ───────── */
const EVT = 'locationchange'

export function navigate(to: string) {
  if (to === window.location.pathname) return
  window.history.pushState({}, '', to)
  window.dispatchEvent(new Event(EVT))
}

export function usePath() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const sync = () => setPath(window.location.pathname)
    window.addEventListener('popstate', sync)
    window.addEventListener(EVT, sync)
    return () => {
      window.removeEventListener('popstate', sync)
      window.removeEventListener(EVT, sync)
    }
  }, [])
  return path
}

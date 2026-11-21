import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { media, videos } from './data'
import { Arrow, Link, Magnetic, Split } from './fx'
import { reducedMotion, usePath, useRevealObserver, useScrollEffects } from './hooks'
import { NAV } from './nav'
import { Amrit, Arts, Band, Contact, Film, Footer, Gallery, Hero, Honours, Intro, Leadership, Marquee, Research, Voice } from './sections'

/* ───────────────────────── Routes ───────────────────────── */
type Page = { path: string; title: string; label: string; render: () => ReactNode }

const PAGES: Page[] = [
  {
    path: '/',
    title: 'Devika Raj Batra',
    label: 'Home',
    render: () => (
      <>
        <Hero />
        <Marquee items={['Engineering', 'Field research', 'Film', 'Law & policy', 'Debate', 'Kathak', 'Water rights']} />
        <Intro />
        <Band />
        <Explore />
        <Honours />
      </>
    ),
  },
  { path: '/amrit', title: 'Project Amrit', label: 'Project Amrit', render: () => <Amrit /> },
  { path: '/film', title: 'Measured in Blue', label: 'Film', render: () => <Film /> },
  { path: '/research', title: 'Research', label: 'Research', render: () => <Research /> },
  { path: '/leadership', title: 'Leadership', label: 'Leadership', render: () => <><Leadership /><Gallery /></> },
  { path: '/arts', title: 'Arts', label: 'Arts', render: () => <Arts /> },
  { path: '/voice', title: 'Voice', label: 'Voice', render: () => <Voice /> },
  { path: '/contact', title: 'Contact', label: 'Contact', render: () => <Contact /> },
]

const findPage = (path: string) => {
  const clean = path.replace(/\/+$/, '') || '/'
  return PAGES.find((p) => p.path === clean) ?? PAGES[0]
}

/* ───────────────────────── Preloader ───────────────────────── */
function Preloader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0)
  const [leaving, setLeaving] = useState(false)
  useEffect(() => {
    const dur = reducedMotion() ? 200 : 2000
    const start = performance.now()
    let raf = 0
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      setPct(Math.round(100 * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
      else {
        setLeaving(true)
        setTimeout(onDone, reducedMotion() ? 0 : 900)
      }
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [onDone])
  return (
    <div className={`loader${leaving ? ' loader--out' : ''}`}>
      <div className="loader__water" style={{ transform: `translateY(${100 - pct}%)` }}>
        <svg className="loader__wave" viewBox="0 0 1200 40" preserveAspectRatio="none">
          <path d="M0 20 Q150 0 300 20 T600 20 T900 20 T1200 20 V40 H0Z" />
        </svg>
      </div>
      <div className="loader__name">
        {'Devika Raj Batra'.split('').map((c, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.04}s` }}>{c === ' ' ? ' ' : c}</span>
        ))}
      </div>
      <div className="loader__pct">{String(pct).padStart(3, '0')}</div>
      <div className="loader__tag">Who carries the water?</div>
    </div>
  )
}

/* ───────────────────────── Nav ───────────────────────── */
function Nav({ path }: { path: string }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className={`nav${open ? ' nav--open' : ''}${path !== '/' ? ' nav--page' : ''}`}>
      <Link to="/" className="nav__logo" onClick={close}>Devika Raj Batra</Link>
      <nav className="nav__links">
        {NAV.map(([l, h]) => (
          <Link key={h} to={h} onClick={close} className={path === h ? 'is-active' : undefined} aria-current={path === h ? 'page' : undefined}>
            <span data-text={l}>{l}</span>
          </Link>
        ))}
      </nav>
      <Magnetic>
        <Link to="/contact" onClick={close} className="btn btn--dark btn--sm nav__cta">Get in touch</Link>
      </Magnetic>
      <button className="nav__burger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
        <span /><span />
      </button>
    </header>
  )
}

/* ───────────────────────── Home: explore grid ───────────────────────── */
const yt = (id: string, q = 'maxresdefault') => `https://i.ytimg.com/vi/${id}/${q}.jpg`
const EXPLORE = [
  { to: '/amrit', title: 'Project Amrit', tag: 'Safe water · Founder', img: yt(videos.amrit) },
  { to: '/film', title: 'Measured in Blue', tag: 'Documentary · Director', img: yt(videos.film, 'hqdefault') },
  { to: '/research', title: 'Research', tag: 'UCLA · IIT Delhi', img: media.lab },
  { to: '/leadership', title: 'Leadership', tag: 'Head Girl · Debate', img: media.viceHeadGirl },
  { to: '/arts', title: 'Arts', tag: 'Kathak · Vocal', img: media.kathak2 },
  { to: '/voice', title: 'Voice', tag: 'TEDx · Writing', img: yt(videos.tedx) },
]

function Explore() {
  return (
    <section className="explore">
      <div className="wrap">
        <div className="section-head">
          <h2 className="display display--sm reveal"><Split text="Selected _work" /></h2>
          <p className="section-head__aside reveal">Six chapters of one question: who gets left out, and what can be built for them?</p>
        </div>
        <div className="explore__grid">
          {EXPLORE.map((e, i) => (
            <Link to={e.to} className="ecard reveal" key={e.to}>
              <div className="ecard__img" style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
                <img src={e.img} alt="" loading="lazy" />
                <span className="ecard__n">0{i + 1}</span>
              </div>
              <div className="ecard__meta">
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.tag}</p>
                </div>
                <span className="ecard__go"><Arrow /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Next-page link ───────────────────────── */
function NextPage({ path }: { path: string }) {
  const i = PAGES.findIndex((p) => p.path === path)
  const next = PAGES[(i + 1) % PAGES.length]
  return (
    <Link to={next.path} className="nextpage">
      <span className="eyebrow">{next.path === '/' ? 'Back to' : 'Next'}</span>
      <span className="nextpage__title">
        <span className="nextpage__roll" data-text={next.label}>{next.label}</span>
      </span>
      <span className="nextpage__arrow"><Arrow /></span>
    </Link>
  )
}

/* ───────────────────────── App ───────────────────────── */
export default function App() {
  const urlPath = usePath()
  const [ready, setReady] = useState(false)
  const [shown, setShown] = useState(() => findPage(urlPath).path)
  const [curtain, setCurtain] = useState<'idle' | 'in' | 'out'>('idle')
  const [curtainLabel, setCurtainLabel] = useState('')
  const done = useCallback(() => setReady(true), [])

  // Page transition: curtain covers, swap page, curtain lifts
  useEffect(() => {
    const target = findPage(urlPath)
    if (target.path === shown) return
    const instant = reducedMotion()
    const t0 = setTimeout(() => {
      setCurtainLabel(target.label)
      if (!instant) setCurtain('in')
    }, 0)
    const t1 = setTimeout(() => {
      setShown(target.path)
      window.scrollTo({ top: 0, behavior: 'instant' })
      if (!instant) setCurtain('out')
    }, instant ? 0 : 650)
    const t2 = setTimeout(() => setCurtain('idle'), instant ? 0 : 1350)
    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [urlPath, shown])

  const page = findPage(shown)
  useEffect(() => {
    document.title = page.path === '/' ? page.title : `${page.title} · Devika Raj Batra`
  }, [page])

  useRevealObserver(ready, shown)
  useScrollEffects(shown)

  return (
    <>
      {!ready && <Preloader onDone={done} />}
      <div className={`curtain curtain--${curtain}`} aria-hidden>
        <span>{curtainLabel}</span>
      </div>
      <div className="progress" aria-hidden />
      <Nav path={shown} />
      <main key={shown} className={`page${ready ? ' is-ready' : ''}${shown !== '/' ? ' page--inner' : ''}`}>
        {page.render()}
        <NextPage path={shown} />
      </main>
      <Footer />
    </>
  )
}

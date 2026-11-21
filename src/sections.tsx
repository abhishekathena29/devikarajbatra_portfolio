import { useEffect, useRef, useState } from 'react'
import { articles, gallery, honours, leadership, links, media, outlets, pillars, research, stats, videos } from './data'
import { Arrow, Counter, Link, LoopVideo, Magnetic, Split, Tilt, YouTube } from './fx'
import { reducedMotion } from './hooks'
import { NAV } from './nav'

/* ───────────────────────── Hero ───────────────────────── */
export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__copy">
        <p className="eyebrow reveal">Engineer · Researcher · Filmmaker<br />Debater · Kathak artist</p>
        <h1 className="hero__title reveal">
          <Split text={'Science,\n_carried home.'} delay={0.15} />
        </h1>
        <p className="hero__lede reveal" style={{ transitionDelay: '.6s' }}>
          I build things for the people who are usually left out of the design brief, starting with safe water
          for 10,000+ residents of Kusumpur Pahari, one of Delhi’s largest informal settlements.
        </p>
        <div className="hero__actions reveal" style={{ transitionDelay: '.75s' }}>
          <Magnetic><Link to="/amrit" className="btn btn--dark">Explore Project Amrit</Link></Magnetic>
          <span className="status"><i /> Head Girl, Modern School · New Delhi</span>
        </div>
        <ul className="hero__list reveal" style={{ transitionDelay: '.9s' }}>
          <li>Water</li><li>Engineering</li><li>Justice</li><li>A braver tomorrow</li>
        </ul>
      </div>

      <div className="hero__art">
        <div className="hero__block hero__block--sand" data-speed="-0.08" />
        <div className="hero__block hero__block--clay" data-speed="0.12" />
        <div className="hero__block hero__block--blue" data-speed="-0.18" />
        <div className="hero__portrait reveal reveal--clip">
          <img src={media.portraitCut} alt="Portrait of Devika Raj Batra" />
        </div>
        <figure className="hero__card reveal" data-speed="0.22" style={{ transitionDelay: '.9s' }}>
          <img src={media.kathak1} alt="Devika performing Kathak" />
        </figure>
        <p className="script hero__script" aria-hidden>Who carries<br />the water?<br /><small>— DRB</small></p>
        <p className="vert" aria-hidden>A more<br />conscious<br />scientific<br />future</p>
      </div>

      <a href="#intro" className="scroll-cue" aria-label="Scroll down"><span /></a>
    </section>
  )
}

export function Marquee({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const row = items.flatMap((t, i) => [<span key={`t${i}`}>{t}</span>, <em key={`d${i}`}>✦</em>])
  return (
    <div className={`marquee${dark ? ' marquee--dark' : ''}`} aria-hidden>
      <div className="marquee__track">{row}{row}</div>
    </div>
  )
}

/* ───────────────────────── Intro + stats ───────────────────────── */
export function Intro() {
  return (
    <section className="intro" id="intro">
      <h2 className="intro__title reveal">
        <Split text="Devika grew up in Delhi, where water arrives in blue tankers before dawn, and someone always has to wait for it." />
      </h2>
      <p className="intro__text reveal">
        So she went to find out who. Household surveys became a UV-C device, the device became a volunteer movement,
        the movement became a published study, a High Court petition and an award-winning documentary.
        Along the way: research at UCLA and IIT Delhi, a world debate championship at Yale, and twelve years of Kathak.
      </p>
      <div className="stats">
        {stats.map((s, i) => (
          <div className="stat reveal" key={s.label} style={{ transitionDelay: `${i * 0.08}s` }}>
            <strong><Counter to={s.value} suffix={s.suffix} /></strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ───────────────────────── Project Amrit ───────────────────────── */
export function Waves({ className = '' }: { className?: string }) {
  return (
    <svg className={`waves ${className}`} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
      <path className="waves__a" d="M0 60 C240 10 480 110 720 60 S1200 10 1440 60 V120 H0Z" />
      <path className="waves__b" d="M0 70 C240 120 480 20 720 70 S1200 120 1440 70 V120 H0Z" />
    </svg>
  )
}

export function Amrit() {
  return (
    <section className="amrit" id="amrit">
      <Waves className="waves--top" />
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow eyebrow--light reveal">01 — Founder & Lead · 2023 — Present</p>
            <h2 className="display reveal"><Split text="Project _Amrit" /></h2>
          </div>
          <p className="section-head__aside reveal">
            Engineering, field research, community training and legal advocacy in one of Delhi’s largest informal settlements.
          </p>
        </div>

        <div className="amrit__feature reveal reveal--clip">
          <YouTube id={videos.amrit} title="Project Amrit" />
        </div>

        <div className="pillars">
          {pillars.map((p, i) => (
            <article className="pillar reveal" key={p.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className={`shape shape--${p.shape}`} />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <a href={p.link.href} target="_blank" rel="noreferrer" className="link">{p.link.label} <Arrow /></a>
            </article>
          ))}
        </div>

        <div className="amrit__strip">
          <div className="reveal">
            <p className="eyebrow eyebrow--light">Backed by</p>
            <p className="amrit__big">Angel investment from <a href={links.funding} target="_blank" rel="noreferrer">Aman Gupta</a>, co-founder of boAt.</p>
          </div>
          <div className="reveal">
            <p className="eyebrow eyebrow--light">Partners</p>
            <p className="amrit__big">Nisarg Foundation · Each One Feed One · Hakuto Co., Ltd.</p>
          </div>
          <div className="reveal amrit__social">
            <p className="eyebrow eyebrow--light">Follow the work</p>
            <a className="btn btn--light" href={links.amritInstagram} target="_blank" rel="noreferrer">Instagram</a>
            <a className="btn btn--ghost-light" href={links.amritYoutube} target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Film ───────────────────────── */
export function Film() {
  return (
    <section className="film" id="film">
      <div className="film__bg" aria-hidden>
        <span className="drop" style={{ left: '12%', animationDelay: '0s' }} />
        <span className="drop" style={{ left: '38%', animationDelay: '1.4s' }} />
        <span className="drop" style={{ left: '66%', animationDelay: '2.6s' }} />
        <span className="drop" style={{ left: '86%', animationDelay: '.8s' }} />
      </div>
      <div className="wrap">
        <p className="eyebrow eyebrow--light reveal">02 — Documentary · 2026 · Writer, Director, Interviewer</p>
        <blockquote className="film__quote reveal">
          <Split text={'“They wait before dawn\nfor the _blue _tankers.”'} />
        </blockquote>
        <p className="film__title reveal">Measured in Blue</p>
        <div className="film__grid">
          <div className="film__player reveal reveal--clip">
            <YouTube id={videos.film} title="Measured in Blue, a film by Devika Raj Batra" />
          </div>
          <div className="film__info reveal">
            <p>
              A documentary on the women and girls of Kusumpur Pahari who queue for water tankers before sunrise,
              face violence at collection points, and miss school to carry water home.
            </p>
            <div className="laurels">
              {Array.from({ length: 6 }).map((_, i) => (
                <span className="laurel" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                  <svg viewBox="0 0 40 40" aria-hidden><path d="M20 34c-8-2-13-9-13-18M20 34c8-2 13-9 13-18M9 22l-3-2M8 17l-3-3M10 27l-3 0M31 22l3-2M32 17l3-3M30 27l3 0" fill="none" stroke="currentColor" strokeWidth="1.3" /></svg>
                </span>
              ))}
            </div>
            <p className="film__awards">Awards at six international film festivals</p>
            <a href={links.filmAwards} className="link link--light" target="_blank" rel="noreferrer">See the laurels <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Research (hover reveal list) ───────────────────────── */
export function Research() {
  const [active, setActive] = useState(-1)
  const card = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0, cx: 0, cy: 0 })
  useEffect(() => {
    let raf = 0
    const loop = () => {
      const p = pos.current
      p.cx += (p.x - p.cx) * 0.12
      p.cy += (p.y - p.cy) * 0.12
      if (card.current) card.current.style.transform = `translate3d(${p.cx}px, ${p.cy}px, 0) rotate(${(p.x - p.cx) * 0.04}deg)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])
  const r = research[active]
  return (
    <section className="research" id="research" onPointerMove={(e) => (pos.current.x = e.clientX, pos.current.y = e.clientY)}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow reveal">03 — Engineering & Computational Research</p>
            <h2 className="display reveal"><Split text="Selected _Research" /></h2>
          </div>
          <p className="section-head__aside reveal">From an Olympic-scale smart grid to a pneumonia-detection CNN in rural clinics.</p>
        </div>
        <ol className="rlist" onPointerLeave={() => setActive(-1)}>
          {research.map((item, i) => (
            <li key={item.title} className={`rlist__item reveal${active === i ? ' is-active' : ''}`} onPointerEnter={() => setActive(i)}>
              <span className="rlist__n">0{i + 1}</span>
              <div className="rlist__main">
                <h3>{item.title}</h3>
                <p className="rlist__role">{item.role}</p>
                <p className="rlist__text">{item.text}</p>
              </div>
              <span className="rlist__year">{item.year}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="rcard-wrap" aria-hidden>
        <div ref={card} className={`rcard${active >= 0 ? ' rcard--on' : ''}`}>
          <strong>{r?.stat}</strong>
          <span>{r?.statLabel}</span>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Band ───────────────────────── */
export function Band() {
  return (
    <section className="band">
      <p className="band__side reveal">Build the<br />device.<br />Hear the<br />people.<span /></p>
      <h2 className="band__title reveal"><Split text={'Clear thinking.\n_Courageous action.'} /></h2>
      <p className="band__side band__side--r reveal">Petition the<br />court.<br />Tell the<br />story.<span /></p>
    </section>
  )
}

/* ───────────────────────── Leadership (pinned horizontal scroll) ───────────────────────── */
export function Leadership() {
  const sec = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const s = sec.current!, t = track.current!
    const mq = window.matchMedia('(min-width: 900px)')
    let raf = 0
    const layout = () => {
      if (!mq.matches || reducedMotion()) {
        s.style.height = ''
        t.style.transform = ''
        return
      }
      const dist = t.scrollWidth - window.innerWidth
      s.style.height = `${window.innerHeight + dist}px`
      update()
    }
    const update = () => {
      raf = 0
      if (!mq.matches || reducedMotion()) return
      const dist = t.scrollWidth - window.innerWidth
      const top = s.getBoundingClientRect().top
      const p = Math.min(1, Math.max(0, -top / (s.offsetHeight - window.innerHeight)))
      t.style.transform = `translate3d(${-p * dist}px, 0, 0)`
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    layout()
    window.addEventListener('resize', layout)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', layout)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return (
    <section className="lead" id="leadership" ref={sec}>
      <div className="lead__sticky">
        <div className="lead__track" ref={track}>
          <div className="lead__intro">
            <p className="eyebrow reveal">04 — Leadership</p>
            <h2 className="display reveal"><Split text={'Leading\n_out loud.'} /></h2>
            <p className="reveal">
              Head Girl of a 2,000-student school, Vice President of a national debate platform training 10,000+ students,
              Editor-in-Chief, and founder of the school’s first science magazine.
            </p>
            <div className="lead__links reveal">
              <a href={links.modExplorers} target="_blank" rel="noreferrer" className="link">Read Mod Explorers <Arrow /></a>
              <a href={links.debatePhotos} target="_blank" rel="noreferrer" className="link">Debate journey <Arrow /></a>
            </div>
            <p className="lead__hint" aria-hidden>Scroll <Arrow /></p>
          </div>
          {leadership.map((l, i) => (
            <Tilt className={`lcard lcard--${i % 3}`} key={l.title}>
              <div className="lcard__img"><img src={l.img} alt={l.title} loading="lazy" /></div>
              <p className="lcard__meta">{l.meta}</p>
              <h3>{l.title}</h3>
              <p className="lcard__text">{l.text}</p>
            </Tilt>
          ))}
          <div className="lcard lcard--video">
            <video src={media.speech} poster={media.speechPoster} controls preload="none" playsInline />
            <p className="lcard__meta">On the podium</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Honours (Alejandra "shows" grid) ───────────────────────── */
export function Honours() {
  return (
    <section className="honours" id="honours">
      <div className="wrap">
        <h2 className="honours__title reveal"><Split text="Recognition" /></h2>
        <div className="hgrid">
          {honours.map((h, i) => (
            <div className="hitem reveal" key={h.title} style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
              <span className="hitem__date">{h.date}</span>
              <h3>{h.title}</h3>
              <p>{h.place}</p>
              {h.href ? <a href={h.href} target="_blank" rel="noreferrer">View proof</a> : <span className="hitem__na">·</span>}
            </div>
          ))}
        </div>
        <p className="honours__note reveal">
          Presented innovations to Delhi Chief Minister Rekha Gupta, Education Minister Ashish Sood, Water Minister Parvesh Sahib Singh
          and Union Minister of State Savitri Thakur. <a href={links.ministers} target="_blank" rel="noreferrer">See photos</a>
        </p>
      </div>
    </section>
  )
}

/* ───────────────────────── Gallery + lightbox ───────────────────────── */
export function Gallery() {
  const [idx, setIdx] = useState<number | null>(null)
  useEffect(() => {
    if (idx === null) return
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIdx(null)
      if (e.key === 'ArrowRight') setIdx((i) => ((i ?? 0) + 1) % gallery.length)
      if (e.key === 'ArrowLeft') setIdx((i) => ((i ?? 0) - 1 + gallery.length) % gallery.length)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', key)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', key)
    }
  }, [idx])
  return (
    <section className="gallery">
      <div className="wrap">
        <div className="section-head">
          <h2 className="display display--sm reveal"><Split text="From the _archive" /></h2>
          <p className="section-head__aside reveal">World Scholar’s Cup: Champion Debater at Yale, 2nd best scholar in Asia, gold in Doha.</p>
        </div>
        <div className="masonry">
          {gallery.map((g, i) => (
            <button className="masonry__item reveal reveal--clip" key={g.src} onClick={() => setIdx(i)}>
              <img src={g.src} alt={g.caption} loading="lazy" />
              <span>{g.caption}</span>
            </button>
          ))}
        </div>
      </div>
      {idx !== null && (
        <div className="lightbox" onClick={() => setIdx(null)} role="dialog" aria-label={gallery[idx].caption}>
          <img key={idx} src={gallery[idx].src} alt={gallery[idx].caption} onClick={(e) => e.stopPropagation()} />
          <p>{gallery[idx].caption} <small>{idx + 1} / {gallery.length}</small></p>
          <button className="lightbox__close" aria-label="Close">×</button>
          <button className="lightbox__nav lightbox__nav--l" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + gallery.length) % gallery.length) }}>←</button>
          <button className="lightbox__nav lightbox__nav--r" aria-label="Next" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % gallery.length) }}>→</button>
        </div>
      )}
    </section>
  )
}

/* ───────────────────────── Arts ───────────────────────── */
export function Arts() {
  return (
    <section className="arts" id="arts">
      <div className="arts__hero">
        <div className="arts__overlay">
          <p className="eyebrow eyebrow--light reveal">05 — Kathak & Hindustani Classical Vocal · 2014 — Present</p>
          <h2 className="arts__title reveal"><Split text={'Twelve years\nof _rhythm.'} /></h2>
          <p className="arts__sub reveal">Sangeet Prabhakar, First Division, in both Kathak and Hindustani classical vocal. Prayag Sangeet Samiti.</p>
          <p className="arts__script reveal" aria-hidden>ta thei thei tat…</p>
        </div>
        <div className="arts__frame reveal reveal--clip">
          <LoopVideo src={media.kathakLoop} poster={media.kathakLoopPoster} className="arts__loop" />
        </div>
      </div>
      <div className="wrap arts__body">
        <div className="arts__text reveal">
          <p>
            Composed, sang and performed a Kathak medley on water conservation as an artistic extension of Project Amrit.
            As a certified mentor, she has coached 100 junior girls in stagecraft, rhythm and mythological storytelling.
          </p>
          <div className="arts__links">
            <a href={links.performanceJourney} target="_blank" rel="noreferrer" className="link link--light">Performance journey, 2014–2026 <Arrow /></a>
            <a href={links.sangeet} target="_blank" rel="noreferrer" className="link link--light">Sangeet Prabhakar certificates <Arrow /></a>
          </div>
        </div>
        <div className="arts__media">
          <figure className="reveal reveal--clip"><img src={media.kathak2} alt="Kathak performance" loading="lazy" /></figure>
          <figure className="reveal">
            <video src={media.kathakPerf} poster={media.kathakPerfPoster} controls preload="none" playsInline />
            <figcaption>Kathak performance</figcaption>
          </figure>
          <figure className="reveal">
            <video src={media.vocal} poster={media.vocalPoster} controls preload="none" playsInline />
            <figcaption>Hindustani classical vocal</figcaption>
          </figure>
        </div>
        <div className="arts__extras reveal">
          <div><strong>119</strong><span>National squash ranking, India (2023)</span></div>
          <div><strong>1,000+</strong><span>Audience as compere, Founders’ Day & more</span></div>
          <div><strong>4</strong><span>Languages: English, Hindi, Punjabi, German</span></div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Voice: TEDx + writing ───────────────────────── */
export function Voice() {
  return (
    <section className="voice" id="voice">
      <div className="wrap">
        <div className="voice__grid">
          <div>
            <p className="eyebrow reveal">06 — Public voice</p>
            <h2 className="display reveal"><Split text={'Who carries\nthe _water?'} /></h2>
            <p className="voice__lede reveal">
              Her TEDx talk brought the findings of Measured in Blue to a wider audience. She has also spoken as an invited panellist at
              IIT Delhi’s EcoForum and beside her Principal on NewsX’s national panel on skill building.
            </p>
            <a href={links.press} target="_blank" rel="noreferrer" className="link reveal">Hindustan Times & other coverage <Arrow /></a>
          </div>
          <div className="voice__player reveal reveal--clip">
            <YouTube id={videos.tedx} title="TEDx: Who Carries the Water?" />
            <span className="voice__badge">TEDx</span>
          </div>
        </div>

        <div className="writing">
          <p className="eyebrow reveal">Writing: semiconductors, water & sustainability</p>
          <ul>
            {articles.map((a) => (
              <li key={a.href} className="reveal">
                <a href={a.href} target="_blank" rel="noreferrer">
                  <span className="writing__outlet">{a.outlet}</span>
                  <span className="writing__title">{a.title}</span>
                  <span className="writing__arrow"><Arrow /></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="outlets">
        <p className="eyebrow">As seen in & written for</p>
        <Marquee items={outlets} />
      </div>
    </section>
  )
}

/* ───────────────────────── Contact + footer ───────────────────────── */
export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__blue" data-speed="-0.06" aria-hidden />
      <div className="contact__inner">
        <p className="eyebrow eyebrow--light reveal">Contact</p>
        <h2 className="contact__title reveal"><Split text="Get in _touch." /></h2>
        <dl className="contact__list reveal">
          <div>
            <dt>Email</dt>
            <dd><a href={`mailto:${links.email}`}>{links.email}</a></dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>New Delhi, India</dd>
          </div>
          <div>
            <dt>Project Amrit</dt>
            <dd>
              <a href={links.amritInstagram} target="_blank" rel="noreferrer">Instagram</a>
              <span aria-hidden> · </span>
              <a href={links.amritYoutube} target="_blank" rel="noreferrer">YouTube</a>
            </dd>
          </div>
        </dl>
        <div className="contact__actions reveal">
          <Magnetic><a className="btn btn--light" href={`mailto:${links.email}`}>Send an email</a></Magnetic>
        </div>
      </div>
      <svg className="contact__arrow reveal" viewBox="0 0 220 90" aria-hidden>
        <path d="M5 80 C60 85 120 70 200 12" />
        <path d="M168 14 L202 10 L190 42" />
      </svg>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__row">
        <Link to="/" className="nav__logo">Devika Raj Batra</Link>
        <nav>
          {NAV.map(([l, h]) => <Link key={h} to={h}>{l}</Link>)}
        </nav>
        <nav>
          <a href={links.amritInstagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={links.amritYoutube} target="_blank" rel="noreferrer">YouTube</a>
          <span className="status"><i /> New Delhi, India</span>
        </nav>
      </div>
      <div className="footer__row footer__row--small">
        <span>© {new Date().getFullYear()} Devika Raj Batra</span>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Back to top ↑</a>
      </div>
    </footer>
  )
}


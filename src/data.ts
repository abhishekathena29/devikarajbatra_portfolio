const m = (f: string) => `/media/${f}`

export const media = {
  portrait: m('portrait.jpg'),
  portraitCut: m('portrait-cut.webp'),
  german: m('german-minister.jpg'),
  debatePodium: m('debate-podium.jpg'),
  debateStage: m('debate-stage.jpg'),
  yaleTrophies: m('yale-trophies.jpg'),
  yaleStage: m('yale-stage.jpg'),
  yaleHall: m('yale-hall.jpg'),
  yaleChampion: m('yale-champion.jpg'),
  yaleBook: m('yale-book.jpg'),
  teamTrophies: m('team-trophies.jpg'),
  trophyCert: m('trophy-certificate.jpg'),
  lab: m('industry-lab.jpg'),
  viceHeadGirl: m('vice-head-girl.jpg'),
  ymun: m('ymun-certificate.jpg'),
  plaque: m('plaque.jpg'),
  medals: m('medals.jpg'),
  delhiRound: m('delhi-round.jpg'),
  doha: m('doha-certificate.jpg'),
  harvard: m('harvard.jpg'),
  kathak1: m('kathak-1.jpg'),
  kathak2: m('kathak-2.jpg'),
  kathakLoop: m('kathak-loop.mp4'),
  kathakLoopPoster: m('kathak-loop-poster.jpg'),
  kathakPerf: m('kathak-performance.mp4'),
  kathakPerfPoster: m('kathak-performance-poster.jpg'),
  vocal: m('vocal-performance.mp4'),
  vocalPoster: m('vocal-performance-poster.jpg'),
  speech: m('debate-speech.mp4'),
  speechPoster: m('debate-speech-poster.jpg'),
}

export const links = {
  email: 'devikarajbatrapersonal@gmail.com',
  amritYoutube: 'https://youtube.com/@projectamrit',
  amritInstagram: 'https://www.instagram.com/project.amrit/',
  press: 'https://drive.google.com/drive/folders/1cJVl-5abydmYfdvYrQHOxODEmzgTYA1j',
  fieldwork: 'https://drive.google.com/file/d/1hx23y6KABwDuBdF6nMH-8AcMnlcC4MCc/view?usp=sharing',
  paper: 'https://ijssrr.com/journal/en/article/view/3589',
  pil: 'https://drive.google.com/drive/folders/14mh-T-KthrCxO01FoVZaZuxeRIRac4bh?usp=sharing',
  funding: 'https://drive.google.com/file/d/1bUBKXgV4HqR72G-CbNO2qrxP-ri2aOfc/view?usp=sharing',
  patent1: 'https://drive.google.com/file/d/1RVg3zjnsWbDv3NtQ7EtpxRU3OsTg3mjr/view?usp=sharing',
  patent2: 'https://drive.google.com/file/d/1VmzeDR6Vs2VpS4e7Q1zYmklUHGpxVMMA/view?usp=sharing',
  filmAwards: 'https://drive.google.com/drive/folders/1NOV2PH_qXMUMzoa4_He5PopbJOSTgnGJ?usp=sharing',
  modExplorers: 'https://www.modernschoolvasantvihar.org/pdfs/25/MOD_EXPLORERS.pdf',
  debatePhotos: 'https://drive.google.com/drive/folders/1-Z2terZrY0lhKHi5eL5SMTYpmCXmslOl?usp=sharing',
  sangeet: 'https://drive.google.com/drive/folders/1_HNcJ1n7QfF9GzUS_1UcZhZmLP8M8T0I',
  performanceJourney: 'https://drive.google.com/drive/folders/1lHWN0LW9gM7PfDuBIFV-AYRpoLTfs7gV?usp=sharing',
  ministers: 'https://drive.google.com/drive/folders/1nTuM1ddTS-FNK4oUukD5RY5viZKYhYg0',
}

export const videos = {
  amrit: 'mHmRIsmTEbw',
  film: 'Oqq3yZo25uw',
  tedx: 'KuWh7GUNeys',
}

export const stats = [
  { value: 10000, suffix: '+', label: 'Residents reached in Kusumpur Pahari' },
  { value: 700, suffix: '', label: 'Households with safer stored water' },
  { value: 70, suffix: '', label: 'Amrit Ambassadors trained' },
  { value: 300, suffix: '', label: 'Interviews analysed for published research' },
  { value: 6, suffix: '', label: 'International film festival awards' },
  { value: 2, suffix: '', label: 'Patents filed' },
]

export const pillars = [
  {
    shape: 'circle',
    title: 'Engineering',
    text: 'Traced how stored water is contaminated after collection, then designed a submersible UV-C LED unit that disinfects 20 litres in 15 minutes, chemical-free and chargeable by a mobile charger.',
    link: { label: 'Patent filed', href: links.patent1 },
  },
  {
    shape: 'half',
    title: 'Community',
    text: 'Founded Amrit Ambassadors: 70 youth volunteers, deliberately including young women, who install units, run demonstrations and challenge the “disease of normalisation”.',
    link: { label: 'Fieldwork photos', href: links.fieldwork },
  },
  {
    shape: 'triangle',
    title: 'Research',
    text: '“Waiting for the Tanker”, published in IJSSRR, analyses 300 interviews linking water scarcity to crime and safety risks faced by women and girls.',
    link: { label: 'Read the paper', href: links.paper },
  },
  {
    shape: 'square',
    title: 'Law & Policy',
    text: 'Petitioned the Delhi High Court (PIL) for water-quality testing at the point of delivery in tanker-served areas, and for safe, lit collection points.',
    link: { label: 'View the PIL', href: links.pil },
  },
]

export const research = [
  {
    year: '2025 — Now',
    title: 'Smart Grid Energy Research Center, UCLA',
    role: 'Research Apprentice',
    text: 'Modelled electric-bus charging and routing for the LA28 Olympics: the only high-school student on a team of five PhD researchers. Projected 18% lower peak demand, 12% lower campus emissions.',
    stat: '−18%', statLabel: 'peak charging demand',
  },
  {
    year: '2024 — 26',
    title: 'Department of Electrical Engineering, IIT Delhi',
    role: 'Research Scholar & Co-Author',
    text: 'Trained a CNN on 5,000+ annotated chest X-rays for pneumonia detection: 95% accuracy on Delhi Health Panel review, now deployed in 15 rural clinics.',
    stat: '95%', statLabel: 'diagnostic accuracy',
  },
  {
    year: 'Apr — Jun 2026',
    title: 'Hakuto Co., Ltd., Gurgaon Plant',
    role: 'Industry Intern',
    text: 'Studied the full borewell-to-tap treatment train and compared chemical use site by site. Used it to refine Amrit’s UV-C dosing and secured Hakuto’s partnership for phase two.',
    stat: 'UV-C', statLabel: 'dosing refined for phase two',
  },
  {
    year: '2024 — Now',
    title: 'Green-Energy Prototyping',
    role: 'Team Lead',
    text: 'Led a 12-member team building an electric bike. Designed a patent-pending solar fan with a BLDC motor for low-income homes, with 15 units deployed through Amrit.',
    stat: '15', statLabel: 'solar fans deployed',
  },
  {
    year: '2025 — Now',
    title: 'Innovation, AI & Robotics Lab',
    role: 'Student Mentor & AI Community Founder',
    text: 'Led AI-literacy assemblies, mentored IoT teams, and took the school into Delhi AI Grind’s top 60 with Urjavriksh, a pollution-reduction concept.',
    stat: 'Top 60', statLabel: 'Delhi AI Grind 2026',
  },
]

export const leadership = [
  { img: media.viceHeadGirl, title: 'Head Girl', meta: 'Modern School · 2,000+ students', text: 'Vice Head Girl in Grade 11, then Head Girl in Grade 12, an uncommon progression.' },
  { img: media.german, title: 'Diplomatic welcome', meta: 'German Foreign Minister', text: 'Received Dr. Johann Wadephul with the Principal, opening exchanges for students.' },
  { img: media.debateStage, title: 'Debaters of India', meta: 'Vice President & Training Head', text: 'Leads training for 10,000+ debaters across 50 schools.' },
  { img: media.debatePodium, title: 'Debating Society', meta: 'President', text: 'Grew participation to 200+ and hosted DOI x MSVV, the school’s largest debate.' },
  { img: media.yaleStage, title: 'Yale, 2023', meta: 'Tournament of Champions', text: 'Champion Debater (#1); 2nd best scholar in Asia and 5th overall.' },
  { img: media.teamTrophies, title: 'Champion team', meta: 'World Scholar’s Cup', text: 'Champion Debate Team (#1) at Yale, and 15th team globally.' },
]

export const honours = [
  { date: '2026', title: 'Nominee, PM Rashtriya Bal Puraskar', place: 'Science & Technology · 2025 & 2026', href: 'https://drive.google.com/file/d/10zb2R4edtma1MmEF1rE561gJsslhwP7P/view?usp=sharing' },
  { date: '2026', title: 'Selected Solution', place: 'Korea International Water Week', href: 'https://drive.google.com/file/d/1Wj_i15uYYFfvrQ9DolDvqqUXfJ0Tiacc/view?usp=sharing' },
  { date: '2026', title: 'National Humanitarian Excellence Award', place: 'India', href: 'https://drive.google.com/file/d/1mUk0iylMgvtl7gTtc0Aby4DpcwvXEF99/view?usp=sharing' },
  { date: '01.26', title: 'CREST Gold', place: 'British Science Association', href: 'https://drive.google.com/file/d/1EuG7SDaYnrV3CAQGesCkW9mqYOxzzKQ5/view?usp=sharing' },
  { date: 'AP', title: 'AP Scholar with Honor', place: 'College Board', href: 'https://drive.google.com/file/d/1UV7gVaYgnnZZCNaqaVI7ThaATTdcUvvC/view?usp=sharing' },
  { date: '2023', title: 'Champion Debater #1', place: 'World Scholar’s Cup · Yale', href: links.debatePhotos },
  { date: '2023', title: 'Gold, Debate & Team Debate', place: 'Global Round · Doha', href: links.debatePhotos },
  { date: 'GYAF', title: 'Global Youth Action Fund Scholar', place: '1 of 110 · 44 countries', href: undefined },
  { date: '6×', title: 'Film Festival Awards', place: 'Measured in Blue', href: links.filmAwards },
]

export const articles = [
  { outlet: 'ElectronicsEra', title: 'India’s semiconductor dream has an invisible constraint: water', href: 'https://electronicsera.in/indias-semiconductor-dream-has-an-invisible-constraint-water/' },
  { outlet: 'ElectronicsEra', title: 'Can a chip change a village?', href: 'https://electronicsera.in/can-a-chip-change-a-village/' },
  { outlet: 'TimesTech', title: 'From silicon to society: empowering urban villages through science', href: 'https://timestech.in/from-silicon-to-society-empowering-urban-villages-through-science-and-innovation/' },
  { outlet: 'Semiconductor For You', title: 'Beyond the filter: how technology is changing water purification in India', href: 'https://www.semiconductorforu.com/beyond-the-filter-how-technology-is-changing-water-purification-in-india/' },
  { outlet: 'Electronics Buzz', title: 'Semiconductor manufacturing and sustainability: can India build the future without compromising the planet?', href: 'https://electronicsbuzz.in/semiconductor-manufacturing-and-environmental-sustainability-can-india-build-the-future-without-compromising-the-planet/' },
  { outlet: 'IJSSRR', title: 'Waiting for the Tanker: household water management in Kusumpur Pahari', href: links.paper },
]

export const outlets = ['Hindustan Times', 'TEDx', 'TimesTech', 'ElectronicsEra', 'Semiconductor For You', 'Electronics Buzz', 'IJSSRR', 'NewsX']

export const gallery = [
  { src: media.yaleChampion, caption: 'Champion, Tournament of Champions · Yale' },
  { src: media.yaleTrophies, caption: 'World Scholar’s Cup, 2023' },
  { src: media.medals, caption: 'Gold medals in debate & writing' },
  { src: media.delhiRound, caption: 'Delhi Round · World Scholar’s Cup' },
  { src: media.yaleBook, caption: 'Woolsey Hall, Yale' },
  { src: media.doha, caption: 'Global Round · Doha, 2023' },
  { src: media.plaque, caption: 'School honours' },
  { src: media.ymun, caption: 'Yale Model United Nations India' },
  { src: media.trophyCert, caption: 'Debate honours' },
  { src: media.yaleHall, caption: 'Tournament of Champions finals' },
]

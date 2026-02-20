import { useState, useEffect } from 'react'

// ─── Icons ───────────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
    0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757
    -1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 
    3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 
    0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 
    3.3 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 
    2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 
    1.234 1.911 1.234 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 
    1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 
    21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
    0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 
    1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 
    7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 
    13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 
    23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 
    23.2 0 22.222 0h.003z"/>
  </svg>
)

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

// ─── Sidebar Nav ─────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: 'hero', label: 'About' },
  { id: 'startup', label: 'Startup' },
  { id: 'pm', label: 'Product' },
  { id: 'fintech', label: 'Fintech & Ops' },
  { id: 'vc', label: 'Venture Capital' },
  { id: 'skills', label: 'Skills' },
]

function Sidebar({ active }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <aside className="hidden lg:flex flex-col w-56 shrink-0 sticky top-0 h-screen pt-16 pl-12 pr-6 border-r border-gray-100">
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Contents</p>
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`text-left text-sm py-1.5 px-2 rounded transition-colors duration-150 ${active === id
              ? 'font-semibold text-gray-900 bg-gray-100'
              : 'text-gray-500 hover:text-gray-900'
              }`}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-auto pb-12">
        <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-widest">Links</p>
        <a
          href="https://github.com/jianrenchen00"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 py-1 transition-colors"
        >
          <GithubIcon /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/jianrenchen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 py-1 transition-colors"
        >
          <LinkedInIcon /> LinkedIn
        </a>
      </div>
    </aside>
  )
}

// ─── Section wrapper ─────────────────────────────────────────────────────────
function Section({ id, title, children }) {
  return (
    <section id={id} className="py-14 border-b border-gray-100">
      <p className="section-title">{title}</p>
      {children}
    </section>
  )
}

// ─── CV Row ──────────────────────────────────────────────────────────────────
function CvRow({ period, title, company, location, tags = [], children }) {
  return (
    <div className="cv-row">
      <div className="pt-0.5">
        <p className="text-xs text-gray-400 font-medium leading-relaxed whitespace-pre-line">{period}</p>
        {location && <p className="text-xs text-gray-400 mt-1">{location}</p>}
      </div>
      <div>
        <div className="flex flex-wrap items-baseline gap-2 mb-1">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500">{company}</span>
        </div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        )}
        <div className="text-sm text-gray-600 leading-relaxed space-y-1.5">{children}</div>
      </div>
    </div>
  )
}

function Bullet({ children }) {
  return (
    <div className="flex gap-2">
      <span className="text-gray-300 mt-1 shrink-0">›</span>
      <p>{children}</p>
    </div>
  )
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section id="hero" className="py-16 border-b border-gray-100">
      <div className="flex flex-wrap items-center gap-6 mb-6">
        <img
          src="/images/profile-pic.jpg"
          alt="Ren Chen"
          className="w-32 h-32 rounded-full object-cover shrink-0 border border-gray-200"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">Ren Chen</h1>
          <p className="text-base text-gray-500">
            CoFounder · Product Manager · Fintech Operator
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-6">
        Fintech and Web3 Product Manager with a background in venture capital, financial systems, and startup operations. Focused on bridging traditional finance with decentralized infrastructure.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href="https://github.com/jianrenchen00"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-gray-400 rounded px-3 py-1.5 transition-all duration-150"
        >
          <GithubIcon /> github.com/jianrenchen00
        </a>
        <a
          href="https://linkedin.com/in/jianrenchen"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-gray-400 rounded px-3 py-1.5 transition-all duration-150"
        >
          <LinkedInIcon /> LinkedIn
        </a>
      </div>
    </section>
  )
}

// ─── STARTUP ─────────────────────────────────────────────────────────────────
function StartupSection() {
  return (
    <Section id="startup" title="Startup Experience">
      <CvRow
        period={"2023 – Present"}
        title="Co-Founder"
        company="Bots & Bowls"
        location="Barcelona, Spain"
        tags={['Robotics', 'DePIN', 'RaaS', 'Consumer Tech', 'Fundraising']}
      >
        <Bullet>Raised <strong className="text-gray-800">$200K seed funding</strong> and launched a physical store in Barcelona to validate an automated, robotics-powered restaurant concept.</Bullet>
        <Bullet>Engineered a capital-light <strong className="text-gray-800">"Trifecta of De-risking"</strong> business model: eliminated capital risk via map license fees, mitigated operational risk via joint-operations, and secured an EU-based production supply chain.</Bullet>
        <Bullet>Designed a <strong className="text-gray-800">"Compute-to-Earn" DePIN</strong> strategy leveraging idle GPU/CPU power in smart cooking machines for crypto mining and AI training.</Bullet>
      </CvRow>
    </Section>
  )
}

// ─── PRODUCT MANAGEMENT ──────────────────────────────────────────────────────
function PmSection() {
  return (
    <Section id="pm" title="Product Management">
      <CvRow
        period={"2022 – 2023"}
        title="Product Manager"
        company="GnosisPay / OlyPay"
        location="Remote (EU)"
        tags={['DeFi', 'TradFi', 'Payments', 'OKRs', 'M&A']}
      >
        <Bullet>Led product development for a <strong className="text-gray-800">self-custodial crypto debit card</strong> bridging DeFi assets with real-world TradFi transactions.</Bullet>
        <Bullet>Co-authored and executed <strong className="text-gray-800">18-month OKRs</strong>, coordinating cross-functional teams (compliance, legal, engineering) and external partners (Tangem, Austria Card).</Bullet>
        <Bullet>Led financial modeling and <strong className="text-gray-800">M&A due diligence</strong> for the strategic acquisition of Monerium (stablecoin issuance technology).</Bullet>
      </CvRow>
    </Section>
  )
}

// ─── FINANCIAL & DATA SYSTEMS ─────────────────────────────────────────────────
function FintechSection() {
  return (
    <Section id="fintech" title="Financial & Data Systems">
      <CvRow
        period={"2022"}
        title="Payments Operations Analyst"
        company="Kai.com"
        location="Remote"
        tags={['Payments', 'SEPA', 'SWIFT', 'BVNK', 'TRON']}
      >
        <Bullet>Architected <strong className="text-gray-800">Euro payment infrastructure via BVNK</strong>, enabling over <strong className="text-gray-800">$5M/month</strong> in cross-border transactions (SWIFT/SEPA).</Bullet>
        <Bullet>Reduced operational costs by <strong className="text-gray-800">30%</strong> by transitioning from staking TRX to renting TRON network energy for transaction fees.</Bullet>
      </CvRow>

      <CvRow
        period={"2021"}
        title="System Administrator"
        company="Teya"
        location="Lisbon, Portugal / Remote"
        tags={['Workato', 'API Automation', 'Hibob', 'JIRA', 'Operations']}
      >
        <Bullet>Built <strong className="text-gray-800">API and webhook automations using Workato</strong> to integrate HR and Finance systems (Hibob, JIRA), increasing operational efficiency by <strong className="text-gray-800">75%</strong>.</Bullet>
      </CvRow>
    </Section>
  )
}

// ─── VENTURE CAPITAL ─────────────────────────────────────────────────────────
function VcSection() {
  return (
    <Section id="vc" title="Venture Capital">
      <CvRow
        period={"2021"}
        title="Analyst"
        company="AppWorks"
        location="Taipei, Taiwan"
        tags={['VC', 'Equity Research', 'DeFi', 'Demo Day', 'Yield Farming']}
      >
        <Bullet>Organized a <strong className="text-gray-800">blockchain-focused Demo Day</strong> connecting over 200 investors, founders, and industry experts.</Bullet>
        <Bullet>Conducted deep-dive equity research and investment theses on high-growth tech entities including <strong className="text-gray-800">Pinterest, Square, Roblox</strong>, and emerging DeFi protocols.</Bullet>
        <Bullet>Achieved a <strong className="text-gray-800">153% APY (2020)</strong> through systematic yield farming and DeFi risk management.</Bullet>
      </CvRow>
    </Section>
  )
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────
const SKILLS = [
  {
    category: 'Product & Strategy',
    items: ['Product Roadmapping', 'OKR Frameworks', 'MVP Scoping', 'PRD Writing', 'User Research', 'Agile / Scrum'],
  },
  {
    category: 'Payments & Fintech',
    items: ['SEPA / SWIFT', 'Payment Reconciliation', 'FX Operations', 'DeFi Protocols', 'E-money Licensing', 'KYC/AML Basics'],
  },
  {
    category: 'Data & Operations',
    items: ['SQL', 'Workato Automation', 'Salesforce', 'Zendesk', 'Data Reconciliation', 'Dashboard Reporting'],
  },
  {
    category: 'Business & Startup',
    items: ['Fundraising', 'Pitch Decks', 'Equity Research', 'Go-to-Market', 'Franchise Ops', 'DePIN Strategy'],
  },
]

function SkillsSection() {
  return (
    <Section id="skills" title="Skills & Expertise">
      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
        {SKILLS.map(({ category, items }) => (
          <div key={category}>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{category}</p>
            <ul className="space-y-1.5">
              {items.map(item => (
                <li key={item} className="text-sm text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-10 text-center">
      <p className="text-xs text-gray-400">
        © {new Date().getFullYear()} Ren Chen &mdash; Built with React + Vite + Tailwind CSS
      </p>
    </footer>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map(n => n.id)
    const observers = {}

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      observers[id] = obs
    })

    return () => Object.values(observers).forEach(o => o.disconnect())
  }, [])

  return (
    <div className="flex w-full min-h-screen bg-white text-gray-900">
      <Sidebar active={activeSection} />

      {/* Main content */}
      <main className="flex-1 min-w-0">
        {/* Mobile top nav */}
        <nav className="lg:hidden sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-100 px-4 py-3 flex gap-4 overflow-x-auto">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              className={`text-xs font-medium whitespace-nowrap transition-colors ${activeSection === id ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700'
                }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Content area */}
        <div className="px-8 lg:px-16 xl:px-24 max-w-4xl">
          <HeroSection />
          <StartupSection />
          <PmSection />
          <FintechSection />
          <VcSection />
          <SkillsSection />
          <Footer />
        </div>
      </main>
    </div>
  )
}

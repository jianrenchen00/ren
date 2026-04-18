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

const MediumIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
)

const NotionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
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
  { id: 'artifacts', label: 'Artifacts' },
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
        <a
          href="https://jianrenchen00.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 py-1 transition-colors"
        >
          <MediumIcon /> Medium
        </a>
        <a
          href="https://automationdrk.notion.site/Career-Experiences-Portfolio-Ren-11198bd49d1b805a8de9fc0bf3b6a3f2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 py-1 transition-colors"
        >
          <NotionIcon /> Portfolio
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
          src={`${import.meta.env.BASE_URL}images/profile-pic.jpg`}
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

      <div className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-6 space-y-1.5">
        <p>London-based Data Analyst and Product Manager with experience across finance, startups, and Web3.</p>
        <p>Specialized in crypto trading, equity research, and corporate valuation.</p>
        <p>Focused on using data analysis and blockchain technology to improve financial systems.</p>
      </div>

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
        <a
          href="https://jianrenchen00.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-gray-400 rounded px-3 py-1.5 transition-all duration-150"
        >
          <MediumIcon /> Medium
        </a>
        <a
          href="https://automationdrk.notion.site/Career-Experiences-Portfolio-Ren-11198bd49d1b805a8de9fc0bf3b6a3f2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-gray-400 rounded px-3 py-1.5 transition-all duration-150"
        >
          <NotionIcon /> Notion Portfolio
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
        title="Co-Founder & Product Builder"
        company="Bots & Bowls (https://www.botsbowls.com/)"
        location="Barcelona, Spain"
        tags={['Robotics', 'RaaS', 'Next.js', 'AI', 'Fundraising', 'Tokenomics']}
      >
        <Bullet><strong className="text-gray-800">Strategic Launch:</strong> Secured <strong className="text-gray-800">£100K in seed funding</strong> and launched an AI-robotic kitchen ("Future Noodles") in Barcelona.</Bullet>
        <Bullet><strong className="text-gray-800">Business Model:</strong> Developed a scalable "Robotics-as-a-Service" combined with a "Visa Tokenomic system" to optimize resource allocation.</Bullet>
        <Bullet><strong className="text-gray-800">Technical Implementation:</strong> Architected a scalable full-stack platform using <strong className="text-gray-800">Next.js (App Router), TypeScript, Tailwind CSS</strong>, and Generative AI workflows, managing the entire CI/CD lifecycle.</Bullet>
      </CvRow>

      <CvRow
        period={"2023"}
        title="Business Advisor"
        company="Kensington Knowledge Crafts"
        location="London, UK"
        tags={['Due Diligence', 'Financial Modeling', 'AI', 'Autonomous Driving', 'Fundraising']}
      >
        <Bullet>Conducted due diligence, financial modeling, and business analysis for <strong className="text-gray-800">AI and autonomous driving startups</strong>, supporting a <strong className="text-gray-800">$5M funding round</strong>.</Bullet>
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
        title="Crypto Operation Associate / PM"
        company="Gnosis Pay"
        location="Remote (EU)"
        tags={['DeFi', 'Visa', 'OKRs', 'DCF', 'PCI-DSS', 'AML', 'Tangem']}
      >
        <Bullet><strong className="text-gray-800">Go-to-Market & Funding:</strong> Developed 18-month OKRs and DCF financial models. Secured <strong className="text-gray-800">£500K internal funding</strong> to bridge decentralized assets with the Visa network (ISO 8583).</Bullet>
        <Bullet><strong className="text-gray-800">Hardware Integration:</strong> Orchestrated the integration of hardware wallets (Tangem) with payment processors, ensuring PCI-DSS and FCA compliance.</Bullet>
        <Bullet><strong className="text-gray-800">Forensic Compliance:</strong> Led a forensic analysis on a <strong className="text-gray-800">500K USDT suspicious transaction cluster</strong> using MistTrack and OKLink, strengthening the firm's AML framework.</Bullet>
      </CvRow>

      <CvRow
        period={"2022"}
        title="Product Manager (Crypto Credit Card)"
        company="Nethermind"
        location="Remote"
        tags={['DeFi', 'Credit Card', 'Revenue Modeling', 'Risk Management', 'Web3']}
      >
        <Bullet>Developed a <strong className="text-gray-800">crypto credit card concept</strong>, defining target users, revenue models, risk management frameworks, and DeFi platform integration strategies.</Bullet>
      </CvRow>

      <CvRow
        period={"2021"}
        title="Fintech Analyst"
        company="CFTE (Centre for Finance, Technology and Entrepreneurship)"
        location="London, UK"
        tags={['Fintech', 'Stablecoin', 'DeFi', 'Sponsorship', 'Ripple']}
      >
        <Bullet>Managed product development for Fintech programs, including <strong className="text-gray-800">Stablecoin and DeFi courses</strong>.</Bullet>
        <Bullet>Secured a <strong className="text-gray-800">£100K+ sponsorship with Ripple</strong> to fund program development and expand curriculum reach.</Bullet>
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
        title="Finance Operation Manager / Business Partner"
        company="Kai.com (Centralized Exchange)"
        location="Remote"
        tags={['White-Label Visa', 'BVNK', 'SWIFT', 'M&A', 'Reconciliation', 'Xero']}
      >
        <Bullet><strong className="text-gray-800">B2B2C White-Label Visa Program:</strong> Launched a turnkey Visa solution engineered with a crypto-to-fiat bridge for automatic USDT conversion across global Visa, Alipay, and ATMs.</Bullet>
        <Bullet><strong className="text-gray-800">Payment Infrastructure:</strong> Integrated BVNK Embedded Wallet (US ACH, Fedwire, SWIFT via API). Designed seamless Fiat-Stablecoin conversion workflows via Virtual Accounts, processing <strong className="text-gray-800">5M+</strong> in volume.</Bullet>
        <Bullet><strong className="text-gray-800">Strategic M&A:</strong> Executed the <strong className="text-gray-800">£300K financial settlement</strong> for the UPTX.com acquisition. Directed the DD process (AML, KYC, SPA) and partnered with operations to source liquidity providers.</Bullet>
        <Bullet><strong className="text-gray-800">Reconciliation:</strong> Bridged on-chain data (Udun/Binance) with Xero accounting ledgers using Cash Coding and Excel mapping to manage settlements for <strong className="text-gray-800">165+ employees</strong> and affiliates.</Bullet>
      </CvRow>

      <CvRow
        period={"2022"}
        title="DeFi Research Analyst"
        company="Nethermind"
        location="Remote"
        tags={['DeFi', 'Arbitrage', 'Pendle', 'Liquid Restaking', 'Smart Contracts']}
      >
        <Bullet>Analyzed <strong className="text-gray-800">12 DeFi contracts</strong> to identify arbitrage opportunities in liquid restaking tokens on the <strong className="text-gray-800">Pendle protocol</strong>.</Bullet>
      </CvRow>

      <CvRow
        period={"2021"}
        title="System and Data Operations"
        company="Teya"
        location="Lisbon, Portugal / Remote"
        tags={['Workato', 'Slack', 'JIRA', 'Hibob', 'Revenue Ops', 'Analytics']}
      >
        <Bullet><strong className="text-gray-800">Revenue Operations Automation:</strong> Spearheaded digital transformation for <strong className="text-gray-800">1,500+ employees</strong>. Utilized Workato (API, Webhooks) to orchestrate workflows between Hibob (HRIS) and JIRA, automating payroll reconciliation.</Bullet>
        <Bullet><strong className="text-gray-800">Process Engineering:</strong> Optimized contractor on/off-boarding workflows. Reduced <strong className="text-gray-800">600+ IT/HR tickets</strong> via self-service Slack bots and automated approval chains.</Bullet>
        <Bullet><strong className="text-gray-800">Commercial Analytics:</strong> Designed dynamic B2B Operations Dashboards using Advanced Excel and Jira DB to track Revenue, COGS, and Profit Margins.</Bullet>
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
        title="VC and Accelerator Analyst Intern"
        company="AppWorks"
        location="Taipei, Taiwan"
        tags={['VC', 'Equity Research', 'Demo Day', 'Blockchain']}
      >
        <Bullet>Conducted and published equity research on <strong className="text-gray-800">Pinterest, Square, and Roblox</strong> within the AppWorks community.</Bullet>
      </CvRow>

      <CvRow
        period={"2020"}
        title="Investment Analyst"
        company="Cornerstone Ventures"
        location="London, UK"
        tags={['VC', 'Deal Sourcing', 'Tech Research', 'Finance']}
      >
        <Bullet>Sourced and interviewed <strong className="text-gray-800">10+ target companies</strong> and published insights on technology and finance trends.</Bullet>
      </CvRow>

      <CvRow
        period={"2020"}
        title="ESG Research Intern"
        company="Ernst & Young"
        location="London, UK"
        tags={['ESG', 'CSR', 'Research', 'Advisory']}
      >
        <Bullet>Assisted in compiling <strong className="text-gray-800">ESG research</strong> and corporate social responsibility reports.</Bullet>
      </CvRow>

      <CvRow
        period={"2019"}
        title="Equity Research Intern"
        company="China Merchants Securities"
        location="China"
        tags={['Equity Research', 'Financial Analysis', 'Energy Sector', 'Portfolio']}
      >
        <Bullet>Analyzed <strong className="text-gray-800">financial and energy sectors</strong> to build and track stock portfolios.</Bullet>
      </CvRow>
    </Section>
  )
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────
const SKILLS = [
  {
    category: 'Tools & Platforms',
    items: ['Antigravity', 'Next.js', 'Postman', 'Workato', 'JIRA', 'Canva', 'Tableau', 'Xero'],
  },
  {
    category: 'Languages',
    items: ['VBA', 'Python', 'SQL'],
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

// ─── ARTIFACTS ───────────────────────────────────────────────────────────────
const ARTIFACTS = [
  {
    title: 'Professional CV',
    description: 'Full career history covering product, fintech, and Web3 roles.',
    file: 'Ren_Chen_CV_2026.pdf',
    type: 'pdf',
  },
  {
    title: 'Forensic Analysis Report',
    description: 'On-chain investigation of suspicious wallet clusters using MistTrack and OKLink.',
    file: 'Forensic_Analysis_for_suspicious_wallets.pdf',
    type: 'pdf',
  },
  {
    title: 'Tokenomics Audit (Olympus DAO)',
    description: 'Deep-dive analysis of OHM tokenomics, bonding mechanisms, and protocol sustainability.',
    file: 'Olympus_Dao_Tokenomics_Ren.pdf',
    type: 'pdf',
  },
  {
    title: 'DeFi Arbitrage Research',
    description: 'Arbitrage opportunity analysis on liquid restaking tokens via the Pendle protocol.',
    file: 'Pendle_(LRTs)_arbitrage_Faris_Ren.pdf',
    type: 'pdf',
  },
  {
    title: 'GnosisPay Business Plan & PNL',
    description: 'Full business plan and P&L model for the OlyPay crypto debit card product.',
    file: 'Oly_BP_New_v2.0_no_payroll_(1).xlsx',
    type: 'xlsx',
  },
  {
    title: 'M&A Financial Modeling',
    description: 'DCF and valuation model used for the Gnosis Pay strategic acquisition analysis.',
    file: 'Ren_GNO_valuation.xlsx',
    type: 'xlsx',
  },
]

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
)

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

function ArtifactsSection() {
  return (
    <Section id="artifacts" title="Featured Artifacts & Documents">
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
        {ARTIFACTS.map(({ title, description, file, type }) => (
          <div
            key={file}
            className="flex flex-col justify-between border border-gray-100 rounded-lg p-5 hover:border-gray-300 transition-colors duration-150"
          >
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400"><FileIcon /></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {type === 'pdf' ? 'PDF' : 'Excel'}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
            </div>
            <div>
              {type === 'pdf' ? (
                <a
                  href={`${import.meta.env.BASE_URL}documents/${file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-gray-400 rounded px-3 py-1.5 transition-all duration-150"
                >
                  <ExternalLinkIcon /> Preview
                </a>
              ) : (
                <a
                  href={`${import.meta.env.BASE_URL}documents/${file}`}
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-gray-400 rounded px-3 py-1.5 transition-all duration-150"
                >
                  <DownloadIcon /> Download
                </a>
              )}
            </div>
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
          <ArtifactsSection />
          <Footer />
        </div>
      </main>
    </div>
  )
}

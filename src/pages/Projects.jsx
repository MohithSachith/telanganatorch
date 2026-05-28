import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const categories = ['All', 'Documentation', 'Community', 'Research', 'Film', 'Education']

const projects = [
  {
    id: 1, category: 'Documentation', status: 'Ongoing',
    image: '/gallery/temples/2.jpg',
    title: "Mapping Telangana's Forgotten Temples",
    desc: 'A systematic GPS-mapped survey of temples across rural Telangana — many unrecorded in any government registry. Covers 30+ mandals and counting.',
    tags: ['Survey', 'GPS', 'Temples'],
    year: '2021–present',
    stat: '30+', statLabel: 'Mandals',
    featured: true, // Editorial layout flag
  },
  {
    id: 2, category: 'Film', status: 'Completed',
    image: '/gallery/documentaries/2.jpg',
    title: 'Voices of Stone — Documentary Series',
    desc: 'A 4-episode documentary on Kakatiya-era inscriptions and the master craftsmen traditions they document. Premiered at Hyderabad Literary Festival 2022.',
    tags: ['Film', 'Kakatiya', 'Inscriptions'],
    year: '2021–2022',
    stat: '4', statLabel: 'Episodes',
  },
  {
    id: 3, category: 'Community', status: 'Ongoing',
    image: '/gallery/heritage-walks/2.jpg',
    title: 'Old Hyderabad Heritage Walks',
    desc: "Monthly guided walks through Charminar, Laad Bazaar, Purani Haveli, and the old city's hidden gems, reaching 500+ participants annually.",
    tags: ['Walks', 'Hyderabad', 'Community'],
    year: '2016–present',
    stat: '500+', statLabel: 'Participants/yr',
  },
  {
    id: 4, category: 'Research', status: 'Completed',
    image: '/gallery/exhibitions/2.jpg',
    title: 'Nizam-Era Architecture Archive',
    desc: 'Photographic and architectural documentation of 60+ Nizam-period buildings in Hyderabad, with detailed conservation status assessments.',
    tags: ['Architecture', 'Nizams', 'Archive'],
    year: '2019–2021',
    stat: '60+', statLabel: 'Buildings',
  },
  {
    id: 5, category: 'Education', status: 'Ongoing',
    image: '/gallery/events/2.jpg',
    title: 'Youth Heritage Champions Program',
    desc: 'School and college partnerships bringing heritage awareness workshops to 10,000+ students annually across Telangana.',
    tags: ['Youth', 'Schools', 'Outreach'],
    year: '2018–present',
    stat: '10K+', statLabel: 'Students/yr',
    featured: true, // Editorial layout flag
  },
  {
    id: 6, category: 'Documentation', status: 'Completed',
    image: '/gallery/documentaries/3.jpg',
    title: 'Manuscript Preservation Initiative',
    desc: 'Digitization and conservation of over 2,000 palm-leaf manuscripts from private collections and temple libraries across the state.',
    tags: ['Manuscripts', 'Digital', 'Preservation'],
    year: '2020–2023',
    stat: '2,000+', statLabel: 'Manuscripts',
  },
  {
    id: 7, category: 'Community', status: 'Ongoing',
    image: '/gallery/temples/3.jpg',
    title: 'Warangal Heritage Circuit',
    desc: 'Developing a self-guided heritage trail connecting Warangal Fort, Thousand Pillar Temple, and Bhadrakali Temple with interpretive signage.',
    tags: ['Warangal', 'Tourism', 'Trail'],
    year: '2023–present',
    stat: '3', statLabel: 'Monuments',
  },
  {
    id: 8, category: 'Research', status: 'Ongoing',
    image: '/gallery/exhibitions/3.jpg',
    title: 'Kakatiya Sculpture Catalogue',
    desc: 'Building a comprehensive illustrated catalogue of Kakatiya-period sculptures dispersed across museums, temples, and private collections globally.',
    tags: ['Sculpture', 'Catalogue', 'Kakatiya'],
    year: '2022–present',
    stat: '400+', statLabel: 'Sculptures',
  },
  {
    id: 9, category: 'Education', status: 'Completed',
    image: '/gallery/events/3.jpg',
    title: 'Heritage in Classrooms Initiative',
    desc: 'Created a supplementary curriculum module on Telangana heritage adopted by 45 government schools in collaboration with the state education board.',
    tags: ['Curriculum', 'Schools', 'Government'],
    year: '2019–2022',
    stat: '45', statLabel: 'Schools',
  },
]

function useIntersection(ref, threshold = 0.02) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { 
        setVisible(true)
        obs.disconnect() 
      }
    }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref, threshold])
  return visible
}

function ProjectCard({ project, index, isAllCategorySelected }) {
  const ref = useRef(null)
  const visible = useIntersection(ref)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // Dynamic conditional span calculation for grid flow variance
  const gridSpan = project.featured && isAllCategorySelected
    ? 'md:col-span-2 grid-rows-1' 
    : 'col-span-1'

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col justify-between bg-[#FDFCFA] border border-[#EBE4D8] rounded-sm overflow-hidden transition-all duration-700 ease-out hover:bg-[#0C0907] hover:border-[#D4AF37] hover:shadow-[0_30px_70px_rgba(12,9,7,0.25)] hover:-translate-y-1.5 ${gridSpan} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${(index % 3) * 60}ms` }}
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Laser Spot Highlight Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.07), transparent 50%)`
        }}
      />

      {/* Frame Accent Corners */}
      <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-[#A69276]/30 opacity-60 group-hover:opacity-100 group-hover:border-[#D4AF37] transition-all duration-300 z-20" />
      <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-[#A69276]/30 opacity-60 group-hover:opacity-100 group-hover:border-[#D4AF37] transition-all duration-300 z-20" />

      <div className={`w-full flex flex-col ${project.featured && isAllCategorySelected ? 'md:flex-row' : ''}`}>
        
        {/* Dynamic Image Wrapper Container */}
        <div className={`relative overflow-hidden bg-[#EFECE6] w-full ${
          project.featured && isAllCategorySelected ? 'md:w-[45%] h-64 md:h-auto min-h-[260px]' : 'h-60'
        }`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[10%] group-hover:grayscale-0 brightness-[0.95] group-hover:brightness-100"
            loading="lazy"
          />
          {/* Subtle Dynamic Light Filters */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCFA]/90 via-transparent to-transparent opacity-40 group-hover:opacity-100 group-hover:from-[#0C0907] transition-all duration-500" />
          
          {/* Floating Status Component Tag */}
          <div className="absolute top-4 right-4 backdrop-blur-md bg-[#FDFCFA]/80 group-hover:bg-[#1A1512]/90 border border-[#A69276]/20 group-hover:border-[#D4AF37]/30 px-2.5 py-1 transition-all duration-300">
            <p className="font-sans tracking-[0.15em] text-[9px] uppercase font-medium flex items-center gap-1.5 text-[#5C4D3C] group-hover:text-[#E6C687]">
              <span className={`w-1 h-1 rounded-full ${project.status === 'Ongoing' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse' : 'bg-amber-800'}`} />
              {project.status}
            </p>
          </div>

          {/* Core Volume Meta Index Category Anchor */}
          <span className="absolute bottom-4 left-5 font-accent text-[9px] tracking-[0.25em] uppercase text-[#8C7A6B] group-hover:text-[#D4AF37] transition-colors duration-300">
            {project.category}
          </span>
        </div>

        {/* Content Typography Engine */}
        <div className="flex-1 flex flex-col p-6 md:p-7 justify-between relative">
          <div>
            <h3 className="font-serif text-xl font-normal text-[#1A120B] group-hover:text-[#FAF8F5] leading-tight tracking-wide mb-3 transition-colors duration-300">
              {project.title}
            </h3>
            
            <p className="font-sans text-[13px] text-[#63584E] group-hover:text-[#C2B6A8] leading-relaxed mb-6 font-light transition-colors duration-300">
              {project.desc}
            </p>
          </div>

          <div>
            {/* Tag Badges Strip */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="font-sans text-[9px] tracking-widest uppercase px-2 py-0.5 bg-[#F2ECE0]/60 group-hover:bg-[#1C1613] text-[#5C4D3C] group-hover:text-[#C4A473] border border-[#E6DFD3] group-hover:border-[#382E26] transition-all duration-300">
                  {tag}
                </span>
              ))}
            </div>

            {/* Base Meta Ledger Footer Column */}
            <div className="pt-4 border-t border-[#EBE4D8] group-hover:border-[#241D18] flex justify-between items-center transition-colors duration-300">
              <div>
                <p className="font-serif text-lg font-normal text-[#967855] group-hover:text-[#D4AF37] leading-none mb-0.5">{project.stat}</p>
                <p className="font-sans text-[9px] uppercase tracking-widest text-[#A6998A] font-medium">{project.statLabel}</p>
              </div>
              
              <div className="text-right">
                <p className="font-sans text-[11px] tracking-wide text-[#A69276] group-hover:text-[#8C7A6B] mb-0.5">{project.year}</p>
                <span className="inline-flex items-center gap-1 font-serif text-[10px] uppercase tracking-widest text-[#D4AF37] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">
                  Explore →
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <main className="bg-[#FAF8F5] min-h-screen selection:bg-[#D4AF37] selection:text-black">
      {/* Premium Integrated Typography Sheet */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Plus+Jakarta+Sans:wght@300;400;500&display=swap');
        .font-serif { font-family: 'Playfair Display', Georgia, serif; }
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-accent { font-family: 'Cinzel', serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ── HIGH INDUSTRIAL DARK HERO HEADER ── */}
      <section className="relative pt-36 pb-28 px-6 overflow-hidden bg-[#0F0C0A] border-b border-black">
        {/* Parallax Depth Map Texture Underlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/gallery/temples/8.jpg')] bg-cover bg-center mix-blend-luminosity pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="font-accent text-[10px] tracking-[0.45em] uppercase text-[#D4AF37] mb-4 block">
            Portfolio Logs & Field Index
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#FAF8F5] tracking-wide leading-tight mb-6">
            Active Initiatives & <br />
            <span className="italic font-light text-[#C4A473]">Cultural Documentation</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#A69C92] max-w-xl mx-auto leading-relaxed font-light tracking-wide">
            From granular architectural monitoring matrices to premium broadcast-grade cinematic studies, our operations protect vulnerable heritage through rigorous modern registry systems.
          </p>
        </div>
      </section>

      {/* ── STICKY CONTROL NAV CONTROLLER ── */}
      <nav className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EBE4D8] shadow-[0_2px_20px_rgba(12,9,7,0.02)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-4 scroll-smooth justify-start md:justify-center">
            {categories.map(cat => {
              const count = (cat === 'All' ? projects : projects.filter(p => p.category === cat)).length
              const isActive = active === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`font-sans text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-none whitespace-nowrap transition-all duration-300 relative ${
                    isActive 
                      ? 'bg-[#120F0D] text-[#D4AF37] shadow-md font-medium' 
                      : 'text-[#6B5E50] border border-transparent hover:border-[#E6DFD3] hover:text-black'
                  }`}
                >
                  {cat} 
                  <span className={`text-[8px] ml-1.5 opacity-50 ${isActive ? 'text-[#FAF8F5]' : ''}`}>
                    [{count}]
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* ── LAYOUT DATA INDEX STRIP ── */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-5 border-b border-[#EBE4D8] gap-4">
          <p className="font-sans text-[11px] uppercase tracking-widest text-[#8C7A6B]">
            Query Index: Showing <span className="font-medium text-black">{filtered.length}</span> records in view
          </p>
          <div className="flex flex-wrap gap-2">
            {['Ongoing', 'Completed'].map(status => (
              <span key={status} className="font-sans text-[9px] uppercase tracking-widest bg-[#F2ECE0]/50 text-[#5C4D3C] px-3 py-1.5 rounded-none border border-[#EBE4D8]">
                {status}: <span className="font-medium text-black">{filtered.filter(p => p.status === status).length}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS EDITORIAL ASYMMETRIC GRID MATRIX ── */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filtered.map((project, i) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={i} 
              isAllCategorySelected={active === 'All'} 
            />
          ))}
        </div>
      </section>

      {/* ── CALL TO ACTION SYSTEM MODULE ── */}
      <section className="bg-[#0C0907] text-[#FAF8F5] py-28 px-6 relative overflow-hidden border-t border-[#382E26]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <span className="font-accent text-[9px] tracking-[0.4em] uppercase text-[#A69276] mb-3 block">Sustained Field Operations</span>
          <h2 className="font-serif text-3xl md:text-5xl font-normal tracking-wide mb-6">
            Advance Vital Heritage <br /><span className="italic font-light text-[#D4AF37]">Preservation</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#A69C92] max-w-md mx-auto leading-relaxed font-light mb-10">
            Your foundational contributions directly finance field coordinate instrumentation equipment, regional researcher baseline stipends, and accessible secure data archive mapping deployments.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.25em] uppercase bg-[#D4AF37] text-black px-8 py-4 font-medium transition-all duration-300 hover:bg-[#F3D36C] hover:-translate-y-0.5 shadow-xl shadow-black/40"
          >
            Join Our Mission <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
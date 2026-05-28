// Gallery categories
export const galleryCategories = [
  'All',
  'Heritage Walks',
  'Temples',
  'Events',
  'Exhibitions',
  'Documentation',
  'Team',
]

// ─────────────────────────────────────────────────
// HOW TO ADD IMAGES (for the person setting up images):
//
// 1. Put image files inside the correct folder under /public/gallery/
// 2. Name them 1.jpg, 2.jpg, 3.jpg ... (up to 10 per section)
// 3. To add more images, just uncomment the lines below
//    or add new entries following the same pattern.
// ─────────────────────────────────────────────────

export const galleryImages = [

  // ── HERITAGE WALKS (add up to 10 images) ──────────────
  // Folder: public/gallery/heritage-walks/
  { id: 1,  src: '/gallery/heritage-walks/1.jpg',  alt: 'Heritage walk through old city lanes',          title: 'Old City Heritage Walk',          category: 'Heritage Walks' },
  { id: 2,  src: '/gallery/heritage-walks/2.jpg',  alt: 'Participants exploring historical buildings',    title: 'Golconda Heritage Trail',          category: 'Heritage Walks' },
  { id: 3,  src: '/gallery/heritage-walks/3.jpg',  alt: 'Heritage walk at dawn',                         title: 'Sunrise Heritage Walk',           category: 'Heritage Walks' },
  { id: 4,  src: '/gallery/heritage-walks/4.jpg',  alt: 'Walking through ancient bazaar streets',        title: 'Charminar Bazaar Walk',           category: 'Heritage Walks' },
  { id: 5,  src: '/gallery/heritage-walks/5.jpg',  alt: 'Documenting inscriptions on walls',             title: 'Inscription Documentation Walk',  category: 'Heritage Walks' },
  { id: 6,  src: '/gallery/heritage-walks/6.jpg',  alt: 'Group walking through heritage lane',           title: 'Laad Bazaar Heritage Walk',       category: 'Heritage Walks' },
  { id: 7,  src: '/gallery/heritage-walks/7.jpg',  alt: 'Guide explaining monument history',             title: 'Qutb Shahi Tombs Walk',           category: 'Heritage Walks' },
  { id: 8,  src: '/gallery/heritage-walks/8.jpg',  alt: 'Volunteers on a fort trail',                   title: 'Golconda Fort Trail',             category: 'Heritage Walks' },
  { id: 9,  src: '/gallery/heritage-walks/9.jpg',  alt: 'Night heritage walk with lanterns',             title: 'Lantern Heritage Walk',           category: 'Heritage Walks' },
  { id: 10, src: '/gallery/heritage-walks/10.jpg', alt: 'Children on a school heritage tour',            title: 'School Heritage Tour',            category: 'Heritage Walks' },

  // ── TEMPLES (add up to 10 images) ─────────────────────
  // Folder: public/gallery/temples/
  { id: 11, src: '/gallery/temples/1.jpg',  alt: 'Ancient temple facade with intricate carvings',  title: 'Bhadrakali Temple',          category: 'Temples' },
  { id: 12, src: '/gallery/temples/2.jpg',  alt: 'Stone pillars of a historical temple',           title: 'Thousand Pillar Temple',     category: 'Temples' },
  { id: 13, src: '/gallery/temples/3.jpg',  alt: 'Temple gopuram at golden hour',                  title: 'Warangal Fort Temple',       category: 'Temples' },
  { id: 14, src: '/gallery/temples/4.jpg',  alt: 'Temple pond with reflections',                   title: 'Ramappa Temple Lake',        category: 'Temples' },
  { id: 15, src: '/gallery/temples/5.jpg',  alt: 'Carved deity sculpture in stone',                title: 'Kakatiya Sculpture',         category: 'Temples' },
  { id: 16, src: '/gallery/temples/6.jpg',  alt: 'Ancient temple ruins at sunset',                 title: 'Kondagattu Temple Ruins',    category: 'Temples' },
  { id: 17, src: '/gallery/temples/7.jpg',  alt: 'Temple entrance with decorative arch',           title: 'Sangameshwara Temple',       category: 'Temples' },
  { id: 18, src: '/gallery/temples/8.jpg',  alt: 'Close-up of stone carving details',              title: 'Kakatiya Stone Carvings',    category: 'Temples' },
  { id: 19, src: '/gallery/temples/9.jpg',  alt: 'Temple tank at early morning',                   title: 'Pakhal Temple Tank',         category: 'Temples' },
  { id: 20, src: '/gallery/temples/10.jpg', alt: 'Nandi sculpture at ancient temple',              title: 'Nandi at Keesaragutta',      category: 'Temples' },

  // ── EVENTS (add up to 10 images) ──────────────────────
  // Folder: public/gallery/events/
  { id: 21, src: '/gallery/events/1.jpg',   alt: 'Cultural awareness event at public square',      title: 'Heritage Awareness Day 2024',    category: 'Events' },
  { id: 22, src: '/gallery/events/2.jpg',   alt: 'Community gathering for heritage event',         title: 'Telangana Culture Festival',     category: 'Events' },
  { id: 23, src: '/gallery/events/3.jpg',   alt: 'Lecture on historical preservation',             title: 'Conservation Symposium',         category: 'Events' },
  { id: 24, src: '/gallery/events/4.jpg',   alt: 'School children at heritage awareness program',  title: 'Youth Heritage Program',         category: 'Events' },
  { id: 25, src: '/gallery/events/5.jpg',   alt: 'TORCH annual gathering',                        title: 'TORCH Annual Meet 2024',         category: 'Events' },
  { id: 26, src: '/gallery/events/6.jpg',   alt: 'Panel discussion on heritage conservation',      title: 'Heritage Conservation Panel',    category: 'Events' },
  { id: 27, src: '/gallery/events/7.jpg',   alt: 'Cultural dance performance at heritage event',   title: 'Cultural Evening 2023',          category: 'Events' },
  { id: 28, src: '/gallery/events/8.jpg',   alt: 'Award ceremony for heritage champions',          title: 'Heritage Champions Award',       category: 'Events' },
  { id: 29, src: '/gallery/events/9.jpg',   alt: 'Volunteer orientation day',                     title: 'Volunteer Orientation 2024',     category: 'Events' },
  { id: 30, src: '/gallery/events/10.jpg',  alt: 'Workshop on heritage documentation',             title: 'Documentation Workshop',         category: 'Events' },

  // ── EXHIBITIONS (add up to 10 images) ─────────────────
  // Folder: public/gallery/exhibitions/
  { id: 31, src: '/gallery/exhibitions/1.jpg',   alt: 'Exhibition of historical photographs',       title: 'Echoes of the Past Exhibition',     category: 'Exhibitions' },
  { id: 32, src: '/gallery/exhibitions/2.jpg',   alt: 'Artifacts display at cultural exhibition',   title: 'Kakatiya Artefacts Display',        category: 'Exhibitions' },
  { id: 33, src: '/gallery/exhibitions/3.jpg',   alt: 'Visitors at heritage photo exhibit',         title: 'Forgotten Monuments Show',          category: 'Exhibitions' },
  { id: 34, src: '/gallery/exhibitions/4.jpg',   alt: 'Panel with heritage documentation',          title: 'Archive Documentation Exhibit',     category: 'Exhibitions' },
  { id: 35, src: '/gallery/exhibitions/5.jpg',   alt: 'Old maps and manuscripts on display',        title: 'Maps & Manuscripts Exhibition',     category: 'Exhibitions' },
  { id: 36, src: '/gallery/exhibitions/6.jpg',   alt: 'Children viewing heritage exhibition',       title: 'Young Visitors at Exhibition',      category: 'Exhibitions' },
  { id: 37, src: '/gallery/exhibitions/7.jpg',   alt: 'Nizam-era coins and artefacts displayed',    title: 'Nizam-Era Artefacts Show',          category: 'Exhibitions' },
  { id: 38, src: '/gallery/exhibitions/8.jpg',   alt: 'Photo series on Deccan architecture',        title: 'Deccan Architecture Series',        category: 'Exhibitions' },
  { id: 39, src: '/gallery/exhibitions/9.jpg',   alt: 'Traditional craft display at exhibition',    title: 'Living Crafts Exhibition',          category: 'Exhibitions' },
  { id: 40, src: '/gallery/exhibitions/10.jpg',  alt: 'Opening ceremony of TORCH exhibition',       title: 'Exhibition Inauguration',           category: 'Exhibitions' },

  // ── DOCUMENTATION (add up to 10 images) ───────────────
  // Folder: public/gallery/documentaries/
  { id: 41, src: '/gallery/documentaries/1.jpg',  alt: 'Filming a documentary at heritage site',      title: 'Voices of Stone — Documentary',      category: 'Documentation' },
  { id: 42, src: '/gallery/documentaries/2.jpg',  alt: 'Researchers archiving old manuscripts',       title: 'Manuscript Archival Project',        category: 'Documentation' },
  { id: 43, src: '/gallery/documentaries/3.jpg',  alt: 'Photographer documenting temple carvings',    title: 'Carving Documentation 2023',         category: 'Documentation' },
  { id: 44, src: '/gallery/documentaries/4.jpg',  alt: 'Interview with local heritage expert',        title: 'Living Heritage — Interview Series', category: 'Documentation' },
  { id: 45, src: '/gallery/documentaries/5.jpg',  alt: 'GPS mapping of heritage site',                title: 'GPS Mapping Expedition',             category: 'Documentation' },
  { id: 46, src: '/gallery/documentaries/6.jpg',  alt: 'Drone shot of temple complex',                title: 'Aerial Documentation',               category: 'Documentation' },
  { id: 47, src: '/gallery/documentaries/7.jpg',  alt: 'Sketching temple floor plan',                 title: 'Architectural Sketch Survey',        category: 'Documentation' },
  { id: 48, src: '/gallery/documentaries/8.jpg',  alt: 'Field notes being written at site',           title: 'Field Notes 2024',                   category: 'Documentation' },
  { id: 49, src: '/gallery/documentaries/9.jpg',  alt: 'Scanning palm leaf manuscript',               title: 'Manuscript Scanning Project',        category: 'Documentation' },
  { id: 50, src: '/gallery/documentaries/10.jpg', alt: 'Close-up of inscriptions being studied',      title: 'Inscription Study 2023',             category: 'Documentation' },

  // ── TEAM / BOARD MEMBERS (add up to 10 images) ────────
  // Folder: public/gallery/team/
  // ★ If you have board member photos, name them 1.jpg, 2.jpg etc. and place here
  { id: 51, src: '/gallery/team/1.jpg',  alt: 'TORCH team members at field visit',       title: 'TORCH Core Team',         category: 'Team' },
  { id: 52, src: '/gallery/team/2.jpg',  alt: 'Volunteers at a heritage site',           title: 'Volunteer Team 2024',     category: 'Team' },
  { id: 53, src: '/gallery/team/3.jpg',  alt: 'Team discussion at heritage walk',        title: 'Field Research Team',     category: 'Team' },
  { id: 54, src: '/gallery/team/4.jpg',  alt: 'TORCH founders at restoration site',      title: 'Founding Members',        category: 'Team' },
  { id: 55, src: '/gallery/team/5.jpg',  alt: 'Board member at heritage site',           title: 'Board Member Visit',      category: 'Team' },
  { id: 56, src: '/gallery/team/6.jpg',  alt: 'Team at annual general meeting',          title: 'Annual General Meeting',  category: 'Team' },
  { id: 57, src: '/gallery/team/7.jpg',  alt: 'Research team in the field',              title: 'Research Team 2023',      category: 'Team' },
  { id: 58, src: '/gallery/team/8.jpg',  alt: 'TORCH team group photo',                 title: 'TORCH Family 2024',       category: 'Team' },
  { id: 59, src: '/gallery/team/9.jpg',  alt: 'New volunteer induction',                title: 'New Members 2024',        category: 'Team' },
  { id: 60, src: '/gallery/team/10.jpg', alt: 'Team celebrating heritage milestone',     title: 'Milestone Celebration',   category: 'Team' },
]

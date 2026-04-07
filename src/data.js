// ─── Company Info ───────────────────────────────────────────────────────────
export const companyInfo = {
  name: 'Systems & Solutions',
  tagline: 'Precision Engineered Industrial Air Conditioning Components',
  description:
    'Systems & Solutions is a premier manufacturer and supplier of high-performance HVAC and refrigeration components. With over two decades of engineering excellence, we design, fabricate, and commission customised industrial air-conditioning systems for critical applications across India.',
  experience: '24+',
  office:
    '509, Ashwamegh Elegance-1, Bhudarpura road, Kalyan Jewellers Lane, Ambawadi, Ahmedabad - 380006, Gujarat, India',
  phone: '+91 94273 10670',
  phone2: '+91 84690 00621',
  email: 'info@systemsandsolutions.in',
  gst: '24AAVFS2413C1ZE',
  founded: '2002',
  employees: '20+',
  projects: '500+',
  clients: '200+',
}

// ─── Nav Links ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

// ─── Stats ───────────────────────────────────────────────────────────────────
export const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '50+', label: 'Product Types' },
]

// ─── Products ────────────────────────────────────────────────────────────────
export const products = [
  {
    id: 'ahu',
    name: 'Air Handling Units',
    category: 'HVAC',
    color: '#f97316',
    shortDesc: 'Modular AHUs engineered for precise air treatment in industrial and commercial environments.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
    fullDesc:
      'Our Air Handling Units are custom-designed to manage temperature, humidity, and air quality in demanding industrial and commercial applications. Built with galvanised / SS panels, they incorporate supply fans, cooling/heating coils, filters, and controls in a compact modular form.',
    specs: [
      { label: 'Capacity Range', value: '500 CFM – 1,00,000 CFM' },
      { label: 'Casing Material', value: 'GI / SS 304 / SS 316' },
      { label: 'Fan Type', value: 'DWDI Centrifugal / Plug Fan' },
      { label: 'Coil Fins', value: 'Aluminium / Copper' },
      { label: 'Filter Class', value: 'G4, M5, F7, F9, HEPA' },
      { label: 'Operating Temp', value: '-10 °C to +50 °C' },
    ],
    applications: [
      'Cleanrooms & Pharma',
      'Hospitals & Healthcare',
      'Data Centres',
      'Textile & Spinning Mills',
      'Food & Beverage',
      'Chemical Plants',
    ],
  },
  {
    id: 'fan-coil-units',
    name: 'Fan Coil Units',
    category: 'HVAC',
    color: '#f97316',
    shortDesc: 'Compact FCUs for zoned temperature control in hotels, offices, and hospitals.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
    fullDesc:
      'Fan Coil Units from Systems & Solutions offer quiet, energy-efficient zone cooling and heating for buildings. Available in horizontal concealed, vertical floor-standing, and cassette configurations to suit all architectural requirements.',
    specs: [
      { label: 'Capacity Range', value: '200 CFM – 4000 CFM' },
      { label: 'Configuration', value: 'Horizontal / Vertical / Cassette' },
      { label: 'Coil Rows', value: '2, 3, 4 Row' },
      { label: 'Motor', value: 'ECM / PSC 3-Speed' },
      { label: 'Sound Level', value: '< 38 dB(A)' },
      { label: 'Control', value: '2-Pipe / 4-Pipe' },
    ],
    applications: [
      'Hotels & Hospitality',
      'Offices',
      'Hospitals',
      'Apartments',
      'Retail Spaces',
      'Server Rooms',
    ],
  },
  {
    id: 'centrifugal-fans',
    name: 'Centrifugal Fans',
    category: 'Fans',
    color: '#0ea5e9',
    shortDesc: 'High-efficiency centrifugal fans for industrial ventilation, process exhaust and HVAC duty.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    fullDesc:
      'Our centrifugal fans are designed and manufactured for continuous duty in ventilation, dust extraction, process gas handling, and HVAC applications. Available in SWSI and DWDI configurations with backward-curved, forward-curved, and radial blade profiles.',
    specs: [
      { label: 'Airflow Range', value: '500 – 3,00,000 CMH' },
      { label: 'Static Pressure', value: 'Up to 2500 Pa' },
      { label: 'Construction', value: 'GI / MS / SS / FRP' },
      { label: 'Drive', value: 'Direct / Belt Drive' },
      { label: 'Motor', value: 'IE2 / IE3 TEFC' },
      { label: 'Temperature', value: 'Up to 250 °C' },
    ],
    applications: [
      'Industrial Ventilation',
      'Dust Extraction',
      'Fume Exhaust',
      'Boiler Combustion Air',
      'Cooling Tower',
      'AHU Integration',
    ],
  },
  {
    id: 'axial-fans',
    name: 'Axial Flow Fans',
    category: 'Fans',
    color: '#22c55e',
    shortDesc: 'Robust axial fans delivering high airflow at low pressure for cooling and ventilation.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    fullDesc:
      'Axial flow fans from Systems & Solutions are engineered for high-volume, low-pressure ventilation and cooling duties. Manufactured in aluminium, GI, or FRP, they are suitable for wall mounting, roof extraction, and duct-inline applications.',
    specs: [
      { label: 'Diameter Range', value: '300 mm – 2000 mm' },
      { label: 'Airflow', value: 'Up to 2,50,000 CMH' },
      { label: 'Blade Material', value: 'Aluminium / GI / FRP' },
      { label: 'Mounting', value: 'Wall / Roof / Duct Inline' },
      { label: 'Drive', value: 'Direct / Belt Drive' },
      { label: 'Protection', value: 'IP 55 / IP 65' },
    ],
    applications: [
      'Cooling Towers',
      'Condenser Cooling',
      'General Ventilation',
      'Roof Extraction',
      'Tunnel Ventilation',
      'Generator Cooling',
    ],
  },
  {
    id: 'heat-exchangers',
    name: 'Heat Exchangers',
    category: 'Thermal',
    color: '#a855f7',
    shortDesc: 'Shell-and-tube and plate heat exchangers for industrial process cooling and heating.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80',
    fullDesc:
      'We design and manufacture shell-and-tube, finned-tube, and air-blast heat exchangers for industrial process industries. ASME / IBR compliant construction ensures reliable operation in high-pressure and high-temperature environments.',
    specs: [
      { label: 'Type', value: 'Shell & Tube / Plate / Finned Tube' },
      { label: 'Capacity', value: '1 kW – 5000 kW' },
      { label: 'Design Pressure', value: 'Up to 100 bar' },
      { label: 'Design Temp', value: '-50 °C to +600 °C' },
      { label: 'Material', value: 'CS / SS 304 / SS 316 / Titanium' },
      { label: 'Standard', value: 'ASME / TEMA / IBR' },
    ],
    applications: [
      'Chemical Processing',
      'Oil & Gas',
      'Power Generation',
      'Pharmaceutical',
      'Food & Beverage',
      'Marine',
    ],
  },
  
  // {
  //   id: 'refrigeration-plants',
  //   name: 'Refrigeration Plants',
  //   category: 'Refrigeration',
  //   color: '#0ea5e9',
  //   shortDesc: 'Industrial refrigeration systems for cold storage, process cooling, and ice plants.',
  //   image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  //   fullDesc:
  //     'We design, supply, and commission complete industrial refrigeration plants using ammonia (NH3) and freon refrigerants. Our systems support cold-chain logistics, food processing, ice manufacturing, and pharmaceutical storage.',
  //   specs: [
  //     { label: 'Refrigerant', value: 'NH3 / R404A / R507 / R134a' },
  //     { label: 'Capacity', value: '1 TR – 1500 TR' },
  //     { label: 'Temp Range', value: '+15 °C to -45 °C' },
  //     { label: 'Compressor', value: 'Screw / Reciprocating / Scroll' },
  //     { label: 'Condenser', value: 'Air Cooled / Evaporative / WCC' },
  //     { label: 'Standard', value: 'ASHRAE / BEE' },
  //   ],
  //   applications: [
  //     'Cold Storage',
  //     'Food Processing',
  //     'Ice Plants',
  //     'Breweries',
  //     'Pharmaceutical Storage',
  //     'Chemical Cooling',
  //   ],
  // },
  {
    id: 'cooling-coils',
    name: 'Cooling & Heating Coils',
    category: 'Coils',
    color: '#22c55e',
    shortDesc: 'Chilled water and DX coils engineered for maximum heat transfer efficiency.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80',
    fullDesc:
      'Our cooling and heating coils are manufactured using copper tubes and aluminium fins for superior thermal performance. Suitable for chilled water, direct expansion, hot water, and steam applications in all types of air handlers.',
    specs: [
      { label: 'Tube Material', value: 'Copper / Stainless Steel' },
      { label: 'Fin Material', value: 'Aluminium / Copper' },
      { label: 'Rows', value: '2 – 8 Rows' },
      { label: 'Fin Spacing', value: '4, 5, 6, 8, 10, 12 FPI' },
      { label: 'Max Pressure', value: '21 Bar (Water) / 42 Bar (DX)' },
      { label: 'Testing', value: 'Pneumatic / Hydrostatic' },
    ],
    applications: [
      'AHU / FCU',
      'Computer Room AC',
      'Process Air Coolers',
      'Cold Rooms',
      'Freezer Rooms',
      'Industrial Dryers',
    ],
  },
  {
    id: 'ventilation-systems',
    name: 'Ventilation Systems',
    category: 'Ventilation',
    color: '#a855f7',
    shortDesc: 'Turnkey ventilation solutions for factories, basements, and underground spaces.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
    fullDesc:
      'Our turnkey ventilation systems encompass supply and exhaust fans, ductwork, dampers, louvres, and BMS integration. We specialise in critical environments including car parks, tunnels, server rooms, and industrial facilities.',
    specs: [
      { label: 'System Type', value: 'Supply / Exhaust / Balanced' },
      { label: 'Duct Material', value: 'GI / SS / PVC' },
      { label: 'Dampers', value: 'MS / GI / Fire Rated' },
      { label: 'Controls', value: 'Manual / BMS / VFD' },
      { label: 'Standards', value: 'NBC / ASHRAE 62.1' },
      { label: 'Scope', value: 'Design to Commissioning' },
    ],
    applications: [
      'Factories & Warehouses',
      'Basements & Car Parks',
      'Underground Tunnels',
      'Server Rooms',
      'Commercial Kitchens',
      'Laboratories',
    ],
  },
]

// ─── Why Choose Us ────────────────────────────────────────────────────────────
export const whyChooseUs = [
  {
    icon: 'Award',
    title: 'Two Decades of Expertise',
    desc: 'Over 25 years of hands-on experience engineering HVAC systems for India\'s most demanding industries.',
  },
  {
    icon: 'Settings',
    title: 'In-House Manufacturing',
    desc: 'State-of-the-art fabrication facility in Ahmedabad ensures quality control at every production step.',
  },
  {
    icon: 'Shield',
    title: 'Quality Assurance',
    desc: 'ISO 9001:2015 certified processes with rigorous testing protocols before every product dispatch.',
  },
  {
    icon: 'Zap',
    title: 'Energy Efficient Design',
    desc: 'Every system is optimised to minimise lifecycle operating costs while meeting performance targets.',
  },
  {
    icon: 'Clock',
    title: 'On-Time Delivery',
    desc: 'Disciplined project management ensures your equipment arrives and is commissioned on schedule.',
  },
  {
    icon: 'HeadphonesIcon',
    title: 'After-Sales Support',
    desc: 'Dedicated service engineers available for AMC, spare parts, and emergency breakdown response.',
  },
]

// ─── Industries ───────────────────────────────────────────────────────────────
export const industries = [
  { name: 'Pharmaceuticals', icon: '💊' },
  { name: 'Food & Beverage', icon: '🍶' },
  { name: 'Textile', icon: '🧵' },
  { name: 'Automotive', icon: '🚗' },
  { name: 'Chemical', icon: '⚗️' },
  { name: 'Power Plants', icon: '⚡' },
  { name: 'Data Centres', icon: '🖥️' },
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Defence', icon: '🛡️' },
  { name: 'Cold Storage', icon: '❄️' },
]

// ─── Gallery Images ───────────────────────────────────────────────────────────
export const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80',
    title: 'Air Handling Unit',
    category: 'Products',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=700&q=80',
    title: 'Finned Coil Assembly',
    category: 'Manufacturing',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    title: 'Centrifugal Fan',
    category: 'Products',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&q=80',
    title: 'Axial Flow Fan',
    category: 'Products',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80',
    title: 'Factory Floor',
    category: 'Infrastructure',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80',
    title: 'Control Panel',
    category: 'Projects',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1590650046871-92c887180603?w=700&q=80',
    title: 'Industrial Piping',
    category: 'Projects',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80',
    title: 'Commissioning',
    category: 'Projects',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
    title: 'Engineering Design',
    category: 'Manufacturing',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80',
    title: 'Quality Testing',
    category: 'Manufacturing',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=700&q=80',
    title: 'Site Installation',
    category: 'Projects',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=700&q=80',
    title: 'Refrigeration Plant',
    category: 'Products',
  },
]

// ─── Milestones (About Page) ──────────────────────────────────────────────────
export const milestones = [
  { year: '1999', title: 'Founded', desc: 'Started operations in Ahmedabad with a core team of HVAC engineers.' },
  { year: '2004', title: 'ISO Certification', desc: 'Achieved ISO 9001 quality management certification.' },
  { year: '2008', title: 'Expanded Facility', desc: 'Moved to a 15,000 sq ft dedicated manufacturing plant.' },
  { year: '2013', title: 'Pan-India Presence', desc: 'Completed 100+ projects across 10 states.' },
  { year: '2018', title: 'Export Milestone', desc: 'First international project delivered to UAE.' },
  { year: '2024', title: '500+ Projects', desc: 'Crossed the 500-project milestone with 200+ clients.' },
]

// ─── Infrastructure ───────────────────────────────────────────────────────────
export const infrastructure = [
  { icon: '🏭', title: 'Manufacturing Plant', desc: '15,000 sq ft modern fabrication facility in Ahmedabad.' },
  { icon: '🔧', title: 'CNC Machining', desc: 'Computer-controlled cutting, bending, and forming equipment.' },
  { icon: '🧪', title: 'Testing Lab', desc: 'In-house pneumatic and hydrostatic testing facilities.' },
  { icon: '📐', title: 'Design Studio', desc: 'CFD, AutoCAD, and SolidWorks-equipped engineering office.' },
  { icon: '🚛', title: 'Logistics', desc: 'Nationwide delivery network with safe transit packaging.' },
  { icon: '⚙️', title: 'Service Bay', desc: 'Dedicated area for AMC work, repairs, and retrofits.' },
]
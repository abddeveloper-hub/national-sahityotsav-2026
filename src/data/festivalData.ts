import { 
  FestivalStats, 
  FestivalEvent, 
  ScheduleItem, 
  ParticipantResult, 
  StateLeaderboardEntry, 
  DistinguishedGuest, 
  GalleryItem, 
  NewsArticle, 
  SponsorPartner, 
  JourneyStage 
} from '../types/festival';

export const INITIAL_FESTIVAL_STATS: FestivalStats = {
  states: 28,
  districts: 450,
  institutions: 3200,
  participants: 85000,
  events: 120,
  families: 15000,
  lastUpdated: 'Live Stage Registrations'
};

export const FESTIVAL_JOURNEY_STAGES: JourneyStage[] = [
  {
    step: 1,
    name: 'Family',
    title: 'Kudumbasangamam / Family Circle',
    scope: 'Grassroots Household Engagement',
    description: 'The creative spark begins at home with family reading circles, storytelling, and cultural appreciation sessions.',
    participantsCount: '15,000+ Families',
    icon: 'Users'
  },
  {
    step: 2,
    name: 'Unit',
    title: 'Unit Level Meets',
    scope: 'Local Community & Institutional Chapters',
    description: 'School and college branch-level preliminary rounds testing foundational literary acumen and vocal eloquence.',
    participantsCount: '85,000+ Students',
    icon: 'School'
  },
  {
    step: 3,
    name: 'Sector',
    title: 'Sectorial Assemblies',
    scope: 'Cluster of 5–10 Institutional Units',
    description: 'Intense inter-collegiate face-offs in oratory, verse writing, linguistic mastery, and critical debate.',
    participantsCount: '32,000+ Qualified',
    icon: 'Network'
  },
  {
    step: 4,
    name: 'Division',
    title: 'Divisional Championships',
    scope: 'Sub-regional Competitive Arenas',
    description: 'High-caliber evaluation by expert panels across theoretical analysis, extempore, and performance art.',
    participantsCount: '12,500+ Contenders',
    icon: 'Layers'
  },
  {
    step: 5,
    name: 'District',
    title: 'District Grand Festivals',
    scope: '450+ Districts Across India',
    description: 'District level carnivals drawing public audience, regional media, and prestigious cultural awards.',
    participantsCount: '4,800+ Finalists',
    icon: 'MapPin'
  },
  {
    step: 6,
    name: 'State',
    title: 'State Sahityotsav Summits',
    scope: '28 State Capitols & Cultural Hubs',
    description: 'The apex state-level delegation championships vying for national quota and pride of representation.',
    participantsCount: '1,200+ State Champions',
    icon: 'Award'
  },
  {
    step: 7,
    name: 'National',
    title: 'National Grand Sahityotsav 2026',
    scope: 'Chennai, Tamil Nadu • 2–4 October 2026',
    description: 'The grand national confluence uniting the finest minds, poets, thinkers, and performers of the nation.',
    participantsCount: 'Top 450 National Finalists',
    icon: 'Crown'
  }
];

export const SAMPLE_EVENTS: FestivalEvent[] = [
  {
    id: 'evt-01',
    name: 'National Parliamentary English Debate',
    category: 'Literary',
    language: 'English',
    ageCategory: 'Senior & Campus (16–23)',
    eventType: 'Team Debate',
    description: 'A flagship Oxford-style parliamentary debate testing geopolitical acumen, civil rhetoric, and rebuttals under stringent time constraints.',
    rules: [
      '3-member teams; Government vs Opposition style',
      '7 minutes per speaker with protected first and last minutes',
      'Topics announced 20 minutes prior to round with zero digital aids'
    ],
    durationMinutes: 60,
    venueStage: 'Thiruvalluvar Main Auditorium',
    scheduleTime: 'Day 1 • 10:30 AM',
    featured: true
  },
  {
    id: 'evt-02',
    name: 'Maha Kavi Classical Poetry Recitation & Chhandas',
    category: 'Language',
    language: 'Tamil & Sanskrit',
    ageCategory: 'All Age Categories',
    eventType: 'Individual',
    description: 'Classical verse rendition judged on bhava, rhythm (thalam), accurate prosody (chhandas), and contextual philosophical interpretation.',
    rules: [
      'Participant chooses one classical poem from canonical Sangam or Vedic corpus',
      '5 minutes maximum stage performance with acoustic mic',
      'Pronunciation accuracy, modulation and emotive fidelity scored rigorously'
    ],
    durationMinutes: 15,
    venueStage: 'Bharati Hall (Stage 2)',
    scheduleTime: 'Day 1 • 02:00 PM',
    featured: true
  },
  {
    id: 'evt-03',
    name: 'Grand National Quiz: Eudaemonia & Science',
    category: 'Knowledge',
    language: 'English & Multi-Lingual',
    ageCategory: 'Senior (15–20)',
    eventType: 'Group',
    description: 'High-octane multimedia quiz spanning world philosophy, Indian civilization, scientific discovery, literature, and contemporary geopolitics.',
    rules: [
      'Preliminary written round for 60 teams followed by top 6 stage finals',
      'Buzzer, visual audio-clue, and rapid fire pounce rounds',
      'Negative marks applicable in advanced rounds'
    ],
    durationMinutes: 120,
    venueStage: 'Sir C.V. Raman Science Pavilion',
    scheduleTime: 'Day 2 • 10:00 AM',
    featured: true
  },
  {
    id: 'evt-04',
    name: 'Sufi & Bhakti Mystical Choral Ensemble',
    category: 'Cultural',
    language: 'Hindi, Urdu & Regional',
    ageCategory: 'Open Category',
    eventType: 'Stage Performance',
    description: 'Soul-stirring choral performance weaving Amir Khusrau, Kabir, Andal, and Bulleh Shah verses into melodic acoustic harmony.',
    rules: [
      '6 to 10 singers accompanied by traditional acoustic instruments only (harmonium, tabla, tanpura)',
      'Time limit: 12 minutes on-stage including setup',
      'Lyrical sanctity and raag adherence hold 40% weightage'
    ],
    durationMinutes: 20,
    venueStage: 'Rabindranath Tagore Open Amphitheatre',
    scheduleTime: 'Day 2 • 06:30 PM',
    featured: true
  },
  {
    id: 'evt-05',
    name: 'Visual Storytelling & Calligraphy Canvas',
    category: 'Creative',
    language: 'Universal / Visual',
    ageCategory: 'Junior & Senior (12–18)',
    eventType: 'Individual',
    description: 'Live studio competition synthesizing typographic calligraphy, traditional Indian scripts, and poetic illustration on canvas.',
    rules: [
      'Original theme revealed on spot: "Equilibrium in Chaos"',
      'Sheets and base easels provided; contestants bring personal brushes/ink',
      'Final canvas evaluated on composition, symmetry, and aesthetic resonance'
    ],
    durationMinutes: 90,
    venueStage: 'Kala Mandapam Gallery Studio',
    scheduleTime: 'Day 1 • 11:30 AM',
    featured: false
  },
  {
    id: 'evt-06',
    name: 'Urdu Bait-Bazi (Couplet Duelling)',
    category: 'Language',
    language: 'Urdu',
    ageCategory: 'Senior & Open',
    eventType: 'Team Debate',
    description: 'Traditional poetic duel wherein each contestant recites a couplet starting with the closing consonant of the opposing team.',
    rules: [
      '2 members per team; strictly classical and recognized poets acceptable',
      'Zero repetition allowed throughout the tournament matches',
      'Sudden death round if tied after 15 exchanges'
    ],
    durationMinutes: 45,
    venueStage: 'Mirza Ghalib Baithak (Stage 4)',
    scheduleTime: 'Day 2 • 03:00 PM',
    featured: false
  },
  {
    id: 'evt-07',
    name: 'Philosophy Colloquium: Ethics of Artificial Mind',
    category: 'Knowledge',
    language: 'English',
    ageCategory: 'Campus (18–25)',
    eventType: 'Individual',
    description: 'Scholarly paper presentation and cross-examination addressing moral agency, algorithmic determinism, and eudaemonic human destiny.',
    rules: [
      '1,500-word peer-reviewed abstract pre-submitted',
      '8-minute presentation followed by 5-minute jury interrogation',
      'Original conceptual models awarded bonus evaluation'
    ],
    durationMinutes: 30,
    venueStage: 'Aristotle Seminar Hall',
    scheduleTime: 'Day 3 • 09:30 AM',
    featured: false
  },
  {
    id: 'evt-08',
    name: 'Skit & Theatrical Tableau: Epics Reimagined',
    category: 'Cultural',
    language: 'Regional / English Subtitles',
    ageCategory: 'Open Category',
    eventType: 'Stage Performance',
    description: 'Dramatized stage acts dissecting moral dilemmas from Indian and world epics through modern theatrical forms and live background scoring.',
    rules: [
      'Team of 5–8 actors with 2 technical crew',
      'Strict 15-minute stage limit with light cue sheet',
      'No recorded dialogue; live vocal delivery mandatory'
    ],
    durationMinutes: 25,
    venueStage: 'Thiruvalluvar Main Auditorium',
    scheduleTime: 'Day 3 • 02:30 PM',
    featured: true
  }
];

export const SAMPLE_SCHEDULE: ScheduleItem[] = [
  {
    id: 'sch-101',
    eventId: 'evt-01',
    eventName: 'Inaugural National Flag Hoisting & Grand Procession',
    category: 'Ceremonial',
    day: 'Day 1',
    date: '2026-10-02',
    displayDate: 'Friday, Oct 2, 2026',
    time: '08:30 AM - 10:00 AM',
    venue: 'Festival Central Plaza (Chennai Campus)',
    stage: 'Royal Pavilion',
    status: 'Upcoming'
  },
  {
    id: 'sch-102',
    eventId: 'evt-01',
    eventName: 'National Parliamentary English Debate - Quarter Finals',
    category: 'Literary',
    day: 'Day 1',
    date: '2026-10-02',
    displayDate: 'Friday, Oct 2, 2026',
    time: '10:30 AM - 01:00 PM',
    venue: 'Thiruvalluvar Main Auditorium',
    stage: 'Main Stage',
    status: 'Upcoming'
  },
  {
    id: 'sch-103',
    eventId: 'evt-05',
    eventName: 'Live Calligraphy & Visual Storytelling Workshop & Contest',
    category: 'Creative',
    day: 'Day 1',
    date: '2026-10-02',
    displayDate: 'Friday, Oct 2, 2026',
    time: '11:30 AM - 01:00 PM',
    venue: 'Kala Mandapam Gallery Studio',
    stage: 'Studio Arena A',
    status: 'Upcoming'
  },
  {
    id: 'sch-104',
    eventId: 'evt-02',
    eventName: 'Classical Poetry Recitation & Chhandas Masterclasses',
    category: 'Language',
    day: 'Day 1',
    date: '2026-10-02',
    displayDate: 'Friday, Oct 2, 2026',
    time: '02:00 PM - 05:00 PM',
    venue: 'Bharati Hall',
    stage: 'Stage 2',
    status: 'Upcoming'
  },
  {
    id: 'sch-201',
    eventId: 'evt-03',
    eventName: 'The Grand National Quiz: Eudaemonia & Science Semi-Finals',
    category: 'Knowledge',
    day: 'Day 2',
    date: '2026-10-03',
    displayDate: 'Saturday, Oct 3, 2026',
    time: '10:00 AM - 01:00 PM',
    venue: 'Sir C.V. Raman Science Pavilion',
    stage: 'Science Hall 1',
    status: 'Live Now'
  },
  {
    id: 'sch-202',
    eventId: 'evt-06',
    eventName: 'Bait-Bazi & Ghazal Symposia: Words of the Subcontinent',
    category: 'Language',
    day: 'Day 2',
    date: '2026-10-03',
    displayDate: 'Saturday, Oct 3, 2026',
    time: '03:00 PM - 05:30 PM',
    venue: 'Mirza Ghalib Baithak',
    stage: 'Heritage Court',
    status: 'Upcoming'
  },
  {
    id: 'sch-203',
    eventId: 'evt-04',
    eventName: 'Sufi & Bhakti Mystical Choral Night (Evening Cultural Gala)',
    category: 'Cultural',
    day: 'Day 2',
    date: '2026-10-03',
    displayDate: 'Saturday, Oct 3, 2026',
    time: '06:30 PM - 09:30 PM',
    venue: 'Rabindranath Tagore Open Amphitheatre',
    stage: 'Grand Open Air Stage',
    status: 'Upcoming'
  },
  {
    id: 'sch-301',
    eventId: 'evt-07',
    eventName: 'Philosophy Colloquium: Future of Human Flourishing',
    category: 'Knowledge',
    day: 'Day 3',
    date: '2026-10-04',
    displayDate: 'Sunday, Oct 4, 2026',
    time: '09:30 AM - 12:30 PM',
    venue: 'Aristotle Seminar Hall',
    stage: 'Conference Wing B',
    status: 'Upcoming'
  },
  {
    id: 'sch-302',
    eventId: 'evt-08',
    eventName: 'National Finals: Theatrical Tableau & Epics Reimagined',
    category: 'Cultural',
    day: 'Day 3',
    date: '2026-10-04',
    displayDate: 'Sunday, Oct 4, 2026',
    time: '02:00 PM - 05:00 PM',
    venue: 'Thiruvalluvar Main Auditorium',
    stage: 'Main Stage',
    status: 'Upcoming'
  },
  {
    id: 'sch-303',
    eventName: 'Grand Valedictory, Sahityotsav Trophy Presentation & Closing Ceremony',
    category: 'Ceremonial',
    day: 'Day 3',
    date: '2026-10-04',
    displayDate: 'Sunday, Oct 4, 2026',
    time: '05:30 PM - 08:30 PM',
    venue: 'Thiruvalluvar Main Auditorium',
    stage: 'Main Stage',
    status: 'Upcoming'
  }
];

export const STATE_LEADERBOARD: StateLeaderboardEntry[] = [
  { rank: 1, state: 'Tamil Nadu (Host)', zone: 'South', goldCount: 14, silverCount: 10, bronzeCount: 8, totalPoints: 198, code: 'TN' },
  { rank: 2, state: 'Kerala', zone: 'South', goldCount: 13, silverCount: 11, bronzeCount: 7, totalPoints: 192, code: 'KL' },
  { rank: 3, state: 'Karnataka', zone: 'South', goldCount: 9, silverCount: 8, bronzeCount: 12, totalPoints: 147, code: 'KA' },
  { rank: 4, state: 'Maharashtra', zone: 'West', goldCount: 8, silverCount: 9, bronzeCount: 6, totalPoints: 138, code: 'MH' },
  { rank: 5, state: 'West Bengal', zone: 'East', goldCount: 7, silverCount: 8, bronzeCount: 5, totalPoints: 122, code: 'WB' },
  { rank: 6, state: 'Delhi NCR', zone: 'North', goldCount: 6, silverCount: 7, bronzeCount: 9, totalPoints: 115, code: 'DL' },
  { rank: 7, state: 'Telangana', zone: 'South', goldCount: 5, silverCount: 6, bronzeCount: 4, totalPoints: 94, code: 'TS' },
  { rank: 8, state: 'Uttar Pradesh', zone: 'North', goldCount: 4, silverCount: 5, bronzeCount: 7, totalPoints: 86, code: 'UP' }
];

export const SAMPLE_PARTICIPANT_RESULTS: ParticipantResult[] = [
  {
    id: 'NS-2026-4821',
    participantName: 'Meera Subramanian',
    institution: 'Loyola College of Arts & Sciences, Chennai',
    state: 'Tamil Nadu',
    district: 'Chennai',
    eventName: 'Maha Kavi Classical Poetry Recitation & Chhandas',
    category: 'Language',
    position: '1st Place (Gold)',
    points: 10,
    publishedAt: '03 Oct 2026, 01:15 PM',
    certificateId: 'CERT-NS26-GLD-4821'
  },
  {
    id: 'NS-2026-1042',
    participantName: 'Arjun Somnath Sen',
    institution: 'Presidency University, Kolkata',
    state: 'West Bengal',
    district: 'Kolkata',
    eventName: 'National Parliamentary English Debate',
    category: 'Literary',
    position: '1st Place (Gold)',
    points: 10,
    publishedAt: '03 Oct 2026, 12:45 PM',
    certificateId: 'CERT-NS26-GLD-1042'
  },
  {
    id: 'NS-2026-3190',
    participantName: 'Fathima Zahra K.',
    institution: 'Farook College Autonomous, Calicut',
    state: 'Kerala',
    district: 'Kozhikode',
    eventName: 'Urdu Bait-Bazi (Couplet Duelling)',
    category: 'Language',
    position: '2nd Place (Silver)',
    points: 7,
    publishedAt: '03 Oct 2026, 11:30 AM',
    certificateId: 'CERT-NS26-SLV-3190'
  },
  {
    id: 'NS-2026-8819',
    participantName: 'Aditya Rajan Kulkarni',
    institution: 'Fergusson College Autonomous, Pune',
    state: 'Maharashtra',
    district: 'Pune',
    eventName: 'Grand National Quiz: Eudaemonia & Science',
    category: 'Knowledge',
    position: '3rd Place (Bronze)',
    points: 5,
    publishedAt: '03 Oct 2026, 02:00 PM',
    certificateId: 'CERT-NS26-BRZ-8819'
  },
  {
    id: 'NS-2026-5502',
    participantName: 'Ananya Raghavan',
    institution: 'National Law School of India University (NLSIU), Bengaluru',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    eventName: 'Philosophy Colloquium: Ethics of Artificial Mind',
    category: 'Knowledge',
    position: 'A Grade (Distinction)',
    points: 8,
    publishedAt: '03 Oct 2026, 10:15 AM',
    certificateId: 'CERT-NS26-DST-5502'
  },
  {
    id: 'NS-2026-7014',
    participantName: 'Rohan Dev Sharma',
    institution: 'St. Stephen’s College, University of Delhi',
    state: 'Delhi NCR',
    district: 'Central Delhi',
    eventName: 'National Parliamentary English Debate',
    category: 'Literary',
    position: '2nd Place (Silver)',
    points: 7,
    publishedAt: '03 Oct 2026, 12:45 PM',
    certificateId: 'CERT-NS26-SLV-7014'
  },
  {
    id: 'NS-2026-9021',
    participantName: 'Kavya S. Nambiar',
    institution: 'Government Victoria College, Palakkad',
    state: 'Kerala',
    district: 'Palakkad',
    eventName: 'Visual Storytelling & Calligraphy Canvas',
    category: 'Creative',
    position: '1st Place (Gold)',
    points: 10,
    publishedAt: '03 Oct 2026, 01:50 PM',
    certificateId: 'CERT-NS26-GLD-9021'
  }
];

export const DISTINGUISHED_GUESTS: DistinguishedGuest[] = [
  {
    id: 'guest-01',
    name: 'Dr. V. Irai Anbu, IAS (Retd.)',
    designation: 'Eminent Author, Thinker & Former Chief Secretary',
    institutionOrRole: 'Patron of Literary Excellence',
    quote: 'True literature does not merely reflect societal reality; it elevates the collective human conscience toward empathy and wisdom.',
    sessionTitle: 'Keynote: The Architecture of Ethical Thought in Youth',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    socialBadge: 'Keynote Speaker'
  },
  {
    id: 'guest-02',
    name: 'Prof. Gayatri Chakravorty Sengupta',
    designation: 'Chair of Comparative Aesthetics & Linguistics',
    institutionOrRole: 'National Institute of Classical Humanities',
    quote: 'When youth interrogate their heritage through the lens of modern science, eudaemonia ceases to be a Greek ideal and becomes living reality.',
    sessionTitle: 'Symposium: Polyphony of Indian Languages in the 21st Century',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    socialBadge: 'Valedictory Orator'
  },
  {
    id: 'guest-03',
    name: 'Padma Shri K. Satchidanandan',
    designation: 'Celebrated Poet, Critic & Bilingual Essayist',
    institutionOrRole: 'President, Sahitya Akademi Advisory',
    quote: 'Poetry is the ultimate resistance of the soul against numbness. Every stanza crafted by our youth revitalizes the heartbeat of civilization.',
    sessionTitle: 'Masterclass: Metaphor, Conscience, and Contemporary Verse',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    socialBadge: 'Jury President'
  },
  {
    id: 'guest-04',
    name: 'Dr. Anandhi Ramachandran',
    designation: 'Cognitive Neuroscientist & Philosopher of Mind',
    institutionOrRole: 'Center for Brain, Mind & Aesthetic Behavior',
    quote: 'Art and mathematical rigor share identical neurological foundations. Sahityotsav bridges what education prematurely severed.',
    sessionTitle: 'Colloquium: The Eudaemonic Equation - Neuro-Aesthetics of Wonder',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    socialBadge: 'Special Invitee'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'The Great Inaugural Lamp Lighting Ceremony',
    category: 'Ceremonies',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    caption: 'Dignitaries and student ambassadors light the ceremonial deepam signifying enlightenment through knowledge.',
    year: '2026'
  },
  {
    id: 'gal-02',
    title: 'Electrifying National Debate Stage finals',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80',
    caption: 'Finalists from West Bengal and Tamil Nadu sparring on constitutional ethics in front of a packed auditorium.',
    year: '2026'
  },
  {
    id: 'gal-03',
    title: 'Classical Bharatanatyam & Sangam Recital',
    category: 'Cultural',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    caption: 'Expressive mudras depicting the five landscapes (Thinai) of ancient Tamil literature.',
    year: '2026'
  },
  {
    id: 'gal-04',
    title: 'Pencil, Quill & Calligraphy Artists at Work',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
    caption: 'Young calligraphers bringing classical alphabets to life in the open studio pavilion.',
    year: '2026'
  },
  {
    id: 'gal-05',
    title: 'Panel of Laureates & Distinguished Speakers',
    category: 'Guests',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
    caption: 'Jury members exchanging perspectives during the afternoon Literary Dialogue round.',
    year: '2026'
  },
  {
    id: 'gal-06',
    title: 'Night Glow over the Chennai Central Campus',
    category: 'Campus',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
    caption: 'Illuminated corridors and pavilions buzzing with delegates preparing for Day 2 championships.',
    year: '2026'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-01',
    title: 'National Sahityotsav 2026 Commences in Chennai with Over 85,000 Aspirants Reaching Apex Rounds',
    category: 'Festival Dispatch',
    date: '2026-10-02',
    displayDate: 'October 2, 2026',
    summary: 'The grand cultural and intellectual carnival begins with a vibrant parade celebrating 28 states, Indian linguistic heritage, and scientific inquiry.',
    content: [
      'Chennai witnessed a grand confluence of cultural vibrancy this morning as the National Sahityotsav 2026 was formally inaugurated at the Thiruvalluvar Main Auditorium.',
      'Representing the culmination of rigorous preliminary competitions held across 15,000 family units, 3,200 institutions, and 450 districts, over 450 elite national finalists gathered to contend for national honors.',
      'The inaugural address underscored the core festival theme, "Eudaemonic Equations", challenging delegates to harmonize philosophical contemplation with futuristic innovation.'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    readTime: '3 min read',
    author: 'Festival Press Bureau'
  },
  {
    id: 'news-02',
    title: 'Eudaemonic Equations: Unveiling the Philosophical Blueprint of the 2026 Theme',
    category: 'Theme Special',
    date: '2026-10-01',
    displayDate: 'October 1, 2026',
    summary: 'An investigative exploration into why Aristotle’s eudaemonia meets Indian classical philosophy and mathematical order in this year’s symposium.',
    content: [
      'Why "Eudaemonic Equations"? In an era dominated by rapid automated generation and fragmented attention, human flourishing requires deliberate balance.',
      'The Sahityotsav Academic Council curated this theme to evoke an inquiry into how aesthetic virtue, scientific clarity, and moral integrity construct the ultimate equation for living.',
      'Seminars throughout the festival will feature dialogues between computer scientists, Sanskrit philologists, and environmental ethicists.'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read',
    author: 'Academic Council'
  },
  {
    id: 'news-03',
    title: 'Tamil Nadu and Kerala Lead Day 1 Medal Tally in Intense Parliamentary Debates and Verse Rounds',
    category: 'Championship Watch',
    date: '2026-10-02',
    displayDate: 'October 2, 2026',
    summary: 'Host state Tamil Nadu locks horns with defending champions Kerala as Day 1 yields historic scores in classical Tamil and Malayalam poetry.',
    content: [
      'Day 1 closed with razor-thin point margins across multiple competitive arenas. In the English Parliamentary Debates, Presidency University Kolkata and Loyola College Chennai clinched semifinal berths.',
      'Spectators at Bharati Hall were treated to spellbinding recitations of classical Sangam poetry where Meera Subramanian recorded a near-perfect evaluation from the jury.',
      'Live leaderboards are updating in real-time across the digital campus portals and the public mobile website.'
    ],
    thumbnailUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read',
    author: 'Results Desk'
  }
];

export const SPONSORS_PARTNERS: SponsorPartner[] = [
  {
    id: 'sp-01',
    name: 'Ministry of Culture & Heritage',
    tier: 'Title Sponsor',
    logoUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=300&q=80',
    websiteUrl: 'https://indiaculture.gov.in',
    description: 'Promoting national artistic traditions and young intellectual leadership.'
  },
  {
    id: 'sp-02',
    name: 'National Book Trust (NBT)',
    tier: 'Knowledge Partner',
    logoUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&q=80',
    websiteUrl: 'https://nbtindia.gov.in',
    description: 'Facilitating book pavilions, reading leagues, and youth author incubators.'
  },
  {
    id: 'sp-03',
    name: 'Sahitya Akademi Publications',
    tier: 'Cultural Partner',
    logoUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&q=80',
    websiteUrl: 'https://sahitya-akademi.gov.in',
    description: 'Curating canonical anthologies and honoring multilingual translation arts.'
  },
  {
    id: 'sp-04',
    name: 'Hindustan Media Network',
    tier: 'Media Partner',
    logoUrl: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=300&q=80',
    websiteUrl: '#',
    description: 'Live broadcast and national documentary coverage across print and television.'
  },
  {
    id: 'sp-05',
    name: 'Tamil Nadu State Youth Cultural Board',
    tier: 'Associate Partner',
    logoUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=300&q=80',
    websiteUrl: '#',
    description: 'Host state partner providing logistical support and heritage venue coordination.'
  }
];

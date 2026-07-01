// -----------------------------------------------------------------------
// Dummy / static data used across the site. No backend — everything here
// is hardcoded so the project runs as pure frontend.
// -----------------------------------------------------------------------

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Live Market", href: "/live-market" },
  { label: "Market News", href: "/market-news" },
  { label: "Trading Tools", href: "/trading-tools" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const COURSES = [
  {
    slug: "indian-market-mastery",
    title: "Indian Market",
    icon: "TrendingUp",
    duration: "4 Months",
    level: "All Levels",
    price: "₹20,000",
    originalPrice: "₹30,000",
    rating: 5.0,
    students: 1500,
    description: "Complete mastery of the Indian market. Includes 3 months live training & 1 month live trading practice. (2 Installments available).",
    topics: ["3 Months Live Training", "1 Month Live Trading", "Market Basics", "Technical Analysis", "Risk Management"],
  },
  {
    slug: "forex-market-mastery",
    title: "Forex Market",
    icon: "Globe",
    duration: "2 Months",
    level: "All Levels",
    price: "₹10,000",
    originalPrice: "₹15,000",
    rating: 4.9,
    students: 1200,
    description: "Master the global foreign exchange market with our expert guidance and live sessions.",
    topics: ["Currency Pairs", "Forex Setup", "Global Timing", "Live Trading", "Risk Management"],
  },
  {
    slug: "fundamental-analysis",
    title: "Fundamental Analysis",
    icon: "FileSearch",
    duration: "5 Weeks",
    level: "Intermediate",
    price: "₹6,999",
    rating: 4.7,
    students: 1980,
    comingSoon: true,
    description: "Learn to evaluate a company's true worth using financial statements and ratios.",
    topics: ["Balance Sheets", "P&L Statements", "Ratio Analysis", "Valuation Models", "Sector Analysis"],
  },
  {
    slug: "swing-trading",
    title: "Swing Trading",
    icon: "TrendingUp",
    duration: "4 Weeks",
    level: "Intermediate",
    price: "₹6,499",
    rating: 4.8,
    students: 2140,
    comingSoon: true,
    description: "Capture multi-day price swings with a rules-based, low-stress trading style.",
    topics: ["Setup Identification", "Entry Triggers", "Trailing Stops", "Position Sizing", "Trade Journaling"],
  },
  {
    slug: "intraday-trading",
    title: "Intraday Trading",
    icon: "Activity",
    duration: "6 Weeks",
    level: "Advanced",
    price: "₹8,999",
    rating: 4.6,
    students: 2600,
    comingSoon: true,
    description: "High-precision strategies for trading and squaring off within the same session.",
    topics: ["Opening Range Strategy", "VWAP Trading", "Scalping Basics", "Risk Per Trade", "Live Market Practice"],
  },
  {
    slug: "options-trading",
    title: "Options Trading",
    icon: "Layers",
    duration: "8 Weeks",
    level: "Advanced",
    price: "₹11,999",
    rating: 4.9,
    students: 3450,
    comingSoon: true,
    description: "Understand options Greeks and build income & hedging strategies with confidence.",
    topics: ["Call & Put Basics", "Option Greeks", "Straddles & Strangles", "Iron Condor", "Hedging Portfolios"],
  },
  {
    slug: "futures-trading",
    title: "Futures Trading",
    icon: "Repeat",
    duration: "5 Weeks",
    level: "Advanced",
    price: "₹9,499",
    rating: 4.7,
    students: 1540,
    comingSoon: true,
    description: "Trade index and stock futures with disciplined leverage and margin management.",
    topics: ["Futures Pricing", "Margin & Leverage", "Rollover Strategy", "Hedging with Futures", "Basis Trading"],
  },
  {
    slug: "risk-management",
    title: "Risk Management",
    icon: "ShieldCheck",
    duration: "3 Weeks",
    level: "All Levels",
    price: "₹3,999",
    rating: 4.9,
    students: 4100,
    comingSoon: true,
    description: "The most underrated skill — protect your capital before chasing returns.",
    topics: ["Position Sizing", "Stop Loss Strategy", "Risk-Reward Ratio", "Portfolio Diversification", "Drawdown Control"],
  },
  {
    slug: "trading-psychology",
    title: "Trading Psychology",
    icon: "Brain",
    duration: "3 Weeks",
    level: "All Levels",
    price: "₹4,499",
    rating: 4.8,
    students: 2890,
    comingSoon: true,
    description: "Master the mental game — discipline, patience, and emotional control in live markets.",
    topics: ["Fear & Greed Cycle", "Discipline Systems", "Trading Journals", "Overcoming FOMO", "Building Routines"],
  },
];

export const STATS = [
  { label: "Students Trained", value: 25000, suffix: "+" },
  { label: "Success Rate", value: 92, suffix: "%" },
  { label: "Live Sessions Conducted", value: 1800, suffix: "+" },
  { label: "Years of Experience", value: 12, suffix: "+" },
];

export const TESTIMONIALS = [
  {
    name: "Rohit Sharma",
    role: "Swing Trader, Pune",
    rating: 5,
    review:
      "The risk management module alone was worth the entire course fee. I finally trade with a plan instead of emotions.",
    photo: "RS",
    profit: "+₹1,42,000 (6 months)",
  },
  {
    name: "Ananya Iyer",
    role: "Working Professional, Bengaluru",
    rating: 5,
    review:
      "As a complete beginner, the Stock Market Basics course made everything click. The mentors are incredibly patient.",
    photo: "AI",
    profit: "+₹58,000 (3 months)",
  },
  {
    name: "Vikram Mehta",
    role: "Full-time Trader, Mumbai",
    rating: 4.5,
    review:
      "Options Trading course changed how I hedge my portfolio. Practical, no-fluff content taught by real traders.",
    photo: "VM",
    profit: "+₹3,10,000 (1 year)",
  },
  {
    name: "Priya Nair",
    role: "Homemaker & Investor, Kochi",
    rating: 5,
    review:
      "I started with zero knowledge. Today I manage my family's investments confidently thanks to this coaching.",
    photo: "PN",
    profit: "+₹75,500 (8 months)",
  },
  {
    name: "Karan Malhotra",
    role: "Intraday Trader, Delhi",
    rating: 4.5,
    review:
      "The live market sessions are gold. Watching the mentor trade in real time taught me more than any book.",
    photo: "KM",
    profit: "+₹2,25,000 (10 months)",
  },
  {
    name: "Sneha Reddy",
    role: "Student Investor, Hyderabad",
    rating: 5,
    review:
      "Trading Psychology module helped me control my emotions during volatile days. Highly recommend to everyone.",
    photo: "SR",
    profit: "+₹40,200 (4 months)",
  },
];

export const FAQS = [
  {
    q: "Do I need prior market knowledge to join?",
    a: "No. Our Stock Market Basics course is designed for complete beginners and builds up to advanced strategies step by step.",
  },
  {
    q: "Are the classes live or pre-recorded?",
    a: "We offer a mix of live interactive sessions and recorded content so you can learn at your own pace while still getting mentor access.",
  },
  {
    q: "Will I get a certificate after completion?",
    a: "Yes, every course comes with a completion certificate that you can showcase on LinkedIn and your resume.",
  },
  {
    q: "Do you provide real trading practice?",
    a: "Yes, we conduct live market sessions and paper-trading exercises so you can apply concepts in real market conditions risk-free.",
  },
  {
    q: "What if I miss a live class?",
    a: "All live sessions are recorded and added to your dashboard within 24 hours, so you never miss out on content.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes, we offer a 7-day no-questions-asked refund policy if you're not satisfied with the course content.",
  },
];

export const NEWS = [
  {
    id: 1,
    title: "Sensex, Nifty end higher led by banking and IT stocks",
    category: "Markets",
    source: "MoneyTimes",
    time: "2 hours ago",
    excerpt:
      "Benchmark indices closed in the green today as banking and IT heavyweights rallied on strong quarterly expectations.",
    image: "from-blue-500 to-emerald-500",
  },
  {
    id: 2,
    title: "RBI keeps repo rate unchanged, signals cautious optimism",
    category: "Economy",
    source: "FinWire",
    time: "5 hours ago",
    excerpt:
      "The central bank maintained the key policy rate for the fourth consecutive meeting, citing balanced inflation risks.",
    image: "from-indigo-500 to-blue-500",
  },
  {
    id: 3,
    title: "FIIs turn net buyers after three weeks of selling",
    category: "Markets",
    source: "MarketPulse",
    time: "7 hours ago",
    excerpt:
      "Foreign institutional investors pumped in fresh capital into Indian equities, boosting mid-cap sentiment.",
    image: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    title: "IT sector outlook: Analysts raise target prices ahead of earnings",
    category: "Stocks",
    source: "TechTicker",
    time: "9 hours ago",
    excerpt:
      "Brokerages have turned bullish on large-cap IT names citing improving deal pipelines and currency tailwinds.",
    image: "from-purple-500 to-indigo-500",
  },
  {
    id: 5,
    title: "Crude oil prices dip on higher-than-expected inventory data",
    category: "Commodities",
    source: "GlobalMarkets",
    time: "11 hours ago",
    excerpt:
      "Oil prices slipped over 1% after inventory data showed a larger build than analysts anticipated this week.",
    image: "from-amber-500 to-orange-500",
  },
  {
    id: 6,
    title: "SEBI proposes new rules for faster IPO listings",
    category: "Regulatory",
    source: "PolicyDesk",
    time: "1 day ago",
    excerpt:
      "The regulator floated a consultation paper aiming to reduce IPO listing timelines from 6 days to 3 days.",
    image: "from-rose-500 to-pink-500",
  },
];

export const NEWS_CATEGORIES = ["All", "Markets", "Economy", "Stocks", "Commodities", "Regulatory"];

export const GALLERY_IMAGES = [
  { id: 1, category: "Classroom", src: "/gallery/classroom1.jpg", alt: "BISM Classroom Training" },
  { id: 2, category: "Classroom", src: "/gallery/classroom2.jpg", alt: "Live Trading Session at BISM" },
  { id: 3, category: "Workshops", src: "/gallery/workshop1.png", alt: "Student analyzing charts" },
  { id: 4, category: "Seminars", src: "/gallery/workshop2.png", alt: "Taking notes during seminar" },
  { id: 5, category: "Workshops", src: "/gallery/workshop3.png", alt: "Focusing on trading setup" },
  { id: 6, category: "Seminars", src: "/gallery/workshop4.jpg", alt: "Seminar technical analysis" },
  { id: 7, category: "Workshops", src: "/gallery/workshop5.jpg", alt: "Crypto and Stock seminar" },
  { id: 8, category: "Seminars", src: "/gallery/workshop6.png", alt: "Expert mentor explaining charts" },
  { id: 9, category: "Workshops", src: "/gallery/workshop7.png", alt: "Students engaged in workshop" },
];

export const TIMELINE = [
  { year: "26 Jan 2026", title: "The Beginning", text: "Started the journey with just 5 dedicated students." },
  { year: "Mid 2026", title: "Rapid Growth", text: "Grew to 50+ students in a short span, expanding our offline and online presence." },
  { year: "Present", title: "Continuous Growth", text: "Building India's most trusted stock market coaching platform with an ever-growing community." },
];

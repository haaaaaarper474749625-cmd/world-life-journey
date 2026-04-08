export const heroStats = [
  { label: "Budget", value: "$1,240", hint: "Safe for 12 days" },
  { label: "Energy", value: "68%", hint: "Needs sleep soon" },
  { label: "Health", value: "85%", hint: "Stable" },
  { label: "Language", value: "A2 JP", hint: "Improving" },
];

export const quickActions = [
  { title: "Find transport", detail: "Compare flights, trains, and night buses." },
  { title: "Look for work", detail: "Cafe shifts, hostel help, and short gigs." },
  { title: "Join a class", detail: "Language, culture, or practical life skills." },
  { title: "Visit clinic", detail: "Check cost, insurance, and wait time." },
  { title: "Meet locals", detail: "Build friendships, trust, and romance lines." },
  { title: "Taste the city", detail: "Street food, home cooking, and markets." },
];

export const modules = [
  {
    title: "Map",
    href: "/map",
    eyebrow: "Route planning",
    summary: "Choose where to go next and see how time, cost, and exhaustion change.",
  },
  {
    title: "Journey",
    href: "/journey",
    eyebrow: "Daily life",
    summary: "Live inside one city at a time through work, study, health, and exploration.",
  },
  {
    title: "Social",
    href: "/social",
    eyebrow: "Relationships",
    summary: "Friends, travel partners, and love interests shape your path.",
  },
  {
    title: "Profile",
    href: "/profile",
    eyebrow: "Long-term progress",
    summary: "Passport history, skills, savings, and personal growth across the world.",
  },
];

export const worldRoutes = [
  {
    from: "Tokyo",
    to: "Bangkok",
    methods: [
      { type: "Flight", cost: "$190", time: "6h 20m", impact: "Fast, expensive" },
      { type: "Budget flight", cost: "$112", time: "7h 10m", impact: "Cheap, no luggage" },
      { type: "Multi-leg overland", cost: "$260", time: "3d 8h", impact: "Long, immersive" },
    ],
  },
  {
    from: "Paris",
    to: "Barcelona",
    methods: [
      { type: "Train", cost: "$88", time: "6h 45m", impact: "Comfortable" },
      { type: "Bus", cost: "$39", time: "14h", impact: "Tiring, budget" },
      { type: "Flight", cost: "$76", time: "3h 15m", impact: "Fast, less local" },
    ],
  },
  {
    from: "Mexico City",
    to: "Lima",
    methods: [
      { type: "Flight", cost: "$244", time: "6h 50m", impact: "Most practical" },
      { type: "Regional loop", cost: "$410", time: "4d", impact: "Adventure heavy" },
      { type: "Remote work delay", cost: "$0", time: "+6 days", impact: "Stay and earn more" },
    ],
  },
];

export const cityPanels = [
  {
    city: "Tokyo",
    country: "Japan",
    summary:
      "A dense city where efficient transit, strict timing, language barriers, and small living spaces create pressure and realism.",
    highlights: ["Metro life", "Part-time cafes", "Language schools", "Neighborhood clinics"],
  },
  {
    city: "Bangkok",
    country: "Thailand",
    summary:
      "Street food, river transport, humid weather, low living costs, and flexible short-term work make it ideal for survival travel.",
    highlights: ["Night markets", "Affordable rentals", "Temple culture", "Gig economy"],
  },
  {
    city: "Paris",
    country: "France",
    summary:
      "A city of museums and social rituals where budget pressure, language confidence, and emotional choices all matter.",
    highlights: ["Art districts", "Cafe culture", "Public healthcare", "European rail"],
  },
];

export const socialConnections = [
  {
    name: "Mina",
    role: "Language exchange student",
    city: "Tokyo",
    status: "Trust building",
    note: "Can help you navigate classes and daily etiquette.",
  },
  {
    name: "Theo",
    role: "Hostel barista",
    city: "Bangkok",
    status: "Work lead",
    note: "Knows short gigs and cheap places to stay.",
  },
  {
    name: "Lucia",
    role: "Art history guide",
    city: "Paris",
    status: "Romance path",
    note: "Opens culture quests and emotional choices.",
  },
];

export const profileHighlights = [
  { label: "Visited countries", value: "12" },
  { label: "Current savings", value: "$3,460" },
  { label: "Languages", value: "EN / ES / JP A2" },
  { label: "Work skills", value: "Hospitality / Remote support" },
];

export const timeline = [
  "Arrived in Tokyo and chose a capsule hotel for three nights.",
  "Accepted a weekend cafe shift to extend the travel budget.",
  "Booked a cultural class and unlocked a new local connection.",
  "Compared clinic costs before planning the next city move.",
];

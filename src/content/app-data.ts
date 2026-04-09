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
    title: "Create",
    href: "/create",
    eyebrow: "Player setup",
    summary: "Define your origin city, starting budget, travel goal, and personal style.",
  },
  {
    title: "Map",
    href: "/map",
    eyebrow: "Route planning",
    summary: "Choose where to go next and see how time, cost, and exhaustion change.",
  },
  {
    title: "Planner",
    href: "/planner",
    eyebrow: "Hand control",
    summary: "Build your day hour by hour and trade money, energy, and relationships.",
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
      {
        type: "Flight",
        cost: "$190",
        time: "6h 20m",
        impact: "Fast, expensive",
        effect: { cash: -190, energy: -8, mood: -2, day: 1, city: "Bangkok" },
      },
      {
        type: "Budget flight",
        cost: "$112",
        time: "7h 10m",
        impact: "Cheap, no luggage",
        effect: { cash: -112, energy: -12, mood: -4, day: 1, city: "Bangkok" },
      },
      {
        type: "Multi-leg overland",
        cost: "$260",
        time: "3d 8h",
        impact: "Long, immersive",
        effect: { cash: -260, energy: -18, mood: 6, day: 3, city: "Bangkok" },
      },
    ],
  },
  {
    from: "Paris",
    to: "Barcelona",
    methods: [
      {
        type: "Train",
        cost: "$88",
        time: "6h 45m",
        impact: "Comfortable",
        effect: { cash: -88, energy: -6, mood: 3, day: 1, city: "Barcelona" },
      },
      {
        type: "Bus",
        cost: "$39",
        time: "14h",
        impact: "Tiring, budget",
        effect: { cash: -39, energy: -16, mood: -5, day: 1, city: "Barcelona" },
      },
      {
        type: "Flight",
        cost: "$76",
        time: "3h 15m",
        impact: "Fast, less local",
        effect: { cash: -76, energy: -8, mood: -1, day: 1, city: "Barcelona" },
      },
    ],
  },
  {
    from: "Mexico City",
    to: "Lima",
    methods: [
      {
        type: "Flight",
        cost: "$244",
        time: "6h 50m",
        impact: "Most practical",
        effect: { cash: -244, energy: -10, mood: -1, day: 1, city: "Lima" },
      },
      {
        type: "Regional loop",
        cost: "$410",
        time: "4d",
        impact: "Adventure heavy",
        effect: { cash: -410, energy: -20, mood: 8, day: 4, city: "Lima" },
      },
      {
        type: "Remote work delay",
        cost: "$0",
        time: "+6 days",
        impact: "Stay and earn more",
        effect: { cash: 120, energy: -8, mood: -2, day: 6, city: "Mexico City" },
      },
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

export const travelerOrigins = [
  { city: "Auckland", reason: "Island departure with high cost pressure and long-haul planning." },
  { city: "Tokyo", reason: "Dense urban realism with strong transport systems and language pressure." },
  { city: "Paris", reason: "Culture-heavy route with study, art, and relationship opportunities." },
  { city: "Mexico City", reason: "A flexible gateway to the Americas with layered work options." },
];

export const travelerGoals = [
  "Budget backpacking",
  "Food discovery",
  "Work and travel",
  "Study abroad life",
  "Slow healing journey",
  "Romance-driven travel",
];

export const controlTraits = [
  "Risk tolerant",
  "Careful planner",
  "Social explorer",
  "Career focused",
  "Culture seeker",
  "Low-spend survivor",
];

export const plannerSlots = [
  {
    time: "08:00",
    title: "Morning block",
    options: [
      { label: "Street breakfast", result: "+Mood 8, -$6, +Energy 6", effect: { cash: -6, energy: 6, mood: 8, relationship: 0, skill: 0, health: 2 } },
      { label: "Cheap hostel sleep-in", result: "+Energy 14, lose 2 hours", effect: { cash: -4, energy: 14, mood: 1, relationship: 0, skill: 0, health: 3 } },
      { label: "Language class", result: "+Skill 6, -$18, +Local trust 4", effect: { cash: -18, energy: -4, mood: 3, relationship: 4, skill: 6, health: 0 } },
    ],
  },
  {
    time: "13:00",
    title: "Afternoon block",
    options: [
      { label: "Cafe part-time shift", result: "+$42, -Energy 10", effect: { cash: 42, energy: -10, mood: -2, relationship: 2, skill: 2, health: -1 } },
      { label: "Museum and city walk", result: "+Culture 8, -$14, +Mood 10", effect: { cash: -14, energy: -5, mood: 10, relationship: 0, skill: 4, health: 1 } },
      { label: "Clinic visit", result: "-$28, +Health 12, lose 3 hours", effect: { cash: -28, energy: -2, mood: -1, relationship: 0, skill: 0, health: 12 } },
    ],
  },
  {
    time: "19:00",
    title: "Evening block",
    options: [
      { label: "Night market dinner", result: "-$12, +Mood 9", effect: { cash: -12, energy: 4, mood: 9, relationship: 1, skill: 0, health: 2 } },
      { label: "Meet a local friend", result: "+Relationship 10, -$9", effect: { cash: -9, energy: -3, mood: 7, relationship: 10, skill: 0, health: 0 } },
      { label: "Route planning session", result: "+Travel clarity, +Rest", effect: { cash: 0, energy: 6, mood: 2, relationship: 0, skill: 3, health: 0 } },
    ],
  },
];

export const handControlPrinciples = [
  "You choose the city, instead of following a forced chapter path.",
  "You decide how to spend each day and what sacrifice is acceptable.",
  "You can prioritize work, study, health, love, or exploration at any time.",
  "Every major system shows trade-offs in money, time, energy, and connection.",
];

export const workActions = [
  {
    title: "Hostel front-desk shift",
    summary: "A six-hour shift that pays modestly and improves local trust.",
    effect: { cash: 48, energy: -14, mood: -2, relationship: 5, skill: 3, health: -1, day: 1 },
  },
  {
    title: "Cafe weekend rush",
    summary: "Fast cash, high fatigue, and a chance to meet locals.",
    effect: { cash: 62, energy: -18, mood: -1, relationship: 6, skill: 2, health: -2, day: 1 },
  },
  {
    title: "Remote freelance support",
    summary: "Lower immersion, but safer for health and cash flow.",
    effect: { cash: 55, energy: -8, mood: -3, relationship: 0, skill: 5, health: 0, day: 1 },
  },
];

export const studyActions = [
  {
    title: "Local language class",
    summary: "Builds confidence and unlocks smoother city interactions.",
    effect: { cash: -22, energy: -6, mood: 4, relationship: 3, skill: 8, health: 0, day: 1 },
  },
  {
    title: "Cultural workshop",
    summary: "Good for immersion, contacts, and understanding daily etiquette.",
    effect: { cash: -18, energy: -4, mood: 8, relationship: 4, skill: 5, health: 0, day: 1 },
  },
  {
    title: "Career micro-course",
    summary: "Boosts employability for later destinations.",
    effect: { cash: -30, energy: -8, mood: 1, relationship: 1, skill: 10, health: 0, day: 1 },
  },
];

export const healthActions = [
  {
    title: "Neighborhood clinic visit",
    summary: "A practical check-up that stabilizes your body but costs time and money.",
    effect: { cash: -26, energy: -2, mood: -1, relationship: 0, skill: 0, health: 14, day: 1 },
  },
  {
    title: "Rest and recovery day",
    summary: "A full reset day with little progress elsewhere.",
    effect: { cash: -12, energy: 18, mood: 5, relationship: 0, skill: 0, health: 10, day: 1 },
  },
  {
    title: "Buy medicine and early sleep",
    summary: "Cheaper than a clinic, but less powerful.",
    effect: { cash: -14, energy: 10, mood: 2, relationship: 0, skill: 0, health: 6, day: 1 },
  },
];

export const eventActions = [
  {
    title: "Join a local meetup",
    summary: "High social upside if you have the energy for it.",
    effect: { cash: -10, energy: -6, mood: 10, relationship: 12, skill: 2, health: 0, day: 1 },
  },
  {
    title: "Say yes to a date invite",
    summary: "Can deepen emotional routes and raise mood quickly.",
    effect: { cash: -18, energy: -4, mood: 12, relationship: 15, skill: 0, health: 0, day: 1 },
  },
  {
    title: "Help a friend move apartment",
    summary: "Not glamorous, but strong for trust and local support.",
    effect: { cash: -4, energy: -10, mood: 5, relationship: 10, skill: 1, health: -1, day: 1 },
  },
];

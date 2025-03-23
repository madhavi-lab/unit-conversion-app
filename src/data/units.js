export const UNITS = [
  {
    name: "Length",
    icon: require("../assets/length.png"),
    metrics: [
      { id: "cm", name: "cm", order: 1 },
      { id: "m", name: "meter", order: 2 },
      { id: "km", name: "km", order: 3 },
      { id: "inch", name: "inch", order: 4 },
      { id: "foot", name: "foot", order: 5 },
      { id: "yard", name: "yard", order: 6 },
      { id: "mile", name: "mile", order: 7 },
      { id: "mm", name: "mm", order: 8 },
      { id: "micro", name: "micro", order: 9 },
      { id: "nano", name: "nano", order: 10 },
      { id: "au", name: "astronomical unit", order: 11 },
      { id: "parsec", name: "parsec", order: 12 },
      { id: "lightyear", name: "lightyear", order: 13 },
    ],
  },
  {
    name: "Area",
    icon: require("../assets/area.png"),
    metrics: [
      { id: "sqyard", name: "square yard", order: 1 },
      { id: "sqfoot", name: "square foot", order: 2 },
      { id: "cent", name: "cent", order: 3 },
      { id: "acre", name: "acre", order: 4 },
      { id: "sqm", name: "square meter", order: 5 },
    ],
  },
  {
    name: "Weight",
    icon: require("../assets/weight.png"),
    metrics: [
      { id: "mg", name: "mg", order: 1 },
      { id: "g", name: "g", order: 2 },
      { id: "kg", name: "kg", order: 3 },
    ],
  },
];
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
      { id: "mg", name: "milligram", order: 1 },
      { id: "g", name: "gram", order: 2 },
      { id: "kg", name: "kilogram", order: 3 },
      { id: "ton", name: "ton", order: 4 },
      { id: "lb", name: "pound", order: 5 },
      { id: "oz", name: "ounce", order: 6 }
    ],
  },
  {
    name: "Pressure",
    icon: require("../assets/pressure.png"),
    metrics: [
      { id: "pa", name: "Pascal", order: 1 },
      { id: "kpa", name: "Kilopascal", order: 2 },
      { id: "bar", name: "Bar", order: 3 },
      { id: "atm", name: "Atmosphere", order: 4 },
      { id: "psi", name: "Pounds per Square Inch", order: 5 }
    ],
  },
  {
    name: "Energy",
    icon: require("../assets/energy.png"),
    metrics: [
      { id: "joule", name: "Joule", order: 1 },
      { id: "kilojoule", name: "Kilojoule", order: 2 },
      { id: "calorie", name: "Calorie", order: 3 },
      { id: "kilocalorie", name: "Kilocalorie", order: 4 }
    ],
  },
  {
    name: "Speed",
    icon: require("../assets/speed.png"),
    metrics: [
      { id: "mps", name: "Meters per Second", order: 1 },
      { id: "kph", name: "Kilometers per Hour", order: 2 },
      { id: "mph", name: "Miles per Hour", order: 3 }
    ],
  },
  {
    name: "Time",
    icon: require("../assets/time.png"),
    metrics: [
      { id: "second", name: "Second", order: 1 },
      { id: "minute", name: "Minute", order: 2 },
      { id: "hour", name: "Hour", order: 3 },
      { id: "day", name: "Day", order: 4 }
    ],
  },
  {
    name: "Volume",
    icon: require("../assets/volume.png"),
    metrics: [
      { id: "ml", name: "Milliliter", order: 1 },
      { id: "liter", name: "Liter", order: 2 },
      { id: "gallon", name: "Gallon", order: 3 }
    ],
  }
];
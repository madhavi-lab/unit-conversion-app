const unitDefs = {
  "Area": {
    "sqyard": {
      "convertTo": "sqfoot",
      "factor": 9
    },
    "cent": {
      "convertTo": "sqyard",
      "factor": 48.40
    },
    "acre": {
      "convertTo": "cent",
      "factor": 100
    },
    "sqm": {
      "convertTo": "sqyard",
      "factor": 1.19599
    }
  },
  "Length": {
    "cm": {
      "convertTo": "mm",
      "factor": 10
    },
    "m": {
      "convertTo": "cm",
      "factor": 100
    },
    "km": {
      "convertTo": "m",
      "factor": 1000
    },
    "micro": {
      "convertTo": "mm",
      "factor": 0.001
    },
    "nano": {
      "convertTo": "micro",
      "factor": 0.001
    },
    "inch": {
      "convertTo": "m",
      "factor": 0.0254
    },
    "foot": {
      "convertTo": "inch",
      "factor": 12
    },
    "yard": {
      "convertTo": "foot",
      "factor": 3
    },
    "soccer": {
      "convertTo": "yard",
      "factor": 100
    },
    "mile": {
      "convertTo": "yard",
      "factor": 1760
    },
    "au": {
      "convertTo": "km",
      "factor": 149597871
    },
    "parsec": {
      "convertTo": "au",
      "factor": 206265
    },
    "lightyear": {
      "convertTo": "ed",
      "factor": 742431382
    },
    "ed": {
      "convertTo": "km",
      "factor": 12742.63
    }
  },
  "Weight": {
    "g": {
      "convertTo": "mg",
      "factor": 1000
    },
    "kg": {
      "convertTo": "g",
      "factor": 1000
    },
    "ton": {
      "convertTo": "kg",
      "factor": 1000
    },
    "lb": {
      "convertTo": "oz",
      "factor": 16
    },
    "oz": {
      "convertTo": "g",
      "factor": 28.3495
    }
  },
  "Pressure": {
    "pa": {
      "convertTo": "kpa",
      "factor": 0.001
    },
    "kpa": {
      "convertTo": "bar",
      "factor": 0.01
    },
    "bar": {
      "convertTo": "atm",
      "factor": 0.986923
    },
    "atm": {
      "convertTo": "psi",
      "factor": 14.6959
    },
    "psi": {
      "convertTo": "pa",
      "factor": 6894.76
    }
  },
  "Energy": {
    "joule": {
      "convertTo": "kilojoule",
      "factor": 0.001
    },
    "kilojoule": {
      "convertTo": "calorie",
      "factor": 0.239006
    },
    "calorie": {
      "convertTo": "kilocalorie",
      "factor": 0.001
    },
    "kilocalorie": {
      "convertTo": "joule",
      "factor": 4184
    }
  },
  "Speed": {
    "mps": {
      "convertTo": "kph",
      "factor": 3.6
    },
    "kph": {
      "convertTo": "mph",
      "factor": 0.621371
    },
    "mph": {
      "convertTo": "mps",
      "factor": 0.44704
    }
  },
  "Time": {
    "second": {
      "convertTo": "minute",
      "factor": 0.0166667
    },
    "minute": {
      "convertTo": "hour",
      "factor": 0.0166667
    },
    "hour": {
      "convertTo": "day",
      "factor": 0.0416667
    },
    "day": {
      "convertTo": "second",
      "factor": 86400
    }
  },
  "Volume": {
    "ml": {
      "convertTo": "liter",
      "factor": 0.001
    },
    "liter": {
      "convertTo": "gallon",
      "factor": 0.264172
    },
    "gallon": {
      "convertTo": "ml",
      "factor": 3785.41
    }
  }
};

export default unitDefs;

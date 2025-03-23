import React from 'react';
import { View, StyleSheet } from 'react-native';
import { UNITS } from '../data/units'; // Import the UNITS array
import UnitSelector from '../components/UnitSelector'; // Import the new component

export default function HomeScreen({ navigation }) {
  function handleCategoryPress(category) {
    navigation.navigate('ConversionScreen', { category }); // Navigate to ConversionScreen with the selected category
  }

  // Split the UNITS array into rows of 2 categories each
  const rows = [];
  for (let i = 0; i < UNITS.length; i += 2) {
    rows.push(UNITS.slice(i, i + 2));
  }

  return (
    <View style={styles.container}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((unit) => (
            <UnitSelector
              key={unit.name}
              name={unit.name}
              icon={unit.icon}
              onPress={() => handleCategoryPress(unit.name)}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
});
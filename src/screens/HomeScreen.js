import React from 'react';
import { View, StyleSheet } from 'react-native';
import { UNITS } from '../data/units'; // Import the UNITS array
import UnitSelector from '../components/UnitSelector'; // Import the new component

export default function HomeScreen({ navigation }) {
  function handleCategoryPress(category) {
    navigation.navigate('ConversionScreen', { category }); // Navigate to ConversionScreen with the selected category
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {UNITS.map((unit) => (
          <UnitSelector
            key={unit.name}
            name={unit.name}
            icon={unit.icon}
            onPress={() => handleCategoryPress(unit.name)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Corrected from 'top' to 'flex-start'
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    top: 50,
  },
});
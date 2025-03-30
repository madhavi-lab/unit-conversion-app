import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { UNITS } from '../data/units';
import ConversionInput from '../components/ConversionInput';
import { converter } from '../engine/convert'; // Import UnitConverter instance

export default function ConversionScreen({ route }) {
  const { category } = route.params;
  const selectedUnits = UNITS.find((unit) => unit.name === category);

  const [unitValues, setUnitValues] = useState({}); // State to track input values for each unit

  // Function to handle input changes and update all metrics
  const handleInputChange = (id, value) => {
    const numericValue = parseFloat(value) || 0;

    try {
      const conversions = converter.getConversionFactorToOthers(category.trim(), id.trim());

      const updatedValues = {};
      updatedValues[id] = value;

      for (const [targetId, factor] of conversions.entries()) {
        const convertedValue = numericValue * factor;
        updatedValues[targetId] = convertedValue.toPrecision(6); // Use scientific notation for small values
      }

      setUnitValues(updatedValues);
    } catch (error) {
      console.error('Error fetching conversion factors:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{category} Conversion</Text>
      <FlatList
        data={selectedUnits?.metrics || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ConversionInput
            name={item.name}
            value={unitValues[item.id] || ''}
            onChangeText={(value) => handleInputChange(item.id, value)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
});
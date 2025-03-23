import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { UNITS } from '../data/units';
import ConversionInput from '../components/ConversionInput';
import { createConversionFor } from '../engine/convert'; // Import conversion engine

export default function ConversionScreen({ route }) {
  const { category } = route.params;
  const selectedUnits = UNITS.find((unit) => unit.name === category);

  const [unitValues, setUnitValues] = useState({}); // State to track input values for each unit

  // Function to handle input changes and update all metrics
  const handleInputChange = (id, value) => {
    const numericValue = parseFloat(value) || 0; // Parse input value
    const conversions = createConversionFor(category, id); // Get conversion factors

    const updatedValues = {};
    updatedValues[id] = value; // Set the entered value for the selected metric

    // Convert the entered value to other metrics
    for (const [targetId, factor] of conversions.entries()) {
      updatedValues[targetId] = (numericValue * factor).toPrecision(6) //.toFixed(4); // Convert and format
    }

    // console.log("Updated values are : ", updatedValues);

    setUnitValues(updatedValues); // Update state with converted values
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
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput } from 'react-native';
import { UNITS } from '../data/units';

export default function UnitsScreen({ route }) {
  const { category } = route.params; // Get the selected category from navigation params
  const selectedUnits = UNITS.find((unit) => unit.name === category); // Find the units for the selected category

  const [unitValues, setUnitValues] = useState({}); // State to track input values for each unit

  // Function to handle input changes
  const handleInputChange = (id, value) => {
    setUnitValues((prevValues) => ({
      ...prevValues,
      [id]: value, // Update the value for the specific unit
    }));
  };

  return (
    <View style={styles.container}>
      
      <FlatList
        data={selectedUnits?.metrics || []} // Ensure metrics is not null or undefined
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.metricRow}>
            <Text style={styles.metricText}>{item.name}</Text>
            <TextInput
              style={styles.input}
              placeholder={`Enter ${item.name}`}
              keyboardType="numeric"
              value={unitValues[item.id] || ''} // Display the current value for the unit
              onChangeText={(value) => handleInputChange(item.id, value)} // Update state on input change
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  metricRow: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  metricText: {
    fontSize: 16,
    marginRight: 10,
    flex: 1, // Allow the text to take up available space
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '50%', // Adjust the width of the input field
  },
});
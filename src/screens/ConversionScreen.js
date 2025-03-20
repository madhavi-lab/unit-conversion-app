import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { UNITS } from '../data/units';
import ConversionInput from '../components/ConversionInput'; // Import the new component

export default function ConversionScreen({ route }) {
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
      <Text style={styles.header}>{category} Conversion</Text> 
      <FlatList
        data={selectedUnits?.metrics || []} // Ensure metrics is not null or undefined
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
    backgroundColor: '#f9f9f9', // Light background color
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Darker text color for contrast
  },
});
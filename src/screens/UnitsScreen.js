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
      <Text style={styles.header}>{category} Conversion</Text> 
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
  metricRow: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10, // Increased padding for better spacing
    //marginVertical: 8, // Add vertical spacing between rows
    backgroundColor: '#ffffff', // White background for rows
    borderRadius: 10, // Rounded corners
    shadowColor: '#000', // Add shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Elevation for Android shadow
  },
  metricText: {
    fontSize: 18, // Larger font size for better readability
    marginRight: 10,
    flex: 1, // Allow the text to take up available space
    color: '#555', // Slightly muted text color
  },
  input: {
    height: 40,
    borderColor: '#ddd', // Lighter border color
    borderWidth: 1,
    borderRadius: 8, // Rounded corners for input
    paddingHorizontal: 10,
    width: '50%', // Adjust the width of the input field
    backgroundColor: '#f7f7f7', // Light background for input
  },
});
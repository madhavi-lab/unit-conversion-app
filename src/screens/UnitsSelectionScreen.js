import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { UNITS } from '../data/units'; // Import the UNITS array

export default function CategorySelectionScreen({ navigation }) {
  function handleCategoryPress(category) {
    navigation.navigate('Units', { category }); // Navigate to UnitsScreen with the selected category
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        {UNITS.map((unit) => (
          <TouchableOpacity
            key={unit.name}
            style={styles.imageButton}
            onPress={() => handleCategoryPress(unit.name)}
          >
            <Image
              source={unit.icon} // Use the icon property as the image source
              style={styles.image}
            />
            <Text style={styles.imageText}>{unit.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    top: 50,
  },
  imageButton: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  imageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
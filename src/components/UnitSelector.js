import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function UnitSelector({ name, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.imageButton} onPress={onPress}>
      <Image source={icon} style={styles.image} />
      <Text style={styles.imageText}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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

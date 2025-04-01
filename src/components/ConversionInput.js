import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import Clipboard from '@react-native-clipboard/clipboard';
import {Clipboard} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icon library

export default function ConversionInput({ name, value, onChangeText }) {
  const [copied, setCopied] = useState(false); // State to track copy status

  const handleCopy = () => {
    Clipboard.setString(value); // Copy value to clipboard
    setCopied(true); // Set copied state to true
    setTimeout(() => setCopied(false), 500); // Reset icon after 0.5 seconds
  };

  return (
    <View style={styles.metricRow}>
      <Text style={styles.metricText}>{name}</Text>
      <TextInput
        style={styles.input}
        placeholder={`Enter ${name}`}
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={handleCopy} style={styles.copyIcon}>
        <Ionicons
          name={copied ? "checkmark-outline" : "copy-outline"} // Change icon based on state
          size={20}
          color={copied ? "green" : "#555"} // Change color for success
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  metricRow: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10, // Increased padding for better spacing
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
  copyIcon: {
    marginLeft: 10,
  },
});

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native'; // Import StyleSheet
import HomeScreen from './screens/HomeScreen';
import ConversionScreen from './screens/ConversionScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          cardStyle: styles.cardStyle, // Use styles for card background
          headerStyle: styles.headerStyle, // Use styles for header background
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ 
            title: 'Unit Converter', 
            headerTitleStyle: styles.headerTitleStyle, // Use styles for header title
          }}
        />
        <Stack.Screen
          name="ConversionScreen"
          component={ConversionScreen} 
          options={{ 
            title: '', // Set title to blank
            headerBackTitle: 'Back',
            headerBackTitleStyle: styles.headerBackTitleStyle, // Use styles for back title
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: 'black', // Set background color to black
  },
  headerStyle: {
    backgroundColor: '#16A085', // Set header background color
  },
  headerTitleStyle: {
    fontSize: 28, // Larger font size
    fontWeight: 'bold', // Bold font
    fontFamily: 'Arial', // Custom font family
    color: '#333', // Darker text color for contrast
  },
  headerBackTitleStyle: {
    color: 'black', // Set back title color to black
    fontWeight: 'bold', // Bold font
    fontFamily: 'Arial', // Custom font family
  },
});
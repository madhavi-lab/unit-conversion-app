import 'react-native-reanimated'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ConversionScreen from './screens/ConversionScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Conversion App' }}
        />
        <Stack.Screen
          name="ConversionScreen"
          component={ConversionScreen} 
          options={({ route }) => ({ 
            title: '',
            headerBackTitle: 'Back', 
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
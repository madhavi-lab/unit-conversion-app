import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UnitsSelectionScreen from './screens/UnitsSelectionScreen';
import UnitsScreen from './screens/UnitsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UnitsSelection">
        <Stack.Screen
          name="UnitsSelection"
          component={UnitsSelectionScreen}
          options={{ title: 'UNITS' }}
        />
        <Stack.Screen
          name="Units"
          component={UnitsScreen}
          options={({ route }) => ({ title: `${route.params.category.toUpperCase()} Units` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
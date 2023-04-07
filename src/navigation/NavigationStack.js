import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen'
import SettingScreen from '../screens/SettingsScreen'

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
    return (
      <Stack.Navigator>
        {/* Esto carga de arriba hacia abajo */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
      </Stack.Navigator>
    );
  };
  
  export default NavigationStack;

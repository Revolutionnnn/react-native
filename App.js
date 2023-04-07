import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// TAGS
import NavigationStack from './src/navigation/NavigationStack';
import NagationTag from './src/navigation/NavigationTab';
import NagationDrawer from './src/navigation/NavigationDrawer';

import Saludar from './src/components/saludar';

export default function App() {
  return (
    <NavigationContainer>
      <NagationDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
  },
});
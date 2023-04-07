import React from 'react'
import { Text, View, Button, SafeAreaView } from 'react-native'

export default function HomeScreen ({navigation}) {
    const { navigate  } = navigation
    const goToPage = () => {
      navigate("Settings")
    }

    return (
      <SafeAreaView>
        <Text> Estamos en HomeScreen </Text>
        <Text> Estamos en HomeScreen </Text>
        <Text> Estamos en HomeScreen </Text>
        <Text> Estamos en HomeScreen </Text>
        <Text> Estamos en HomeScreen </Text>
        <Button onPress={goToPage} title='Ir a ajustes' />
      </SafeAreaView>
    )
  }

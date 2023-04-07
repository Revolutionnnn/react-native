import React from 'react'
import { Text, View, Button, SafeAreaView } from 'react-native'

export default function SettingScreen(props) {
    const { navigation } = props
    const goToPage = () => {
      navigation.navigate("Home")
    }
    return (
      <SafeAreaView>
        <Text> Estamos en settingScreen </Text>
        <Text> Estamos en settingScreen </Text>
        <Text> Estamos en settingScreen </Text>
        <Text> Estamos en settingScreen </Text>
        <Text> Estamos en settingScreen </Text>
        <Text> Estamos en settingScreen </Text>
        <Button onPress={goToPage} title='Ir a Home' />
      </SafeAreaView>
    )
}

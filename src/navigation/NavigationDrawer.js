import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator()

export default function NagationDrawer () {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
    )
}
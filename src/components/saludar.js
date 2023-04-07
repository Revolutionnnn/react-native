import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
    const {name = 'Pedro'} = props
    console.log(name)
    return <Text>Hola {name}</Text>
}

Saludar.propTypes = {
    name: PropTypes.string.isRequired
}


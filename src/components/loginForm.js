import React,{ useState } from "react";
import {TextInput, Button, View} from "react-native"

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        console.log('Email:', email);
        console.log('Password:', password);
      };
    return (
        <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Enviar" onPress={handlePress} />
      </View>
    )
}
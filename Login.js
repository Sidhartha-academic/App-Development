import React, { useState } from 'react';
import { View, Text, Button, TextInput, ImageBackground } from 'react-native';

const Login = ({ navigation, route }) => {
  const { userData } = route.params;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    if (username === userData.username && password === userData.password) {
      navigation.navigate('Welcome', {userData});
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <ImageBackground
      source={require('./assets/background.jpg')} 
      style={{flex:1,resizeMode:"cover"}}
    >
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Log in</Text>
      <TextInput
        placeholder='Enter your Username'
        secureTextEntry={false}
        value={username}
        onChangeText={setUsername}
        style={{
          margin: 15,
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          width: 300,
          borderRadius: 20,
          textAlign: 'center',
        }}
      />
      <TextInput
        placeholder='Enter your Password'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        style={{
          margin: 15,
          height: 40,
          borderColor: 'black',
          borderWidth: 1,
          width: 300,
          borderRadius: 20,
          textAlign: 'center',
        }}
      />
      <Button title='LOGIN' color='blue' onPress={handleLogin} />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>


      </View>
    </View>
    </ImageBackground>
  );
};

export default Login;

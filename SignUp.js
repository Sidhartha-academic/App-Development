import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, StyleSheet } from 'react-native';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (username === '' || password === '') {
      alert('Please fill in all fields.');
      return;
    }
    const userData = { username, password };
    navigation.navigate('Login', { userData });
  };


  return (
    <ImageBackground
      source={require('./assets/background.jpg')} 
      style={styles.backgroundImage}
    >
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20}}>Sign Up</Text>
        <TextInput
          placeholder='Enter your Username'
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
          placeholder='Enter your E-mail'
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
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
        </View>
        <Button title='Sign Up' color="blue" onPress={handleSignUp} />
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUp;
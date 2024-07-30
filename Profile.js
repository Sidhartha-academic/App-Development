import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

const Profile = ({ navigation,route }) => {
  const { userData } = route.params;
  const handleLogout = () => {
    navigation.navigate('GettingStarted');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <MaterialIcons name="account-circle" size={104} color="black" />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{userData.username}</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MaterialIcons name="edit" size={24} color="#fff" />
        <Text style={{ color: '#fff', fontSize: 16, marginLeft: 10 }}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleLogout}
      >
        <MaterialIcons name="logout" size={24} color="#fff" />
        <Text style={{ color: '#fff', fontSize: 16, marginLeft: 10 }}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Cart')}
      >
        <MaterialIcons name="shopping-cart" size={24} color="#fff" />
        <Text style={{ color: '#fff', fontSize: 16, marginLeft: 10 }}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MaterialIcons name="receipt" size={24} color="#fff" />
        <Text style={{ color: '#fff', fontSize: 16, marginLeft: 10 }}>Your Orders</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
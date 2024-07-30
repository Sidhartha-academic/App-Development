import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GettingStarted from './GettingStarted';
import SignUp from './SignUp';
import Login from './Login';
import Welcome from './Welcome';
import Profile from './Profile';
import Details from './Details';
import Cart from './Cart';

const Stack = createStackNavigator();


const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="GettingStarted"
      screenOptions={
        {
          headerShown:true,
        }
      }>
        <Stack.Screen name="GettingStarted" component={GettingStarted} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Cart" component={Cart} />
        
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;
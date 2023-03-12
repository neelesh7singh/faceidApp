import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../screens/auth/Welcome';
import Verify from '../screens/auth/Verify';
import Login from '../screens/auth/Login';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        // contentStyle: { backgroundColor: Colors.white },
        animation: 'slide_from_right',
      })}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verify" component={Verify} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;

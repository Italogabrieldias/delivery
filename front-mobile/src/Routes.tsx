import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Orders from './Orders';
import OrderDetails from './OrderDetails';

const Stack = createStackNavigator();


function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#FFFFFF' }
        }}
      >
    
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Orders" component={Orders} />  
     <Stack.Screen name="OrderDetails" component={OrderDetails} />
      </Stack.Navigator>
   
  </NavigationContainer>
  );
}



export default Routes;
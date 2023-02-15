import { StyleSheet } from 'react-native';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image } from 'react-native';
import Home from '../Home';

function OrderDetails() {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home');
  };

  return (
    
      <View >
       
      </View>

  );
}
export default OrderDetails;
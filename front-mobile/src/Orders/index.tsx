import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Alert, ScrollView, TouchableNativeFeedback } from "react-native";
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';


function Orders() {

const [orders, setOrders] = useState<Order[]>([])
const [isLoading, setIsLoading]= useState (false);
const navigation = useNavigation();

  useEffect(() =>{
    setIsLoading(true);
    fetchOrders()
    .then(response => console.log(response))
    .catch(() => Alert.alert('Houve um erro ao buscar os pedidos'))
    .finally(()=> setIsLoading(false));
  
  }, [])
const handleOnPress = () => {
  navigation.navigate('Orders');
}
  return (
    <>
    <Header/>
      <ScrollView style={styles.container}>
      {isLoading ?(
        <Text>Buscando pedidos...</Text>
      ) : ( 
        orders.map(order =>(
        <TouchableNativeFeedback key={order.id} onPress={handleOnPress}>
          <OrderCard order={order}/>
        </TouchableNativeFeedback>
      )))}
        
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingRight: '5%',
    paddingLeft: '5%',
  }
  


});

export default Orders;

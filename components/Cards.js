import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const Cards = ({title, price, display}) => {
  return (
    <View>
      <Image
        source={{
          uri: 'http://192.168.43.244:8000/images/resorts/' + display,
          // uri: 'http://192.168.43.244:8000/images/resorts/1631613852-Test1.jpg',
        }}
        style={{
          width: '80%',
          height: 150,
        }}
      />
      <Text>{title}</Text>
      <Text>price: {price}</Text>
    </View>
  );
};

export default Cards;

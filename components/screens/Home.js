import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Cards from '../Cards';
const Home = () => {
  const [all, setAll] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get('http://192.168.43.244:8000/api/resorts');
    const result = response.data;

    setAll(result);
  };

  return (
    <View>
      <Text>Home</Text>
      <View style={styles.body}>
        {all.map(resort => {
          return (
            <Cards
              title={resort.title}
              price={resort.price}
              display={resort.display}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    marginLeft: 50,
  },
});

export default Home;

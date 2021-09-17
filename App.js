import React from 'react';
import Navbar from './components/Navbar';
import {View, StyleSheet} from 'react-native';
import Home from './components/screens/Home';

const App = () => {
  return (
    <View style={styles.body}>
      <Navbar />
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
});

export default App;

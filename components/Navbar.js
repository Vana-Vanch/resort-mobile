import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Navbar = () => {
  return (
    <View style={styles.navBody}>
      <Text>Navbar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBody: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
  },
});

export default Navbar;

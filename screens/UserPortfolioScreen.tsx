
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserPortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>User Portfolio Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default UserPortfolioScreen;

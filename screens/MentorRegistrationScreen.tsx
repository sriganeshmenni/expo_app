
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MentorRegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mentor Registration Screen</Text>
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

export default MentorRegistrationScreen;

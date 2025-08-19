import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Auth</Text>
      {/* Add auth content here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#00caff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

const NotFoundScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Animatable.View animation="fadeInDown" duration={900} style={styles.navbar}>
        <Text style={styles.navbarBrand}>Oryx</Text>
      </Animatable.View>
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View animation="fadeInUp" delay={100} duration={900}>
          <Text style={styles.title}>404 - Page Not Found</Text>
          <Text style={styles.text}>Sorry, the page you are looking for does not exist.</Text>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0a0e1a', // Oryx dark blue
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10162a', // Oryx navy
    borderBottomWidth: 1,
    borderBottomColor: '#1e2746',
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: '#00caff',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 2,
  },
  navbarBrand: {
    color: '#00caff', // Oryx cyan
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 1,
  },
  container: {
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: '#b0c4de',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default NotFoundScreen;

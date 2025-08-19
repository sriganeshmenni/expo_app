// ...existing code...
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import React, { useState } from 'react';

const mockDiscover = [
  { title: 'AI & Machine Learning', desc: 'Explore the future of tech with hands-on projects.', color: '#00caff' },
  { title: 'Web3 & Blockchain', desc: 'Dive into decentralized apps and smart contracts.', color: '#ffb300' },
  { title: 'Mobile Development', desc: 'Build cross-platform apps with React Native.', color: '#ff4081' },
];

const DiscoverScreen = () => {
  const [discover] = useState(mockDiscover);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Animatable.View animation="fadeInDown" duration={900} style={styles.navbar}>
        <Text style={styles.navbarBrand}>Oryx Discover</Text>
      </Animatable.View>
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View animation="fadeInUp" delay={100} duration={900}>
          <Text style={styles.title}>Discover New Paths</Text>
          <Text style={styles.subtitle}>Explore trending topics, skills, and opportunities.</Text>
        </Animatable.View>
        {discover.map((item, idx) => (
          <Animatable.View
            key={idx}
            animation="fadeInUp"
            delay={300 + idx * 100}
            duration={800}
            style={[styles.discoverCard, { borderColor: item.color }]}
          >
            <Text style={[styles.discoverTitle, { color: item.color }]}>{item.title}</Text>
            <Text style={styles.discoverDesc}>{item.desc}</Text>
          </Animatable.View>
        ))}
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
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#b0c4de',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  discoverCard: {
    backgroundColor: '#131b32',
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#00caff',
    shadowOpacity: 0.13,
    shadowRadius: 10,
    elevation: 3,
  },
  discoverTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 4,
  },
  discoverDesc: {
    color: '#fff',
    fontSize: 15,
  },
});

export default DiscoverScreen;

// ...existing code...
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import React, { useState } from 'react';

const mockRoadmaps = [
  { title: 'Frontend Developer', steps: ['HTML/CSS', 'JavaScript', 'React', 'UI/UX', 'Projects'] },
  { title: 'Backend Developer', steps: ['Node.js', 'APIs', 'Databases', 'Auth', 'Projects'] },
  { title: 'UI/UX Designer', steps: ['Design Basics', 'Wireframes', 'Prototyping', 'Tools', 'Portfolio'] },
];

const RoadmapsScreen = () => {
  const [roadmaps] = useState(mockRoadmaps);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Animatable.View animation="fadeInDown" duration={900} style={styles.navbar}>
        <Text style={styles.navbarBrand}>Oryx Roadmaps</Text>
      </Animatable.View>
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View animation="fadeInUp" delay={100} duration={900}>
          <Text style={styles.title}>Career Roadmaps</Text>
          <Text style={styles.subtitle}>Step-by-step guides to help you succeed in your chosen field.</Text>
        </Animatable.View>
        {roadmaps.map((rm, idx) => (
          <Animatable.View
            key={idx}
            animation="fadeInUp"
            delay={300 + idx * 100}
            duration={800}
            style={styles.roadmapCard}
          >
            <Text style={styles.roadmapTitle}>{rm.title}</Text>
            {rm.steps.map((step, sidx) => (
              <Text key={sidx} style={styles.roadmapStep}>• {step}</Text>
            ))}
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
  roadmapCard: {
    backgroundColor: '#131b32',
    borderColor: '#00caff',
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#00caff',
    shadowOpacity: 0.13,
    shadowRadius: 10,
    elevation: 3,
  },
  roadmapTitle: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  roadmapStep: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 2,
  },
});

export default RoadmapsScreen;

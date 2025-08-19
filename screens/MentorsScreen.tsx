// ...existing code...
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import React, { useState } from 'react';

const mockMentors = [
  { name: 'Sarah Lee', expertise: 'Frontend', desc: 'React, UI/UX, CSS', color: '#00caff' },
  { name: 'David Kim', expertise: 'Backend', desc: 'Node.js, APIs, Databases', color: '#ffb300' },
  { name: 'Aisha Patel', expertise: 'Design', desc: 'UI/UX, Figma, Branding', color: '#ff4081' },
];

const MentorsScreen = () => {
  const [mentors] = useState(mockMentors);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Animatable.View animation="fadeInDown" duration={900} style={styles.navbar}>
        <Text style={styles.navbarBrand}>Oryx Mentors</Text>
      </Animatable.View>
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View animation="fadeInUp" delay={100} duration={900}>
          <Text style={styles.title}>Meet Our Mentors</Text>
          <Text style={styles.subtitle}>Connect with experienced professionals ready to guide you.</Text>
        </Animatable.View>
        {mentors.map((mentor, idx) => (
          <Animatable.View
            key={idx}
            animation="fadeInUp"
            delay={300 + idx * 100}
            duration={800}
            style={[styles.mentorCard, { borderColor: mentor.color }]}
          >
            <Text style={[styles.mentorName, { color: mentor.color }]}>{mentor.name}</Text>
            <Text style={styles.mentorExpertise}>{mentor.expertise}</Text>
            <Text style={styles.mentorDesc}>{mentor.desc}</Text>
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
  mentorCard: {
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
  mentorName: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 4,
  },
  mentorExpertise: {
    color: '#b0c4de',
    fontSize: 15,
    marginBottom: 2,
  },
  mentorDesc: {
    color: '#fff',
    fontSize: 15,
  },
});

export default MentorsScreen;

// ...existing code...
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import React, { useState } from 'react';

const mockPosts = [
  { user: 'Alice', content: 'Excited to join Oryx! Anyone up for a React study group?' },
  { user: 'Bob', content: 'Just finished the UI/UX roadmap. Highly recommend!' },
  { user: 'Priya', content: 'Looking for a mentor in backend development.' },
];

const CommunityScreen = () => {
  const [posts] = useState(mockPosts);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Animatable.View animation="fadeInDown" duration={900} style={styles.navbar}>
        <Text style={styles.navbarBrand}>Oryx Community</Text>
      </Animatable.View>
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View animation="fadeInUp" delay={100} duration={900}>
          <Text style={styles.title}>Welcome to the Oryx Community</Text>
          <Text style={styles.subtitle}>Connect, share, and grow with fellow learners and mentors.</Text>
        </Animatable.View>
        {posts.map((post, idx) => (
          <Animatable.View
            key={idx}
            animation="fadeInUp"
            delay={300 + idx * 100}
            duration={800}
            style={styles.postCard}
          >
            <Text style={styles.postUser}>{post.user}</Text>
            <Text style={styles.postContent}>{post.content}</Text>
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
  postCard: {
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
  postUser: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  postContent: {
    color: '#fff',
    fontSize: 15,
  },
});

export default CommunityScreen;

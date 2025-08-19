// ...existing code...
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import React, { useState } from 'react';

const mockMessages = [
  { from: 'ai', text: 'Hi! I am Michael AI. How can I help you today?' },
  { from: 'user', text: 'What is the best way to learn React Native?' },
  { from: 'ai', text: 'Start with the official docs, build small projects, and join the Oryx Community for support!' },
];

const MichealAIScreen = () => {
  const [messages] = useState(mockMessages);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Animatable.View animation="fadeInDown" duration={900} style={styles.navbar}>
        <Text style={styles.navbarBrand}>Michael AI</Text>
      </Animatable.View>
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View animation="fadeInUp" delay={100} duration={900}>
          <Text style={styles.title}>Michael AI Assistant</Text>
          <Text style={styles.subtitle}>Ask questions, get instant help, and boost your learning.</Text>
        </Animatable.View>
        {messages.map((msg, idx) => (
          <Animatable.View
            key={idx}
            animation="fadeInUp"
            delay={300 + idx * 100}
            duration={800}
            style={msg.from === 'ai' ? styles.aiMsg : styles.userMsg}
          >
            <Text style={styles.msgText}>{msg.text}</Text>
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
  aiMsg: {
    backgroundColor: '#10162a',
    borderColor: '#00caff',
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  userMsg: {
    backgroundColor: '#131b32',
    borderColor: '#ffb300',
    borderWidth: 1,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  msgText: {
    color: '#fff',
    fontSize: 15,
  },
});

export default MichealAIScreen;

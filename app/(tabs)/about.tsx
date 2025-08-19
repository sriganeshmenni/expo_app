import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const features = [
  {
    icon: '👤',
    title: 'Create Your Profile',
    desc: 'Quickly sign up to get your personal portfolio. Showcase your skills, track course progress, and make yourself visible to employers.',
  },
  {
    icon: '👥',
    title: 'Find a Mentor',
    desc: 'Connect with experienced mentors for career guidance. Or, if you\'re an expert, sign up to teach and guide many students at once.',
  },
  {
    icon: '🪧',
    title: 'Follow a Career Plan',
    desc: 'Use our Career Roadmaps for step-by-step guides. Learn everything you need, from beginner to advanced skills, to succeed in your field.',
  },
  {
    icon: '🖥️',
    title: 'Take or Teach Classes',
    desc: 'Teachers can easily create classes for multiple students. Students can browse, filter, and join courses with a simple search.',
  },
  {
    icon: '💼',
    title: 'Get Career & Job Help',
    desc: '',
    subfeatures: [
      { icon: '🤖', title: 'AI Career Assistant', desc: 'Get answers about careers and interviews from Michael, our AI bot.' },
      { icon: '🔍', title: 'Job Search Portal', desc: 'Find jobs and internships from top sites like LinkedIn, all in one place.' },
      { icon: '📓', title: 'Career Guidelines Hub', desc: 'Access resume tips and helpful guides to boost your job hunt.' },
    ],
  },
];

export default function AboutScreen() {
  return (
    <ScrollView style={{ backgroundColor: '#0a0e1a' }} contentContainerStyle={styles.scrollContent}>
      {/* Hero Section */}
      <View style={styles.header}>
        <Text style={styles.title}>What is <Text style={{ color: '#00caff' }}>Oryx</Text>?</Text>
        <Text style={styles.subtitle}>A simple guide to connecting your learning directly with your career goals.</Text>
      </View>

      {/* Features Grid */}
      <View style={styles.featuresGrid}>
        {features.map((feature, idx) => (
          <View key={idx} style={styles.featureCard}>
            <Text style={styles.featureIcon}>{feature.icon}</Text>
            <Text style={styles.featureTitle}>{feature.title}</Text>
            {feature.desc ? <Text style={styles.featureDesc}>{feature.desc}</Text> : null}
            {feature.subfeatures && (
              <View style={styles.subfeaturesList}>
                {feature.subfeatures.map((sub, i) => (
                  <View key={i} style={styles.subfeatureItem}>
                    <Text style={styles.subfeatureIcon}>{sub.icon}</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.subfeatureTitle}>{sub.title}</Text>
                      <Text style={styles.subfeatureDesc}>{sub.desc}</Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About Oryx</Text>
        <Text style={styles.aboutDesc}>Our mission is to help people advance their careers through technology and community learning. Meet the team that built the platform on our "About Us" page.</Text>
        <Text style={styles.aboutQuote}>
          “We chose the name Oryx because the oryx is a strong and smart animal with long, sharp horns. These horns help it protect itself and move forward with confidence. Just like that, our platform helps people grow their skills, stay strong in their journey, and move ahead in the right direction. The name ‘Oryx’ shows power, focus, and confidence — things we want every user to feel.”
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#0a0e1a',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#b0c4de',
    marginBottom: 20,
    textAlign: 'center',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  featureCard: {
    backgroundColor: '#10162a',
    borderRadius: 16,
    padding: 18,
    margin: 8,
    width: 220,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e2746',
    shadowColor: '#00caff',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  featureIcon: {
    fontSize: 36,
    marginBottom: 8,
  },
  featureTitle: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'center',
  },
  featureDesc: {
    color: '#b0c4de',
    fontSize: 14,
    marginBottom: 2,
    textAlign: 'center',
  },
  subfeaturesList: {
    marginTop: 8,
    width: '100%',
  },
  subfeatureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  subfeatureIcon: {
    fontSize: 22,
    marginRight: 8,
    marginTop: 2,
  },
  subfeatureTitle: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  subfeatureDesc: {
    color: '#b0c4de',
    fontSize: 13,
    marginBottom: 2,
  },
  aboutSection: {
    backgroundColor: '#10162a',
    borderRadius: 16,
    padding: 24,
    margin: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e2746',
    shadowColor: '#00caff',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  aboutTitle: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  aboutDesc: {
    color: '#b0c4de',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
  aboutQuote: {
    color: '#b0c4de',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

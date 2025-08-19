
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const features = [
  {
    icon: '🧑‍💼',
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
    icon: '🎓',
    title: 'Take or Teach Classes',
    desc: 'Teachers can easily create classes for multiple students. Students can browse, filter, and join courses with a simple search.',
  },
];

const careerHelp = [
  {
    icon: '🤖',
    title: 'AI Career Assistant:',
    desc: 'Get answers about careers and interviews from Michael, our AI bot.',
  },
  {
    icon: '🔍',
    title: 'Job Search Portal:',
    desc: 'Find jobs and internships from top sites like LinkedIn, all in one place.',
  },
  {
    icon: '📓',
    title: 'Career Guidelines Hub:',
    desc: 'Access resume tips and helpful guides to boost your job hunt.',
  },
];

const AboutScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const isWide = screenWidth > 600;
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Navigation Bar */}
      <Animatable.View animation="fadeInDown" duration={900} style={styles.navbar}>
        <Text style={styles.navbarBrand}>🛡️ Oryx Guide</Text>
      </Animatable.View>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Hero Section */}
        <Animatable.View animation="fadeInUp" delay={100} duration={900} style={styles.heroSection}>
          <Text style={styles.heroTitle}>What is Oryx?</Text>
          <Text style={styles.heroSubtitle}>A simple guide to connecting your learning directly with your career goals.</Text>
        </Animatable.View>

        {/* Main Content */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your One-Stop Platform for Growth</Text>
          <Text style={styles.sectionSubtitle}>Tools for students, teachers, and mentors to learn, connect, and find jobs.</Text>

          {/* Features Grid */}
          <View style={[styles.featuresGrid, isWide && {flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}]}>
            {features.map((f, i) => (
              <Animatable.View
                key={i}
                style={[styles.featureCard, isWide ? {width: '47%'} : {}]}
                animation="zoomIn"
                delay={200 + i * 120}
                duration={800}
                useNativeDriver
              >
                <Text style={styles.featureIcon}>{f.icon}</Text>
                <Text style={styles.featureTitle}>{f.title}</Text>
                <Text style={styles.featureDesc}>{f.desc}</Text>
              </Animatable.View>
            ))}
            {/* Career Help Card (spans full width) */}
            <Animatable.View
              style={[styles.careerCard, isWide && {width: '100%'}]}
              animation="fadeInUp"
              delay={600}
              duration={900}
              useNativeDriver
            >
              <Text style={styles.careerIcon}>💼</Text>
              <Text style={styles.featureTitle}>Get Career & Job Help</Text>
              {careerHelp.map((item, idx) => (
                <View key={idx} style={styles.careerHelpRow}>
                  <Text style={styles.careerHelpIcon}>{item.icon}</Text>
                  <View style={{flex: 1}}>
                    <Text style={styles.careerHelpTitle}>{item.title}</Text>
                    <Text style={styles.careerHelpDesc}>{item.desc}</Text>
                  </View>
                </View>
              ))}
            </Animatable.View>
          </View>
        </View>

        {/* About Section */}
        <Animatable.View animation="fadeIn" delay={400} duration={1000} style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>About Oryx</Text>
          <Text style={styles.aboutText}>Our mission is to help people advance their careers through technology and community learning. Meet the team that built the platform on our "About Us" page.</Text>
          <Text style={styles.aboutQuote}>
            “We chose the name Oryx because the oryx is a strong and smart animal with long, sharp horns. These horns help it protect itself and move forward with confidence. Just like that, our platform helps people grow their skills, stay strong in their journey, and move ahead in the right direction. The name ‘Oryx’ shows power, focus, and confidence — things we want every user to feel.”
          </Text>
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
  },
  heroSection: {
    backgroundColor: '#10162a',
    borderBottomWidth: 1,
    borderBottomColor: '#1e2746',
    alignItems: 'center',
    paddingVertical: 32,
    marginBottom: 20,
    borderRadius: 16,
    shadowColor: '#00caff',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
  },
  heroTitle: {
    color: '#00caff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  heroSubtitle: {
    color: '#b0c4de',
    fontSize: 17,
    textAlign: 'center',
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  sectionSubtitle: {
    color: '#b0c4de',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 18,
  },
  featuresGrid: {
    flexDirection: 'column',
    gap: 16,
  },
  featureCard: {
    backgroundColor: '#131b32', // Oryx card
    borderColor: '#00caff',
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#00caff',
    shadowOpacity: 0.13,
    shadowRadius: 10,
    elevation: 3,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 8,
    color: '#00caff',
  },
  featureTitle: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  featureDesc: {
    color: '#b0c4de',
    fontSize: 15,
    textAlign: 'center',
  },
  careerCard: {
    backgroundColor: '#131b32',
    borderColor: '#00caff',
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    marginTop: 8,
    shadowColor: '#00caff',
    shadowOpacity: 0.13,
    shadowRadius: 10,
    elevation: 3,
  },
  careerIcon: {
    fontSize: 40,
    marginBottom: 8,
    color: '#00caff',
    textAlign: 'center',
  },
  careerHelpRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    gap: 8,
  },
  careerHelpIcon: {
    fontSize: 24,
    color: '#00caff',
    marginRight: 8,
    marginTop: 2,
  },
  careerHelpTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  careerHelpDesc: {
    color: '#b0c4de',
    fontSize: 14,
    marginBottom: 2,
  },
  aboutSection: {
    backgroundColor: '#131b32',
    borderRadius: 20,
    padding: 24,
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
    shadowColor: '#00caff',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
  },
  aboutText: {
    color: '#b0c4de',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  aboutQuote: {
    color: '#00caff',
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: 18,
    textAlign: 'center',
  },
});

export default AboutScreen;

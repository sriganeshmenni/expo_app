import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const features = [
  {
    icon: 'portfolio',
    title: 'User Portfolio',
    desc: ['Project showcases', 'Resume upload', "Auto-generated 'Skill Cards'"],
    link: 'Portfolio',
    button: 'My Portfolio',
  },
  {
    icon: 'briefcase',
    title: 'Job Platform Integration',
    desc: ['LinkedIn, Naukri, Internshala APIs', 'Skill-tag-based job redirection', 'Smart Apply Now links'],
    link: 'Jobs',
    button: 'Explore Job Listings',
  },
  {
    icon: 'lightbulb',
    title: 'AI career assistant',
    desc: ['Roadmaps & tutorials', 'Resume tips, interview prep', 'Career advice & guidance'],
    link: 'MichealAI',
    button: 'Chat With Michael',
  },
  {
    icon: 'bar-chart',
    title: 'Learning Skills',
    desc: ['Discover Courses', 'Learn from experts', 'Explore resources'],
    link: 'Roadmaps',
    button: 'Go to Roadmaps',
  },
  {
    icon: 'chat',
    title: 'Community',
    desc: ['Peer to peer communication', 'View & interact with mentors', 'Improve your profile & portfolio'],
    link: 'Community',
    button: 'View Community',
  },
  {
    icon: 'people',
    title: 'One-to-Many Mentorship',
    desc: ['Mentors can host topic-based classes', 'Multiple learners can join', 'Follow-up material & Q&A'],
    link: 'Mentors',
    button: 'View Mentors',
  },
];

type RootStackParamList = {
  Auth: undefined;
  Portfolio: undefined;
  Jobs: undefined;
  MichealAI: undefined;
  Roadmaps: undefined;
  Community: undefined;
  Mentors: undefined;
  Join: undefined;
  Create: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View animation="fadeInDown" duration={900} style={styles.hero}>
          <Image source={require('../assets/images/Logo-oryx.png')} style={styles.logo} />
          <Text style={styles.heroTitle}>ORYX</Text>
          <Text style={styles.heroSubtitle}>Join us on a journey to unlock your full potential.</Text>
          <TouchableOpacity style={styles.getStartedBtn} onPress={() => navigation.navigate('Auth')}>
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
        </Animatable.View>

        <View style={styles.classButtonsContainer}>
          <TouchableOpacity style={styles.classButton} onPress={() => navigation.navigate('Join')}>
            <Text style={styles.classButtonText}>Join a Class</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.classButton, styles.createButton]} onPress={() => navigation.navigate('Create')}>
            <Text style={styles.classButtonText}>Create a Class</Text>
          </TouchableOpacity>
        </View>

        <Animatable.View animation="fadeInUp" delay={200} duration={900}>
          {features.map((f, idx) => (
            <View key={idx} style={styles.featureCard}>
              <Text style={styles.featureTitle}>{f.title}</Text>
              {f.desc.map((d, i) => (
                <Text key={i} style={styles.featureDesc}>• {d}</Text>
              ))}
              <TouchableOpacity style={styles.featureBtn} onPress={() => navigation.navigate({ name: f.link as any, params: undefined })}>
                <Text style={styles.featureBtnText}>{f.button}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </Animatable.View>

        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Transform Your Career?</Text>
          <Text style={styles.ctaSubtitle}>Join thousands of learners and mentors building the future together.</Text>
          <View style={styles.ctaButtonContainer}>
            <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate('Community')}>
              <Text style={styles.ctaButtonText}>Explore Courses</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.ctaButton, styles.ctaButtonOutline]} onPress={() => navigation.navigate('Mentors')}>
              <Text style={[styles.ctaButtonText, styles.ctaButtonOutlineText]}>Meet Your Mentor</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0a0e1a',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  hero: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  heroTitle: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 48,
    letterSpacing: 2,
    marginBottom: 8,
  },
  heroSubtitle: {
    color: '#b0c4de',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 18,
  },
  getStartedBtn: {
    backgroundColor: '#00caff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 10,
  },
  getStartedText: {
    color: '#0a0e1a',
    fontWeight: 'bold',
    fontSize: 18,
  },
  classButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  classButton: {
    backgroundColor: '#00caff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  createButton: {
    backgroundColor: '#28a745',
  },
  classButtonText: {
    color: '#0a0e1a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  featureCard: {
    backgroundColor: '#131b32',
    borderColor: '#00caff',
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#00caff',
    shadowOpacity: 0.13,
    shadowRadius: 10,
    elevation: 3,
  },
  featureTitle: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6,
  },
  featureDesc: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 2,
  },
  featureBtn: {
    backgroundColor: '#00caff',
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  featureBtnText: {
    color: '#0a0e1a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  ctaSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  ctaTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 10,
  },
  ctaSubtitle: {
    color: '#b0c4de',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ctaButton: {
    backgroundColor: '#00caff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginHorizontal: 10,
  },
  ctaButtonText: {
    color: '#0a0e1a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  ctaButtonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
  },
  ctaButtonOutlineText: {
    color: '#fff',
  },
});

export default HomeScreen;
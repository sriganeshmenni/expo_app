import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const csFundamentals = [
  { title: 'C', desc: 'Programming Language', url: 'https://www.w3schools.com/c/index.php' },
  { title: 'C++', desc: 'Programming Language', url: 'https://www.w3schools.com/cpp/default.asp' },
  { title: 'Java', desc: 'Programming Language', url: 'https://www.w3schools.com/java/default.asp' },
  { title: 'Python', desc: 'Programming Language', url: 'https://www.w3schools.com/python/default.asp' },
  { title: 'DSA', desc: 'Data Structures & Algorithms', url: 'https://www.w3schools.com/dsa/index.php' },
  { title: 'DBMS & SQL', desc: 'Database Management', url: 'https://www.w3schools.com/sql/default.asp' },
  { title: 'OS', desc: 'Operating Systems', url: 'https://www.geeksforgeeks.org/operating-systems/operating-systems/' },
];

const roles = [
  {
    title: 'Frontend Developer',
    level: 'Entry Level',
    badgeColor: '#198754',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js'],
  },
  {
    title: 'Backend Developer',
    level: 'Mid Level',
    badgeColor: '#ffc107',
    skills: ['Node.js', 'Python', 'Java', 'Databases', 'APIs'],
  },
  {
    title: 'UI/UX Designer',
    level: 'Entry Level',
    badgeColor: '#198754',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
  },
  {
    title: 'AI/ML Engineer',
    level: 'Advanced',
    badgeColor: '#dc3545',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Statistics', 'Deep Learning'],
  },
  {
    title: 'Full Stack Developer',
    level: 'Senior Level',
    badgeColor: '#0dcaf0',
    skills: ['Frontend', 'Backend', 'Databases', 'DevOps', 'System Design'],
  },
  {
    title: 'Data Analyst',
    level: 'Entry Level',
    badgeColor: '#198754',
    skills: ['SQL', 'Python', 'Excel', 'Tableau', 'Statistics'],
  },
  {
    title: 'Mobile App Developer',
    level: 'Mid Level',
    badgeColor: '#ffc107',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    title: 'Game Developer',
    level: 'Mid Level',
    badgeColor: '#ffc107',
    skills: ['Unity', 'C#', 'Game Design', '3D Modeling'],
  },
];

const ctaCards = [
  {
    title: 'Personalized Learning',
    desc: 'Get AI-powered recommendations based on your goals',
  },
  {
    title: 'Expert Mentorship',
    desc: 'Connect with industry professionals for guidance',
  },
  {
    title: 'Track Progress',
    desc: 'Monitor your skills development in real-time',
  },
];

export default function RoadmapsScreen() {
  return (
    <ScrollView style={{ backgroundColor: '#0a0e1a' }} contentContainerStyle={styles.scrollContent}>
      {/* Hero Section */}
      <View style={styles.header}>
        <Text style={styles.title}><Text style={{ color: '#00caff' }}>Roadmaps</Text></Text>
        <Text style={styles.subtitle}>Track your learning progress with personalized roadmaps designed for your career goals.</Text>
      </View>

      {/* CS Fundamentals */}
      <Text style={styles.sectionTitle}>CS Fundamentals</Text>
      <View style={styles.cardGrid}>
        {csFundamentals.map((item, idx) => (
          <View key={idx} style={styles.roadmapCard}>
            <Text style={styles.roadmapCardTitle}>{item.title}</Text>
            <Text style={styles.roadmapCardDesc}>{item.desc}</Text>
            <TouchableOpacity
              style={styles.kickStartBtn}
              onPress={() => Linking.openURL(item.url)}
            >
              <Text style={styles.kickStartBtnText}>Kick Start</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Roles Section */}
      <Text style={styles.sectionTitle}>Roles</Text>
      <View style={styles.cardGrid}>
        {roles.map((role, idx) => (
          <View key={idx} style={styles.roleCard}>
            <View style={styles.roleHeader}>
              <Text style={styles.roleTitle}>{role.title}</Text>
              <Text style={[styles.roleBadge, { backgroundColor: role.badgeColor }]}>{role.level}</Text>
            </View>
            <Text style={styles.roleSkillsLabel}>Required Skills:</Text>
            <View style={styles.skillsRow}>
              {role.skills.map((skill, i) => (
                <Text key={i} style={styles.skillBadge}>{skill}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to Start Your Journey?</Text>
        <Text style={styles.ctaSubtitle}>Choose a roadmap that aligns with your career goals and start building the skills that matter.</Text>
        <View style={styles.ctaGrid}>
          {ctaCards.map((card, idx) => (
            <View key={idx} style={styles.ctaCard}>
              <Text style={styles.ctaCardTitle}>{card.title}</Text>
              <Text style={styles.ctaCardDesc}>{card.desc}</Text>
            </View>
          ))}
        </View>
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
  sectionTitle: {
    color: '#00caff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 18,
    marginTop: 18,
    marginBottom: 8,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  roadmapCard: {
    backgroundColor: '#10162a',
    borderRadius: 16,
    padding: 18,
    margin: 8,
    width: 170,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e2746',
    shadowColor: '#00caff',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  roadmapCardTitle: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  roadmapCardDesc: {
    color: '#b0c4de',
    fontSize: 14,
    marginBottom: 10,
  },
  kickStartBtn: {
    backgroundColor: '#00caff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 8,
  },
  kickStartBtnText: {
    color: '#10162a',
    fontWeight: 'bold',
    fontSize: 15,
  },
  roleCard: {
    backgroundColor: '#10162a',
    borderRadius: 16,
    padding: 18,
    margin: 8,
    width: 220,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#1e2746',
    shadowColor: '#00caff',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  roleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  roleTitle: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
  roleBadge: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginLeft: 8,
  },
  roleSkillsLabel: {
    color: '#b0c4de',
    fontSize: 14,
    marginBottom: 4,
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillBadge: {
    backgroundColor: '#222b45',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 13,
    marginRight: 6,
    marginBottom: 4,
  },
  ctaSection: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  ctaSubtitle: {
    color: '#b0c4de',
    fontSize: 15,
    marginBottom: 18,
    textAlign: 'center',
  },
  ctaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  ctaCard: {
    backgroundColor: '#10162a',
    borderRadius: 16,
    padding: 18,
    margin: 8,
    width: 170,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e2746',
    shadowColor: '#00caff',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  ctaCardTitle: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'center',
  },
  ctaCardDesc: {
    color: '#b0c4de',
    fontSize: 14,
    textAlign: 'center',
  },
});

import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const team = [
  {
    name: 'SRI GANESH MENNI',
    role: 'Full Stack Developer',
    dept: 'CSE Department',
    email: '23A91A05B2@aec.edu.in',
    location: 'Aditya College, Andhra Pradesh',
    img: require('../../assets/images/profiles/23A91A05B2.jpg'),
  },
  {
    name: 'SANJAY EATHAKOTTU',
    role: 'Full Stack Developer',
    dept: 'CSE Department',
    email: '23P31A05F2@acet.ac.in',
    location: 'Aditya College, Andhra Pradesh',
    img: require('../../assets/images/profiles/23P31A05F2.jpg'),
  },
  {
    name: 'YASWANTH AMJURI',
    role: 'Full Stack Developer',
    dept: 'CSE Department',
    email: '23P31A05D6@acet.ac.in',
    location: 'Aditya College, Andhra Pradesh',
    img: require('../../assets/images/profiles/23P31A05D6.jpg'),
  },
  {
    name: 'CHANDRA VAMSI SANA',
    role: 'Full Stack Developer',
    dept: 'CSE Department',
    email: '23A91A05I6@aec.edu.in',
    location: 'Aditya College, Andhra Pradesh',
    img: require('../../assets/images/profiles/23A91A05I6.jpg'),
  },
  {
    name: 'NKOSINATHI MICHAEL SIBANDA',
    role: 'Full Stack Developer',
    dept: 'CSE Department',
    email: '23MH1A05H9@acoe.edu.in',
    location: 'Aditya College, Andhra Pradesh',
    img: require('../../assets/images/profiles/23MH1A05H9.png'),
  },
  {
    name: 'HARSHIT MUMMIDI',
    role: 'Full Stack Developer',
    dept: 'CSE Department',
    email: '23A91A0541@aec.edu.in',
    location: 'Aditya College, Andhra Pradesh',
    img: require('../../assets/images/profiles/23A91A0541.jpg'),
  },
];

export default function DevelopersScreen() {
  return (
    <ScrollView style={{ backgroundColor: '#0a0e1a' }} contentContainerStyle={styles.scrollContent}>
      {/* Hero Section */}
      <View style={styles.header}>
        <Text style={styles.title}><Text style={{ color: '#00caff' }}>About Us</Text></Text>
        <Text style={styles.subtitle}>Meet our passionate team of full stack developers building the future of skill exchange and career development.</Text>
      </View>

      {/* Team Section */}
      <View style={styles.teamGrid}>
        {team.map((member, idx) => (
          <View key={idx} style={styles.teamCard}>
            <View style={styles.avatarWrap}>
              {/* If images are missing, fallback to initials */}
              <Image source={member.img} style={styles.avatar} />
            </View>
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.memberRole}>{member.role}</Text>
            <Text style={styles.memberInfo}>{member.dept}</Text>
            <Text style={styles.memberInfo}>{member.email}</Text>
            <Text style={styles.memberInfo}>{member.location}</Text>
          </View>
        ))}
      </View>

      {/* Mission Section */}
      <View style={styles.missionCard}>
        <Text style={styles.missionTitle}>Our Mission</Text>
        <Text style={styles.missionText}>
          We're dedicated to creating a platform that bridges the gap between learning and career success. Through innovative technology and community-driven learning, we empower individuals to showcase their skills, connect with mentors, and accelerate their professional growth.
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
  teamGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  teamCard: {
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
  avatarWrap: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#00caff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    overflow: 'hidden',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'cover',
  },
  memberName: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
    textAlign: 'center',
  },
  memberRole: {
    color: '#b0c4de',
    fontSize: 14,
    marginBottom: 2,
    textAlign: 'center',
  },
  memberInfo: {
    color: '#b0c4de',
    fontSize: 13,
    textAlign: 'center',
  },
  missionCard: {
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
  missionTitle: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  missionText: {
    color: '#b0c4de',
    fontSize: 15,
    textAlign: 'center',
  },
});

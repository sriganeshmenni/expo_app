
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const developers = [
  {
    name: 'SRI GANESH MENNI',
    role: 'Full Stack Developer',
    department: 'CSE Department',
    email: '23A91A05B2@aec.edu.in',
    location: 'Aditya College, Andhra Pradesh',
    image: require('../../assets/images/profiles/23A91A05B2.jpg'),
  },
  {
    name: 'SANJAY EATHAKOTTU',
    role: 'Full Stack Developer',
    department: 'CSE Department',
    email: '23P31A05F2@acet.ac.in',
    location: 'Aditya College, Andhra Pradesh',
    image: require('../../assets/images/profiles/23P31A05F2.jpg'),
  },
  {
    name: 'YASWANTH AMJURI',
    role: 'Full Stack Developer',
    department: 'CSE Department',
    email: '23P31A05D6@acet.ac.in',
    location: 'Aditya College, Andhra Pradesh',
    image: require('../../assets/images/profiles/23P31A05D6.jpg'),
  },
  {
    name: 'CHANDRA VAMSI SANA',
    role: 'Full Stack Developer',
    department: 'CSE Department',
    email: '23A91A05I6@aec.edu.in',
    location: 'Aditya College, Andhra Pradesh',
    image: require('../../assets/images/profiles/23A91A05I6.jpg'),
  },
  {
    name: 'NKOSINATHI MICHAEL SIBANDA',
    role: 'Full Stack Developer',
    department: 'CSE Department',
    email: '23MH1A05H9@acoe.edu.in',
    location: 'Aditya College, Andhra Pradesh',
    image: require('../../assets/images/profiles/23MH1A05H9.png'),
  },
  {
    name: 'HARSHIT MUMMIDI',
    role: 'Full Stack Developer',
    department: 'CSE Department',
    email: '23A91A0541@aec.edu.in',
    location: 'Aditya College, Andhra Pradesh',
    image: require('../../assets/images/profiles/23A91A0541.jpg'),
  },
];

const DevelopersScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.subtitle}>
          Meet our passionate team of full stack developers building the future of skill exchange and career development.
        </Text>
      </View>

      <View style={styles.cardContainer}>
        {developers.map((dev, index) => (
          <View key={index} style={styles.card}>
            <Image source={dev.image} style={styles.profileImage} />
            <Text style={styles.devName}>{dev.name}</Text>
            <Text style={styles.devRole}>{dev.role}</Text>
            <Text style={styles.devInfo}>{dev.department}</Text>
            <Text style={styles.devInfo}>{dev.email}</Text>
            <Text style={styles.devInfo}>{dev.location}</Text>
          </View>
        ))}
      </View>

      <View style={styles.missionContainer}>
        <Text style={styles.missionTitle}>Our Mission</Text>
        <Text style={styles.missionText}>
          We're dedicated to creating a platform that bridges the gap between learning and career success. Through innovative technology and community-driven learning, we empower individuals to showcase their skills, connect with mentors, and accelerate their professional growth.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0e1a',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00caff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: '#1c1c2e',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%', // Changed from 45% to 100% for single column layout
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
  },
  devName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00caff',
    textAlign: 'center',
    marginBottom: 5,
  },
  devRole: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  devInfo: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 5,
  },
  missionContainer: {
    backgroundColor: '#1c1c2e',
    borderRadius: 10,
    padding: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  missionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00caff',
    marginBottom: 15,
  },
  missionText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default DevelopersScreen;

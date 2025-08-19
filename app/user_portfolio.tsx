import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const UserPortfolioScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.profileHeader}>
          <Image
            source={require('../../assets/images/profiles/23A91A05B2.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Sri Ganesh Menni</Text>
          <Text style={styles.profileInfo}>sriganeshmenni@gmail.com</Text>
          <Text style={styles.profileInfo}>New York, USA</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonTextPrimary}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOutline}>
              <Text style={styles.buttonTextOutline}>Upload Resume</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.connectionsContainer}>
          <View style={styles.connection}>
            <Text style={styles.connectionValue}>1.2K</Text>
            <Text style={styles.connectionLabel}>Followers</Text>
          </View>
          <View style={styles.connection}>
            <Text style={styles.connectionValue}>500</Text>
            <Text style={styles.connectionLabel}>Following</Text>
          </View>
        </View>
      </View>

      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.aboutText}>
          Full Stack Developer passionate about creating innovative web applications and learning new technologies. Currently pursuing Computer Science Engineering at Aditya College.
        </Text>
      </View>

      <View style={styles.skillsSection}>
        <Text style={styles.sectionTitle}>My Skills</Text>
        <Text style={styles.skillsText}>JavaScript, HTML, CSS, React, Node.js</Text>
        <Text style={styles.skillsText}>Git, GitHub, Agile Methodologies</Text>
      </View>

      <View style={styles.portfolioSection}>
        <Text style={styles.sectionTitle}>My Portfolio</Text>
        {/* Dummy data for portfolio items */}
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
  profileSection: {
    backgroundColor: '#1c1c2e',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  profileInfo: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  buttonPrimary: {
    backgroundColor: '#00caff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonTextPrimary: {
    color: '#0a0e1a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonOutline: {
    borderColor: '#00caff',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonTextOutline: {
    color: '#00caff',
    fontSize: 16,
  },
  connectionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  connection: {
    alignItems: 'center',
  },
  connectionValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  connectionLabel: {
    fontSize: 14,
    color: '#aaa',
  },
  aboutSection: {
    backgroundColor: '#1c1c2e',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00caff',
    marginBottom: 15,
  },
  aboutText: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
  },
  skillsSection: {
    backgroundColor: '#1c1c2e',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  skillsText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  portfolioSection: {
    backgroundColor: '#1c1c2e',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
});

export default UserPortfolioScreen;
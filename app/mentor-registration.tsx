import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Switch } from 'react-native';

const MentorRegistrationScreen = () => {
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [newLanguage, setNewLanguage] = useState('');
  const [newCertificate, setNewCertificate] = useState('');

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const addLanguage = () => {
    if (newLanguage.trim() !== '') {
      setLanguages([...languages, newLanguage.trim()]);
      setNewLanguage('');
    }
  };

  const addCertificate = () => {
    if (newCertificate.trim() !== '') {
      setCertificates([...certificates, newCertificate.trim()]);
      setNewCertificate('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Become a Mentor</Text>
        <Text style={styles.subtitle}>Share your expertise and help others grow their skills</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formHeader}>Basic Information</Text>
        <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" keyboardType="email-address" />
        <TextInput style={styles.textArea} placeholder="Bio" multiline placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Location (e.g., City, Country)" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Timezone" placeholderTextColor="#888" />

        <Text style={styles.formHeader}>Professional Information</Text>
        <TextInput style={styles.input} placeholder="Years of Experience" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Hourly Rate (USD)" placeholderTextColor="#888" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Availability" placeholderTextColor="#888" />

        <Text style={styles.formHeader}>Skills</Text>
        <View style={styles.addToListContainer}>
          <TextInput style={styles.addToListInput} placeholder="Add a skill" value={newSkill} onChangeText={setNewSkill} placeholderTextColor="#888" />
          <TouchableOpacity style={styles.addButton} onPress={addSkill}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          {skills.map((skill, index) => <Text key={index} style={styles.listItem}>{skill}</Text>)}
        </View>

        <Text style={styles.formHeader}>Languages</Text>
        <View style={styles.addToListContainer}>
          <TextInput style={styles.addToListInput} placeholder="Add a language" value={newLanguage} onChangeText={setNewLanguage} placeholderTextColor="#888" />
          <TouchableOpacity style={styles.addButton} onPress={addLanguage}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          {languages.map((lang, index) => <Text key={index} style={styles.listItem}>{lang}</Text>)}
        </View>

        <Text style={styles.formHeader}>Documents & Media</Text>
        <View style={styles.uploadContainer}>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Upload Profile Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Upload Resume</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.formHeader}>Certificates</Text>
        <View style={styles.addToListContainer}>
          <TextInput style={styles.addToListInput} placeholder="Certificate name" value={newCertificate} onChangeText={setNewCertificate} placeholderTextColor="#888" />
          <TouchableOpacity style={styles.addButton} onPress={addCertificate}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          {certificates.map((cert, index) => <Text key={index} style={styles.listItem}>{cert}</Text>)}
        </View>

        <Text style={styles.formHeader}>Links</Text>
        <TextInput style={styles.input} placeholder="Portfolio URL" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="LinkedIn URL" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="GitHub URL" placeholderTextColor="#888" />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonSecondary}>
            <Text style={styles.buttonTextSecondary}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonTextPrimary}>Create Profile</Text>
          </TouchableOpacity>
        </View>
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
  form: {
    backgroundColor: '#1c1c2e',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  formHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00caff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#2c2c3a',
    color: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    backgroundColor: '#2c2c3a',
    color: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
    height: 100,
    textAlignVertical: 'top',
  },
  addToListContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  addToListInput: {
    flex: 1,
    backgroundColor: '#2c2c3a',
    color: '#fff',
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#00caff',
    padding: 15,
    borderRadius: 5,
    marginLeft: 10,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#0a0e1a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  listItem: {
    backgroundColor: '#2c2c3a',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  uploadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  uploadButton: {
    backgroundColor: '#2c2c3a',
    padding: 15,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  buttonPrimary: {
    backgroundColor: '#00caff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonTextPrimary: {
    color: '#0a0e1a',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonSecondary: {
    backgroundColor: '#2c2c3a',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonTextSecondary: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MentorRegistrationScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Switch } from 'react-native';

const CreateScreen = () => {
  const [allowRecording, setAllowRecording] = useState(false);
  const [enableChat, setEnableChat] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create a New Meeting</Text>
        <Text style={styles.subtitle}>Set up your online meeting to start teaching and collaborating with students.</Text>
        <TouchableOpacity style={styles.buttonOutline}>
          <Text style={styles.buttonTextOutline}>View Available Meetings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.formHeader}>Meeting Details</Text>
        <TextInput style={styles.input} placeholder="e.g., Mathematics Tutoring Session" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="e.g., Mathematics, Computer Science" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="e.g., Beginner, Intermediate" placeholderTextColor="#888" />
        <TextInput style={styles.textArea} placeholder="Describe the topics you'll cover..." multiline placeholderTextColor="#888" />

        <Text style={styles.formHeader}>Schedule</Text>
        <TextInput style={styles.input} placeholder="Select Date" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Select Time" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Select duration" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Your name" placeholderTextColor="#888" />

        <Text style={styles.formHeader}>Additional Settings</Text>
        <TextInput style={styles.input} placeholder="Maximum Participants" keyboardType="numeric" placeholderTextColor="#888" />
        
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Allow meeting recording</Text>
          <Switch value={allowRecording} onValueChange={setAllowRecording} />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Enable chat during meeting</Text>
          <Switch value={enableChat} onValueChange={setEnableChat} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonSecondary}>
            <Text style={styles.buttonTextSecondary}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonTextPrimary}>Create</Text>
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
  buttonOutline: {
    borderColor: '#00caff',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonTextOutline: {
    color: '#00caff',
    fontSize: 16,
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
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  switchLabel: {
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

export default CreateScreen;

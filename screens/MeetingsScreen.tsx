import React, { useState } from 'react';
import { Alert, Linking, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

interface MeetingData {
  meetingTitle: string;
  meetingDate: string;
  meetingTime: string;
  description: string;
  subject?: string;
  level?: string;
  mentorName?: string;
  duration?: string;
}

function generateTeamsLink(meetingData: MeetingData) {
  const subject = encodeURIComponent(meetingData.meetingTitle || 'Oryx Meeting');
  let teamsUrl = `https://teams.microsoft.com/l/meeting/new?subject=${subject}`;
  if (meetingData.meetingDate && meetingData.meetingTime) {
    const startDateTime = new Date(`${meetingData.meetingDate}T${meetingData.meetingTime}`);
    const startTime = startDateTime.toISOString().slice(0, 16);
    teamsUrl += `&startTime=${startTime}`;
  }
  if (meetingData.description) {
    const content = encodeURIComponent(
      `Subject: ${meetingData.subject || 'General'}\n` +
      `Level: ${meetingData.level || 'All levels'}\n` +
      `Mentor: ${meetingData.mentorName || ''}\n` +
      `Duration: ${meetingData.duration || ''} minutes\n\n` +
      `Description: ${meetingData.description}`
    );
    teamsUrl += `&content=${content}`;
  }
  return teamsUrl;
}

const MeetingsScreen = () => {
  const [meeting, setMeeting] = useState<MeetingData>({
    meetingTitle: '',
    meetingDate: '',
    meetingTime: '',
    description: '',
    subject: '',
    level: '',
    mentorName: '',
    duration: '',
  });

  const handleCreateLink = () => {
    if (!meeting.meetingTitle || !meeting.meetingDate || !meeting.meetingTime) {
      Alert.alert('Missing Info', 'Please fill in the meeting title, date, and time.');
      return;
    }
    const url = generateTeamsLink(meeting);
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animatable.View animation="fadeInDown" duration={900} style={styles.navbar}>
        <Text style={styles.navbarBrand}>Oryx Meetings</Text>
      </Animatable.View>
      <View style={styles.container}>
        <Animatable.View animation="fadeInUp" delay={100} duration={900}>
          <Text style={styles.title}>Create a Meeting Link</Text>
          <TextInput style={styles.input} placeholder="Meeting Title" value={meeting.meetingTitle} onChangeText={t => setMeeting({ ...meeting, meetingTitle: t })} />
          <TextInput style={styles.input} placeholder="Date (YYYY-MM-DD)" value={meeting.meetingDate} onChangeText={t => setMeeting({ ...meeting, meetingDate: t })} />
          <TextInput style={styles.input} placeholder="Time (HH:MM)" value={meeting.meetingTime} onChangeText={t => setMeeting({ ...meeting, meetingTime: t })} />
          <TextInput style={styles.input} placeholder="Description" value={meeting.description} onChangeText={t => setMeeting({ ...meeting, description: t })} />
          <TextInput style={styles.input} placeholder="Subject (optional)" value={meeting.subject} onChangeText={t => setMeeting({ ...meeting, subject: t })} />
          <TextInput style={styles.input} placeholder="Level (optional)" value={meeting.level} onChangeText={t => setMeeting({ ...meeting, level: t })} />
          <TextInput style={styles.input} placeholder="Mentor Name (optional)" value={meeting.mentorName} onChangeText={t => setMeeting({ ...meeting, mentorName: t })} />
          <TextInput style={styles.input} placeholder="Duration (minutes, optional)" value={meeting.duration} onChangeText={t => setMeeting({ ...meeting, duration: t })} />
          <TouchableOpacity style={styles.button} onPress={handleCreateLink}>
            <Text style={styles.buttonText}>Generate Teams Link</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0a0e1a',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10162a',
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
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 1,
  },
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#181a1b',
    borderColor: '#00caff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    height: 44,
  },
  button: {
    backgroundColor: '#00caff',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#10162a',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MeetingsScreen;

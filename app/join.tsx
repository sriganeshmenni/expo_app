import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';

const upcomingMeetings = [
  { id: '1', title: 'Mathematics Tutoring', mentor: 'John Doe', date: '2025-09-15', time: '10:00 AM' },
  { id: '2', title: 'Programming Workshop', mentor: 'Jane Smith', date: '2025-09-16', time: '2:00 PM' },
];

const completedMeetings = [
  { id: '1', title: 'History Lecture', mentor: 'Peter Jones', date: '2025-08-10', time: '3:00 PM' },
];

const JoinScreen = () => {
  const renderMeeting = ({ item }) => (
    <View style={styles.meetingCard}>
      <Text style={styles.meetingTitle}>{item.title}</Text>
      <Text style={styles.meetingInfo}>Mentor: {item.mentor}</Text>
      <Text style={styles.meetingInfo}>Date: {item.date}</Text>
      <Text style={styles.meetingInfo}>Time: {item.time}</Text>
      <TouchableOpacity style={styles.joinButton}>
        <Text style={styles.joinButtonText}>Join</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Available Meetings & Classes</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search for meetings or classes..." placeholderTextColor="#888" />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Upcoming Sessions</Text>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create New Meeting</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={upcomingMeetings}
        renderItem={renderMeeting}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No upcoming meetings.</Text>}
      />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Completed Sessions</Text>
      </View>

      <FlatList
        data={completedMeetings}
        renderItem={renderMeeting}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No completed meetings.</Text>}
      />
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
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00caff',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#2c2c3a',
    color: '#fff',
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#00caff',
    padding: 15,
    borderRadius: 5,
    marginLeft: 10,
    justifyContent: 'center',
  },
  searchButtonText: {
    color: '#0a0e1a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00caff',
  },
  createButton: {
    backgroundColor: '#00caff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  createButtonText: {
    color: '#0a0e1a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  meetingCard: {
    backgroundColor: '#1c1c2e',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  meetingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  meetingInfo: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 5,
  },
  joinButton: {
    backgroundColor: '#00caff',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#0a0e1a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyText: {
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default JoinScreen;

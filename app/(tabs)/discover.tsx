import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const mockCourses = [
  {
    title: 'React Development',
    desc: 'Learn the basics of React.js and build dynamic web applications',
    level: 'Beginner',
    category: 'programming',
    badgeColor: '#198754',
  },
  {
    title: 'UI/UX Design',
    desc: 'Master the fundamentals of user interface and experience design',
    level: 'Intermediate',
    category: 'design',
    badgeColor: '#ffc107',
  },
  {
    title: 'Business Analytics',
    desc: 'Analyze data and make business decisions with confidence',
    level: 'Advanced',
    category: 'business',
    badgeColor: '#dc3545',
  },
  {
    title: 'Digital Marketing',
    desc: 'Grow your brand and reach new audiences online',
    level: 'Beginner',
    category: 'marketing',
    badgeColor: '#198754',
  },
];

const categories = [
  { label: 'Programming', value: 'programming' },
  { label: 'Design', value: 'design' },
  { label: 'Business', value: 'business' },
  { label: 'Marketing', value: 'marketing' },
];
const levels = [
  { label: 'Beginner', value: 'Beginner', color: '#198754' },
  { label: 'Intermediate', value: 'Intermediate', color: '#ffc107' },
  { label: 'Advanced', value: 'Advanced', color: '#dc3545' },
];

export default function DiscoverScreen() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');

  const filteredCourses = mockCourses.filter(c =>
    (search === '' || c.title.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase())) &&
    (category === '' || c.category === category) &&
    (level === '' || c.level === level)
  );

  return (
    <ScrollView style={{ backgroundColor: '#0a0e1a' }} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.title}><Text style={{ color: '#00caff' }}>Discover Courses</Text></Text>
        <Text style={styles.subtitle}>Explore a curated selection of courses and skills to boost your career. Learn from mentors, earn badges, and apply your skills.</Text>
      </View>
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search courses, skills..."
          placeholderTextColor="#b0c4de"
          value={search}
          onChangeText={setSearch}
        />
        <View style={styles.pickerCol}>
          <Text style={styles.pickerLabel}>Category</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map(cat => (
              <TouchableOpacity
                key={cat.value}
                style={[styles.pickerBtn, category === cat.value && styles.pickerBtnActive]}
                onPress={() => setCategory(cat.value)}
              >
                <Text style={styles.pickerBtnText}>{cat.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.pickerCol}>
          <Text style={styles.pickerLabel}>Level</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {levels.map(lvl => (
              <TouchableOpacity
                key={lvl.value}
                style={[styles.pickerBtn, level === lvl.value && { backgroundColor: lvl.color }]}
                onPress={() => setLevel(lvl.value)}
              >
                <Text style={styles.pickerBtnText}>{lvl.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Text style={styles.searchBtnText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.coursesGrid}>
        {filteredCourses.map((course, idx) => (
          <View key={idx} style={styles.courseCard}>
            <View style={styles.courseHeader}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={[styles.courseBadge, { backgroundColor: course.badgeColor }]}>{course.level}</Text>
            </View>
            <Text style={styles.courseDesc}>{course.desc}</Text>
          </View>
        ))}
        {filteredCourses.length === 0 && (
          <Text style={styles.noResults}>No courses found.</Text>
        )}
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
  searchRow: {
    marginHorizontal: 16,
    marginBottom: 18,
    backgroundColor: '#10162a',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#00caff',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  searchInput: {
    backgroundColor: '#181a1b',
    borderColor: '#00caff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  pickerCol: {
    marginBottom: 10,
  },
  pickerLabel: {
    color: '#b0c4de',
    fontSize: 14,
    marginBottom: 4,
  },
  pickerBtn: {
    backgroundColor: '#181a1b',
    borderColor: '#00caff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  pickerBtnActive: {
    backgroundColor: '#00caff',
  },
  pickerBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  searchBtn: {
    backgroundColor: '#00caff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 8,
  },
  searchBtnText: {
    color: '#10162a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  coursesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  courseCard: {
    backgroundColor: '#10162a',
    borderRadius: 16,
    padding: 18,
    margin: 8,
    width: 170,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#1e2746',
    shadowColor: '#00caff',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  courseTitle: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
  courseBadge: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: '#198754',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginLeft: 8,
  },
  courseDesc: {
    color: '#b0c4de',
    fontSize: 14,
    marginBottom: 2,
  },
  noResults: {
    color: '#b0c4de',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },
});

// TypeScript interface for job objects from API
interface Job {
  job_id: string;
  job_title: string;
  employer_name: string;
  job_city?: string;
  job_country?: string;
  job_employment_type?: string;
}
import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

const RAPIDAPI_KEY = '85fe8ca662msh34a47427753703cp1dbe4ejsn6a399be10b67';
const RAPIDAPI_HOST = 'jsearch.p.rapidapi.com';

const JobsScreen = () => {
  const [search, setSearch] = useState('');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchJobs = async (query = 'software developer jobs') => {
    setLoading(true);
    setError('');
    try {
      const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(query)}&page=1&num_pages=2&country=in&date_posted=all`;
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': RAPIDAPI_KEY,
          'X-RapidAPI-Host': RAPIDAPI_HOST,
        },
      });
      const data = await res.json();
      setJobs(data.data || []);
    } catch (err) {
      setError('Failed to fetch jobs.');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchJobs();
  }, []);

  const handleSearch = () => {
    if (search.trim()) {
      fetchJobs(search.trim() + ' jobs');
    } else {
      fetchJobs();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animatable.View animation="fadeInDown" duration={900} style={styles.navbar}>
        <Text style={styles.navbarBrand}>Oryx Jobs</Text>
      </Animatable.View>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Animatable.View animation="fadeInUp" delay={100} duration={900}>
          <Text style={styles.title}>Find Jobs & Internships</Text>
          <Text style={styles.subtitle}>Browse and apply to jobs and internships from top sites, all in one place.</Text>
        </Animatable.View>
        <Animatable.View animation="fadeIn" delay={300} duration={900} style={styles.formWrapper}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Search jobs, companies, locations..."
              placeholderTextColor="#b0c4de"
              value={search}
              onChangeText={setSearch}
              onSubmitEditing={handleSearch}
              returnKeyType="search"
            />
            <TouchableOpacity onPress={handleSearch} style={{ marginLeft: 8, backgroundColor: '#00caff', padding: 10, borderRadius: 8 }}>
              <Text style={{ color: '#10162a', fontWeight: 'bold' }}>Search</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
        {loading && <ActivityIndicator size="large" color="#00caff" style={{ marginTop: 20 }} />}
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {jobs.map((job, idx) => (
          <Animatable.View
            key={job.job_id || idx}
            animation="fadeInUp"
            delay={400 + idx * 100}
            duration={800}
            style={styles.jobCard}
          >
            <Text style={styles.jobTitle}>{job.job_title}</Text>
            <Text style={styles.jobCompany}>{job.employer_name}</Text>
            <Text style={styles.jobMeta}>{job.job_city || job.job_country} • {job.job_employment_type}</Text>
          </Animatable.View>
        ))}
        {!loading && jobs.length === 0 && !error && (
          <Text style={styles.noResults}>No jobs found.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  error: {
    color: '#ff4d4f',
    fontSize: 15,
    marginBottom: 8,
    textAlign: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#0a0e1a', // Oryx dark blue
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10162a', // Oryx navy
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
    color: '#00caff', // Oryx cyan
    fontWeight: 'bold',
    fontSize: 22,
    letterSpacing: 1,
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#b0c4de',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  formWrapper: {
    backgroundColor: '#10162a',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    marginBottom: 10,
    shadowColor: '#00caff',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
  },
  input: {
    height: 48,
    backgroundColor: '#181a1b',
    borderColor: '#00caff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    color: '#fff',
  },
  jobCard: {
    backgroundColor: '#131b32',
    borderColor: '#00caff',
    borderWidth: 1,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#00caff',
    shadowOpacity: 0.13,
    shadowRadius: 10,
    elevation: 3,
  },
  jobTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jobCompany: {
    color: '#00caff',
    fontSize: 16,
    marginBottom: 2,
  },
  jobMeta: {
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

export default JobsScreen;

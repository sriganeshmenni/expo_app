import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

const leetcodeUsername = 'example_user';
const githubUsername = 'example_user';

const PortfolioScreen = () => {
  const [leetcode, setLeetcode] = useState<any>(null);
  const [github, setGithub] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      setError('');
      try {
        // LeetCode
        const leetRes = await fetch(`https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`);
        const leetData = await leetRes.json();
        setLeetcode(leetData);
        // GitHub
        const gitRes = await fetch(`https://api.github.com/users/${githubUsername}`);
        const gitData = await gitRes.json();
        setGithub(gitData);
      } catch (e) {
        setError('Failed to fetch portfolio data.');
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animatable.View animation="fadeInDown" duration={900} style={styles.navbar}>
        <Text style={styles.navbarBrand}>Oryx Portfolio</Text>
      </Animatable.View>
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View animation="fadeInUp" delay={100} duration={900}>
          <Text style={styles.title}>{github?.name || githubUsername}</Text>
          <Text style={styles.subtitle}>{github?.bio || 'Full Stack Developer'}</Text>
        </Animatable.View>
        {loading && <ActivityIndicator size="large" color="#00caff" style={{ marginTop: 20 }} />}
        {error ? <Text style={styles.error}>{error}</Text> : null}
        {!loading && !error && (
          <>
            <Animatable.View animation="fadeIn" delay={300} duration={900} style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>LeetCode</Text>
              <Text style={styles.achievementText}>Problems Solved: {leetcode?.totalSolved ?? 'N/A'}</Text>
              <Text style={styles.achievementText}>Ranking: {leetcode?.ranking ?? 'N/A'}</Text>
              <Text style={styles.achievementText}>Contest Rating: {leetcode?.contestRating ?? 'N/A'}</Text>
            </Animatable.View>
            <Animatable.View animation="fadeIn" delay={400} duration={900} style={styles.sectionCard}>
              <Text style={styles.sectionTitle}>GitHub</Text>
              <Text style={styles.achievementText}>Repos: {github?.public_repos ?? 'N/A'}</Text>
              <Text style={styles.achievementText}>Followers: {github?.followers ?? 'N/A'}</Text>
              <Text style={styles.achievementText}>Username: {githubUsername}</Text>
            </Animatable.View>
          </>
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
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    color: '#b0c4de',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionCard: {
    backgroundColor: '#10162a',
    borderRadius: 16,
    padding: 16,
    marginTop: 18,
    marginBottom: 10,
    shadowColor: '#00caff',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    color: '#00caff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  skillBadge: {
    backgroundColor: '#131b32',
    borderColor: '#00caff',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    color: '#00caff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  projectCard: {
    backgroundColor: '#181a1b',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
  },
  projectName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  projectDesc: {
    color: '#b0c4de',
    fontSize: 14,
  },
  achievementText: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 4,
  },
});

export default PortfolioScreen;

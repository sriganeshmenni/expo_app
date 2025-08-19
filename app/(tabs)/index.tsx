import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ScrollView style={{ backgroundColor: '#0a0e1a' }} contentContainerStyle={styles.scrollContent}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image source={require('../../assets/images/oryx-logo.png')} style={styles.heroLogo} />
        <Text style={styles.heroTitle}><Text style={{ color: '#00caff' }}>ORYX</Text></Text>
        <Text style={styles.heroSubtitle}>Join us on a journey to unlock your full potential.</Text>
  <TouchableOpacity style={styles.ctaButton} onPress={() => router.push('/auth' as any)}>
          <Text style={styles.ctaButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Class Buttons */}
      <View style={styles.classButtonsRow}>
        <View style={styles.classButtonCol}>
          <Text style={styles.classButtonLabel}>Join an existing class session</Text>
          <TouchableOpacity style={styles.classButton} onPress={() => router.push('/join' as any)}>
            <Text style={styles.classButtonText}>Join</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.classButtonCol}>
          <Text style={styles.classButtonLabel}>Create a new class session</Text>
          <TouchableOpacity style={[styles.classButton, { backgroundColor: '#198754' }]} onPress={() => router.push('/create' as any)}>
            <Text style={styles.classButtonText}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Feature Cards */}
      <View style={styles.featuresGrid}>
        <FeatureCard
          icon="person-badge"
          title="User Portfolio"
          items={["Project showcases", "Resume upload", "Auto-generated 'Skill Cards'"]}
          buttonText="My Portfolio"
          onPress={() => router.push('/user_portfolio' as any)}
        />
        <FeatureCard
          icon="briefcase"
          title="Job Platform Integration"
          items={["LinkedIn, Naukri, Internshala APIs", "Skill-tag-based job redirection", "Smart 'Apply Now' links"]}
          buttonText="Explore Job Listings"
          onPress={() => router.push('/jobs' as any)}
        />
        <FeatureCard
          icon="lightbulb"
          title="AI career assistant"
          items={["Roadmaps & tutorials", "Resume tips, interview prep", "Career advice & guidance"]}
          buttonText="Chat With Micheal"
          onPress={() => router.push('/MichealAI' as any)}
        />
        <FeatureCard
          icon="bar-chart-steps"
          title="Learning Skills"
          items={["Discover Courses", "Learn from experts", "Explore resources"]}
          buttonText="Go to Roadmaps"
          onPress={() => router.push('/roadmaps' as any)}
        />
        <FeatureCard
          icon="chat-square"
          title="Community"
          items={["Peer to peer communication", "View & interact with mentors", "Improve your profile & portfolio"]}
          buttonText="View Community"
          onPress={() => router.push('/community' as any)}
        />
        <FeatureCard
          icon="people"
          title="One-to-Many Mentorship"
          items={["Mentors can host topic-based classes", "Multiple learners can join", "Follow-up material & Q&A"]}
          buttonText="View Mentors"
          onPress={() => router.push('/mentors' as any)}
        />
      </View>

      {/* Call to Action Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Ready to Transform Your Career?</Text>
        <Text style={styles.ctaSubtitle}>Join thousands of learners and mentors building the future together.</Text>
        <View style={styles.ctaButtonsRow}>
          <TouchableOpacity style={styles.ctaButton} onPress={() => router.push('/discover' as any)}>
            <Text style={styles.ctaButtonText}>Explore Courses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.ctaButton, styles.ctaButtonOutline]} onPress={() => router.push('/mentors' as any)}>
            <Text style={[styles.ctaButtonText, { color: '#fff' }]}>Meet Your Mentor</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerRow}>
          <Image source={require('../../assets/images/oryx-logo.png')} style={styles.footerLogo} />
          <Text style={styles.footerBrand}>Oryx</Text>
        </View>
        <Text style={styles.footerText}>© 2025 Oryx. Building futures together.</Text>
      </View>
    </ScrollView>
  );
}

type FeatureCardProps = {
  icon: string;
  title: string;
  items: string[];
  buttonText: string;
  onPress: () => void;
};

function FeatureCard({ icon, title, items, buttonText, onPress }: FeatureCardProps) {
  return (
    <View style={featureStyles.card}>
      <Text style={featureStyles.icon}>{icon}</Text>
      <Text style={featureStyles.title}>{title}</Text>
      {items.map((item, idx) => (
        <Text key={idx} style={featureStyles.item}>• {item}</Text>
      ))}
      <TouchableOpacity style={featureStyles.button} onPress={onPress}>
        <Text style={featureStyles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },
  heroSection: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    backgroundColor: '#0a0e1a',
  },
  heroLogo: {
    width: 90,
    height: 75,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#b0c4de',
    marginBottom: 20,
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: '#00caff',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginBottom: 10,
    alignItems: 'center',
  },
  ctaButtonText: {
    color: '#10162a',
    fontWeight: 'bold',
    fontSize: 18,
  },
  classButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 24,
    marginTop: 10,
  },
  classButtonCol: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  classButtonLabel: {
    color: '#00caff',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  classButton: {
    backgroundColor: '#00caff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  classButtonText: {
    color: '#10162a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  ctaSection: {
    alignItems: 'center',
    marginVertical: 30,
  },
  ctaTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  ctaSubtitle: {
    color: '#b0c4de',
    fontSize: 18,
    marginBottom: 18,
    textAlign: 'center',
  },
  ctaButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  ctaButtonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
  },
  footer: {
    backgroundColor: '#10162a',
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 30,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  footerLogo: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain',
  },
  footerBrand: {
    color: '#00caff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footerText: {
    color: '#b0c4de',
    fontSize: 14,
    textAlign: 'center',
  },
});

const featureStyles = StyleSheet.create({
  card: {
    backgroundColor: '#10162a',
    borderRadius: 16,
    padding: 18,
    margin: 8,
    width: 170,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e2746',
    shadowColor: '#00caff',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  icon: {
    fontSize: 32,
    color: '#00caff',
    marginBottom: 8,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  item: {
    color: '#b0c4de',
    fontSize: 14,
    marginBottom: 2,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00caff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginTop: 10,
  },
  buttonText: {
    color: '#10162a',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
// ...existing code up to the end of featureStyles...

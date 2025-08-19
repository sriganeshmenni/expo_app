// demoBtn style moved to the correct place below
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const AuthScreen = () => {
  const DEMO_USER = { name: 'Sri Ganesh Menni', email: 'sriganeshmenni', password: 'password123' };
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem('oryx_logged_in_user');
      if (user) setLoggedInUser(user);
    })();
  }, []);

  const handleAuth = async () => {
    setError('');
    setSuccess('');
    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }
    let usersRaw = await AsyncStorage.getItem('oryx_users');
    let users = usersRaw ? JSON.parse(usersRaw) : [];
    if (isLogin) {
      const found = users.find((u: any) => u.email === email && u.password === password);
      if (found) {
        await AsyncStorage.setItem('oryx_logged_in_user', email);
        setSuccess('Login successful!');
        setLoggedInUser(email);
      } else {
        setError('Invalid credentials.');
      }
    } else {
      if (users.find((u: any) => u.email === email)) {
        setError('User already exists.');
        return;
      }
      users.push({ name: email, email, password });
      await AsyncStorage.setItem('oryx_users', JSON.stringify(users));
      await AsyncStorage.setItem('oryx_logged_in_user', email);
      setSuccess('Signup successful!');
      setLoggedInUser(email);
    }
  };

  const demoLogin = async () => {
    let usersRaw = await AsyncStorage.getItem('oryx_users');
    let users = usersRaw ? JSON.parse(usersRaw) : [];
    if (!users.find((u: any) => u.email === DEMO_USER.email)) {
      users.push(DEMO_USER);
      await AsyncStorage.setItem('oryx_users', JSON.stringify(users));
    }
    await AsyncStorage.setItem('oryx_logged_in_user', DEMO_USER.email);
    setLoggedInUser(DEMO_USER.email);
    setSuccess('Demo login successful!');
  };

  const logout = async () => {
    await AsyncStorage.removeItem('oryx_logged_in_user');
    setLoggedInUser(null);
    setSuccess('Logged out.');
  };

  if (loggedInUser) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Animatable.View animation="fadeInDown" duration={900} style={styles.navbar}>
          <Text style={styles.navbarBrand}>Oryx Auth</Text>
        </Animatable.View>
        <ScrollView contentContainerStyle={styles.container}>
          <Animatable.View animation="fadeInUp" delay={100} duration={900}>
            <Text style={styles.title}>You are logged in as: {loggedInUser}</Text>
            <TouchableOpacity style={styles.button} onPress={logout}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </Animatable.View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animatable.View animation="fadeInDown" duration={900} style={styles.navbar}>
        <Text style={styles.navbarBrand}>Oryx Auth</Text>
      </Animatable.View>
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View animation="fadeInUp" delay={100} duration={900}>
          <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
          {error ? <Text style={styles.error}>{error}</Text> : null}
          {success ? <Text style={styles.success}>{success}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleAuth}>
            <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.switchText}>
              {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.demoBtn} onPress={demoLogin}>
            <Text style={styles.demoBtnText}>Demo Login</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};
// ...existing code...

const styles = StyleSheet.create({
  error: {
    color: '#ff4d4f',
    fontSize: 15,
    marginBottom: 8,
    textAlign: 'center',
  },
  success: {
    color: '#00caff',
    fontSize: 15,
    marginBottom: 8,
    textAlign: 'center',
  },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    demoBtnText: {
      color: '#00caff',
      fontWeight: 'bold',
      fontSize: 16,
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
    padding: 20,
    marginTop: 20,
    shadowColor: '#00caff',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
  },
  label: {
    color: '#b0c4de',
    fontSize: 15,
    marginBottom: 4,
    marginTop: 10,
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
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00caff',
    color: '#10162a',
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    overflow: 'hidden',
    textAlign: 'center',
  },
  switchText: {
    color: '#00caff',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  demoBtn: {
    backgroundColor: '#181a1b',
    borderColor: '#00caff',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 16,
    alignItems: 'center',
  },
});

export default AuthScreen;

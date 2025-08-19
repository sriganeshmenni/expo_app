import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#00caff',
        tabBarInactiveTintColor: '#b0c4de',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#10162a',
          borderTopColor: '#1e2746',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';
          if (route.name === 'index') iconName = 'home';
          else if (route.name === 'discover') iconName = 'search';
          else if (route.name === 'roadmaps') iconName = 'map';
          else if (route.name === 'community') iconName = 'people';
          else if (route.name === 'developers') iconName = 'code-slash';
          else if (route.name === 'about') iconName = 'information-circle';
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="discover" options={{ title: 'Discover' }} />
      <Tabs.Screen name="roadmaps" options={{ title: 'Roadmaps' }} />
      <Tabs.Screen name="community" options={{ title: 'Community' }} />
      <Tabs.Screen name="developers" options={{ title: 'Developers' }} />
      <Tabs.Screen name="about" options={{ title: 'About' }} />
    </Tabs>
  );
}

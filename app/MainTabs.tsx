import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AboutScreen from '../screens/AboutScreen';
import CommunityScreen from '../screens/CommunityScreen';
import JobsScreen from '../screens/JobsScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import RoadmapsScreen from '../screens/RoadmapsScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    initialRouteName="About"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#00caff',
      tabBarInactiveTintColor: '#b0c4de',
      tabBarStyle: { backgroundColor: '#10162a', borderTopColor: '#1e2746' },
      tabBarIcon: ({ color, size }) => {
        let iconName: keyof typeof Ionicons.glyphMap = 'home';
        if (route.name === 'About') iconName = 'information-circle';
        else if (route.name === 'Community') iconName = 'people';
        else if (route.name === 'Jobs') iconName = 'briefcase';
        else if (route.name === 'Roadmaps') iconName = 'map';
        else if (route.name === 'Portfolio') iconName = 'person-circle';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="About" component={AboutScreen} />
    <Tab.Screen name="Community" component={CommunityScreen} />
    <Tab.Screen name="Jobs" component={JobsScreen} />
    <Tab.Screen name="Roadmaps" component={RoadmapsScreen} />
    <Tab.Screen name="Portfolio" component={PortfolioScreen} />
  </Tab.Navigator>
);

export default MainTabs;

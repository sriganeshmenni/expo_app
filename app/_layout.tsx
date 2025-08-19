import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ title: 'Auth' }} />
        <Stack.Screen name="jobs" options={{ title: 'Jobs' }} />
        <Stack.Screen name="portfolio" options={{ title: 'Portfolio' }} />
        <Stack.Screen name="user_portfolio" options={{ title: 'User Portfolio' }} />
        <Stack.Screen name="mentors" options={{ title: 'Mentors' }} />
        <Stack.Screen name="mentor-registration" options={{ title: 'Mentor Registration' }} />
        <Stack.Screen name="create" options={{ title: 'Create' }} />
        <Stack.Screen name="join" options={{ title: 'Join' }} />
        <Stack.Screen name="developers" options={{ title: 'Developers' }} />
        <Stack.Screen name="MichealAI" options={{ title: 'Michael AI' }} />
        <Stack.Screen name="404" options={{ title: '404' }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

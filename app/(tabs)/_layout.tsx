import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function TabsLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
        }}
      />
      <StatusBar style="dark" translucent />

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.replace('/CoachDashboard')}>
          <Ionicons name="home" size={20} color="#b4b4a0" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.replace('/Myjobs')}>
          <Ionicons name="briefcase" size={20} color="#b4b4a0" />
          <Text style={styles.navText}>My Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.replace('/Message')}>
          <Ionicons name="mail" size={20} color="#b4b4a0" />
          <Text style={styles.navText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.replace('/Profile')}>
          <Ionicons name="person" size={20} color="#b4b4a0" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#121212',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#b4b4a0',
  },
});

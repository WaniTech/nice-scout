import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AboutUs() {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.replace('/CoachDashboard'); // Navigate to Dashboard Page
  };

  const navigateToAbout = () => {
    router.replace('/explore'); // Stay on About Us Page
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.header}>About Us</Text>
        <Text style={styles.content}>
          Based in Copenhagen, we are an innovative IT company dedicated to creating top-notch apps for the sports world. Our mission is to connect athletes, coaches, and sports organizations through cutting-edge technology. With a passion for both technology and sports, we strive to deliver solutions that enhance the experience of sports enthusiasts worldwide.
        </Text>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={navigateToDashboard}>
          <Ionicons name="home" size={24} color="#b4b4a0" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={navigateToAbout}>
          <Ionicons name="information-circle" size={24} color="#b4b4a0" />
          <Text style={styles.navText}>About</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 80, // Adjusted for bottom nav
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
  },
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
    paddingVertical: 15,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#b4b4a0',
  },
});

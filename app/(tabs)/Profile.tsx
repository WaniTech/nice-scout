import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsPage() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>

        <ScrollView style={styles.settingsContainer}>
          <View style={styles.settingItem}>
            <Text style={styles.settingTitle}>Qualifications</Text>
            <Text style={styles.settingDescription}>Highlight your skills and experience.</Text>
            <TouchableOpacity style={styles.arrowButton}>
              <Text style={styles.arrowText}>›</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.settingItem}>
            <Text style={styles.settingTitle}>Job Preferences</Text>
            <Text style={styles.settingDescription}>Save specifics like desired salary and working hours.</Text>
            <TouchableOpacity style={styles.arrowButton}>
              <Text style={styles.arrowText}>›</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.settingItem}>
            <Text style={styles.settingTitle}>Hide Jobs with These Criteria</Text>
            <Text style={styles.settingDescription}>Manage qualifications or preferences used to hide jobs from your search.</Text>
            <TouchableOpacity style={styles.arrowButton}>
              <Text style={styles.arrowText}>›</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.settingItem}>
            <Text style={styles.settingTitle}>Ready to Work</Text>
            <Text style={styles.settingDescription}>Inform employers that you can start working as soon as possible.</Text>
            <TouchableOpacity style={styles.arrowButton}>
              <Text style={styles.arrowText}>›</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        
        <TouchableOpacity style={styles.signOutButton} onPress={() => router.replace('/')}> 
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingBottom: 100, // Adjusted to fit the sign-out button above the bottom nav
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  settingsContainer: {
    marginTop: 10,
  },
  settingItem: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    position: 'relative',
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  settingDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  arrowButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  arrowText: {
    fontSize: 24,
    color: '#555',
  },
  signOutButton: {
    backgroundColor: '#FF5252',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20, // Positioned above the bottom nav
    alignSelf: 'center',
  },
  signOutText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

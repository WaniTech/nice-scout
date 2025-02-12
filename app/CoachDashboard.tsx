import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CoachDashboard() {
  const [jobListings, setJobListings] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/jobs');
        setJobListings(response.data);
      } catch (error) {
        console.error('Error fetching job listings:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleSignOut = () => {
    router.replace('/'); // Redirects to Welcome Page
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Job Listings</Text>
        <FlatList
          data={jobListings}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.jobCard}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.jobLocation}>{item.location}</Text>
            </View>
          )}
        />
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navButton} onPress={() => router.replace('/CoachDashboard')}>
            <Ionicons name="home" size={24} color="#b4b4a0" />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => router.replace('/explore')}>
            <Ionicons name="information-circle" size={24} color="#b4b4a0" />
            <Text style={styles.navText}>About Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingBottom: 80, // Adjusted for bottom nav
  },
  signOutButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#FF5252',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    zIndex: 1,
  },
  signOutText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  jobCard: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  jobLocation: {
    fontSize: 16,
    color: '#555',
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

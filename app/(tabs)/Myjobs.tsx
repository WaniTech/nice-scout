import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const jobListings = [
  { id: 1, club: 'Manchester United', role: 'Head Coach' },
  { id: 2, club: 'Real Madrid', role: 'Assistant Coach' },
  { id: 3, club: 'Barcelona FC', role: 'Youth Development Coach' },
  { id: 4, club: 'Liverpool FC', role: 'Goalkeeping Coach' },
];

export default function MyJobsPage() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.header}>My Jobs</Text>
        <ScrollView style={styles.jobsContainer}>
          {jobListings.map(job => (
            <View key={job.id} style={styles.jobItem}>
              <Text style={styles.jobTitle}>{job.club}</Text>
              <Text style={styles.jobDescription}>{job.role}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  jobsContainer: {
    marginTop: 10,
  },
  jobItem: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    position: 'relative',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobDescription: {
    fontSize: 14,
    color: '#555',
  },
});

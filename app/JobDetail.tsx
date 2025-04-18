import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const jobListings = [
  {
    id: 1,
    club: 'Manchester United',
    role: 'Head Coach',
    description:
      'Responsible for overall team performance, strategy, and training. Must have top-level coaching license and proven success managing elite teams.',
  },
  {
    id: 2,
    club: 'Real Madrid',
    role: 'Assistant Coach',
    description:
      'Supports the head coach in planning practices and match strategy. Focuses on player development and day-to-day team operations.',
  },
  {
    id: 3,
    club: 'Barcelona FC',
    role: 'Youth Development Coach',
    description:
      'Trains and mentors academy players (U18). Focus on technical skills, tactical understanding, and promoting talent to senior team.',
  },
  {
    id: 4,
    club: 'Liverpool FC',
    role: 'Goalkeeping Coach',
    description:
      'Specialist in training and improving the performance of goalkeepers. Works on reflexes, positioning, and decision-making under pressure.',
  },
];

export default function JobDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const job = jobListings.find((j) => j.id.toString() === id);

  if (!job) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Job not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: job.role }} />
      <View style={styles.container}>
        <Text style={styles.club}>{job.club}</Text>
        <Text style={styles.role}>{job.role}</Text>
        <Text style={styles.description}>{job.description}</Text>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  club: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  role: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
  },
  error: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    color: 'red',
  },
});

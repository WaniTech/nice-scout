import { Stack, useRouter } from 'expo-router';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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

export default function MyJobsPage() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.header}>My Jobs</Text>
        <ScrollView style={styles.jobsContainer}>
          {jobListings.map((job) => (
            <TouchableOpacity
              key={job.id}
              onPress={() => router.push(`/JobDetail/${job.id}`)}
              style={styles.jobItem}
            >
              <Text style={styles.jobTitle}>{job.club}</Text>
              <Text style={styles.jobRole}>{job.role}</Text>
              <Text style={styles.jobDescription} numberOfLines={2}>
                {job.description}
              </Text>
            </TouchableOpacity>
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
    fontSize: 30,
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
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobRole: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  jobDescription: {
    fontSize: 14,
    color: '#555',
  },
});

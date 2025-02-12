import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const jobListings = [
  { id: 1, club: 'Manchester United', role: 'Head Coach' },
  { id: 2, club: 'Real Madrid', role: 'Assistant Coach' },
  { id: 3, club: 'Barcelona FC', role: 'Youth Development Coach' },
  { id: 4, club: 'Liverpool FC', role: 'Goalkeeping Coach' },
  { id: 5, club: 'Juventus', role: 'Fitness Coach' },
  { id: 6, club: 'Bayern Munich', role: 'Tactical Analyst' },
  { id: 7, club: 'Chelsea FC', role: 'Academy Coach' },
  { id: 8, club: 'Paris Saint-Germain', role: 'Defensive Coach' },
  { id: 9, club: 'Arsenal FC', role: 'Striking Coach' },
  { id: 10, club: 'AC Milan', role: 'Team Coordinator' },
  { id: 11, club: 'Borussia Dortmund', role: 'Midfield Specialist Coach' },
  { id: 12, club: 'Atletico Madrid', role: 'Set-Piece Coach' },
  { id: 13, club: 'Inter Milan', role: 'Physical Therapist' },
  { id: 14, club: 'Ajax FC', role: 'Scouting Coordinator' },
  { id: 15, club: 'Tottenham Hotspur', role: 'Mental Coach' },
  { id: 16, club: 'Napoli', role: 'Match Analyst' },
  { id: 17, club: 'RB Leipzig', role: 'Player Development Coach' },
  { id: 18, club: 'Sevilla FC', role: 'Assistant Fitness Coach' },
  { id: 19, club: 'FC Porto', role: 'Youth Scout' },
  { id: 20, club: 'Sporting CP', role: 'Team Psychologist' },
];

export default function SettingsPage() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <ScrollView style={styles.settingsContainer}>
        <Text style={styles.header}>Job Listings</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.searchInput} placeholder="Search jobs..." />
            <TextInput style={styles.locationInput} placeholder="Enter location..." />
          </View>
          {jobListings.map(job => (
            <View key={job.id} style={styles.settingItem}>
              <Text style={styles.settingTitle}>{job.club}</Text>
              <Text style={styles.settingDescription}>{job.role}</Text>
              <TouchableOpacity style={styles.arrowButton}>
                <Text style={styles.arrowText}>›</Text>
              </TouchableOpacity>
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
    paddingBottom: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 40,
    marginRight: 10,
  },
  locationInput: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 40,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  settingsContainer: {
    flexGrow: 1,
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
});

import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function HiddenCriteriaPage() {
  return (
    <>
      <Stack.Screen options={{ title: 'Hidden Criteria' }} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Hide Jobs with These Criteria</Text>

        <Text style={styles.label}>Hide Roles Containing</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Assistant, Youth, Goalkeeping"
        />

        <Text style={styles.label}>Hide Clubs Containing</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Barcelona, B-team, U21"
        />

        <Text style={styles.label}>Hide Job Types</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Internship, Volunteer"
        />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Hidden Criteria</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    marginTop: 12,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    height: 45,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#F9F9F9',
  },
  saveButton: {
    marginTop: 30,
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

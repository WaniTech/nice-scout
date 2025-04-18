import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function QualificationsPage() {
  return (
    <>
      <Stack.Screen options={{ title: 'Qualifications' }} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Your Qualifications</Text>

        <Text style={styles.label}>Licenses & Certifications</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. UEFA A License"
        />

        <Text style={styles.label}>Years of Coaching Experience</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 5 years"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Specializations</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Youth Development, Goalkeeping"
        />

        <Text style={styles.label}>Languages Spoken</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. English, Spanish"
        />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Qualifications</Text>
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

import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function JobPreferencesPage() {
  return (
    <>
      <Stack.Screen options={{ title: 'Job Preferences' }} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Your Job Preferences</Text>

        <Text style={styles.label}>Preferred Role</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Head Coach, Tactical Analyst"
        />

        <Text style={styles.label}>Preferred Location</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. England, Spain, Germany"
        />

        <Text style={styles.label}>Desired Salary</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. €4000/month"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Working Hours</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Full-time, Part-time"
        />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Preferences</Text>
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

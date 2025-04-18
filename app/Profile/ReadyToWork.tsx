import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function ReadyToWorkPage() {
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      <Stack.Screen options={{ title: 'Ready to Work' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Let clubs know you're ready to start!</Text>

        <View style={styles.switchContainer}>
          <Text style={styles.label}>I'm available to start immediately</Text>
          <Switch
            value={isReady}
            onValueChange={setIsReady}
            trackColor={{ false: '#ccc', true: '#4CAF50' }}
            thumbColor={isReady ? '#fff' : '#f4f3f4'}
          />
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Availability</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    flex: 1,
    marginRight: 10,
  },
  saveButton: {
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

import axios from 'axios';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function FergieMatch() {
  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState([]);

  const handleMatch = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/fergie/match', {
        name: 'Alex Smith',
        skills: ['Youth Coach', 'Tactical Analyst'],
      });

      setMatches(response.data);
    } catch (error) {
      console.error('Fergie failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Fergie Match' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Let Fergie find your best club matches</Text>

        <TouchableOpacity style={styles.button} onPress={handleMatch}>
          <Text style={styles.buttonText}>Find Matches</Text>
        </TouchableOpacity>

        {loading && <ActivityIndicator size="large" color="#000" style={{ marginTop: 20 }} />}

        <FlatList
          data={matches}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.club}>{item.name}</Text>
              <Text style={styles.location}>Location: {item.location}</Text>
              <Text style={styles.roles}>Roles needed: {item.roles.join(', ')}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    marginTop: 10,
  },
  card: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: '#F3F3F3',
    borderColor: '#DDD',
    borderWidth: 1,
  },
  club: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    marginTop: 4,
  },
  roles: {
    fontSize: 14,
    marginTop: 4,
    color: '#555',
  },
});

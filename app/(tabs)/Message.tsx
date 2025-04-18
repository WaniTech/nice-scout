import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const mockMessages = [
  { id: '1', club: 'FC Barcelona', message: 'Are you available for a trial?', time: '09:45', icon: 'football' },
  { id: '2', club: 'Manchester United', message: 'We loved your profile!', time: '08:30', icon: 'trophy' },
  { id: '3', club: 'Juventus', message: 'Can we schedule an interview?', time: 'Yesterday', icon: 'shield' },
  { id: '4', club: 'Paris SG', message: 'Join our youth development?', time: 'Yesterday', icon: 'star' },
  { id: '5', club: 'Ajax', message: 'We’d like to talk more.', time: 'Mon', icon: 'medal' },
  { id: '6', club: 'Bayern Munich', message: 'Let’s have a quick call.', time: 'Sun', icon: 'trophy' },
  { id: '7', club: 'Real Madrid', message: 'You are a great fit!', time: 'Sat', icon: 'football-outline' },
  { id: '8', club: 'AC Milan', message: 'Ready for the next step?', time: 'Fri', icon: 'people' },
  { id: '9', club: 'Chelsea FC', message: 'We’re looking for a coach.', time: 'Thu', icon: 'person-circle' },
  { id: '10', club: 'Dortmund', message: 'Excited to connect with you!', time: 'Wed', icon: 'chatbox' },
];

export default function MessagePage() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <FlatList
          data={mockMessages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.contentContainer}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.chatRow} onPress={() => router.push(`/MessageDetail/${item.id}`)}>
              <View style={styles.avatar}>
                <Ionicons name={item.icon} size={30} color="#555" />
              </View>
              <View style={styles.chatInfo}>
                <View style={styles.chatHeader}>
                  <Text style={styles.clubName}>{item.club}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
                <Text style={styles.message}>{item.message}</Text>
              </View>
            </TouchableOpacity>
          )}
          ListHeaderComponent={
            <Text style={styles.header}>Messages</Text>
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  contentContainer: {
    paddingBottom: 100,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  chatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  avatar: {
    width: 48,
    height: 48,
    backgroundColor: '#E5E5E5',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  chatInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  clubName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  message: {
    fontSize: 14,
    color: '#555',
  },
});

import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function MessagePage() {
  const router = useRouter();
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! Are you available for an interview?' },
    { id: '2', text: 'Yes, I am available tomorrow.' },
    { id: '3', text: 'Great! Let\'s schedule it for 10 AM.' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages(prevMessages => [...prevMessages, { id: Date.now().toString(), text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.header}>Messages</Text>
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.messageBubble}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={styles.messageContainer}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={newMessage}
            onChangeText={setNewMessage}
            placeholder="Type a message..."
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.replace('/CoachDashboard')}>
          <Ionicons name="home" size={20} color="#b4b4a0" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.replace('/Myjobs')}>
          <Ionicons name="briefcase" size={20} color="#b4b4a0" />
          <Text style={styles.navText}>My Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.replace('/Message')}>
          <Ionicons name="mail" size={20} color="#b4b4a0" />
          <Text style={styles.navText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => router.replace('/Settings')}>
          <Ionicons name="settings" size={20} color="#b4b4a0" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingBottom: 70, // Adjusted to fit the bottom nav
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  messageContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  messageBubble: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#121212',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 10,
    color: '#b4b4a0',
  },
});

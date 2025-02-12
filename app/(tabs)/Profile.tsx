import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfilePage() {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState('https://randomuser.me/api/portraits/men/32.jpg');

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access media library is required!');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <ScrollView 
          style={styles.settingsContainer} 
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
        >
          <View>
            <Text style={styles.header}>Profile</Text>
            <TouchableOpacity 
              style={styles.editIcon} 
              onPress={() => router.replace('/Editprofile')}
            >
              <Ionicons name="create-outline" size={24} color="#555" />
            </TouchableOpacity>
            <View style={styles.profileContainer}>
              <TouchableOpacity onPress={pickImage}>
                <Image source={{ uri: profileImage }} style={styles.profileImage} />
              </TouchableOpacity>
              <Text style={styles.profileName}>Alex Smith</Text>
              <View style={styles.emailContainer}>
                <Ionicons name="mail" size={18} color="#555" style={styles.icon} />
                <Text style={styles.emailText}>alex.smith@example.com</Text>
              </View>
            </View>

            <View style={styles.settingItem}>
              <Text style={styles.settingTitle}>Qualifications</Text>
              <Text style={styles.settingDescription}>Highlight your skills and experience.</Text>
              <TouchableOpacity style={styles.arrowButton}>
                <Text style={styles.arrowText}>›</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
              <Text style={styles.settingTitle}>Job Preferences</Text>
              <Text style={styles.settingDescription}>Save specifics like desired salary and working hours.</Text>
              <TouchableOpacity style={styles.arrowButton}>
                <Text style={styles.arrowText}>›</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
              <Text style={styles.settingTitle}>Hide Jobs with These Criteria</Text>
              <Text style={styles.settingDescription}>Manage qualifications or preferences used to hide jobs from your search.</Text>
              <TouchableOpacity style={styles.arrowButton}>
                <Text style={styles.arrowText}>›</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.settingItem}>
              <Text style={styles.settingTitle}>Ready to Work</Text>
              <Text style={styles.settingDescription}>Inform employers that you can start working as soon as possible.</Text>
              <TouchableOpacity style={styles.arrowButton}>
                <Text style={styles.arrowText}>›</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.signOutContainer}>
          <TouchableOpacity style={styles.signOutButton} onPress={() => router.replace('/')}> 
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>

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
    paddingBottom: 40, // Adjusted bottom padding to move sign-out button further down
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  editIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFF',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    marginTop: 10,
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  emailText: {
    fontSize: 16,
    color: '#333',
  },
  settingsContainer: {
    marginTop: 10,
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
  signOutContainer: {
    marginTop: 'auto', // Ensures sign-out button stays at the bottom
    marginBottom: 30, // Adds space between the sign-out button and the box above
    alignItems: 'center',
  },
  signOutButton: {
    backgroundColor: '#FF5252',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignSelf: 'center',
  },
  signOutText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

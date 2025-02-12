import * as ImagePicker from 'expo-image-picker';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EditProfilePage() {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState('https://randomuser.me/api/portraits/men/32.jpg');
  const [name, setName] = useState('Alex Smith');
  const [email, setEmail] = useState('alex.smith@example.com');
  const [qualifications, setQualifications] = useState('Highlight your skills and experience.');
  const [jobPreferences, setJobPreferences] = useState('Desired salary and working hours.');

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
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Text style={styles.header}>Edit Profile</Text>
          <View style={styles.profileContainer}>
            <TouchableOpacity onPress={pickImage}>
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            </TouchableOpacity>
            <TextInput 
              style={styles.input} 
              value={name} 
              onChangeText={setName} 
              placeholder="Full Name"
            />
            <TextInput 
              style={styles.input} 
              value={email} 
              onChangeText={setEmail} 
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput 
              style={styles.input} 
              value={qualifications} 
              onChangeText={setQualifications} 
              placeholder="Qualifications"
            />
            <TextInput 
              style={styles.input} 
              value={jobPreferences} 
              onChangeText={setJobPreferences} 
              placeholder="Job Preferences"
            />
          </View>
          <TouchableOpacity style={styles.saveButton} onPress={() => router.replace('/Profile')}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
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
    textAlign: 'center',
    marginVertical: 20,
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
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

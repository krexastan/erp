import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, ImageBackground, Image, TextInput, 
  TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform 
} from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const RegisterPassenger = () => {
  const router = useRouter();
  const [gender, setGender] = useState('');

  return (
    <ImageBackground 
      source={require('../assets/erp/bg.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent} 
          bounces={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.topSection}>
            <View style={styles.logoBox}>
              <Image source={require('../assets/erp/erp_logo.jpg')} style={styles.logoImage} /> 
            </View>
          </View>

          <View style={styles.bottomSection}>
            <View style={styles.headerBadge}>
              <Text style={styles.headerBadgeText}>Passenger Registration</Text>
            </View>
            <Text style={styles.stepTitle}>Basic Information</Text>

            <Text style={styles.labelText}>Full Name</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.iconBox}><FontAwesome name="user" size={18} color="white" /></View>
              <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#A9B9D1" />
            </View>

            <Text style={styles.labelText}>Mobile Number</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.iconBox}><FontAwesome name="phone" size={18} color="white" /></View>
              <TextInput style={styles.input} placeholder="Mobile Number" keyboardType="phone-pad" placeholderTextColor="#A9B9D1" />
            </View>

            <Text style={styles.labelText}>Email Address</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.iconBox}><MaterialIcons name="email" size={18} color="white" /></View>
              <TextInput style={styles.input} placeholder="Email Address" keyboardType="email-address" placeholderTextColor="#A9B9D1" />
            </View>

            <Text style={styles.labelText}>Gender</Text>
            <View style={styles.pickerWrapper}>
              <Picker selectedValue={gender} onValueChange={(v) => setGender(v)} style={styles.picker}>
                <Picker.Item label="Choose" value="" color="#A9B9D1" />
                <Picker.Item label="Male" value="male" /><Picker.Item label="Female" value="female" />
              </Picker>
            </View>

            <View style={styles.row}>
              <View style={{ flex: 2 }}>
                <Text style={styles.labelText}>Date of Birth</Text>
                <View style={styles.inputWrapper}>
                  <TextInput style={styles.input} placeholder="MM/DD/YYYY" placeholderTextColor="#A9B9D1" />
                  <FontAwesome name="calendar" size={16} color="#0047AB" style={{ marginRight: 10 }} />
                </View>
              </View>
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.labelText}>Age</Text>
                <View style={styles.inputWrapper}>
                  <TextInput style={[styles.input, { textAlign: 'center' }]} placeholder="00" keyboardType="numeric" placeholderTextColor="#A9B9D1" />
                </View>
              </View>
            </View>

            <Text style={styles.labelText}>Home Address</Text>
              <View style={styles.inputWrapper}>
                <View style={styles.iconBox}>
             <FontAwesome name="home" size={18} color="white" />
                </View>
              <TextInput style={styles.input} placeholder="Home Address" placeholderTextColor="#A9B9D1" />
            </View>

            <View style={styles.footerRow}>
              <Text style={styles.pageIndicator}>1 / 3</Text>
              <View style={styles.navButtons}>
                <TouchableOpacity style={styles.backNavButton} onPress={() => router.back()}>
                  <Text style={styles.backNavText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextNavButton} onPress={() => router.push('/register_passenger_2')}>
                  <Text style={styles.nextNavText}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  container: { flex: 1 },
  scrollContent: { flexGrow: 1 },
  topSection: { height: 220, justifyContent: 'center', alignItems: 'center', paddingTop: 40 },
  logoBox: { backgroundColor: 'white', width: 150, height: 150, borderRadius: 25, justifyContent: 'center', alignItems: 'center', elevation: 8 },
  logoImage: { width: 110, height: 110, resizeMode: 'contain' },
  bottomSection: { flex: 1, backgroundColor: '#F0F7FF', borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: 30, paddingHorizontal: 25, paddingBottom: 40 },
  headerBadge: { backgroundColor: '#0047AB', borderRadius: 10, paddingVertical: 10, alignItems: 'center', marginBottom: 10, marginHorizontal: 10 },
  headerBadgeText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  stepTitle: { textAlign: 'center', color: '#0047AB', fontSize: 14, fontWeight: '600', marginBottom: 20 },
  labelText: { fontSize: 11, color: '#4A78B5', fontWeight: '700', marginBottom: 4 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#D1E0F3', borderRadius: 8, marginBottom: 12, backgroundColor: 'white', height: 45 },
  iconBox: { backgroundColor: '#0047AB', width: 45, height: '100%', justifyContent: 'center', alignItems: 'center' },
  input: { flex: 1, paddingHorizontal: 12, fontSize: 14, color: '#333' },
  pickerWrapper: { borderWidth: 1, borderColor: '#D1E0F3', borderRadius: 8, marginBottom: 12, backgroundColor: 'white', height: 45, justifyContent: 'center' },
  picker: { width: '100%' },
  row: { flexDirection: 'row', width: '100%' },
  footerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 },
  pageIndicator: { fontSize: 16, color: '#0047AB', fontWeight: 'bold' },
  navButtons: { flexDirection: 'row', gap: 10 },
  backNavButton: { paddingVertical: 12, paddingHorizontal: 25, borderRadius: 10, borderWidth: 1.5, borderColor: '#0047AB', backgroundColor: '#EBF4FF' },
  backNavText: { color: '#0047AB', fontWeight: 'bold' },
  nextNavButton: { paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10, backgroundColor: '#0047AB' },
  nextNavText: { color: 'white', fontWeight: 'bold' },
});

export default RegisterPassenger;
import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, ImageBackground, Image, TextInput, 
  TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform 
} from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const RegisterPassenger3 = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPromos, setAgreedToPromos] = useState(false);

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
            <Text style={styles.stepTitle}>Account Security</Text>

            {/* pass*/}
            <Text style={styles.labelText}>Password</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.iconBox}><FontAwesome name="key" size={18} color="white" /></View>
              <TextInput 
                style={styles.input} 
                placeholder="Password" 
                secureTextEntry={!showPassword}
                placeholderTextColor="#A9B9D1" 
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                <Ionicons name={showPassword ? "eye-off" : "eye"} size={20} color="#A9B9D1" />
              </TouchableOpacity>
            </View>

            {/* confirm pass */}
            <Text style={styles.labelText}>Confirm Password</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.iconBox}><FontAwesome name="key" size={18} color="white" /></View>
              <TextInput 
                style={styles.input} 
                placeholder="Confirm Password" 
                secureTextEntry={!showConfirmPassword}
                placeholderTextColor="#A9B9D1" 
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
                <Ionicons name={showConfirmPassword ? "eye-off" : "eye"} size={20} color="#A9B9D1" />
              </TouchableOpacity>
            </View>

            {/* checkbox */}
            <TouchableOpacity style={styles.checkboxContainer} onPress={() => setAgreedToTerms(!agreedToTerms)}>
              <Ionicons name={agreedToTerms ? "checkbox" : "square-outline"} size={20} color="#0047AB" />
              <Text style={styles.checkboxText}>
                I agree to the <Text style={styles.linkText}>Terms of Service and Data Privacy Policy</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.checkboxContainer} onPress={() => setAgreedToPromos(!agreedToPromos)}>
              <Ionicons name={agreedToPromos ? "checkbox" : "square-outline"} size={20} color="#0047AB" />
              <Text style={styles.checkboxText}>I consent to receive ride updates and promotions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.submitBtn} onPress={() => router.push('/welcome_passenger')}>
              <Text style={styles.submitBtnText}>Submit Registration</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.backFullBtn} onPress={() => router.back()}>
              <Text style={styles.backFullBtnText}>Back</Text>
            </TouchableOpacity>

            <View style={styles.footerRow}>
              <Text style={styles.pageIndicator}>3 / 3</Text>
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
  headerBadge: { backgroundColor: '#0047AB', borderRadius: 10, paddingVertical: 10, alignItems: 'center', marginBottom: 5, marginHorizontal: 10 },
  headerBadgeText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  stepTitle: { textAlign: 'center', color: '#0047AB', fontSize: 14, fontWeight: '600', marginBottom: 20 },
  
  labelText: { fontSize: 11, color: '#4A78B5', fontWeight: '700', marginBottom: 4 },
  inputWrapper: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#D1E0F3', borderRadius: 8, marginBottom: 15, backgroundColor: 'white', height: 45, overflow: 'hidden' },
  iconBox: { backgroundColor: '#0047AB', width: 45, height: '100%', justifyContent: 'center', alignItems: 'center' },
  input: { flex: 1, paddingHorizontal: 12, fontSize: 14, color: '#333' },
  eyeIcon: { paddingRight: 10 },

  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  checkboxText: { fontSize: 11, color: '#4A78B5', marginLeft: 8, flexShrink: 1 },
  linkText: { textDecorationLine: 'underline', color: '#0047AB' },

  submitBtn: { backgroundColor: '#32D76B', width: '100%', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
  submitBtnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  
  backFullBtn: { backgroundColor: '#0047AB', width: '100%', height: 45, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  backFullBtnText: { color: 'white', fontSize: 16, fontWeight: '600' },

  footerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',marginTop: 20 },pageIndicator: { fontSize: 16, color: '#0047AB', fontWeight: 'bold' },
});

export default RegisterPassenger3;
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const RegisterDriver5 = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
              <Image 
                source={require('../assets/erp/erp_long_logo.png')} 
                style={styles.logoImage} 
              /> 
            </View>
          </View>

          <View style={styles.bottomSection}>
            <View style={styles.headerBadge}>
              <Text style={styles.headerBadgeText}>Driver Registration</Text>
            </View>
            
            <Text style={styles.stepTitle}>Account Security</Text>

            {/* pass */}
            <Text style={styles.labelText}>Password</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.iconBox}>
                <FontAwesome name="key" size={18} color="white" />
              </View>
              <TextInput 
                style={styles.input} 
                placeholder="Password" 
                placeholderTextColor="#A9B9D1" 
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                <MaterialCommunityIcons name={showPassword ? "eye" : "eye-off"} size={20} color="#A9B9D1" />
              </TouchableOpacity>
            </View>

            {/* confirm pass */}
            <Text style={styles.labelText}>Confirm Password</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.iconBox}>
                <FontAwesome name="key" size={18} color="white" />
              </View>
              <TextInput 
                style={styles.input} 
                placeholder="Confirm Password" 
                placeholderTextColor="#A9B9D1" 
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
                <MaterialCommunityIcons name={showConfirmPassword ? "eye" : "eye-off"} size={20} color="#A9B9D1" />
              </TouchableOpacity>
            </View>

            {/* checkbox */}
            <View style={styles.checkboxContainer}>
              <View style={styles.checkboxRow}>
                <MaterialCommunityIcons name="checkbox-blank-outline" size={18} color="#0047AB" />
                <Text style={styles.checkboxText}>
                  I agree to the <Text style={styles.linkText}>Driver Terms and Code of Conduct</Text>
                </Text>
              </View>
              <View style={styles.checkboxRow}>
                <MaterialCommunityIcons name="checkbox-blank-outline" size={18} color="#0047AB" />
                <Text style={styles.checkboxText}>I consent to GPS tracking during active trips</Text>
              </View>
            </View>

            <View style={styles.actionButtonContainer}>
              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText} onPress={() => router.push('/welcome_driver')}>
                  Submit Registration
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footerRow}>
              <Text style={styles.pageIndicator}>5 / 5</Text>
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
  logoBox: { 
    backgroundColor: 'white', width: 250, height: 100, borderRadius: 15, 
    justifyContent: 'center', alignItems: 'center', elevation: 8,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 4,
  },
  logoImage: { width: '90%', height: '90%', resizeMode: 'contain' },
  bottomSection: { 
    flex: 1, backgroundColor: '#F0F7FF', borderTopLeftRadius: 50, borderTopRightRadius: 50, 
    paddingTop: 30, paddingHorizontal: 25, paddingBottom: 40 
  },
  headerBadge: { 
    backgroundColor: '#0047AB', borderRadius: 10, paddingVertical: 10, 
    alignItems: 'center', marginBottom: 10, marginHorizontal: 10 
  },
  headerBadgeText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  stepTitle: { textAlign: 'center', color: '#0047AB', fontSize: 16, fontWeight: '600', marginBottom: 20 },
  labelText: { fontSize: 11, color: '#4A78B5', fontWeight: '700', marginBottom: 4 },

  inputWrapper: { 
    flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#D1E0F3', 
    borderRadius: 8, backgroundColor: 'white', height: 45, marginBottom: 12, overflow: 'hidden'
  },
  iconBox: { backgroundColor: '#0047AB', width: 45, height: '100%', justifyContent: 'center', alignItems: 'center' },
  input: { flex: 1, paddingHorizontal: 12, fontSize: 14, color: '#333' },
  eyeIcon: { paddingRight: 12 },

  // checkbox
  checkboxContainer: { marginTop: 10, marginBottom: 30 },
  checkboxRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  checkboxText: { fontSize: 11, color: '#0047AB', marginLeft: 8 },
  linkText: { textDecorationLine: 'underline' },


  actionButtonContainer: { width: '100%', marginTop: 20 },
  submitButton: { 
    backgroundColor: '#3DD36B', height: 45, borderRadius: 10, 
    justifyContent: 'center', alignItems: 'center', marginBottom: 12 
  },
  submitButtonText: { color: 'white', fontSize: 16, fontWeight: '600' },
  backButton: { 
    backgroundColor: '#0047AB', height: 45, borderRadius: 10, 
    justifyContent: 'center', alignItems: 'center' 
  },
  backButtonText: { color: 'white', fontSize: 16, fontWeight: '600' },


  footerRow: { marginTop: 30 },
  pageIndicator: { fontSize: 16, color: '#0047AB', fontWeight: 'bold' },
});

export default RegisterDriver5;
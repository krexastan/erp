import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen() {
  const router = useRouter();
  const { role } = useLocalSearchParams();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // change this to actual authentication logic later
    if (role === 'driver') {
      router.replace('/dashboard_driver'); // replace to prevent going back to login
    } else {
      router.replace('/dashboard_passenger');
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/erp/bg.png')} 
      style={styles.fullBackground}
      resizeMode="cover"
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }} 
            bounces={false}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.topSection}>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                  <Ionicons name="arrow-back" size={28} color="white" />
                </TouchableOpacity>
                
                <View style={styles.logoBox}>
                  <Image source={require('../assets/erp/erp_long_logo.png')} style={styles.logoImage} />
                </View>
              </View>
            </View>

            <View style={styles.bottomSection}>
              <Text style={styles.titleText}>Sign in to your Account</Text>
              <Text style={styles.subTitleText}>Enter your email and password to log in</Text>

              {/* email */}
              <View style={styles.inputLabelContainer}>
                <Text style={styles.labelText}>Email or Mobile Number</Text>
              </View>
              <View style={styles.inputWrapper}>
                <View style={styles.iconBox}>
                  <MaterialCommunityIcons name="email-outline" size={20} color="white" />
                </View>
                <TextInput 
                  style={styles.input} 
                  placeholder="Email or Mobile Number" 
                  placeholderTextColor="#A9B9D1"
                />
              </View>

              {/* pass */}
              <View style={styles.inputLabelContainer}>
                <Text style={styles.labelText}>Password</Text>
              </View>
              <View style={styles.inputWrapper}>
                <View style={styles.iconBox}>
                  <Ionicons name="key-outline" size={20} color="white" />
                </View>
                <TextInput 
                  style={styles.input} 
                  placeholder="Password" 
                  placeholderTextColor="#A9B9D1" 
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                  <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={20} color="#A9B9D1" />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotText}>Forget Password?</Text>
              </TouchableOpacity>

              {/* login btn */}
              <TouchableOpacity style={styles.loginButton} activeOpacity={0.8} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log in</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fullBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: { 
    flex: 1,
  },
  topSection: { 
    height: 200,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: { 
    marginRight: 20,
    backgroundColor: 'rgba(0,0,0,0.1)', 
    padding: 5,
    borderRadius: 20 
  },
  logoBox: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    flex: 1,
    alignItems: 'center',
    elevation: 4,
  },
  logoImage: { width: 150, height: 40, resizeMode: 'contain' },
  bottomSection: {
    flex: 1,
    backgroundColor: '#F8FBFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 40,
    paddingHorizontal: 30,
    paddingBottom: 40, 
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#033B8C',
    marginBottom: 5,
  },
  subTitleText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 25,
  },
  inputLabelContainer: {
    width: '100%',
    marginBottom: 5,
  },
  labelText: {
    fontSize: 12,
    color: '#0047AB',
    fontWeight: '600',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1DCEB',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  iconBox: {
    backgroundColor: '#0047AB',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#333',
    height: 45,
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 25,
  },
  forgotText: {
    color: '#0047AB',
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#0047AB',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


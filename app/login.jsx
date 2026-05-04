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
import { useRouter } from 'expo-router';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Login = () => {
  const router = useRouter();
  // input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // password visibility toggle
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    // keybord visibility handling for both iOS and Android
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
        
        {/* bg */}
        <ImageBackground 
          source={require('../assets/erp/bg.png')} 
          style={styles.topSection}
        >
          <View style={styles.topOverlay}>
            <View style={styles.headerBar}>
              {/* back btn */}
              <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={28} color="white" />
              </TouchableOpacity>
              
              {/* logo */}
              <View style={styles.logoBox}>
                <Image 
                  source={require('../assets/erp/erp_logo.jpg')} 
                  style={styles.logoImage} 
                />
              </View>
              <View style={{ width: 40 }} />
            </View>
          </View>
        </ImageBackground>

        <View style={styles.bottomSection}>
          <Text style={styles.titleText}>Sign in to your Account</Text>
          <Text style={styles.subTitleText}>Enter your email and password to log in</Text>

          {/* email */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email or Mobile Number</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconBox}>
                <FontAwesome5 name="envelope" size={18} color="white" />
              </View>
              {/* email or mobile number input */}
              <TextInput 
                style={styles.textInput} 
                placeholder="Email or Mobile Number"
                placeholderTextColor="#A9A9A9"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          {/* password input */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconBox}>
                <FontAwesome5 name="lock" size={18} color="white" />
              </View>
              <TextInput 
                style={styles.textInput} 
                placeholder="Password"
                placeholderTextColor="#A9A9A9"
                secureTextEntry={!isPasswordVisible} 
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity 
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                style={styles.eyeIcon}
              >
                <Ionicons 
                  name={isPasswordVisible ? "eye-outline" : "eye-off-outline"} 
                  size={20} 
                  color="#A9A9A9" 
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* forget password */}
          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Forget Password?</Text>
          </TouchableOpacity>

          {/* login btn */}
          <TouchableOpacity style={styles.buttonPrimary} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

//styling for login screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  topSection: {
    height: 180, 
    justifyContent: 'flex-start',
  },
  topOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 71, 171, 0.4)', 
    paddingTop: 50, 
    paddingHorizontal: 20,
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 5,
  },
  logoBox: {
    width: 200,
    height: 55, 
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  logoImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#F8FBFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 30,
    paddingTop: 40,
    marginTop: -40, 
  },
  titleText: {
    fontSize: 28, 
    fontWeight: 'bold',
    color: '#033B8C',
    lineHeight: 34,
    marginBottom: 8,
  },
  subTitleText: {
    fontSize: 14,
    color: '#333', 
    lineHeight: 20,
    marginBottom: 35,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 12,
    color: '#6B82A6',
    fontWeight: '600',
    marginBottom: 6,
    marginLeft: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D8E2F0',
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden', 
  },
  iconBox: {
    width: 45,
    height: 48,
    backgroundColor: '#0047AB', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 48,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#000',
  },
  eyeIcon: {
    padding: 10,
    position: 'absolute', 
    right: 0,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    color: '#0047AB',
    fontSize: 14,
    fontWeight: '600',
  },
  buttonPrimary: {
    backgroundColor: '#0047AB',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    width: '100%',
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Login;
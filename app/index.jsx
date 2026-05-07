import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  Image,
  TouchableOpacity, 
  Animated 
} from 'react-native';
import { useRouter } from 'expo-router';

//flag to ensure animation only plays once per app session
let animationHasPlayed = false;

const Home = () => {
  const router = useRouter();
  
  // animation state to control which screen is shown: 'logo', 'slogan', or 'main'
  const [currentStep, setCurrentStep] = useState(animationHasPlayed ? 'main' : 'logo');
  const fadeAnim = useState(new Animated.Value(0))[0]; 

  useEffect(() => {
    // skip animation if it has already played once in this session
    if (animationHasPlayed) return;

    const timer1 = setTimeout(() => {
      setCurrentStep('slogan');
    }, 2000);

    const timer2 = setTimeout(() => {
      setCurrentStep('main');
      animationHasPlayed = true; // mark animation as played for this session
    }, 4000);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // logo
  if (currentStep === 'logo') {
    return (
      <ImageBackground source={require('../assets/erp/bg.png')} style={styles.fullScreen}>
        <View style={styles.overlay}>
          <View style={styles.logoBoxLarge}>
            <Image source={require('../assets/erp/erp_logo.jpg')} style={styles.logoImage} />
          </View>
        </View>
      </ImageBackground>
    );
  }

  // slogan
  if (currentStep === 'slogan') {
    return (
      <ImageBackground source={require('../assets/erp/bg.png')} style={styles.fullScreen}>
        <View style={styles.overlay}>
          <Text style={styles.sloganText}>Ride Safe.{"\n"}Ride Smart.</Text>
        </View>
      </ImageBackground>
    );
  }

  // login/register
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/erp/bg.png')} style={styles.topSection}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBox}>
            <Image source={require('../assets/erp/erp_logo.jpg')} style={styles.logoImage} />
          </View>
        </View>
      </ImageBackground>

      <View style={styles.bottomSection}>
        <Text style={styles.titleText}>
          There’s always something new to explore around you!
        </Text>
        <Text style={styles.subTitleText}>
          Plan your trips, find the best routes, and travel effortlessly all in one place.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.buttonPrimary} 
            onPress={() => router.push({ pathname: '/passenger_driver', params: { type: 'login' } })}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonSecondary} 
            onPress={() => router.push({ pathname: '/passenger_driver', params: { type: 'register' } })}
          >
            <Text style={styles.buttonSecondaryText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0047AB' },
  fullScreen: { flex: 1 },
  overlay: { flex: 1, backgroundColor: 'rgba(0, 71, 171, 0.4)', justifyContent: 'center', alignItems: 'center' },
  logoBoxLarge: { width: 220, height: 220, backgroundColor: '#fff', borderRadius: 45, justifyContent: 'center', alignItems: 'center', elevation: 15 },
  sloganText: { fontSize: 42, fontWeight: 'bold', color: '#fff', textAlign: 'center', lineHeight: 50 },
  topSection: { flex: 1.1 },
  logoContainer: { backgroundColor: 'rgba(0, 71, 171, 0.3)', flex: 1, justifyContent: 'center', alignItems: 'center' },
  logoBox: { width: 180, height: 180, backgroundColor: '#fff', borderRadius: 35, justifyContent: 'center', alignItems: 'center', elevation: 12 },
  logoImage: { width: '80%', height: '80%', resizeMode: 'contain' },
  bottomSection: { flex: 1, backgroundColor: '#F8FBFF', borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingHorizontal: 40, paddingTop: 40, alignItems: 'center', marginTop: -50 },
  titleText: { fontSize: 20, fontWeight: 'bold', color: '#033B8C', textAlign: 'center', marginBottom: 10 },
  subTitleText: { fontSize: 14, color: '#6B82A6', textAlign: 'center', marginBottom: 30 },
  buttonContainer: { width: '100%', gap: 12 },
  buttonPrimary: { backgroundColor: '#0047AB', paddingVertical: 16, borderRadius: 14, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  buttonSecondary: { backgroundColor: '#0047AB', paddingVertical: 16, borderRadius: 14, alignItems: 'center', width: '100%' },
  buttonSecondaryText: { color: '#fff', fontSize: 16, fontWeight: '700' }
});

export default Home;
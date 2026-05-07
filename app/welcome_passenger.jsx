import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  Image, 
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const WelcomePassenger = () => {
  const router = useRouter();

  const userName = "Juan Dela Cruz";

  return (
    <ImageBackground 
      source={require('../assets/erp/bg.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.logoBox}>
            <Image source={require('../assets/erp/erp_logo.jpg')} style={styles.logoImage} /> 
          </View>
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.welcomeText}>Hi, {userName}!</Text>

          <View style={styles.whiteCard}>
            <Image 
              source={require('../assets/erp/passenger_img.jpg')} 
              style={styles.illustration} 
            />
            
            <View style={styles.badgeContainer}>
               <Text style={styles.badgeText}>Ready to Book?</Text>
            </View>
          </View>

          {/* go btn */}
          <TouchableOpacity 
            style={styles.goButton} 
            onPress={() => router.push('/dashboard_passenger')}
            activeOpacity={0.8}
          >
            <Text style={styles.goButtonText}>Go</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  container: { flex: 1 },
  topSection: { 
    height: 250, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  logoBox: { 
    backgroundColor: 'white', 
    width: 150, 
    height: 150, 
    borderRadius: 25, 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  logoImage: { width: 110, height: 110, resizeMode: 'contain' },
  
  bottomSection: { 
    flex: 1, 
    backgroundColor: '#F0F7FF', 
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50, 
    paddingTop: 40, 
    paddingHorizontal: 25, 
    alignItems: 'center' 
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0047AB',
    marginBottom: 20,
    textAlign: 'center',
  },
  whiteCard: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginBottom: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  illustration: {
    width: '90%',
    height: 180,
    resizeMode: 'contain',
  },
  badgeContainer: {
    backgroundColor: '#EBF4FF', 
    width: '100%',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  badgeText: {
    color: '#0047AB',
    fontSize: 22,
    fontWeight: '600',
  },
  goButton: {
    backgroundColor: '#0047AB',
    width: '100%',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  goButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WelcomePassenger;
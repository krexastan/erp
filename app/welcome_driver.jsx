import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  Image, 
  TouchableOpacity 
} from 'react-native';
import { useRouter } from 'expo-router';

const WelcomeDriver = () => {
  const router = useRouter();

  return (
    <ImageBackground 
      source={require('../assets/erp/bg.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.logoBox}>
            <Image 
              source={require('../assets/erp/erp_long_logo.png')} 
              style={styles.logoImage} 
            /> 
          </View>
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.welcomeText}>Hi, Maria Dela Cruz!</Text>
          
          <View style={styles.card}>
            <Image 
              source={require('../assets/erp/driver_img.jpg')} 
              style={styles.carImage}
              resizeMode="contain"
            />
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>Ready to drive?”</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.goButton}
            onPress={() => router.push('/dashboard_driver')}
          >
            <Text style={styles.goButtonText}>Go</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  container: { flex: 1 },
  topSection: { 
    height: '40%', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  logoBox: { 
    backgroundColor: 'white', 
    width: 250, 
    height: 100, 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center',
    elevation: 8
  },
  logoImage: { width: '90%', height: '90%', resizeMode: 'contain' },
  bottomSection: { 
    flex: 1, 
    backgroundColor: '#F0F7FF', 
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50, 
    alignItems: 'center', 
    paddingTop: 40,
    paddingHorizontal: 30
  },
  welcomeText: { 
    fontSize: 28, 
    color: '#0047AB', 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  card: { 
    backgroundColor: 'white', 
    width: '100%', 
    borderRadius: 20, 
    padding: 20, 
    alignItems: 'center',
    elevation: 5,
    marginBottom: 30
  },
  carImage: { 
    width: 180, 
    height: 120, 
    marginBottom: 15 
  },
  statusBadge: { 
    backgroundColor: '#EBF4FF', 
    width: '100%', 
    paddingVertical: 10, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  statusText: { 
    color: '#0047AB', 
    fontSize: 18, 
    fontWeight: '600' 
  },
  goButton: { 
    backgroundColor: '#0047AB', 
    width: '100%', 
    paddingVertical: 15, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  goButtonText: { 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold' 
  }
});

export default WelcomeDriver;
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  Image,
  TouchableOpacity, 
} from 'react-native';
import { useRouter } from 'expo-router'; // router for navigation

const Home = () => {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      {/* bg */}
      <ImageBackground 
        source={require('../assets/erp/bg.png')} 
        style={styles.topSection}
      >
        <View style={styles.logoContainer}>
          <View style={styles.logoBox}>
            {/* logo*/}
            <Image 
              source={require('../assets/erp/erp_logo.jpg')} 
              style={styles.logoImage} 
            />
          </View>
        </View>
      </ImageBackground>

      {/* white card */}
      <View style={styles.bottomSection}>
        <Text style={styles.titleText}>
          There’s always something new to explore around you!
        </Text>
        
        <Text style={styles.subTitleText}>
          Plan your trips, find the best routes, and travel effortlessly all in one place. Let the journey begin!
        </Text>

        {/* buttons*/}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonPrimary} activeOpacity={0.8} onPress={() => router.push('/login')}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary} activeOpacity={0.8 } onPress={() => router.push('/register')}>
            <Text style={styles.buttonSecondaryText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0047AB',
  },
  topSection: {
    flex: 1.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: 'rgba(0, 71, 171, 0.3)', 
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // shadow ios
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    // shadow android
    elevation: 12,
  },
  logoImage: {
    width: '85%',
    height: '85%',
    resizeMode: 'contain', 
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#F8FBFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 40,
    paddingTop: 50,
    alignItems: 'center',
    marginTop: -50, 
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#033B8C',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 15,
  },
  subTitleText: {
    fontSize: 14,
    color: '#6B82A6',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  buttonPrimary: {
    backgroundColor: '#0047AB',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  // button for register
  buttonSecondary: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#0047AB',
  },
  buttonSecondaryText: {
    color: '#0047AB',
    fontSize: 16,
    fontWeight: '700',
  }
});

export default Home;
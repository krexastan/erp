import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const PassengerDriver = () => {
  const router = useRouter();
  const { type } = useLocalSearchParams();


  const handlePassengerPress = () => {
    if (type === 'register') {
      router.push('/register_passenger'); 
    } else {
      router.push({ pathname: '/login', params: { role: 'passenger' } }); 
    }
  };

  const handleDriverPress = () => {
    if (type === 'register') {
      router.push('/register_driver'); 
    } else {
      router.push({ pathname: '/login', params: { role: 'driver' } }); 
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/erp/bg.png')} 
      style={styles.fullBackground}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
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
          {/* passenger */}
          <View style={styles.roleCard}>
            <Image source={require('../assets/erp/passenger_img.jpg')} style={styles.roleImage} />
            <TouchableOpacity style={styles.roleButton} onPress={handlePassengerPress}>
              <Text style={styles.roleButtonText}>Passenger</Text>
            </TouchableOpacity>
            <Text style={styles.roleSubtext}>Book a Vehicle to go to your desired location.</Text>
          </View>

          {/* driver*/}
          <View style={styles.roleCard}>
            <Image source={require('../assets/erp/driver_img.jpg')} style={styles.roleImage} />
            <TouchableOpacity 
              style={styles.roleButton} 
              onPress={handleDriverPress}
            >
              <Text style={styles.roleButtonText}>Driver</Text>
            </TouchableOpacity>
            <Text style={styles.roleSubtext}>Earn money by accepting more rides.</Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

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
    flex: 0.3, 
    justifyContent: 'center' 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: { 
    marginRight: 20,
    backgroundColor: 'rgba(0,0,0,0.2)', 
    padding: 5,
    borderRadius: 20,
  },
  logoBox: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    flex: 1,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  logoImage: { width: 150, height: 40, resizeMode: 'contain' },
  bottomSection: {
    flex: 1,
    backgroundColor: '#F8FBFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 40,
    paddingHorizontal: 30,
    gap: 30,
  },
  roleCard: {
    alignItems: 'center',
  },
  roleImage: {
    width: '100%', 
    height: 120, 
    resizeMode: 'contain',
    marginBottom: 10,
  },
  roleButton: {
    backgroundColor: '#0047AB',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  roleButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  roleSubtext: { color: '#0047AB', fontSize: 12, marginTop: 5, textAlign: 'center' },
});

export default PassengerDriver;
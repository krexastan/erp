import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const BottomNavBar = () => {
  const router = useRouter();

  return (
    <View style={styles.bottomNavContainer}>
      <View style={styles.bottomNav}>
        {/* buttons */}
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/erp/passenger/vehicle_white.png')} style={styles.customIconNav} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/erp/passenger/wallet_white.png')} style={styles.customIconNav} />
        </TouchableOpacity>

        <View style={styles.homeButtonContainer}>
          <TouchableOpacity style={styles.homeButton} >
            <Image source={require('../assets/erp/driver/home_blue.png')} style={styles.customIconHome} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/erp/passenger/support_white.png')} style={styles.customIconNav} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} >
          <Image source={require('../assets/erp/passenger/profile_blue.png')} style={styles.customIconNav} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavContainer: { 
    position: 'absolute', 
    bottom: 0, 
    width: '100%', 
    height: 110, 
    justifyContent: 'flex-end' 
  },
  bottomNav: { 
    flexDirection: 'row', 
    backgroundColor: 'white', 
    height: 85, 
    borderTopLeftRadius: 35, 
    borderTopRightRadius: 35, 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  navItem: { flex: 1, alignItems: 'center' },
  homeButtonContainer: { top: -40, elevation: 16 },
  homeButton: { 
    backgroundColor: '#0047AB', 
    width: 90, 
    height: 90, 
    borderRadius: 45, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 6, 
    borderColor: '#F0F7FF' 
  },
  customIconNav: { width: 40, height: 40, resizeMode: 'contain' },
  customIconHome: { width: 50, height: 50, resizeMode: 'contain' },
});

export default BottomNavBar;
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';

// top navbar
export const TopNavbar = ({ status = "Offline", notifications = 5 }) => {
  return (
    <View style={styles.topNav}>
      <TouchableOpacity style={styles.profileCircle} onPress={() => router.push('/profile_driver')}>
        <Image source={require('../assets/erp/driver/profile_blue.png')} style={styles.avatar} />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.iconBtn}>
        <Image source={require('../assets/erp/driver/notif.png')} style={styles.customIconSmall} />
        <View style={styles.badge}><Text style={styles.badgeText}>{notifications}</Text></View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.statusPill, { backgroundColor: status === 'Offline' ? '#D63439' : '#3DD36B' }]}>
        <Image source={require('../assets/erp/driver/vehicle_offline.png')} style={styles.statusIcon} />
        <Text style={styles.statusText}>{status}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconBtn}>
        <Image source={require('../assets/erp/driver/support.png')} style={styles.customIconSmall} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconBtn}>
        <Image source={require('../assets/erp/driver/icon_scan.png')} style={styles.customIconSmall} />
      </TouchableOpacity>
    </View>
  );
};

// bottom navbar
export const BottomNavbar = () => {
  const router = useRouter();
  return (
    <View style={styles.bottomNavContainer}>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/earnings')}>
          <Image source={require('../assets/erp/driver/history_white.png')} style={styles.customIconNav} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/transactions')}>
          <Image source={require('../assets/erp/driver/eload_white.png')} style={styles.customIconNav} />
        </TouchableOpacity>

        {/* home button */}
        <View style={styles.homeButtonContainer}>
          <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/dashboard_driver')}>
            <Image source={require('../assets/erp/driver/home_blue.png')} style={styles.customIconHome} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/vehicle_logs')}>
          <Image source={require('../assets/erp/driver/vehicle_white.png')} style={styles.customIconNav} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/profile')}>
          <Image source={require('../assets/erp/driver/dashboard_white.png')} style={styles.customIconNav} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  topNav: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    paddingVertical: 15, 
    backgroundColor: 'white', 
    paddingTop: 50 
  },
  profileCircle: { 
    width: 50, 
    height: 50, 
    borderRadius: 22.5, 
    overflow: 'hidden', 
    borderWidth: 1.5, 
    borderColor: '#0047AB' 
  },
  avatar: { width: '100%', height: '100%' },
  statusPill: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 18, 
    paddingVertical: 8, 
    borderRadius: 25, 
    gap: 10 
  },
  statusText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  iconBtn: { padding: 8, position: 'relative' },
  badge: { 
    position: 'absolute', 
    right: 2, 
    top: 2, 
    backgroundColor: '#D63439', 
    borderRadius: 10, 
    width: 18, 
    height: 18, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  badgeText: { color: 'white', fontSize: 11, fontWeight: 'bold' },
  

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
  homeButtonContainer: { 
    top: -40, 
    elevation: 16 
  },
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


  customIconSmall: {
    width: 40, 
    height: 40,
    resizeMode: 'contain'
  },
  statusIcon: {
    width: 25, 
    height: 25,
    resizeMode: 'contain'
  },
  customIconNav: {
    width: 45, 
    height: 45,
    resizeMode: 'contain'
  },
  customIconHome: {
    width: 60, 
    height: 60,
    resizeMode: 'contain'
  },
});
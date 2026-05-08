import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import BottomNavBar from '../component/bottom_navbar_passenger';

const DashboardPassenger = () => {
  const router = useRouter();
  
  // status toggle
  const [isOnline, setIsOnline] = useState(false);
  const notifications = 5;

  return (
    <View style={styles.container}>
      {/* top navbar */}
      <View style={styles.topNav}>
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={() => setIsOnline(!isOnline)}
          style={[
            styles.statusPill, 
            { 
              backgroundColor: isOnline ? '#10c044' : '#D63439', 
            }
          ]}
        >
          <Image 
            source={isOnline ? require('../assets/erp/driver/vehicle_online.png') : require('../assets/erp/driver/vehicle_offline.png')} 
            style={styles.statusIcon} 
          />
          <Text style={styles.statusText}>{isOnline ? "Online" : "Offline"}</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.iconBtn} onPress={() => router.push('/notification_passenger')}>
          <Image source={require('../assets/erp/driver/notif.png')} style={styles.customIconSmall} />
          {notifications > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notifications}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* map */}
      <View style={styles.mapContainer}>
        <View style={styles.placeholderMap}>
          <View style={styles.mapInnerBorder} />
        </View>
      </View>

      {/* start btn */}
      {isOnline && (
        <View style={styles.startButtonWrapper}>
           <TouchableOpacity style={styles.startButton} >
             <Text style={styles.startButtonText}>Start</Text>
           </TouchableOpacity>
        </View>
      )}

      {/* reusable bottom navbar */}
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F7FF' },

  topNav: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingVertical: 15, 
    backgroundColor: 'white', 
    paddingTop: 50 
  },
  
  statusPill: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 15, 
    paddingVertical: 8, 
    borderRadius: 25, 
    gap: 8,
    minWidth: 120, 
  },
  statusText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  statusIcon: { width: 25, height: 25, resizeMode: 'contain' },

  iconBtn: { padding: 8, position: 'relative' },
  customIconSmall: { width: 35, height: 35, resizeMode: 'contain' },
  badge: { 
    position: 'absolute', 
    right: 2, 
    top: 2, 
    backgroundColor: '#D63439', 
    borderRadius: 10, 
    width: 20, 
    height: 20, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderWidth: 1.5, 
    borderColor: 'white'
  },
  badgeText: { color: 'white', fontSize: 11, fontWeight: 'bold' },

  mapContainer: { 
    flex: 1, 
    marginHorizontal: 10, 
    marginTop: 10, 
    marginBottom: 100, 
    borderRadius: 30, 
    overflow: 'hidden',
    backgroundColor: '#E0E0E0', 
    borderWidth: 1,
    borderColor: '#D1E0F3'
  },
  placeholderMap: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  mapInnerBorder: {
    width: '95%',
    height: '95%',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  startButtonWrapper: {
    position: 'absolute',
    bottom: 150, 
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 20,
  },
  startButton: {
    backgroundColor: '#0047AB',
    paddingVertical: 10,
    width: '60%',
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1,
  }
});

export default DashboardPassenger;
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, StatusBar, ScrollView, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TripDriver = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  
  const [isOnline, setIsOnline] = useState(true);
  const [isPickedUp, setIsPickedUp] = useState(false);
  const [isTripStarted, setIsTripStarted] = useState(false);
  const [isTripEnded, setIsTripEnded] = useState(false);
  
  // toggle for real map vs placeholder (for demo purposes)
  const [showRealMap, setShowRealMap] = useState(false); 

  const notifications = 5;

  const renderTripActions = () => {
    if (isTripEnded) {
      return (
        <ScrollView style={styles.paymentScroll} contentContainerStyle={styles.paymentContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.paymentHeader}>Payment</Text>
          
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Fee</Text>
            <Text style={styles.paymentValue}>₱ 600.00</Text>
          </View>
          <View style={styles.paymentRow}>
            <Text style={styles.paymentLabel}>Total</Text>
            <Text style={styles.paymentValue}>₱ 600.00</Text>
          </View>

          <View style={styles.qrWrapper}>
            <Image 
              source={require('../assets/erp/driver/qr_code.png')} 
              style={styles.qrImage}
            />
          </View>

          <View style={styles.paymentButtonRow}>
            <TouchableOpacity style={styles.halfButton} onPress={() => router.push('/dashboard_driver')}>
              <Text style={styles.halfButtonText}>Confirm Cash</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.halfButton} onPress={() => router.push('/dashboard_driver')}>
              <Text style={styles.halfButtonText}>Confirm QR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }

    if (isTripStarted) {
      return (
        <TouchableOpacity style={styles.actionButton} onPress={() => setIsTripEnded(true)}>
          <Text style={styles.buttonText}>End Trip</Text>
        </TouchableOpacity>
      );
    }

    if (isPickedUp) {
      return (
        <TouchableOpacity style={styles.actionButton} onPress={() => setIsTripStarted(true)}>
          <Text style={styles.buttonText}>Start Trip</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.actionGroup}>
        <TouchableOpacity style={styles.messageButton} onPress={() => router.push('/passenger_message_driver')}>
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => setIsPickedUp(true)}>
          <Text style={styles.buttonText}>Confirm Pickup</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* map */}
      <View style={styles.mapContainer}>
         {!showRealMap ? ( <ImageBackground source={require('../assets/erp/driver/map.png')} style={styles.mapImage}resizeMode="cover">
      <View style={styles.fakeRouteLine} />
        </ImageBackground>) : (
          <View style={{flex: 1, backgroundColor: '#add8e6'}}>
             <Text>Real Map goes here</Text>
         </View> )}
    </View>
      
      <View style={[styles.topNav, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity style={styles.profileCircle} onPress={() => router.push('/profile_driver')}>
          <Image source={require('../assets/erp/driver/profile_blue.png')} style={styles.avatar} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconBtn}>
          <Image source={require('../assets/erp/driver/notif.png')} style={styles.customIconSmall} />
          <View style={styles.badge}><Text style={styles.badgeText}>{notifications}</Text></View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.statusPill, { backgroundColor: isOnline ? '#10c044' : '#D63439' }]}
          onPress={() => setIsOnline(!isOnline)}
        >
          <Image source={isOnline ? require('../assets/erp/driver/vehicle_online.png') : require('../assets/erp/driver/vehicle_offline.png')} style={styles.statusIcon} />
          <Text style={styles.statusText}>{isOnline ? "Online" : "Offline"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn} onPress={() => router.push('/chat_fleet_driver')}>
          <Image source={require('../assets/erp/driver/support.png')} style={styles.customIconSmall} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn}>
          <Image source={require('../assets/erp/driver/icon_scan.png')} style={styles.customIconSmall} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }} />

      <View style={[
        styles.tripCard, 
        { paddingBottom: insets.bottom > 0 ? insets.bottom : 20 },
        isTripEnded && styles.tripCardPayment
      ]}>
        <View style={styles.dragHandle} />
        
        {!isTripEnded && (
          <View style={styles.tripInfoRow}>
            <Text style={styles.distanceText}>{isPickedUp || isTripStarted ? "616km" : "616m"}</Text>
            <Text style={styles.priceText}>₱ 600.00</Text>
          </View>
        )}

        {!isTripEnded && (
          <View style={styles.timeInfoContainer}>
            <View style={styles.redUnderline} />
            <Text style={styles.timeText}>Time to reach Destination: 5 mins</Text>
          </View>
        )}

        {renderTripActions()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' },
  mapContainer: { 
    ...StyleSheet.absoluteFillObject,
    zIndex: -1, 
  },
  mapImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  fakeRouteLine: { 
    position: 'absolute', 
    width: 6, 
    height: '30%', 
    backgroundColor: '#007DFE', 
    top: '30%', 
    left: '45%', 
    borderRadius: 3,
    transform: [{ rotate: '35deg' }] 
  },

  topNav: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 15, backgroundColor: 'white', elevation: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  profileCircle: { width: 50, height: 50, borderRadius: 25, overflow: 'hidden', borderWidth: 1.5, borderColor: '#0047AB' },
  avatar: { width: '100%', height: '100%' },
  iconBtn: { padding: 8, position: 'relative' },
  badge: { position: 'absolute', right: 2, top: 2, backgroundColor: '#D63439', borderRadius: 10, width: 18, height: 18, justifyContent: 'center', alignItems: 'center' },
  badgeText: { color: 'white', fontSize: 11, fontWeight: 'bold' },
  customIconSmall: { width: 35, height: 35, resizeMode: 'contain' },
  statusPill: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 25, gap: 8 },
  statusText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  statusIcon: { width: 25, height: 25, resizeMode: 'contain' },
  tripCard: { backgroundColor: 'white', borderTopLeftRadius: 35, borderTopRightRadius: 35, paddingHorizontal: 25, paddingTop: 15, elevation: 25, shadowColor: '#000', shadowOffset: { width: 0, height: -10 }, shadowOpacity: 0.15, shadowRadius: 10 },
  tripCardPayment: { height: '60%' },
  dragHandle: { width: 60, height: 5, backgroundColor: '#666', borderRadius: 3, alignSelf: 'center', marginBottom: 20 },
  tripInfoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 },
  distanceText: { fontSize: 32, fontWeight: 'bold', color: '#0047AB' },
  priceText: { fontSize: 20, fontWeight: 'bold', color: '#D63439' },
  timeInfoContainer: { marginBottom: 25, alignItems: 'center' },
  redUnderline: { height: 2, backgroundColor: '#D63439', width: '100%', marginBottom: 5 },
  timeText: { color: '#D63439', fontSize: 14, fontWeight: '600' },
  actionGroup: { width: '100%' },
  messageButton: { backgroundColor: '#0047AB', borderRadius: 12, height: 55, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  actionButton: { backgroundColor: '#0047AB', borderRadius: 12, height: 55, justifyContent: 'center', alignItems: 'center', width: '100%' },
  buttonText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  paymentScroll: { flex: 1, width: '100%' },
  paymentContent: { alignItems: 'center', width: '100%', paddingBottom: 20 },
  paymentHeader: { fontSize: 28, color: '#0047AB', fontWeight: '600', marginBottom: 20 },
  paymentRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', borderBottomWidth: 2, borderBottomColor: '#0047AB', paddingVertical: 8 },
  paymentLabel: { fontSize: 18, color: '#666' },
  paymentValue: { fontSize: 18, color: '#D63439', fontWeight: 'bold' },
  qrWrapper: { marginVertical: 30, padding: 10, borderWidth: 2, borderColor: '#0047AB', borderRadius: 10 },
  qrImage: { width: 200, height: 200, resizeMode: 'contain' },
  paymentButtonRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', gap: 10 },
  halfButton: { flex: 1, backgroundColor: '#0047AB', height: 55, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  halfButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});

export default TripDriver;
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ViewMapDriver = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Map viewing</Text>
        <View style={{ width: 34 }} /> 
      </View>

      {/* map*/}
      <View style={styles.mapContainer}>
        <View style={styles.placeholderMap}>
          <View style={styles.mapInnerBorder} />
        </View>
      </View>

      {/* trip details */}
      <View style={[styles.detailsCard, { paddingBottom: insets.bottom + 20 }]}>
        <View style={styles.dragHandle} />

        <View style={styles.infoRow}>
          <Text style={styles.distanceText}>616m</Text>
          <View style={styles.priceContainer}>
             <Text style={styles.currencySymbol}>₱</Text>
             <Text style={styles.priceText}> 600.00</Text>
          </View>
        </View>

        <View style={styles.timeWrapper}>
          <View style={styles.redUnderline} />
          <Text style={styles.timeLabel}>Time to reach Destination: 5 mins</Text>
        </View>

        <TouchableOpacity 
            style={styles.pickupButton}
            onPress={() => router.push('/trip_driver')}
        >
          <Text style={styles.pickupButtonText}>Start Pickup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0047AB' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  backButton: { padding: 5 },
  mapContainer: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    overflow: 'hidden',
  },
  placeholderMap: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  mapInnerBorder: {
    width: '95%',
    height: '95%',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  detailsCard: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 25,
    paddingTop: 15,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  dragHandle: {
    width: 60,
    height: 5,
    backgroundColor: '#666',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  distanceText: { fontSize: 32, fontWeight: 'bold', color: '#0047AB' },
  priceContainer: { flexDirection: 'row', alignItems: 'center' },
  currencySymbol: { fontSize: 20, color: '#D63439', fontWeight: 'bold' },
  priceText: { fontSize: 18, color: '#D63439', fontWeight: '600' },
  timeWrapper: { alignItems: 'center', marginBottom: 25 },
  redUnderline: { height: 2, backgroundColor: '#D63439', width: '100%', marginBottom: 4 },
  timeLabel: { color: '#D63439', fontSize: 14, fontWeight: '600' },
  pickupButton: {
    backgroundColor: '#0047AB',
    borderRadius: 12,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickupButtonText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
});

export default ViewMapDriver;
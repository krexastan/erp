import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Image,
  Pressable
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const PassengerBookList = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [selectedCardId, setSelectedCardId] = useState(null); 

  const [passengers, setPassengers] = useState([
    { id: 1, name: "Juan Dela Cruz", price: "250", from: "San Francisco, CA", to: "Sacramento, CA", time: "2025-09-20 15:15:16" },
    { id: 2, name: "Juan Dela Cruz", price: "250", from: "San Francisco, CA", to: "Sacramento, CA", time: "2025-09-20 15:15:16" },
    { id: 3, name: "Juan Dela Cruz", price: "250", from: "San Francisco, CA", to: "Sacramento, CA", time: "2025-09-20 15:15:16" },
  ]);

  const handleDecline = (id) => {
    setPassengers(passengers.filter(p => p.id !== id));
  };

  const toggleMap = (id) => {
    setSelectedCardId(selectedCardId === id ? null : id);
  };

  const PassengerCard = ({ item }) => {
    const isShowingMap = selectedCardId === item.id;

    return (
      <Pressable 
        onPress={() => toggleMap(item.id)}
        style={[
          styles.card,
          isShowingMap && styles.cardActive
        ]}
      >
        <View style={styles.cardHeader}>
          <View style={styles.profileSection}>
            <Image 
              source={require('../assets/erp/driver/profile_blue.png')} 
              style={styles.avatar} 
            />
            <Text style={styles.passengerName}>{item.name}</Text>
          </View>
          <View style={styles.priceTag}>
            <Text style={styles.priceText}>₱{item.price}</Text>
          </View>
        </View>

        <View style={styles.locationSection}>
          <View style={styles.timelineContainer}>
            <View style={[styles.dot, { backgroundColor: '#3DD36B' }]} />
            <View style={styles.line} />
            <View style={[styles.dot, { backgroundColor: '#D63439' }]} />
          </View>
          <View style={styles.addressContainer}>
            <Text style={styles.addressCity}>{item.from}</Text>
            <Text style={styles.addressTime}>{item.time}</Text>
            <View style={{ height: 15 }} />
            <Text style={styles.addressCity}>{item.to}</Text>
            <Text style={styles.addressTime}>{item.time}</Text>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={[styles.actionBtn, { backgroundColor: '#0047AB' }]}
            onPress={() => router.push('/passenger_message_driver')}
          >
            <Text style={styles.btnText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#3DD36B' }]} onPress={() => router.push('/trip_driver')}>
            <Text style={styles.btnText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.actionBtn, { backgroundColor: '#D63439' }]}
            onPress={() => handleDecline(item.id)}
          >
            <Text style={styles.btnText}>Decline</Text>
          </TouchableOpacity>
        </View>

        {/* view map - clicked */}
        {isShowingMap && (
          <View style={styles.mapOverlay}>
            <TouchableOpacity style={styles.viewMapBtn} onPress={() => router.push('/view_map_driver')}>
              <Text style={styles.viewMapText}>View Map</Text>
            </TouchableOpacity>
          </View>
        )}
      </Pressable>
    );
  };

  return (
    <ImageBackground source={require('../assets/erp/bg.png')} style={styles.background}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Passenger Book List</Text>
      </View>

      <View style={styles.contentContainer}>
        {/* search bar - only showing when there are passengers */}
        {passengers.length > 0 ? (
          <>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={20} color="#0047AB" />
              <TextInput 
                style={styles.searchInput}
                placeholder="Search near location..."
                value={search}
                onChangeText={setSearch}
              />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollList}>
              {passengers.map((p) => (
                <PassengerCard key={p.id} item={p} />
              ))}
            </ScrollView>
          </>
        ) : (
          /* no booking available */
         <View style={styles.emptyContainer}>
            <View style={styles.emptyHeaderLabel}>
             <Text style={styles.emptyHeaderText}>Passenger Book List</Text>
        </View>
  
        <View style={styles.alertBox}>
             <View style={styles.alertCircle}>
            <Image source={require('../assets/erp/driver/fines_icon.png')}style={styles.customAlertImage} />
    </View>

    <Text style={styles.alertTitle}>No Booking Available</Text>
    
    <TouchableOpacity style={styles.okayBtn} onPress={() => router.back()}>
      <Text style={styles.okayBtnText}>Okay</Text>
    </TouchableOpacity>
  </View>
</View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: '#0047AB' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    gap: 15
  },
  headerTitle: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F0F7FF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginTop: 20,
    height: 45,
    borderWidth: 1,
    borderColor: '#0047AB',
  },
  searchInput: { flex: 1, marginLeft: 10, color: '#0047AB' },
  scrollList: { paddingTop: 20, paddingBottom: 40 },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    position: 'relative',
    overflow: 'hidden',
  },
  cardActive: {
    backgroundColor: '#B3D4FF', 
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  profileSection: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20 },
  passengerName: { fontSize: 20, color: '#333', fontWeight: '500' },
  priceTag: { backgroundColor: '#D63439', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10 },
  priceText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  locationSection: { flexDirection: 'row', marginTop: 15, paddingLeft: 10 },
  timelineContainer: { alignItems: 'center', width: 20 },
  dot: { width: 12, height: 12, borderRadius: 6 },
  line: { width: 2, flex: 1, backgroundColor: '#0047AB', borderStyle: 'dotted', marginVertical: 2 },
  addressContainer: { marginLeft: 10 },
  addressCity: { fontSize: 14, color: '#3DD36B', fontWeight: 'bold' },
  addressTime: { fontSize: 10, color: '#888' },
  buttonGroup: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, gap: 10 },
  actionBtn: { flex: 1, paddingVertical: 10, borderRadius: 10, alignItems: 'center' },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  mapOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(179, 212, 255, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  viewMapBtn: {
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0047AB',
  },
  viewMapText: { color: '#0047AB', fontWeight: 'bold', fontSize: 18 },

  //no passenger
  emptyContainer: { flex: 1, alignItems: 'center', paddingTop: 20 },
  emptyHeaderLabel: {
    backgroundColor: '#0047AB',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 100,
  },
  emptyHeaderText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  alertBox: {
    backgroundColor: '#D63439',
    width: '90%',
    borderRadius: 30,
    padding: 30,
    alignItems: 'center',
    position: 'relative',
  },
  alertCircle: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80, 
    marginBottom: 20,
  },
  alertTitle: { color: 'white', fontSize: 22, fontWeight: 'bold', marginBottom: 25 },
  okayBtn: {
    backgroundColor: 'white',
    width: '100%',
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  okayBtnText: { color: '#0047AB', fontSize: 18, fontWeight: 'bold' }
});

export default PassengerBookList;
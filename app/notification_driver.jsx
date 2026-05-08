import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView, 
  ImageBackground,
  Image
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const NotificationDriver = () => {
  const router = useRouter();
  
  const [currentFilter, setCurrentFilter] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // reusable notification item component
  const NotificationItem = ({ type, message, time, isGray }) => (
    <View style={[styles.notiItem, isGray && styles.notiItemGray]}>
      <View style={styles.iconCircle}>
        {type === 'rate' ? (
          <Image 
            source={require('../assets/erp/driver/star_icon.png')} 
            style={styles.customIcon} 
          />
        ) : (
          <Image 
            source={require('../assets/erp/driver/fines_icon.png')} 
            style={styles.customIcon} 
          />
        )}
      </View>
      <View style={styles.notiTextContainer}>
        <Text style={styles.notiMessage}>{message}</Text>
        <Text style={styles.notiTime}>{time}</Text>
      </View>
    </View>
  );

  const handleFilterSelect = (filter) => {
    setCurrentFilter(filter);
    setIsDropdownOpen(false);
  };

  return (
    <ImageBackground 
      source={require('../assets/erp/bg.png')} 
      style={styles.background}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          <View style={styles.filterWrapper}>
            <View style={styles.filterBar}>
              <Text style={styles.allText}>{currentFilter}</Text>
              <TouchableOpacity 
                style={styles.filterButtonSmall} 
                onPress={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <Text style={styles.filterTextSmall}>All </Text>
                <Ionicons 
                  name={isDropdownOpen ? "caret-down" : "caret-forward"} 
                  size={14} 
                  color="#0047AB" 
                />
              </TouchableOpacity>
            </View>

            {isDropdownOpen && (
              <View style={styles.dropdownSmall}>
                {['All', 'Rate', 'Report', 'Violation'].map((item) => (
                  <TouchableOpacity 
                    key={item} 
                    style={styles.dropdownItemSmall} 
                    onPress={() => handleFilterSelect(item)}
                  >
                    <Text style={[
                      styles.dropdownItemTextSmall, 
                      currentFilter === item && styles.boldFilterText
                    ]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* driver rate */}
          {(currentFilter === 'All' || currentFilter === 'Rate') && (
            <View style={styles.sectionCard}>
              <Text style={styles.sectionLabel}>Driver rate</Text>
              <NotificationItem type="rate" message="You received 4.5 star rate" time="1 Hour ago" />
              <NotificationItem type="rate" message="You received 5.0 star rate" time="2 Hours ago" />
              <NotificationItem type="rate" message="You received 4.8 star rate" time="5 Hours ago" />
              <NotificationItem type="rate" message="You received 3.8 star rate" time="Yesterday" isGray={true} />
              <NotificationItem type="rate" message="You received 4.0 star rate" time="2 Days ago" isGray={true} />
              <NotificationItem type="rate" message="You received 5.0 star rate" time="3 Days ago" isGray={true} />
              
              <TouchableOpacity style={styles.viewButtonLong} onPress={() => router.push('/violation_support_driver')}>
                <Text style={styles.viewButtonTextSmall}>View</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* violations & fines */}
          {(currentFilter === 'All' || currentFilter === 'Violation' || currentFilter === 'Report') && (
            <View style={styles.sectionCard}>
              <Text style={styles.sectionLabel}>Violation & Fines</Text>
              <NotificationItem type="violation" message="You received violation of pay fines" time="1 Hour ago" />
              <NotificationItem type="violation" message="You received violation of missing trip" time="3 Hours ago" />
              <NotificationItem type="violation" message="You received violation of uniform policy" time="6 Hours ago" />
              <NotificationItem type="violation" message="You received violation of appeal" time="Yesterday" isGray={true} />
              <NotificationItem type="violation" message="You received violation of late arrival" time="2 Days ago" isGray={true} />
              <NotificationItem type="violation" message="You received violation of reckless driving" time="1 Week ago" isGray={true} />
              
              <TouchableOpacity style={styles.viewButtonLong} onPress={() => router.push('/violation_support_driver')}>
                <Text style={styles.viewButtonTextSmall}>View</Text>
              </TouchableOpacity>
            </View>
          )}

        </ScrollView>
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
  headerTitle: { color: 'white', fontSize: 24, fontWeight: '500' },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F0F7FF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 15,
  },
  scrollContent: { paddingTop: 20, paddingBottom: 40 },
  filterWrapper: { zIndex: 10, marginBottom: 20, position: 'relative' },
  filterBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#D1E0F3',
  },
  allText: { fontSize: 22, color: '#0047AB', fontWeight: 'bold' },
  filterButtonSmall: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F7FF', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 12 },
  filterTextSmall: { color: '#0047AB', fontWeight: '500', fontSize: 13 },
  dropdownSmall: {
    position: 'absolute',
    top: 55, 
    right: 0,
    backgroundColor: 'white',
    borderRadius: 12,
    width: 120,
    padding: 5,
    elevation: 10, 
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    zIndex: 100,
  },
  dropdownItemSmall: { paddingVertical: 8, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#F0F7FF' },
  dropdownItemTextSmall: { fontSize: 13, color: '#666' },
  boldFilterText: { fontWeight: 'bold', color: '#0047AB' },
  sectionCard: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  sectionLabel: { textAlign: 'center', color: '#888', marginBottom: 10, fontSize: 16 },
  notiItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F7FF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E1E9F5',
  },
  notiItemGray: { backgroundColor: '#E0E0E0', borderColor: '#D0D0D0' },
  iconCircle: { 
    width: 35, 
    height: 35, 
    borderRadius: 17.5, 
    backgroundColor: 'white', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 12 
  },
  customIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  notiTextContainer: { flex: 1 },
  notiMessage: { color: '#0047AB', fontWeight: '600', fontSize: 14 },
  notiTime: { color: '#888', fontSize: 10 },
  

  viewButtonLong: {
    backgroundColor: '#0047AB',
    borderRadius: 10,
    paddingVertical: 12,
    width: '90%', 
    alignSelf: 'center', 
    marginTop: 10,
  },
  viewButtonTextSmall: { color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});

export default NotificationDriver;
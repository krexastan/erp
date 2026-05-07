import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TopNavbar, BottomNavbar } from '../component/bottom_navbar_driver';

const DashboardDriver = () => {
  return (
    <View style={styles.container}>
      {/* reusable top navbar*/}
      <TopNavbar status="Offline" notifications={5} />

      {/* map */}
      <View style={styles.mapContainer}>
        {/*later, replace this View with <MapView /> from react-native-maps */}
        <View style={styles.placeholderMap}>
          {/* placeholder */}
          <View style={styles.mapInnerBorder} />
        </View>
      </View>

      {/* reusable bottom navbar */}
      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F7FF' },
  mapContainer: { 
    flex: 1, 
    marginHorizontal: 10, 
    marginTop: 10, 
    marginBottom: 80, 
    borderRadius: 30, 
    overflow: 'hidden',
    backgroundColor: '#E0E0E0', 
    borderWidth: 1,
    borderColor: '#D1E0F3'
  },
  placeholderMap: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  mapInnerBorder: {
    width: '95%',
    height: '95%',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
  }
});

export default DashboardDriver;
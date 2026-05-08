import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ImageBackground 
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ScanDriver = () => {
  const router = useRouter();

  return (
    <ImageBackground 
      source={require('../assets/erp/bg.png')} 
      style={styles.background}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Scan</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.scanWrapper}>
          <View style={styles.scanFrame}>

            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
            
            {/* scanner */}
            <View style={styles.viewfinder} />
          </View>

          <Text style={styles.scanLabel}>Scan here</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { 
    flex: 1, 
    backgroundColor: '#0047AB' 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    gap: 15
  },
  headerTitle: { 
    color: 'white', 
    fontSize: 24, 
    fontWeight: '500' 
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F0F7FF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanWrapper: {
    alignItems: 'center',
    width: '80%',
  },
  scanFrame: {
    width: 280,
    height: 280,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  viewfinder: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: '#0047AB',
    opacity: 0.1,
  },
  scanLabel: {
    marginTop: 20,
    fontSize: 22,
    color: '#0047AB',
    fontWeight: '500',
  },
  corner: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderColor: '#0047AB',
  },
  topLeft: {
    top: -10,
    left: -10,
    borderTopWidth: 15,
    borderLeftWidth: 15,
  },
  topRight: {
    top: -10,
    right: -10,
    borderTopWidth: 15,
    borderRightWidth: 15,
  },
  bottomLeft: {
    bottom: -10,
    left: -10,
    borderBottomWidth: 15,
    borderLeftWidth: 15,
  },
  bottomRight: {
    bottom: -10,
    right: -10,
    borderBottomWidth: 15,
    borderRightWidth: 15,
  },
});

export default ScanDriver;
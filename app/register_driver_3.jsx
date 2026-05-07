import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { useRouter } from 'expo-router';

const RegisterDriver3 = () => {
  const router = useRouter();
  const [preferredShift, setPreferredShift] = useState('Morning');

  return (
    <ImageBackground 
      source={require('../assets/erp/bg.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.container}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent} 
          bounces={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.topSection}>
            <View style={styles.logoBox}>
              <Image 
                source={require('../assets/erp/erp_long_logo.png')} 
                style={styles.logoImage} 
              /> 
            </View>
          </View>

          <View style={styles.bottomSection}>
            <View style={styles.headerBadge}>
              <Text style={styles.headerBadgeText}>Driver Registration</Text>
            </View>
            
            <Text style={styles.stepTitle}>Work Details</Text>

            {/* pref shift */}
            <Text style={styles.labelText}>Preferred Shift:</Text>
            <View style={styles.shiftRow}>
              {['Morning', 'Evening', 'Night'].map((shift) => (
                <TouchableOpacity 
                  key={shift}
                  style={[
                    styles.shiftButton, 
                    preferredShift === shift && styles.shiftButtonActive
                  ]}
                  onPress={() => setPreferredShift(shift)}
                >
                  <Text style={[
                    styles.shiftButtonText, 
                    preferredShift === shift && styles.shiftButtonTextActive
                  ]}>
                    {shift}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* pref payout */}
            <Text style={styles.labelText}>Preferred Payout</Text>
            
            <View style={styles.payoutGrid}>
              <View style={styles.payoutRow}>
                    {/* cash */}
                <TouchableOpacity style={[styles.payoutBox, { backgroundColor: '#D63439' }]}>
                  <Text style={styles.payoutText}>Cash</Text>
                </TouchableOpacity>
                    {/* bank transfer */}
                <TouchableOpacity style={[styles.payoutBox, { backgroundColor: '#FFD700' }]}>
                  <Text style={[styles.payoutText, { color: '#0047AB' }]}>Bank Transfer</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.payoutRow}>
                {/* gcash */}
                <TouchableOpacity style={[styles.payoutBox, { backgroundColor: '#007DFE' }]}>
                   <Image 
                    source={require('../assets/erp/gcash.png')} 
                    style={styles.payoutLogo} 
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                {/* maya */}
                <TouchableOpacity style={[styles.payoutBox, { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E0E0E0' }]}>
                   <Image 
                    source={require('../assets/erp/maya.png')} 
                    style={styles.payoutLogo} 
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footerRow}>
              <Text style={styles.pageIndicator}>3 / 5</Text>
              
              <View style={styles.navButtons}>
                <TouchableOpacity 
                  style={styles.backNavButton} 
                  onPress={() => router.back()}
                >
                  <Text style={styles.backNavText}>Back</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.nextNavButton} 
                  onPress={() => router.push('/register_driver_4')}
                >
                  <Text style={styles.nextNavText}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  container: { flex: 1 },
  scrollContent: { flexGrow: 1 },
  topSection: { height: 220, justifyContent: 'center', alignItems: 'center', paddingTop: 40 },
  logoBox: { 
    backgroundColor: 'white', width: 250, height: 100, borderRadius: 15, 
    justifyContent: 'center', alignItems: 'center', elevation: 8,
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 4,
  },
  logoImage: { width: '90%', height: '90%', resizeMode: 'contain' },
  bottomSection: { 
    flex: 1, backgroundColor: '#F0F7FF', borderTopLeftRadius: 50, borderTopRightRadius: 50, 
    paddingTop: 30, paddingHorizontal: 25, paddingBottom: 40 
  },
  headerBadge: { 
    backgroundColor: '#0047AB', borderRadius: 10, paddingVertical: 10, 
    alignItems: 'center', marginBottom: 10, marginHorizontal: 10 
  },
  headerBadgeText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  stepTitle: { textAlign: 'center', color: '#0047AB', fontSize: 14, fontWeight: '600', marginBottom: 20 },
  labelText: { fontSize: 11, color: '#4A78B5', fontWeight: '700', marginBottom: 8 },

  // pref shift
  shiftRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  shiftButton: { 
    flex: 1, height: 40, backgroundColor: 'white', borderRadius: 8, 
    borderWidth: 1, borderColor: '#0047AB', justifyContent: 'center', 
    alignItems: 'center', marginHorizontal: 4 
  },
  shiftButtonActive: { backgroundColor: '#0047AB' },
  shiftButtonText: { color: '#0047AB', fontWeight: 'bold', fontSize: 14 },
  shiftButtonTextActive: { color: 'white' },

  // payout options
  payoutGrid: { marginTop: 5 },
  payoutRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  payoutBox: { 
    flex: 1, height: 45, borderRadius: 8, justifyContent: 'center', 
    alignItems: 'center', marginHorizontal: 4, elevation: 2,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 1,
  },
  payoutText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  payoutLogo: { width: '60%', height: '70%' },


  footerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 20 },
  pageIndicator: { fontSize: 16, color: '#0047AB', fontWeight: 'bold' },
  navButtons: { flexDirection: 'row', gap: 10 },
  backNavButton: { 
    paddingVertical: 12, paddingHorizontal: 25, borderRadius: 10, 
    borderWidth: 1.5, borderColor: '#0047AB', backgroundColor: '#EBF4FF' 
  },
  backNavText: { color: '#0047AB', fontWeight: 'bold' },
  nextNavButton: { paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10, backgroundColor: '#0047AB' },
  nextNavText: { color: 'white', fontWeight: 'bold' },
});

export default RegisterDriver3;
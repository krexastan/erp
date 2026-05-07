import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, ImageBackground, Image, 
  TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform 
} from 'react-native';
import { useRouter } from 'expo-router';

const RegisterPassenger2 = () => {
  const router = useRouter();
  const [payout, setPayout] = useState('cash');
  const [shift, setShift] = useState('english');
  const [language, setLanguage] = useState('normal');

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
        <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
          <View style={styles.topSection}>
            <View style={styles.logoBox}>
              <Image source={require('../assets/erp/erp_logo.jpg')} style={styles.logoImage} /> 
            </View>
          </View>

          <View style={styles.bottomSection}>
            <View style={styles.headerBadge}>
              <Text style={styles.headerBadgeText}>Passenger Registration</Text>
            </View>
            <Text style={styles.stepTitle}>Preferences</Text>

            <Text style={styles.sectionLabel}>Preferred Payout</Text>
            <View style={styles.buttonRow}>
              {/* cash */}
              <TouchableOpacity 
                style={[
                  styles.payoutBtn, 
                  { backgroundColor: '#D32F2F' },
                  payout === 'cash' && { borderWidth: 3, borderColor: '#0047AB' }
                ]} 
                onPress={() => setPayout('cash')}
              >
                <Text style={styles.payoutBtnText}>Cash</Text>
              </TouchableOpacity>

              {/* bank transfer */}
              <TouchableOpacity 
                style={[
                  styles.payoutBtn, 
                  { backgroundColor: '#FFC107' },
                  payout === 'bank' && { borderWidth: 3, borderColor: '#0047AB' }
                ]} 
                onPress={() => setPayout('bank')}
              >
                <Text style={styles.payoutBtnText}>Bank Transfer</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
              {/* gcash */}
              <TouchableOpacity 
                style={[
                  styles.logoBtn, 
                  styles.blueLogoBtn,
                  payout === 'gcash' && { borderWidth: 3, borderColor: '#0047AB' }
                ]} 
                onPress={() => setPayout('gcash')}
              >
                <Image source={require('../assets/erp/gcash.png')} style={styles.innerLogo} />
              </TouchableOpacity>

              {/* maya */}
              <TouchableOpacity 
                style={[
                  styles.logoBtn, 
                  styles.whiteLogoBtn,
                  payout === 'maya' && { borderWidth: 3, borderColor: '#0047AB' }
                ]} 
                onPress={() => setPayout('maya')}
              >
                <Image source={require('../assets/erp/maya.png')} style={styles.innerLogo} />
              </TouchableOpacity>
            </View>

            <Text style={styles.sectionLabel}>Preferred Shift:</Text>

            <View style={styles.buttonRow}>
              {['english', 'filipino', 'others'].map(s => (
                <TouchableOpacity key={s} style={[styles.shiftBtn, shift === s ? styles.activeBlue : styles.inactiveWhite]} onPress={() => setShift(s)}>
                  <Text style={shift === s ? styles.whiteText : styles.blueText}>{s.charAt(0).toUpperCase() + s.slice(1)}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.sectionLabel}>Preferred Language:</Text>
            {['normal', 'wheelchair', 'pet'].map(l => (
              <TouchableOpacity key={l} style={[styles.fullWidthBtn, language === l ? styles.activeBlue : styles.inactiveWhite]} onPress={() => setLanguage(l)}>
                <Text style={language === l ? styles.whiteText : styles.blueText}>{l === 'normal' ? 'Normal' : l === 'wheelchair' ? 'Wheelchair Access' : 'Pet-Friendly Ride'}</Text>
              </TouchableOpacity>
            ))}

            <View style={styles.footerRow}>
              <Text style={styles.pageIndicator}>2 / 3</Text>
              <View style={styles.navButtons}>
                <TouchableOpacity style={styles.backNavButton} onPress={() => router.back()}>
                  <Text style={styles.backNavText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextNavButton} onPress={() => router.push('/register_passenger_3')}>
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
  logoBox: { backgroundColor: 'white', width: 150, height: 150, borderRadius: 25, justifyContent: 'center', alignItems: 'center', elevation: 8 },
  logoImage: { width: 110, height: 110, resizeMode: 'contain' },
  bottomSection: { flex: 1, backgroundColor: '#F0F7FF', borderTopLeftRadius: 50, borderTopRightRadius: 50, paddingTop: 30, paddingHorizontal: 25, paddingBottom: 40 },
  headerBadge: { backgroundColor: '#0047AB', borderRadius: 10, paddingVertical: 10, alignItems: 'center', marginBottom: 5, marginHorizontal: 10 },
  headerBadgeText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  stepTitle: { textAlign: 'center', color: '#0047AB', fontSize: 14, fontWeight: '600', marginBottom: 15 },
  sectionLabel: { fontSize: 12, color: '#4A78B5', fontWeight: '700', marginBottom: 8, marginTop: 10 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10, marginBottom: 10 },
  payoutBtn: { flex: 1, height: 40, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  payoutBtnText: { color: 'white', fontWeight: 'bold', fontSize: 15 },
  logoBtn: { flex: 1, height: 40, borderRadius: 8, borderWidth: 1, borderColor: '#D1E0F3', justifyContent: 'center', alignItems: 'center' },
  blueLogoBtn: { backgroundColor: '#007AFF' },
  whiteLogoBtn: { backgroundColor: 'white' },
  innerLogo: { width: 40, height: 20, resizeMode: 'contain' },
  shiftBtn: { flex: 1, height: 40, borderRadius: 8, borderWidth: 1, justifyContent: 'center', alignItems: 'center' },
  fullWidthBtn: { width: '100%', height: 40, borderRadius: 8, borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  activeBlue: { backgroundColor: '#0047AB', borderColor: '#0047AB' },
  inactiveWhite: { backgroundColor: 'white', borderColor: '#0047AB' },
  whiteText: { color: 'white', fontWeight: '600' },
  blueText: { color: '#0047AB', fontWeight: '600' },
  footerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30 },
  pageIndicator: { fontSize: 16, color: '#0047AB', fontWeight: 'bold' },
  navButtons: { flexDirection: 'row', gap: 10 },
  backNavButton: { paddingVertical: 12, paddingHorizontal: 40, borderRadius: 10, borderWidth: 1.5, borderColor: '#0047AB', backgroundColor: '#EBF4FF' },
  backNavText: { color: '#0047AB', fontWeight: 'bold' },
  nextNavButton: { paddingVertical: 12, paddingHorizontal: 40, borderRadius: 10, backgroundColor: '#0047AB' },
  nextNavText: { color: 'white', fontWeight: 'bold' },
});

export default RegisterPassenger2;

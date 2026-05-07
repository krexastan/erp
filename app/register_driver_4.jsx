import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform,
  Alert
} from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const RegisterDriver4 = () => {
  const router = useRouter();

  const handleUploadPress = () => {
    Alert.alert("upload photos");
  };

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

            {/* driver license */}
            <Text style={styles.labelText}>Driver's License</Text>
            <View style={styles.uploadRow}>
              <TouchableOpacity style={styles.uploadBox} onPress={handleUploadPress}>
                <Text style={styles.uploadBoxText}>Front +</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.uploadBox} onPress={handleUploadPress}>
                <Text style={styles.uploadBoxText}>Back +</Text>
              </TouchableOpacity>
            </View>

            {/* nbi / police clearance */}
            <Text style={styles.labelText}>NBI or Police Clearance</Text>
            <View style={styles.attachWrapper}>
              <TextInput 
                style={styles.attachInput} 
                placeholder="Uploaded Docs name" 
                placeholderTextColor="#A9B9D1" 
                editable={false}
              />
              <TouchableOpacity style={styles.attachButton}>
                <Text style={styles.attachButtonText}>Attach File</Text>
              </TouchableOpacity>
            </View>

            {/* photo*/}
            <Text style={styles.labelText}>1x1 Photo / Selfie</Text>
            <View style={styles.attachWrapper}>
              <TextInput 
                style={styles.attachInput} 
                placeholder="Uploaded Docs name" 
                placeholderTextColor="#A9B9D1" 
                editable={false}
              />
              <TouchableOpacity style={styles.attachButton}>
                <Text style={styles.attachButtonText}>Attach File</Text>
              </TouchableOpacity>
            </View>

            {/* cam */}
            <TouchableOpacity style={styles.cameraButton}>
              <FontAwesome name="camera" size={24} color="white" />
            </TouchableOpacity>

            <View style={styles.footerRow}>
              <Text style={styles.pageIndicator}>4 / 5</Text>
              
              <View style={styles.navButtons}>
                <TouchableOpacity 
                  style={styles.backNavButton} 
                  onPress={() => router.back()}
                >
                  <Text style={styles.backNavText}>Back</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.nextNavButton} 
                  onPress={() => router.push('/register_driver_5')}
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
  labelText: { fontSize: 11, color: '#4A78B5', fontWeight: '700', marginBottom: 4 },

  // upload btn
  uploadRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  uploadBox: { 
    width: '48%', height: 80, backgroundColor: 'white', borderRadius: 10, 
    borderWidth: 1, borderColor: '#D1E0F3', justifyContent: 'center', alignItems: 'center',
    elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2,
  },
  uploadBoxText: { color: '#0047AB', fontSize: 16, fontWeight: '500' },

  // attachment
  attachWrapper: { 
    flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', 
    borderWidth: 1, borderColor: '#D1E0F3', borderRadius: 8, height: 45, marginBottom: 15,
    paddingHorizontal: 10
  },
  attachInput: { flex: 1, fontSize: 14, color: '#333' },
  attachButton: { backgroundColor: '#E0E0E0', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 5, borderWidth: 1, borderColor: '#BDBDBD' },
  attachButtonText: { fontSize: 12, color: '#757575' },

  // cam
  cameraButton: { 
    backgroundColor: '#0056D2', width: '100%', height: 45, borderRadius: 10, 
    justifyContent: 'center', alignItems: 'center', marginTop: 10 
  },


  footerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 30 },
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

export default RegisterDriver4;
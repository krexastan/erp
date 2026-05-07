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
  Platform 
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const RegisterDriver2 = () => {
  const router = useRouter();

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
            
            <Text style={styles.stepTitle}>Basic Information</Text>

            {/* driver license */}
            <Text style={styles.labelText}>Driver's License Number</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.iconBox}>
                <Ionicons name="card-outline" size={18} color="white" />
              </View>
              <TextInput 
                style={styles.input} 
                placeholder="Driver's License Number" 
                placeholderTextColor="#A9B9D1" 
              />
            </View>

            {/* license expiry date */}
            <Text style={styles.labelText}>License Expiry Date Work Details</Text>
            <View style={styles.inputWrapper}>
              <TextInput 
                style={[styles.input, { paddingLeft: 15 }]} 
                placeholder="MM/DD/YYYY" 
                placeholderTextColor="#A9B9D1" 
              />
              <FontAwesome name="calendar" size={16} color="#0047AB" style={styles.rightIcon} />
            </View>


            <View style={styles.footerRow}>
              <Text style={styles.pageIndicator}>2 / 5</Text>
              
              <View style={styles.navButtons}>
                <TouchableOpacity 
                  style={styles.backNavButton} 
                  onPress={() => router.back()}
                >
                  <Text style={styles.backNavText}>Back</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.nextNavButton} 
                  onPress={() => router.push('/register_driver_3')}
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
  
  topSection: { 
    height: 220, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingTop: 40 
  },
  
  logoBox: { 
    backgroundColor: 'white', 
    width: 250, 
    height: 100, 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  logoImage: { width: '90%', height: '90%', resizeMode: 'contain' },
  
  bottomSection: { 
    flex: 1, 
    backgroundColor: '#F0F7FF', 
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50, 
    paddingTop: 30, 
    paddingHorizontal: 25, 
    paddingBottom: 40 
  },
  
  headerBadge: { 
    backgroundColor: '#0047AB', 
    borderRadius: 10, 
    paddingVertical: 10, 
    alignItems: 'center', 
    marginBottom: 10, 
    marginHorizontal: 10 
  },
  headerBadgeText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  
  stepTitle: { 
    textAlign: 'center', 
    color: '#0047AB', 
    fontSize: 14, 
    fontWeight: '600', 
    marginBottom: 20 
  },
  
  labelText: { 
    fontSize: 11, 
    color: '#4A78B5', 
    fontWeight: '700', 
    marginBottom: 4 
  },
  
  inputWrapper: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#D1E0F3', 
    borderRadius: 8, 
    backgroundColor: 'white', 
    height: 45,
    marginBottom: 12,
    overflow: 'hidden'
  },
  
  iconBox: { 
    backgroundColor: '#0047AB', 
    width: 45, 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  
  input: { 
    flex: 1, 
    paddingHorizontal: 12, 
    fontSize: 14, 
    color: '#333' 
  },
  
  rightIcon: { 
    marginRight: 15 
  },
  
  footerRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginTop: 320
  },
  
  pageIndicator: { 
    fontSize: 16, 
    color: '#0047AB', 
    fontWeight: 'bold' 
  },
  
  navButtons: { 
    flexDirection: 'row', 
    gap: 10 
  },
  
  backNavButton: { 
    paddingVertical: 12, 
    paddingHorizontal: 25, 
    borderRadius: 10, 
    borderWidth: 1.5, 
    borderColor: '#0047AB', 
    backgroundColor: '#EBF4FF' 
  },
  backNavText: { color: '#0047AB', fontWeight: 'bold' },
  
  nextNavButton: { 
    paddingVertical: 12, 
    paddingHorizontal: 30, 
    borderRadius: 10, 
    backgroundColor: '#0047AB' 
  },
  nextNavText: { color: 'white', fontWeight: 'bold' },
});

export default RegisterDriver2;
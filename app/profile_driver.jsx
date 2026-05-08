import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView,
  ImageBackground
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ProfileDriver = () => {
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
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* avatar */}
          <View style={styles.avatarSection}>
            <View style={styles.avatarWrapper}>
              <Image 
                source={require('../assets/erp/driver/profile_blue.png')} 
                style={styles.profileImage} 
              />
              <View style={styles.onlineDot} />
            </View>
            <Text style={styles.nameText}>Maria Dela Cruz</Text>
            <Text style={styles.roleText}>Driver</Text>
          </View>

          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Personal Info</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Change Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Update Contact Info</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Notification Preference</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuText}>Personal Info</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/profile_setting_driver')}>
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>

            {/* logout */}
            <TouchableOpacity style={styles.logoutButton} onPress={() => {
              if (router.canDismiss()) { router.dismissAll();}
              router.replace('/'); }} 
>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>

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
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 30,
  },
  scrollContent: { paddingTop: 30, paddingBottom: 40 },
  avatarSection: { alignItems: 'center', marginBottom: 25 },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#007DFE',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  profileImage: { width: 120, height: 120, borderRadius: 60 },
  onlineDot: {
    position: 'absolute',
    bottom: 8,
    right: 12,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#3DD36B',
    borderWidth: 3,
    borderColor: '#F0F7FF',
  },
  nameText: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A' },
  roleText: { fontSize: 16, color: '#0047AB', fontWeight: '500' },
  menuContainer: { width: '100%' },
  menuItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#0047AB',
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 5,
  },
  menuText: { color: '#0047AB', fontSize: 16, fontWeight: '600' },
  logoutButton: {
    backgroundColor: '#0047AB',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  logoutText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default ProfileDriver;
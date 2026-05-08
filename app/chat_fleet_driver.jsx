import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ChatFleetDriver = () => {
  const router = useRouter();

  // chat history data
  const chats = [
    { id: 1, name: "Fleet Manager", message: "hellu!", time: "20:20", unread: 5 },
    { id: 2, name: "Fleet Manager", message: "hallo po....", time: "20:20", unread: 5 },
    { id: 3, name: "Fleet Manager", message: "cnu ka??..", time: "20:20", unread: 5 },
    { id: 4, name: "Fleet Manager", message: "hi puuu", time: "20:20", unread: 5 },
  ];

  return (
    <ImageBackground 
      source={require('../assets/erp/bg.png')} 
      style={styles.background}
    >

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat History</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Chat History for Fleet Manager</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {chats.map((chat) => (
            <TouchableOpacity 
              key={chat.id} 
              style={styles.chatRow}
              onPress={() => router.push('/support_chat_driver')} 
            >
              <View style={styles.avatarContainer}>
                <Image 
                  source={require('../assets/erp/driver/profile_blue.png')} 
                  style={styles.avatar} 
                />
                {chat.unread > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{chat.unread}</Text>
                  </View>
                )}
              </View>

              <View style={styles.chatInfo}>
                <View style={styles.nameRow}>
                  <Text style={styles.managerName}>{chat.name}</Text>
                  <Text style={styles.timeText}>{chat.time}</Text>
                </View>
                <Text style={styles.messagePreview}>{chat.message}</Text>
              </View>
            </TouchableOpacity>
          ))}
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
  headerTitle: { color: 'white', fontSize: 22, fontWeight: '500' },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F0F7FF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 0, 
  },
  banner: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 25,
    marginBottom: 15,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  bannerText: {
    color: '#0047AB',
    fontSize: 18,
    fontWeight: '500',
  },
  chatRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E9F5',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 2,
    borderColor: '#0047AB',
  },
  badge: {
    position: 'absolute',
    right: -2,
    top: -2,
    backgroundColor: '#D63439',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'white',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  chatInfo: {
    flex: 1,
    marginLeft: 15,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  managerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0047AB',
  },
  timeText: {
    fontSize: 10,
    color: '#888',
  },
  messagePreview: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default ChatFleetDriver;
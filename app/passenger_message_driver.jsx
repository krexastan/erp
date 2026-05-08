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
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const PassengerMessageDriver = () => {
  const router = useRouter();
  const [message, setMessage] = useState('');

  //chat placeholder
  const [chatHistory, setChatHistory] = useState([
    { id: 1, text: "hello po!!", sender: 'passenger', time: "18:20" },
    { id: 2, text: "papunta na po, maam. wait lang po", sender: 'driver', time: "18:23" },
    { id: 3, text: "osige!!!", sender: 'passenger', time: "18:25" },
  ]);

  return (
    <ImageBackground 
      source={require('../assets/erp/bg.png')} 
      style={styles.background}
    >
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
          <Image 
            source={require('../assets/erp/driver/profile_blue.png')} 
            style={styles.headerAvatar} 
          />
          <Text style={styles.passengerName}>Juan Dela Cruz</Text>
        </View>
        
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconCircle}>
            <Ionicons name="call" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="dots-vertical" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.contentContainer}
      >
        <View style={styles.messageBoard}>
          <View style={styles.titleBanner}>
            <Text style={styles.titleText}>Passenger Message</Text>
          </View>

          <ScrollView 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={styles.chatScroll}
          >
            {chatHistory.map((item) => (
              <View 
                key={item.id} 
                style={[
                  styles.messageWrapper, 
                  item.sender === 'driver' ? styles.driverWrapper : styles.passengerWrapper
                ]}
              >
                {item.sender === 'passenger' && (
                  <Image 
                    source={require('../assets/erp/driver/profile_blue.png')} 
                    style={styles.chatAvatar} 
                  />
                )}
                <View style={styles.bubbleContainer}>
                  <View style={[
                    styles.bubble, 
                    item.sender === 'driver' ? styles.driverBubble : styles.passengerBubble
                  ]}>
                    <Text style={[
                      styles.messageText, 
                      item.sender === 'driver' ? styles.driverText : styles.passengerText
                    ]}>
                      {item.text}
                    </Text>
                  </View>
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* chat input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type your message..."
              placeholderTextColor="#AAA"
              value={message}
              onChangeText={setMessage}
              multiline
            />
            <TouchableOpacity style={styles.sendButton}>
              <Ionicons name="send" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: '#0047AB' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  headerAvatar: { width: 35, height: 35, borderRadius: 17.5, borderWidth: 1, borderColor: 'white' },
  passengerName: { color: 'white', fontSize: 18, fontWeight: '500' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 15 },
  iconCircle: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white'
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F0F7FF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden'
  },
  messageBoard: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  titleBanner: {
    backgroundColor: '#0047AB',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  chatScroll: { paddingBottom: 100 },
  messageWrapper: { flexDirection: 'row', marginBottom: 20, maxWidth: '85%' },
  passengerWrapper: { alignSelf: 'flex-start' },
  driverWrapper: { alignSelf: 'flex-end', flexDirection: 'row-reverse' },
  chatAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  bubbleContainer: { flexShrink: 1 },
  bubble: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 1,
  },
  passengerBubble: {
    backgroundColor: '#0047AB',
    borderTopLeftRadius: 0,
  },
  driverBubble: {
    backgroundColor: 'white',
    borderTopRightRadius: 0,
  },
  messageText: { fontSize: 14, lineHeight: 20 },
  passengerText: { color: 'white' },
  driverText: { color: '#333' },
  timeText: { 
    fontSize: 10, 
    color: '#888', 
    marginTop: 4, 
    alignSelf: 'flex-start' 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    maxHeight: 100,
    borderWidth: 1,
    borderColor: '#D1E0F3',
    color: '#333',
  },
  sendButton: {
    backgroundColor: '#0047AB',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  }
});

export default PassengerMessageDriver;
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Image
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ViolationSupportDriver = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Violation'); 

  return (
    <ImageBackground
      source={require('../assets/erp/bg.png')}
      style={styles.background}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Violation / Support</Text>
      </View>

      <View style={styles.contentContainer}>
        {/* tab switcher */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'Violation' && styles.activeTab]}
            onPress={() => setActiveTab('Violation')}
          >
            <Text style={[styles.tabText, activeTab === 'Violation' && styles.activeTabText]}>
              Violation & Fines
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'Support' && styles.activeTab]}
            onPress={() => setActiveTab('Support')}
          >
            <Text style={[styles.tabText, activeTab === 'Support' && styles.activeTabText]}>
              Support Page
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          {activeTab === 'Violation' ? (
            <ViolationContent router={router} />
          ) : (
            <SupportContent router={router} />
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

// sub component for violation and support content

const ViolationContent = ({ router }) => (
  <View style={styles.innerContent}>
    <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#00C853' }]}>
      <Text style={styles.actionButtonText}>Pay Fines</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#2196F3' }]}>
      <Text style={styles.actionButtonText}>Appeal</Text>
    </TouchableOpacity>

    <View style={styles.card}>
      <Text style={styles.cardLabel}>List of recorded violation</Text>
      {[1, 2, 3].map((item) => (
        <View key={item} style={styles.recordItem}>
          <View style={styles.numberBox}><Text style={styles.numberText}>{item}</Text></View>
          <View style={styles.recordTextContainer}>
            <Text style={styles.recordTitle}>Recorded violation</Text>
            <Text style={styles.recordTime}>1 Hour ago</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#D1E0F3" />
        </View>
      ))}
      <TouchableOpacity style={styles.viewBtn}>
        <Text style={styles.viewBtnText}>View</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const SupportContent = ({ router }) => (
  <View style={styles.innerContent}>
    {/* chat history */}
    <TouchableOpacity style={styles.chatHeader} onPress={() => router.push('/chat_fleet_driver')}>
      <Image source={require('../assets/erp/driver/profile_blue.png')} style={styles.chatAvatar} />
       <View style={styles.chatBadge}>
          <Text style={styles.chatBadgeText}>5</Text>
      </View>
     <Text style={styles.chatHeaderText}>Chat history for fleet manager...</Text>
    </TouchableOpacity>

    {/* submit tix */}
    <View style={[styles.card, { backgroundColor: '#E57373' }]}>
      <Text style={[styles.cardLabel, { color: 'white' }]}>Submitted Ticket</Text>
      {[1, 2, 3].map((item) => (
        <View key={item} style={styles.recordItem}>
          <View style={styles.numberBox}><Text style={styles.numberText}>{item}</Text></View>
          <View style={styles.recordTextContainer}>
            <Text style={styles.recordTitle}>Record Ticket</Text>
            <Text style={styles.recordTime}>1 Hour ago</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#D1E0F3" />
        </View>
      ))}
      <TouchableOpacity style={[styles.viewBtn, { backgroundColor: 'white' }]}>
        <Text style={[styles.viewBtnText, { color: '#E57373' }]}>View</Text>
      </TouchableOpacity>
    </View>

    {/* new support */}
    <View style={styles.card}>
      <Text style={styles.cardLabel}>Support Ticket List</Text>
      <View style={styles.uploadBox}>
        <Ionicons name="add" size={50} color="#0047AB" />
      </View>
      <TextInput style={styles.input} placeholder="Issue type:" placeholderTextColor="#AAA" />
      <TextInput 
        style={[styles.input, { height: 80, textAlignVertical: 'top' }]} 
        placeholder="Description type here!..." 
        placeholderTextColor="#AAA"
        multiline
      />
      <TouchableOpacity style={[styles.viewBtn, { width: '80%' }]}>
        <Text style={styles.viewBtnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  </View>
);

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
    paddingHorizontal: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: '#D1E0F3',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#0047AB',
  },
  tabText: { color: '#0047AB', fontWeight: '500' },
  activeTabText: { color: 'white' },
  scrollContent: { paddingTop: 20, paddingBottom: 40 },
  innerContent: { gap: 15 },
  actionButton: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  actionButtonText: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    alignItems: 'center',
  },
  cardLabel: { fontSize: 16, color: '#0047AB', marginBottom: 15, fontWeight: '500' },
  recordItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D1E0F3',
    borderRadius: 10,
    marginBottom: 8,
    width: '100%',
  },
  numberBox: {
    backgroundColor: '#D63439',
    width: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
  },
  numberText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  recordTextContainer: { flex: 1, paddingLeft: 10 },
  recordTitle: { color: '#0047AB', fontWeight: 'bold', fontSize: 14 },
  recordTime: { color: '#AAA', fontSize: 10 },
  viewBtn: {
    backgroundColor: '#0047AB',
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D1E0F3',
    textAlign: 'center'
  },
  chatAvatar: { width: 40, height: 40, borderRadius: 20 },
  chatBadge: {
    position: 'absolute',
    left: 40,
    top: 5,
    backgroundColor: '#D63439',
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white'
  },
  chatBadgeText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  chatHeaderText: { flex: 1, marginLeft: 15, color: '#888' },
  uploadBox: {
    width: '100%',
    height: 150,
    borderWidth: 1.5,
    borderColor: '#0047AB',
    borderRadius: 15,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    backgroundColor: '#F0F7FF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    color: '#0047AB',
  },
});

export default ViolationSupportDriver;
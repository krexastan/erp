import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import BottomNavBar from "../component/bottom_navbar_passenger";

const SupportPassenger = () => {
  const router = useRouter();

  const faqs = [
    {
      id: "Q1",
      question: "How do I book a ride?",
      answer:
        "Open the Passenger App, enter your pickup and drop-off location, then tap \"Book Ride.\" The system will automatically find the nearest available driver. You'll see the driver's name, vehicle details, and estimated time of arrival.",
    },
    {
      id: "Q2",
      question: "How do I pay for my ride?",
      answer:
        "You can pay using App Load, cash, GCash, or Card. After the trip, choose your preferred payment method and confirm the amount displayed on your screen.",
    },
    {
      id: "Q3",
      question: "Can I schedule a ride in advance?",
      answer:
        'Yes! Tap on the "Schedule Ride" option when booking. You can select your desired date and time, and the system will automatically assign a driver before your trip.',
    },
    {
      id: "Q4",
      question: "How do I know if my booking was successful?",
      answer:
        "Once confirmed, your screen will show driver details, vehicle information, and a real-time tracking map.",
    },
  ];

  return (
    <ImageBackground
      source={require("../assets/erp/bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.header}>
          <Image
            source={require("../assets/erp/passenger/erp_long_logo.png")}
            style={styles.headerLogo}
          />
        </View>

        <View style={styles.contentContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            bounces={false}
          >
            <Text style={styles.mainTitle}>Support</Text>
            <Text style={styles.sectionTitle}>FAQ's</Text>

            {faqs.map((faq) => (
              <View key={faq.id} style={styles.faqCard}>
                <Text style={styles.faqQuestion}>
                  {faq.id}. {faq.question}
                </Text>
                <Text style={styles.faqAnswer}>{faq.answer}</Text>
              </View>
            ))}

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.helpBtn}
                onPress={() => router.push("/agent_chat_passenger")}
              >
                <Text style={styles.btnText}>Help?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.chatBtn}
                onPress={() => router.push("/agent_chat_passenger")}
              >
                <Text style={styles.btnText}>Chat with Agent</Text>
              </TouchableOpacity>
            </View>

            <View style={{ height: 100 }} />
          </ScrollView>
        </View>
        <BottomNavBar />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  safeContainer: { flex: 1 },
  header: { height: 150, justifyContent: "center", alignItems: "center" },
  headerLogo: { width: 220, height: 70, resizeMode: "contain" },
  contentContainer: {
    flex: 1,
    backgroundColor: "#F0F7FF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  scrollContent: { paddingHorizontal: 25, paddingTop: 30 },
  mainTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#0047AB",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0047AB",
    marginBottom: 20,
  },
  faqCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0047AB",
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 10,
    gap: 12,
  },
  helpBtn: {
    backgroundColor: "#0047AB",
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  chatBtn: {
    backgroundColor: "#1E90FF",
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
});

export default SupportPassenger;

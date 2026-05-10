import React, { useState } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import { BottomNavbar } from "../component/bottom_navbar_driver";

const EarningDriver = () => {
  const router = useRouter();
  const [viewMode, setViewMode] = useState("day");
  const [showExport, setShowExport] = useState(false);
  const [selectedHistoryId, setSelectedHistoryId] = useState(null);

  const historyData = [
    {
      id: 1,
      name: "Maria Dela Cruz",
      location: "San Francisco, CA",
      date: "2025-09-20 15:15:16",
      amount: "₱ 250",
    },
    {
      id: 2,
      name: "Maria Dela Cruz",
      location: "San Francisco, CA",
      date: "2025-09-20 15:15:16",
      amount: "₱ 250",
    },
    {
      id: 3,
      name: "Maria Dela Cruz",
      location: "San Francisco, CA",
      date: "2025-09-20 15:15:16",
      amount: "₱ 250",
    },
  ];

  const toggleView = () => {
    setViewMode(viewMode === "day" ? "week" : "day");
    setShowExport(false);
  };

  return (
    <ImageBackground
      source={require("../assets/erp/bg.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.push("/dashboard_driver")}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Your Earning</Text>
        </View>

        <View style={styles.contentContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.earningViewContainer}>
              <Text style={styles.earningLabel}>
                {viewMode === "day"
                  ? "YOUR EARNING THIS DAY"
                  : "YOUR EARNING THIS WEEK"}
              </Text>

              <View style={styles.mainCardRow}>
                <TouchableOpacity onPress={toggleView}>
                  <Ionicons name="chevron-back" size={30} color="#666" />
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => setShowExport(!showExport)}
                  style={styles.cardWrapper}
                >
                  {viewMode === "day" ? (
                    <Image
                      source={require("../assets/erp/driver//money.png")}
                      style={styles.earningImageCard}
                    />
                  ) : (
                    <View style={styles.weeklyCardUI}>
                      <Image
                        source={require("../assets/erp/driver/today_earning.png")}
                        style={styles.weeklyBgIcon}
                      />
                      <Text style={styles.weeklyAmount}>₱ 2,500</Text>
                      <Text style={styles.weeklySubtext}>
                        Total Weekly Earnings
                      </Text>
                    </View>
                  )}

                  {showExport && (
                    <View style={styles.exportOverlay}>
                      <View style={styles.exportButton}>
                        <Text style={styles.exportText}>View to Export</Text>
                      </View>
                    </View>
                  )}
                </TouchableOpacity>

                <TouchableOpacity onPress={toggleView}>
                  <Ionicons name="chevron-forward" size={30} color="#666" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.summaryHeader}>
                <Image
                  source={require("../assets/erp/driver/boundary.png")}
                  style={styles.cardIcon}
                />
                <View>
                  <Text style={styles.summaryTitle}>Boundary Due Summary</Text>
                  <Text style={styles.summarySub}>
                    Take a look at your overview
                  </Text>
                </View>
                <Text style={styles.arrow}>❯</Text>
              </View>
              <View style={styles.inputField}>
                <Text style={styles.inputText}>Date:</Text>
              </View>
              <View style={styles.inputField}>
                <Text style={styles.inputText}>Amount:</Text>
              </View>
              <TouchableOpacity style={styles.payButton}>
                <Text style={styles.payButtonText}>Pay</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.historyTitle}>Details History</Text>

            {historyData.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={1}
                onPress={() =>
                  setSelectedHistoryId(
                    selectedHistoryId === item.id ? null : item.id,
                  )
                }
                style={[
                  styles.historyCard,
                  selectedHistoryId === item.id && styles.historyCardSelected,
                ]}
              >
                {selectedHistoryId === item.id && (
                  <View style={styles.actionRow}>
                    <TouchableOpacity style={styles.actionBtn}>
                      <Text style={styles.actionBtnText}>View Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.actionBtn}
                      onPress={() => router.push("/passenger_message_driver")}
                    >
                      <Text style={styles.actionBtnText}>View Message</Text>
                    </TouchableOpacity>
                  </View>
                )}

                <View style={styles.historyContent}>
                  <Image
                    source={require("../assets/erp/driver/profile_blue.png")}
                    style={styles.historyAvatar}
                  />
                  <View style={styles.historyInfo}>
                    <Text
                      style={[
                        styles.historyName,
                        selectedHistoryId === item.id && styles.textMuted,
                      ]}
                    >
                      {item.name}
                    </Text>
                    <Text style={styles.historyLoc}>● {item.location}</Text>
                    <Text style={styles.historySubLoc}>● {item.date}</Text>
                  </View>
                  <View style={styles.amountTag}>
                    <Text style={styles.amountText}>{item.amount}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            <View style={{ height: 120 }} />
          </ScrollView>
        </View>

        <BottomNavbar />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: "#0047AB" },
  safeContainer: { flex: 1 },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: { marginRight: 15 },
  headerTitle: { color: "white", fontSize: 24, fontWeight: "500" },
  contentContainer: {
    flex: 1,
    backgroundColor: "#F0F7FF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: "hidden",
  },
  scrollContent: { paddingHorizontal: 25, paddingTop: 20 },

  earningViewContainer: { alignItems: "center", marginBottom: 10 },
  earningLabel: {
    color: "#666",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  mainCardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  cardWrapper: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    height: 180,
  },
  earningImageCard: { width: "100%", height: "100%", resizeMode: "contain" },

  weeklyCardUI: {
    width: "95%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  weeklyBgIcon: {
    position: "absolute",
    width: "100%",
    height: "60%",
    opacity: 0.2,
    resizeMode: "contain",
  },
  weeklyAmount: { fontSize: 36, fontWeight: "bold", color: "#D63439" },
  weeklySubtext: { fontSize: 14, color: "#666", marginTop: 5 },

  exportOverlay: {
    position: "absolute",
    top: "40%",
    width: "100%",
    alignItems: "center",
    zIndex: 10,
  },
  exportButton: {
    backgroundColor: "rgba(255,255,255,0.95)",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#D63439",
  },
  exportText: { color: "#D63439", fontWeight: "bold" },

  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    marginVertical: 15,
    elevation: 3,
  },
  summaryHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  cardIcon: { width: 40, height: 40, marginRight: 10, resizeMode: "contain" },
  summaryTitle: { fontSize: 16, fontWeight: "bold", color: "#0047AB" },
  summarySub: { fontSize: 12, color: "#666" },
  arrow: { marginLeft: "auto", color: "#666" },
  inputField: {
    backgroundColor: "#EBF3FF",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputText: { color: "#0047AB" },
  payButton: {
    backgroundColor: "#0047AB",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  payButtonText: { color: "white", fontWeight: "bold", fontSize: 16 },

  // History List
  historyTitle: { color: "#666", fontWeight: "bold", marginVertical: 10 },
  historyCard: {
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 15,
    padding: 15,
    elevation: 2,
  },
  historyCardSelected: { backgroundColor: "#D0E7FF" },
  historyContent: { flexDirection: "row", alignItems: "center" },
  actionRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 12,
  },
  actionBtn: {
    backgroundColor: "white",
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#0047AB",
  },
  actionBtnText: { color: "#0047AB", fontSize: 12, fontWeight: "bold" },
  historyAvatar: { width: 50, height: 50, borderRadius: 25 },
  historyInfo: { flex: 1, marginLeft: 15 },
  historyName: { fontSize: 18, fontWeight: "bold", color: "#333" },
  textMuted: { color: "#555" },
  historyLoc: { fontSize: 12, color: "#4CAF50", marginTop: 2 },
  historySubLoc: { fontSize: 10, color: "#666" },
  amountTag: {
    backgroundColor: "#FFDADA",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  amountText: { color: "#D63439", fontWeight: "bold" },
});

export default EarningDriver;

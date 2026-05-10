import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { BottomNavbar } from "../component/bottom_navbar_driver";

const TransactionsDriver = () => {
  const router = useRouter();
  const [filter, setFilter] = useState("All");
  const [isModalVisible, setModalVisible] = useState(false);

  // transaction data
  const allTransactions = [
    {
      id: 1,
      date: "October 20, 2025",
      type: "Cash Transaction",
      amount: "- ₱ 50.00",
      color: "#FFD700",
      time: "7:45PM",
      category: "Cash",
    },
    {
      id: 2,
      date: "October 20, 2025",
      type: "QR Code Transaction",
      amount: "+ ₱ 50.00",
      color: "#32CD32",
      time: "7:45PM",
      category: "QR Code",
    },
    {
      id: 3,
      date: "October 20, 2025",
      type: "QR Code Transaction",
      amount: "+ ₱ 120.00",
      color: "#32CD32",
      time: "6:30PM",
      category: "QR Code",
    },
    {
      id: 4,
      date: "October 20, 2025",
      type: "ATM Card Transaction",
      amount: "+ ₱ 500.00",
      color: "#32CD32",
      time: "5:15PM",
      category: "ATM",
    },
    {
      id: 5,
      date: "October 20, 2025",
      type: "Cancelled",
      amount: "",
      color: "#A52A2A",
      time: "4:00PM",
      category: "Cash",
    },
    {
      id: 6,
      date: "October 19, 2025",
      type: "Cash Transaction",
      amount: "- ₱ 20.00",
      color: "#FFD700",
      time: "9:00PM",
      category: "Cash",
    },
    {
      id: 7,
      date: "October 19, 2025",
      type: "ATM Card Transaction",
      amount: "+ ₱ 1,000.00",
      color: "#32CD32",
      time: "8:20PM",
      category: "ATM",
    },
    {
      id: 8,
      date: "October 19, 2025",
      type: "QR Code Transaction",
      amount: "+ ₱ 75.00",
      color: "#32CD32",
      time: "11:10AM",
      category: "QR Code",
    },
  ];

  // filter
  const filteredData =
    filter === "All"
      ? allTransactions
      : allTransactions.filter((item) => item.category === filter);

  const filterOptions = ["All", "Cash", "QR Code", "ATM"];

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
          <Text style={styles.headerTitle}>Transactions</Text>
        </View>

        <View style={styles.contentContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.imageHeaderContainer}>
              <Image
                source={require("../assets/erp/driver/transaction.png")}
                style={styles.headerImageCard}
                resizeMode="contain"
              />
            </View>

            {/* filter*/}
            <View style={styles.filterRow}>
              <Text style={styles.todayLabel}>Filter by:</Text>
              <TouchableOpacity
                style={styles.filterDropdown}
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.filterText}>{filter}</Text>
                <Ionicons name="caret-down" size={16} color="#0047AB" />
              </TouchableOpacity>
            </View>

            {/* list of transac */}
            {filteredData.map((item) => (
              <View key={item.id} style={styles.transactionCard}>
                <View style={styles.cardLeft}>
                  <Text style={styles.dateText}>{item.date}</Text>
                  <Text style={[styles.typeText, { color: item.color }]}>
                    {item.type}
                  </Text>
                </View>
                <View style={styles.cardRight}>
                  <View style={styles.timeTag}>
                    <Text style={styles.timeText}>{item.time}</Text>
                  </View>
                  {item.amount ? (
                    <Text style={[styles.amountText, { color: item.color }]}>
                      {item.amount}
                    </Text>
                  ) : (
                    <Text style={[styles.amountText, { color: "#A52A2A" }]}>
                      No Funds
                    </Text>
                  )}
                </View>
              </View>
            ))}

            <View style={{ height: 120 }} />
          </ScrollView>
        </View>

        {/* filter select */}
        <Modal transparent visible={isModalVisible} animationType="fade">
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => setModalVisible(false)}
          >
            <View style={styles.modalContent}>
              {filterOptions.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  style={styles.modalOption}
                  onPress={() => {
                    setFilter(opt);
                    setModalVisible(false);
                  }}
                >
                  <Text
                    style={[
                      styles.optionText,
                      filter === opt && styles.activeOptionText,
                    ]}
                  >
                    {opt}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>

        <BottomNavbar />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: "#0047AB" },
  safeContainer: { flex: 1 },
  header: {
    paddingVertical: 20,
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
  scrollContent: { paddingHorizontal: 20, paddingTop: 30 },
  imageHeaderContainer: { alignItems: "center", marginBottom: 10 },
  headerImageCard: { width: "100%", height: 150 },

  filterRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 15,
    gap: 8,
  },
  todayLabel: { fontSize: 12, color: "#666", fontWeight: "bold" },
  filterDropdown: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#0047AB",
    minWidth: 100,
    justifyContent: "space-between",
  },
  filterText: { color: "#0047AB", fontWeight: "bold" },

  transactionCard: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    elevation: 3,
  },
  dateText: { fontSize: 16, color: "#333", fontWeight: "bold" },
  typeText: { fontSize: 13, fontWeight: "600", marginTop: 4 },
  cardRight: { alignItems: "flex-end" },
  timeTag: {
    backgroundColor: "#EBF3FF",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
  },
  timeText: { fontSize: 11, color: "#0047AB", fontWeight: "bold" },
  amountText: { fontSize: 17, fontWeight: "bold", marginTop: 8 },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    width: "70%",
    borderRadius: 20,
    padding: 10,
  },
  modalOption: {
    paddingVertical: 15,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
  },
  optionText: { fontSize: 18, color: "#333" },
  activeOptionText: { color: "#0047AB", fontWeight: "bold" },
});

export default TransactionsDriver;

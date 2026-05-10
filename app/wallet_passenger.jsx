import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import BottomNavBar from "../component/bottom_navbar_passenger";

const WalletPassenger = () => {
  const router = useRouter();

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
            {/* wallet balance*/}
            <View style={styles.walletHeaderRow}>
              <Text style={styles.walletBalanceTitle}>Wallet Balance</Text>
              <TouchableOpacity style={styles.receiptsBtn}>
                <Text style={styles.receiptsText}>Receipt/s</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.balanceActionRow}>
              <View style={styles.balanceInputContainer}>
                <Text style={styles.currencySymbol}>₱</Text>
                <Text style={styles.balanceValue}>1289.00</Text>
                <TouchableOpacity style={styles.eyeIcon}>
                  <MaterialCommunityIcons
                    name="eye-off-outline"
                    size={20}
                    color="#C0C0C0"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Add +</Text>
              </TouchableOpacity>
            </View>

            {/* chart*/}
            <View style={styles.chartContainer}>
              <Image
                source={require("../assets/erp/passenger/expense.png")}
                style={styles.chartImage}
                resizeMode="contain"
              />
            </View>

            {/* transaction history */}
            <Text style={styles.historyHeading}>Transactions history</Text>

            <View style={styles.historyItem}>
              <Text style={styles.transactionId}>ABC123456</Text>
              <Text style={styles.timeStamp}>(Today - 8:24 am)</Text>
              <Text style={styles.amountNegative}>- 179.00</Text>
            </View>

            <View style={styles.historyItem}>
              <Text style={styles.transactionId}>ABC123456</Text>
              <Text style={styles.timeStamp}>(Today - 8:24 am)</Text>
              <Text style={styles.amountNegative}>- 179.00</Text>
            </View>

            <Text style={styles.historyHeading}>Yesterday</Text>

            <View style={styles.historyItem}>
              <Text style={styles.transactionId}>ABC123456</Text>
              <Text style={styles.timeStamp}>(Nov 2, 2025 - 8:24 am)</Text>
              <Text style={styles.amountNegative}>- 179.00</Text>
            </View>

            <View style={styles.historyItem}>
              <Text style={styles.transactionId}>ABC123456</Text>
              <Text style={styles.timeStamp}>(Nov 2, 2025 - 8:24 am)</Text>
              <Text style={styles.amountNegative}>- 179.00</Text>
            </View>

            <View style={styles.historyItem}>
              <Text style={styles.transactionId}>ABC123456</Text>
              <Text style={styles.timeStamp}>(Nov 2, 2025 - 8:24 am)</Text>
              <Text style={styles.amountNegative}>- 179.00</Text>
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

  walletHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  walletBalanceTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#004085",
  },
  receiptsBtn: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#A9C1D1",
    backgroundColor: "#FFFFFF",
  },
  receiptsText: {
    color: "#004085",
    fontSize: 16,
    fontWeight: "500",
  },

  balanceActionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  balanceInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginRight: 10,
    elevation: 1,
  },
  currencySymbol: {
    fontSize: 24,
    color: "#00A800",
    marginRight: 10,
    fontWeight: "500",
  },
  balanceValue: {
    fontSize: 28,
    color: "#00A800",
    flex: 1,
    fontWeight: "400",
  },
  eyeIcon: {
    padding: 5,
  },
  addButton: {
    backgroundColor: "#00A800",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  chartContainer: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1E0F3",
    elevation: 3,
    marginBottom: 25,
  },
  chartImage: { width: "100%", height: 220 },

  historyHeading: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1A4D8B",
    marginBottom: 12,
    marginTop: 10,
  },
  historyItem: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    elevation: 1,
  },
  transactionId: {
    fontSize: 18,
    color: "#1A4D8B",
    fontWeight: "600",
  },
  timeStamp: {
    fontSize: 13,
    color: "#888",
    flex: 1,
    marginLeft: 10,
  },
  amountNegative: {
    fontSize: 18,
    color: "#B34D4D",
    fontWeight: "500",
  },
});

export default WalletPassenger;

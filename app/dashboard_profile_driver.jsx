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
import { BottomNavbar } from "../component/bottom_navbar_driver";

const DashboardProfileDriver = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/erp/bg.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeContainer}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Driver Dashboard</Text>
        </View>

        <View style={styles.contentContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* profile */}
            <View style={styles.profileCard}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={require("../assets/erp/driver/profile_blue.png")}
                  style={styles.profileImage}
                />
                <View style={styles.onlineIndicator} />
              </View>
              <Text style={styles.driverName}>Maria Dela Cruz</Text>
              <View style={styles.ratingRow}>
                <Text style={styles.star}>⭐</Text>
                <Text style={styles.ratingText}>
                  4.5 <Text style={styles.reviewCount}>(4.5k reviews)</Text>
                </Text>
              </View>
            </View>

            {/* assigned vehicle */}
            <View style={styles.vehicleSection}>
              <Text style={styles.sectionTitle}>Assigned Vehicle:</Text>
              <View style={styles.vehicleRow}>
                <View style={styles.infoBox}>
                  <View style={styles.blueTag}>
                    <Text style={styles.tagText}>KWG999</Text>
                  </View>
                  <Text style={styles.label}>Plate:</Text>
                </View>
                <View style={styles.infoBox}>
                  <View style={styles.blueTag}>
                    <Text style={styles.tagText}>2025</Text>
                  </View>
                  <Text style={styles.label}>Model:</Text>
                </View>
              </View>
            </View>

            {/* boundary due summary */}
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

            {/* earning and trips */}
            <View style={styles.row}>
              {/* today's earnings */}
              <View style={[styles.absoluteStatsCard, styles.earningsBg]}>
                <Image
                  source={require("../assets/erp/driver/today_earning.png")}
                  style={styles.statsAbsoluteBackground}
                />
                <View style={styles.absoluteTextOverlay}>
                  <Text style={styles.statsValueEarnings}>₱1500</Text>
                  <Text style={styles.statsLabelRed}>Today's Earnings:</Text>
                </View>
              </View>

              {/* today's trips */}
              <View style={[styles.absoluteStatsCard, styles.tripsBg]}>
                <Image
                  source={require("../assets/erp/driver/driver_img.jpg")}
                  style={styles.statsAbsoluteBackground}
                />
                <View style={styles.absoluteTextOverlay}>
                  <Text style={styles.statsValueTrips}>150</Text>
                  <Text style={styles.statsLabelBlue}>Today's Trip Total:</Text>
                </View>
              </View>
            </View>

            {/* battery / status */}
            <Text style={styles.sectionTitleInside}>Battery / Status:</Text>
            <View style={styles.row}>
              <View style={styles.statusCard}>
                <Text style={styles.statusHeader}>Battery</Text>
                <Text style={styles.smallLabel}>Changed 2w ago</Text>
                <Image
                  source={require("../assets/erp/driver/batter_gauge.png")}
                  style={styles.gaugeImage}
                />
                <View style={styles.batteryDetails}>
                  <Text style={styles.batteryKm}>212 km</Text>
                  <View style={styles.batteryLine} />
                  <Text style={styles.batteryInfo}>14% 120kw</Text>
                </View>
              </View>
              <View style={styles.statusCard}>
                <Text style={styles.statusHeader}>Status</Text>
                <View style={styles.gaugeContainer}>
                  <Image
                    source={require("../assets/erp/driver/batter_gauge.png")}
                    style={styles.gaugeImage}
                  />
                  <Text style={styles.statusResult}>Good</Text>
                </View>
              </View>
            </View>

            <View style={{ height: 100 }} />
          </ScrollView>
        </View>

        <BottomNavbar />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#0047AB",
  },
  safeContainer: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 25,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "500",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#F0F7FF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: "hidden",
  },
  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 30,
  },

  // profile
  profileCard: { alignItems: "center", marginBottom: 20 },
  profileImageContainer: { position: "relative" },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#0047AB",
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#00FF00",
    borderWidth: 2,
    borderColor: "white",
  },
  driverName: { fontSize: 22, fontWeight: "bold", marginTop: 10 },
  ratingRow: { flexDirection: "row", alignItems: "center" },
  ratingText: { fontWeight: "bold", fontSize: 16 },
  reviewCount: { fontWeight: "normal", color: "#666" },

  // vehicle
  sectionTitle: { color: "#0047AB", fontWeight: "bold", marginBottom: 10 },
  sectionTitleInside: {
    color: "#0047AB",
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
  },
  vehicleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
  infoBox: { flex: 1, alignItems: "center" },
  blueTag: {
    backgroundColor: "#0047AB",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  tagText: { color: "white", fontWeight: "bold" },
  label: { color: "#0047AB", marginTop: 5 },

  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    marginTop: 20,
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

  // stats/earning
  row: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
  },
  absoluteStatsCard: {
    flex: 1,
    borderRadius: 20,
    height: 160,
    overflow: "hidden",
    elevation: 2,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
  },
  earningsBg: {
    backgroundColor: "#FFF2F2",
  },
  tripsBg: {
    backgroundColor: "#F2F9FF",
  },
  statsAbsoluteBackground: {
    position: "absolute",
    width: "100%",
    height: "70%",
    top: 5,
    resizeMode: "contain",
    zIndex: 0,
  },
  absoluteTextOverlay: {
    position: "absolute",
    bottom: 15,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    zIndex: 1,
  },
  statsValueEarnings: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#D63439",
  },
  statsValueTrips: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0047AB",
  },
  statsLabelRed: {
    fontSize: 12,
    color: "#D63439",
    fontWeight: "600",
    textAlign: "center",
  },
  statsLabelBlue: {
    fontSize: 12,
    color: "#0047AB",
    fontWeight: "600",
    textAlign: "center",
  },

  // battery / status
  statusCard: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  statusHeader: { color: "#0047AB", fontWeight: "bold" },
  smallLabel: { fontSize: 8, color: "#666" },
  gaugeImage: {
    width: "100%",
    height: 60,
    resizeMode: "contain",
    marginVertical: 5,
  },
  batteryDetails: {
    borderTopWidth: 1,
    borderColor: "#0047AB",
    paddingTop: 5,
    alignItems: "center",
  },
  batteryKm: { fontSize: 12, color: "#0047AB" },
  batteryLine: {
    width: "80%",
    height: 2,
    backgroundColor: "#0047AB",
    marginVertical: 2,
  },
  batteryInfo: { fontSize: 10, color: "#0047AB" },
  statusResult: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#0047AB",
    fontSize: 16,
  },
});

export default DashboardProfileDriver;

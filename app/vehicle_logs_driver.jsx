import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { BottomNavbar } from "../component/bottom_navbar_driver";

const VehicleLogsDriver = () => {
  const router = useRouter();
  const [isGpsEnabled, setIsGpsEnabled] = useState(true);

  const [activeTab, setActiveTab] = useState("month");
  const [maintenanceData, setMaintenanceData] = useState({
    percent: "100%",
    status: "Good Status",
    title: "This Month maintenance report",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "year") {
      setMaintenanceData({
        percent: "90%",
        status: "Good Status",
        title: "This Year maintenance report",
      });
    } else {
      setMaintenanceData({
        percent: "100%",
        status: "Good Status",
        title: "This Month maintenance report",
      });
    }
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
          <Text style={styles.headerTitle}>Vehicle Logs</Text>
        </View>

        <View style={styles.contentContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {/* vehicle profile */}
            <View style={styles.vehicleHeaderCard}>
              <View style={styles.profileCircle}>
                <Image
                  source={require("../assets/erp/driver/vehicle_blue.png")}
                  style={styles.profileImage}
                />
              </View>
              <View>
                <Text style={styles.vehicleName}>Tesla 2025</Text>
                <Text style={styles.vehicleType}>E-Car</Text>
              </View>
            </View>

            {/* assigned vehicle */}
            <View style={styles.sectionCard}>
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

            {/* odo */}
            <View style={styles.odometerCard}>
              <View style={styles.odometerContent}>
                <View>
                  <Text style={styles.odometerLabel}>Odometer</Text>
                  <Text style={styles.odometerValue}>50,799</Text>
                  <Text style={styles.updateDate}>
                    Last update: 10 Oct 2025
                  </Text>
                </View>
                <TouchableOpacity style={styles.updateButton}>
                  <Text style={styles.updateButtonText}>
                    Update{"\n"}Odometer
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* gps toggle */}
            <View style={styles.gpsContainer}>
              <View style={styles.gpsRow}>
                <Image
                  source={require("../assets/erp/driver/gps.png")}
                  style={styles.gpsIcon}
                />
                <Text style={styles.gpsText}>Open GPS Location:</Text>
                <Switch
                  value={isGpsEnabled}
                  onValueChange={setIsGpsEnabled}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isGpsEnabled ? "#0047AB" : "#f4f3f4"}
                />
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

            {/* maintenance history */}
            <Text style={styles.sectionTitleInside}>
              Maintenance History List:
            </Text>
            <View style={styles.maintenanceCard}>
              <Text style={styles.maintenanceReportTitle}>
                {maintenanceData.title}
              </Text>

              <View style={styles.maintenanceRow}>
                <Image
                  source={require("../assets/erp/driver/maintenance.png")}
                  style={styles.maintenanceIcon}
                />
                <View style={styles.maintenanceStats}>
                  <Text style={styles.maintenancePercent}>
                    {maintenanceData.percent}
                  </Text>
                  <View style={styles.maintenanceDivider} />
                  <Text style={styles.maintenanceStatusText}>
                    {maintenanceData.status}
                  </Text>
                </View>
              </View>

              <View style={styles.tabContainer}>
                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    activeTab === "month" && styles.activeTab,
                  ]}
                  onPress={() => handleTabChange("month")}
                >
                  <Text
                    style={[
                      styles.inactiveTabText,
                      activeTab === "month" && styles.activeTabText,
                    ]}
                  >
                    Month
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.tabButton,
                    activeTab === "year" && styles.activeTab,
                  ]}
                  onPress={() => handleTabChange("year")}
                >
                  <Text
                    style={[
                      styles.inactiveTabText,
                      activeTab === "year" && styles.activeTabText,
                    ]}
                  >
                    Year
                  </Text>
                </TouchableOpacity>
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

  vehicleHeaderCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#0047AB",
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  profileImage: { width: "100%", height: "100%" },
  vehicleName: { fontSize: 22, fontWeight: "bold", color: "#0047AB" },
  vehicleType: { fontSize: 14, color: "#666" },

  sectionCard: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    elevation: 2,
  },
  sectionTitle: { color: "#0047AB", fontWeight: "bold", marginBottom: 10 },
  sectionTitleInside: {
    color: "#0047AB",
    fontWeight: "bold",
    marginTop: 20,
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
  label: { color: "#0047AB", marginTop: 5, fontSize: 12 },

  odometerCard: {
    backgroundColor: "#1E90FF",
    borderRadius: 15,
    padding: 20,
    marginTop: 15,
  },
  odometerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  odometerLabel: { color: "white", fontSize: 14, textAlign: "center" },
  odometerValue: { color: "white", fontSize: 36, fontWeight: "bold" },
  updateDate: { color: "white", fontSize: 10, marginTop: 5 },
  updateButton: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },
  updateButtonText: {
    color: "#1E90FF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 12,
  },

  gpsContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    marginTop: 15,
    elevation: 2,
  },
  gpsRow: { flexDirection: "row", alignItems: "center" },
  gpsIcon: { width: 30, height: 30, marginRight: 10, resizeMode: "contain" },
  gpsText: { flex: 1, color: "#0047AB", fontWeight: "bold", fontSize: 16 },

  row: { flexDirection: "row", gap: 12 },
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

  maintenanceCard: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    elevation: 2,
  },
  maintenanceReportTitle: { color: "#0047AB", fontSize: 14, marginBottom: 15 },
  maintenanceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  maintenanceIcon: {
    width: 50,
    height: 50,
    marginRight: 20,
    resizeMode: "contain",
  },
  maintenanceStats: { alignItems: "center" },
  maintenancePercent: { fontSize: 18, fontWeight: "bold", color: "#0047AB" },
  maintenanceDivider: {
    width: 50,
    height: 2,
    backgroundColor: "#0047AB",
    marginVertical: 2,
  },
  maintenanceStatusText: { fontSize: 10, color: "#666" },

  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#EBF3FF",
    borderRadius: 25,
    padding: 5,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  activeTab: { backgroundColor: "#0047AB" },
  activeTabText: { color: "white", fontWeight: "bold" },
  inactiveTabText: { color: "#81b0ff", fontWeight: "bold" },
});

export default VehicleLogsDriver;

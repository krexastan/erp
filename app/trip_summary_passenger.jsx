import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import BottomNavBar from "../component/bottom_navbar_passenger";

const TripSummaryPassenger = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("History");

  const LocationRow = ({ type, locationName }) => {
    const isPickup = type === "pickup";
    return (
      <View style={styles.locationContainer}>
        <Image
          source={
            isPickup
              ? require("../assets/erp/passenger/red_pin.png")
              : require("../assets/erp/passenger/green_pin.png")
          }
          style={styles.pinImage}
        />
        <Text
          style={isPickup ? styles.locationTextRed : styles.locationTextGreen}
        >
          {locationName}
        </Text>
      </View>
    );
  };

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
            <View style={styles.titleRow}>
              <Text style={styles.mainTitle}>Trip Summary</Text>
              <TouchableOpacity style={styles.filterBtn}>
                <Text style={styles.filterText}>Filter: By Date</Text>
              </TouchableOpacity>
            </View>

            {/* nav tab */}
            <View style={styles.tabContainer}>
              {["History", "Upcoming ride/s", "Favorites", "Cancelled"].map(
                (tab) => (
                  <TouchableOpacity
                    key={tab}
                    style={styles.tab}
                    onPress={() => setActiveTab(tab)}
                  >
                    <Text
                      style={
                        activeTab === tab
                          ? styles.activeTabText
                          : styles.tabText
                      }
                    >
                      {tab}
                    </Text>
                    {activeTab === tab && (
                      <View style={styles.activeUnderline} />
                    )}
                    {tab === "Upcoming ride/s" && (
                      <View style={styles.notificationDot} />
                    )}
                  </TouchableOpacity>
                ),
              )}
            </View>

            {/* search bar */}
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                placeholderTextColor="#A9C1D1"
              />
              <Feather name="search" size={20} color="#0047AB" />
            </View>

            <Text style={styles.recentHeading}>{activeTab}</Text>

            {activeTab === "History" && (
              <View style={styles.tripCard}>
                <View style={styles.cardHeader}>
                  <Text style={styles.drivenByText}>
                    Driven by: Juan Dela Cruz
                  </Text>
                  <View style={styles.headerRight}>
                    <Text style={styles.timeText}>Today 6:05pm</Text>
                    <Feather
                      name="download"
                      size={18}
                      color="#333"
                      style={{ marginLeft: 10 }}
                    />
                  </View>
                </View>
                <LocationRow type="pickup" locationName="Casa Lily" />
                <LocationRow
                  type="dropoff"
                  locationName="folife Marketing gandus m..."
                />
                <View style={styles.statsRow}>
                  <View>
                    <Text style={styles.statLabel}>Distance: 4.5km</Text>
                    <Text style={styles.fareLabel}>Fare:</Text>
                  </View>
                  <View style={{ alignItems: "flex-end" }}>
                    <Text style={styles.statLabel}>Time Duration: 36min</Text>
                    <Text style={styles.fareAmount}>₱ 179.00</Text>
                  </View>
                </View>
                <View style={styles.cardActionsRow}>
                  <TouchableOpacity
                    style={styles.viewDetailsBtn}
                    onPress={() => setModalVisible(true)}
                  >
                    <Text style={styles.btnTextWhite}>View Details</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.favoritesBtn}>
                    <Text style={styles.btnTextWhite}>Add to Favorites</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.bookAgainBtn}>
                  <Text style={styles.btnTextWhite}>Book Again</Text>
                </TouchableOpacity>
              </View>
            )}

            {activeTab === "Upcoming ride/s" && (
              <View style={styles.tripCard}>
                <View style={styles.cardHeader}>
                  <Text style={styles.drivenByText}>
                    November 1, 2025 (Today)
                  </Text>
                  <Text style={styles.timeText}>8:00 am</Text>
                </View>
                <LocationRow type="pickup" locationName="Casa Lily" />
                <LocationRow
                  type="dropoff"
                  locationName="folife Marketing gandus m..."
                />
                <View style={styles.statsRow}>
                  <View>
                    <Text style={styles.statLabel}>Distance: 4.5km</Text>
                    <Text style={styles.estimateFareLabel}>Estimate Fare:</Text>
                  </View>
                  <View style={{ alignItems: "flex-end" }}>
                    <Text style={styles.statLabel}>Duration Time: 36min</Text>
                    <Text style={styles.fareAmount}>₱ 179.00</Text>
                  </View>
                </View>
                <View style={styles.cardActionsRow}>
                  <TouchableOpacity
                    style={styles.viewDetailsBtnUpcoming}
                    onPress={() => setModalVisible(true)}
                  >
                    <Text style={styles.btnTextWhite}>View Details</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.editBtn}>
                    <Text style={styles.btnTextWhite}>Edit</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.cancelBtn}>
                  <Text style={styles.btnTextWhite}>Cancel</Text>
                </TouchableOpacity>
              </View>
            )}

            {activeTab === "Favorites" && (
              <View style={styles.tripCard}>
                <View style={styles.cardHeader}>
                  <Text style={styles.drivenByText}>Favorite 1</Text>
                  <View style={styles.headerRight}>
                    <Feather name="edit" size={20} color="#333" />
                    <Feather
                      name="download"
                      size={20}
                      color="#333"
                      style={{ marginLeft: 15 }}
                    />
                  </View>
                </View>
                <LocationRow type="pickup" locationName="Casa Lily" />
                <LocationRow
                  type="dropoff"
                  locationName="folife Marketing gandus m..."
                />
                <TouchableOpacity style={styles.removeBtn}>
                  <Text style={styles.btnTextWhite}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookNowBtn}>
                  <Text style={styles.btnTextWhite}>Book Now</Text>
                </TouchableOpacity>
              </View>
            )}

            {activeTab === "Cancelled" && (
              <View style={[styles.tripCard, styles.cancelledCardBg]}>
                <View style={styles.cardHeader}>
                  <Text style={styles.drivenByText}>
                    Driver: Juan Dela Cruz
                  </Text>
                  <Text style={styles.timeText}>Today 6:05pm</Text>
                </View>
                <LocationRow type="pickup" locationName="Casa Lily" />
                <LocationRow
                  type="dropoff"
                  locationName="folife Marketing gandus m..."
                />
                <View style={styles.statsRow}>
                  <View>
                    <Text style={styles.statLabel}>Distance: 4.5km</Text>
                    <Text style={styles.fareLabel}>Fare:</Text>
                  </View>
                  <View style={{ alignItems: "flex-end" }}>
                    <Text style={styles.statLabel}>Estimate Time: 36min</Text>
                    <Text style={styles.fareAmount}>₱ 179.00</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.rebookBtn}>
                  <Text style={styles.btnTextWhite}>Re-Book</Text>
                </TouchableOpacity>
              </View>
            )}

            <View style={{ height: 100 }} />
          </ScrollView>
        </View>

        {/* transaction details */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                style={styles.customCloseWrapper}
                onPress={() => setModalVisible(false)}
              >
                <View style={styles.customCloseCircle}>
                  <Text style={styles.customCloseX}>✕</Text>
                </View>
              </TouchableOpacity>

              <Text style={styles.modalTitle}>Transaction Details</Text>

              <View style={styles.detailContainer}>
                <Text style={styles.detailText}>
                  Pickup Location: Casa Lily
                </Text>
                <Text style={styles.detailText}>
                  Drop-off Location: folife Marketing gandus mabalacat
                </Text>
                <Text style={[styles.detailText, { marginTop: 15 }]}>
                  Driver: Juan Dela Cruz
                </Text>
                <Text style={styles.detailText}>Plate No.: ABC 1234</Text>
                <Text style={[styles.detailText, { marginTop: 15 }]}>
                  Date: November 2, 2025
                </Text>
                <Text style={styles.detailText}>Pickup Time: 5:29pm</Text>
                <Text style={styles.detailText}>Drop-off Time: 6:05pm</Text>
                <Text style={[styles.detailText, { marginTop: 15 }]}>
                  Mode of payment: QR Code
                </Text>
              </View>

              <View style={styles.statsRow}>
                <View>
                  <Text style={styles.statLabel}>Distance: 4.5km</Text>
                  <Text style={styles.fareLabel}>Fare:</Text>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={styles.statLabel}>Time Duration: 36min</Text>
                  <Text style={styles.fareAmount}>₱ 179.00</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.downloadReceiptBtn}>
                <Text style={styles.btnTextWhite}>Download Receipt</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalBookAgainBtn}>
                <Text style={styles.btnTextWhite}>Book Again</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

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
  scrollContent: { paddingHorizontal: 20, paddingTop: 30 },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  mainTitle: { fontSize: 32, fontWeight: "bold", color: "#0047AB" },
  filterBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#A9C1D1",
    backgroundColor: "white",
  },
  filterText: { color: "#4A78B5", fontSize: 14 },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#D1E0F3",
  },
  tab: { paddingVertical: 10, position: "relative" },
  tabText: { color: "#666", fontSize: 13, fontWeight: "500" },
  activeTabText: { color: "#0047AB", fontSize: 13, fontWeight: "bold" },
  activeUnderline: {
    height: 2,
    backgroundColor: "#0047AB",
    position: "absolute",
    bottom: -1,
    left: 0,
    right: 0,
  },
  notificationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "red",
    position: "absolute",
    top: 8,
    right: -4,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#A9C1D1",
    marginBottom: 20,
  },
  searchInput: { flex: 1, fontSize: 16, color: "#333" },
  recentHeading: {
    fontSize: 18,
    color: "#0047AB",
    marginBottom: 15,
    fontWeight: "600",
  },
  tripCard: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  drivenByText: { color: "#1A4D8B", fontWeight: "600", fontSize: 14 },
  headerRight: { flexDirection: "row", alignItems: "center" },
  timeText: { color: "#888", fontSize: 12 },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F7FF",
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#D1E0F3",
  },
  pinImage: { width: 24, height: 24, resizeMode: "contain" },
  locationTextRed: { color: "#B34D4D", marginLeft: 10, fontSize: 16, flex: 1 },
  locationTextGreen: {
    color: "#2E7D32",
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  statLabel: { color: "#4A78B5", fontSize: 13 },
  fareLabel: {
    color: "#B34D4D",
    fontSize: 18,
    fontWeight: "500",
    marginTop: 5,
  },
  fareAmount: { color: "#B34D4D", fontSize: 20, fontWeight: "bold" },
  cardActionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 10,
  },
  viewDetailsBtn: {
    flex: 1,
    backgroundColor: "#6495ED",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  favoritesBtn: {
    flex: 1,
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  bookAgainBtn: {
    backgroundColor: "#0047AB",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  btnTextWhite: { color: "white", fontWeight: "bold", fontSize: 15 },

  // MODAL STYLES
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 25,
    padding: 25,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0047AB",
    textAlign: "center",
    marginBottom: 20,
  },
  detailContainer: { marginBottom: 20 },
  detailText: { fontSize: 15, color: "#1A4D8B", marginBottom: 4 },
  downloadReceiptBtn: {
    backgroundColor: "#1E90FF",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  modalBookAgainBtn: {
    backgroundColor: "#0047AB",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },
  customCloseWrapper: {
    position: "absolute",
    right: -10,
    top: -10,
    zIndex: 10,
  },
  customCloseCircle: {
    backgroundColor: "#FF4D4D",
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: "center",
    alignItems: "center",
  },
  customCloseX: { color: "white", fontSize: 18, fontWeight: "bold" },

  // OTHER STATES
  cancelledCardBg: { backgroundColor: "#FFF0F0" },
  rebookBtn: {
    backgroundColor: "#D32F2F",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  removeBtn: {
    backgroundColor: "#1E90FF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  bookNowBtn: {
    backgroundColor: "#0047AB",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  estimateFareLabel: {
    color: "#B34D4D",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
  },
  viewDetailsBtnUpcoming: {
    flex: 1,
    backgroundColor: "#6495ED",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  editBtn: {
    flex: 1,
    backgroundColor: "#00C800",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  cancelBtn: {
    backgroundColor: "#D32F2F",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
});

export default TripSummaryPassenger;

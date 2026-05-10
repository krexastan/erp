import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
  Image,
  Modal,
  Animated,
  Easing,
} from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import BottomNavBar from "../component/bottom_navbar_passenger";

const DashboardPassenger = () => {
  const router = useRouter();

  // states
  const [isOnline, setIsOnline] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSearchingModal, setShowSearchingModal] = useState(false);
  const [destinationSelected, setDestinationSelected] = useState(false);
  const notifications = 5;

  const rotateValue = useRef(new Animated.Value(0)).current;

  const startRotation = () => {
    rotateValue.setValue(0);
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const handleStart = () => {
    setIsBooking(true);
  };

  const handleScheduleSubmit = () => {
    setShowScheduleModal(false);
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 2500);
  };

  const handleBookNow = () => {
    setShowSearchingModal(true);
    startRotation();
    setTimeout(() => {
      setShowSearchingModal(false);
      router.push("/trip_passenger");
    }, 3000);
  };

  return (
    <View style={styles.container}>
      {/* top navbar*/}
      <View style={styles.topNav}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setIsOnline(!isOnline);
            if (isOnline) {
              setIsBooking(false);
              setDestinationSelected(false);
            }
          }}
          style={[
            styles.statusPill,
            { backgroundColor: isOnline ? "#10c044" : "#D63439" },
          ]}
        >
          <Image
            source={
              isOnline
                ? require("../assets/erp/driver/vehicle_online.png")
                : require("../assets/erp/driver/vehicle_offline.png")
            }
            style={styles.statusIcon}
          />
          <Text style={styles.statusText}>
            {isOnline ? "Online" : "Offline"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => router.push("/notification_passenger")}
        >
          <Image
            source={require("../assets/erp/driver/notif.png")}
            style={styles.customIconSmall}
          />
          {notifications > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notifications}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <ImageBackground
          source={require("../assets/erp/passenger/map.png")}
          style={styles.mapImage}
          imageStyle={{ borderRadius: 30 }}
        >
          <View style={styles.mapInnerBorder} />
        </ImageBackground>

        {isOnline && isBooking && (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setDestinationSelected(true)}
            style={styles.locationCard}
          >
            <Text style={styles.greetingText}>
              Hi, Janine! Where do you want to go?
            </Text>

            <View
              style={[
                styles.inputWrapper,
                destinationSelected && styles.inputSelectedRed,
              ]}
            >
              <Image
                source={require("../assets/erp/passenger/red_pin.png")}
                style={styles.inputIcon}
              />
              <Text
                style={[
                  styles.inputText,
                  destinationSelected && { color: "#B34D4D" },
                ]}
              >
                {destinationSelected ? "Casa Lily" : "Pickup Location"}
              </Text>
            </View>

            <View
              style={[
                styles.inputWrapper,
                destinationSelected && styles.inputSelectedGreen,
              ]}
            >
              <Image
                source={require("../assets/erp/passenger/green_pin.png")}
                style={styles.inputIcon}
              />
              <Text
                style={[
                  styles.inputText,
                  destinationSelected && { color: "#10c044" },
                ]}
              >
                {destinationSelected
                  ? "folife Marketing gandus m..."
                  : "Drop-off Location"}
              </Text>
            </View>

            <View style={styles.statsRow}>
              <View>
                <Text style={styles.statLabel}>
                  Distance: {destinationSelected ? "4.5km" : "0"}
                </Text>
                <Text style={styles.fareLabel}>Estimate Fare:</Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.statLabel}>
                  Estimate Time: {destinationSelected ? "36min" : "0"}
                </Text>
                <Text style={styles.fareAmount}>
                  ₱ {destinationSelected ? "179.00" : "0.00"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>

      {/* action btn */}
      {isOnline && (
        <View style={styles.actionButtonWrapper}>
          {!isBooking ? (
            <TouchableOpacity
              style={styles.primaryPillButton}
              onPress={handleStart}
            >
              <Text style={styles.pillButtonText}>Start</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.bookingButtonGroup}>
              <TouchableOpacity
                style={styles.primaryPillButton}
                onPress={handleBookNow}
              >
                <Text style={styles.pillButtonText}>Book Now</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.secondaryPillButton}
                onPress={() => setShowScheduleModal(true)}
              >
                <Text style={styles.secondaryPillText}>Schedule Later</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}

      {/* schedule later */}
      <Modal visible={showScheduleModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setShowScheduleModal(false)}
            >
              <Image
                source={require("../assets/erp/passenger/close.png")}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Schedule Later</Text>
            <Text style={styles.modalLabel}>Date</Text>
            <TouchableOpacity style={styles.modalInput} activeOpacity={0.7}>
              <Text style={styles.modalInputPlaceholder}>MM/DD/YYYY</Text>
              <Feather name="calendar" size={20} color="#0047AB" />
            </TouchableOpacity>
            <Text style={styles.modalLabel}>Time</Text>
            <View style={styles.timeRow}>
              <View style={styles.timeBox}>
                <Text style={styles.timeText}>08</Text>
              </View>
              <View style={styles.timeBox}>
                <Text style={styles.timeText}>00</Text>
              </View>
              <View style={styles.timeBox}>
                <Text style={styles.timeText}>AM</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.scheduleSubmitBtn}
              onPress={handleScheduleSubmit}
            >
              <Text style={styles.scheduleSubmitText}>Schedule</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* success schedule */}
      <Modal visible={showSuccessModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.statusPopup}>
            <Image
              source={require("../assets/erp/passenger/calendar.png")}
              style={styles.statusImageLarge}
            />
            <Text style={styles.statusTextBlue}>
              Successfully scheduled your ride!
            </Text>
          </View>
        </View>
      </Modal>

      {/* looking 4 driver */}
      <Modal visible={showSearchingModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.statusPopup}>
            <Animated.Image
              source={require("../assets/erp/passenger/loading_green.png")}
              style={[
                styles.loaderCircle,
                { transform: [{ rotate: rotation }] },
              ]}
            />
            <Text style={styles.statusTextBlue}>
              Looking for available drivers near you...
            </Text>
          </View>
        </View>
      </Modal>

      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F0F7FF" },
  topNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "white",
    paddingTop: 50,
    zIndex: 10,
  },
  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 25,
    gap: 8,
    minWidth: 120,
  },
  statusText: { color: "white", fontWeight: "bold", fontSize: 16 },
  statusIcon: { width: 25, height: 25, resizeMode: "contain" },
  iconBtn: { padding: 8, position: "relative" },
  customIconSmall: { width: 35, height: 35, resizeMode: "contain" },
  badge: {
    position: "absolute",
    right: 2,
    top: 2,
    backgroundColor: "#D63439",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "white",
  },
  badgeText: { color: "white", fontSize: 11, fontWeight: "bold" },
  mapContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 100,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#E0E0E0",
    borderWidth: 1,
    borderColor: "#D1E0F3",
    position: "relative",
  },
  mapInnerBorder: {
    width: "95%",
    height: "95%",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.5)",
  },
  mapImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  locationCard: {
    position: "absolute",
    top: 15,
    left: 15,
    right: 15,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    elevation: 5,
  },
  greetingText: {
    color: "#0047AB",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F7FF",
    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#D1E0F3",
    height: 40,
  },
  inputSelectedRed: { borderColor: "#B34D4D", backgroundColor: "#FFF5F5" },
  inputSelectedGreen: { borderColor: "#10c044", backgroundColor: "#F5FFF5" },
  inputIcon: { width: 18, height: 18, marginRight: 8, resizeMode: "contain" },
  inputText: { color: "#A9C1D1", fontSize: 14 },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  statLabel: { color: "#4A78B5", fontSize: 11 },
  fareLabel: { color: "#B34D4D", fontSize: 14, fontWeight: "bold" },
  fareAmount: { color: "#B34D4D", fontSize: 14, fontWeight: "bold" },
  actionButtonWrapper: {
    position: "absolute",
    bottom: 140,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingHorizontal: 40,
    zIndex: 30,
  },
  bookingButtonGroup: { width: "100%", gap: 12 },
  primaryPillButton: {
    backgroundColor: "#0047AB",
    paddingVertical: 12,
    width: "100%",
    borderRadius: 25,
    elevation: 5,
    alignItems: "center",
  },
  pillButtonText: { color: "white", fontSize: 18, fontWeight: "900" },
  secondaryPillButton: {
    backgroundColor: "white",
    paddingVertical: 12,
    width: "100%",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#0047AB",
    alignItems: "center",
  },
  secondaryPillText: { color: "#0047AB", fontSize: 18, fontWeight: "900" },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
    position: "relative",
  },
  closeBtn: { position: "absolute", top: -15, right: -15, zIndex: 50 },
  closeIcon: { width: 45, height: 45, resizeMode: "contain" },
  modalTitle: {
    color: "#0047AB",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalLabel: {
    alignSelf: "flex-start",
    color: "#0047AB",
    marginBottom: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  modalInput: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#D1E0F3",
    borderRadius: 12,
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#F9FBFF",
  },
  modalInputPlaceholder: { color: "#A9C1D1", fontSize: 15 },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  timeBox: {
    width: "30%",
    height: 50,
    borderWidth: 1,
    borderColor: "#D1E0F3",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FBFF",
  },
  timeText: { color: "#333", fontSize: 16, fontWeight: "500" },
  scheduleSubmitBtn: {
    backgroundColor: "#0047AB",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
  },
  scheduleSubmitText: { color: "white", fontSize: 18, fontWeight: "bold" },

  statusPopup: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 25,
    padding: 30,
    alignItems: "center",
    elevation: 10,
  },
  statusImageLarge: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  loaderCircle: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 20,
  },
  statusTextBlue: {
    color: "#0047AB",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DashboardPassenger;

import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Easing,
  Modal,
  ScrollView,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";

const TripPassenger = () => {
  const router = useRouter();

  // states
  const [isOnline] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [isRideConfirmed, setIsRideConfirmed] = useState(false);
  const [isTripEnded, setIsTripEnded] = useState(false);
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const [isApprovedVisible, setIsApprovedVisible] = useState(false); // New state for Approval Popup
  const notifications = 5;

  const spinValue = useRef(new Animated.Value(0)).current;

  const startRotation = () => {
    spinValue.setValue(0);
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  useEffect(() => {
    if (isRideConfirmed && !isTripEnded) {
      const timer = setTimeout(() => {
        setIsTripEnded(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isRideConfirmed]);

  const handleCancel = () => {
    setLoadingText("Cancelling your booking...");
    setIsLoading(true);
    startRotation();
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard_passenger");
    }, 3000);
  };

  const handleConfirm = () => {
    setLoadingText("Confirming your ride...");
    setIsLoading(true);
    startRotation();
    setTimeout(() => {
      setIsLoading(false);
      setIsRideConfirmed(true);
    }, 2000);
  };

  const handlePayment = () => {
    setIsSummaryVisible(false);
    setIsApprovedVisible(true);
  };

  const handleReturnHome = () => {
    setIsApprovedVisible(false);
    router.push("/dashboard_passenger");
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      {/* loading */}
      <Modal transparent={true} visible={isLoading} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.loadingCard}>
            <Animated.Image
              source={require("../assets/erp/passenger/loading_red.png")}
              style={[styles.loadingCircle, { transform: [{ rotate: spin }] }]}
            />
            <Text style={styles.loadingTextSmall}>{loadingText}</Text>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={isApprovedVisible}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.approvedCard}>
            <Text style={styles.approvedTitle}>PAYMENT APPROVED</Text>
            <Text style={styles.approvedSubText}>
              Thank you for using our service!
            </Text>
            <TouchableOpacity
              style={styles.returnHomeBtn}
              onPress={handleReturnHome}
            >
              <Text style={styles.confirmBtnText}>Return Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* summary (popup) */}
      <Modal
        transparent={true}
        visible={isSummaryVisible}
        animationType="slide"
      >
        <View style={styles.summaryModalOverlay}>
          <View style={styles.summaryPopupCard}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
              <View style={styles.summaryHeader}>
                <Text style={styles.summaryHeaderText}>
                  Destination Reached
                </Text>
              </View>

              <View style={styles.summaryContent}>
                <Text style={styles.drivenByText}>
                  Driven by: Juan Dela Cruz Today 6:05pm
                </Text>

                <View style={styles.summaryLocItem}>
                  <Image
                    source={require("../assets/erp/passenger/red_pin.png")}
                    style={styles.summaryLocIcon}
                  />
                  <Text style={styles.summaryLocText}>Casa Lily</Text>
                </View>
                <View style={styles.summaryLocItem}>
                  <Image
                    source={require("../assets/erp/passenger/green_pin.png")}
                    style={styles.summaryLocIcon}
                  />
                  <Text style={styles.summaryLocText}>
                    folife Marketing gandus m...
                  </Text>
                </View>

                <View style={styles.specsRow}>
                  <View>
                    <Text style={styles.specLabel}>Distance: 4.5km</Text>
                    <Text style={styles.fareLabel}>Fare:</Text>
                  </View>
                  <View style={{ alignItems: "flex-end" }}>
                    <Text style={styles.specLabel}>Time Duration: 36min</Text>
                    <Text style={styles.fareAmount}>₱ 179.00</Text>
                  </View>
                </View>

                <View style={styles.ratingRow}>
                  <View style={styles.ratingBox}>
                    <Text style={styles.ratingTitle}>Rate driver:</Text>
                    <Image
                      source={require("../assets/erp/passenger/5.png")}
                      style={styles.ratingStars}
                    />
                  </View>
                  <View style={styles.ratingBox}>
                    <Text style={styles.ratingTitle}>Rate app:</Text>
                    <Image
                      source={require("../assets/erp/passenger/4.png")}
                      style={styles.ratingStars}
                    />
                  </View>
                </View>

                <Text style={styles.sectionTitle}>Tip driver:</Text>
                <View style={styles.tipRow}>
                  <TouchableOpacity style={styles.tipBtnActive}>
                    <Text style={styles.tipBtnTextActive}>20</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tipBtn}>
                    <Text style={styles.tipBtnText}>50</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tipBtn}>
                    <Text style={styles.tipBtnText}>100</Text>
                  </TouchableOpacity>
                </View>
                <TextInput
                  style={styles.tipInput}
                  placeholder="₱ Preferred amount"
                  placeholderTextColor="#A0A0A0"
                />

                <Text style={styles.sectionTitle}>Pay in:</Text>
                <TouchableOpacity
                  style={styles.payBtnBlue}
                  onPress={() => router.push("/scan_driver")}
                >
                  <Text style={styles.payBtnText}>Scan QR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.payBtnYellow}
                  onPress={handlePayment}
                >
                  <Text style={styles.payBtnTextDark}>Cash</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.payBtnGray}
                  onPress={handlePayment}
                >
                  <Text style={styles.payBtnText}>Card</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* top navbar*/}
      <View style={styles.topNav}>
        <View
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
        </View>

        <View style={styles.iconBtn}>
          <Image
            source={require("../assets/erp/driver/notif.png")}
            style={styles.customIconSmall}
          />
          {notifications > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notifications}</Text>
            </View>
          )}
        </View>
      </View>

      {/* map */}
      <View style={styles.mapContainer}>
        <ImageBackground
          source={require("../assets/erp/passenger/map.png")}
          style={styles.mapImage}
          imageStyle={{ borderRadius: 30 }}
        >
          <View style={styles.mapInnerBorder} />
        </ImageBackground>

        <View style={styles.driverCard}>
          <Image
            source={require("../assets/erp/passenger/profile_blue.png")}
            style={styles.driverPhoto}
          />
          <Image
            source={require("../assets/erp/passenger/5.png")}
            style={styles.starsImage}
          />
          <Text style={styles.driverName}>Juan Dela Cruz</Text>
          <Text style={styles.labelSub}>Driver name</Text>
          <Text style={styles.plateNumber}>ABC 123</Text>
          <Text style={styles.labelSub}>Plate Number</Text>
        </View>

        <View style={styles.confirmRideCard}>
          <View style={styles.indicatorBar} />
          <View style={styles.tripStatsRow}>
            <Text
              style={[styles.distanceText, isTripEnded && { color: "#10c044" }]}
            >
              {isTripEnded ? "0km" : "4.5km"}
            </Text>
            <Text style={styles.priceText}>₱ 179.00</Text>
          </View>

          {!isRideConfirmed ? (
            <>
              <Text style={styles.waitingText}>
                Waiting for driver to Pickup
              </Text>
              <Text style={styles.timeToReach}>
                Time to reach Pickup Destination:{" "}
                <Text style={{ fontWeight: "bold" }}>5 mins</Text>
              </Text>
              <TouchableOpacity
                style={styles.confirmBtn}
                onPress={handleConfirm}
              >
                <Text style={styles.confirmBtnText}>Confirm Ride</Text>
              </TouchableOpacity>
              <View style={styles.actionRow}>
                <TouchableOpacity
                  style={styles.cancelBtn}
                  onPress={handleCancel}
                >
                  <Text style={styles.cancelBtnText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.messageBtn}
                  onPress={() => router.push("/driver_message_passenger")}
                >
                  <Text style={styles.messageBtnText}>Message</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : !isTripEnded ? (
            <>
              <Text style={styles.timeToReachDestination}>
                Time to reach Destination:{" "}
                <Text style={{ fontWeight: "bold" }}>36 mins</Text>
              </Text>
              <TouchableOpacity style={styles.reportBtn} disabled={true}>
                <Text style={styles.confirmBtnText}>Report Issue</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.destinationReachedText}>
                Destination Reached
              </Text>
              <TouchableOpacity
                style={styles.endTripBtn}
                onPress={() => setIsSummaryVisible(true)}
              >
                <Text style={styles.confirmBtnText}>End Trip</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.reportBtn, { marginTop: 10 }]}>
                <Text style={styles.confirmBtnText}>Report Issue</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F0F7FF" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  approvedCard: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    elevation: 10,
  },
  approvedTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0047AB",
    marginBottom: 10,
    textAlign: "center",
  },
  approvedSubText: {
    fontSize: 18,
    color: "#0047AB",
    textAlign: "center",
    marginBottom: 30,
  },
  returnHomeBtn: {
    backgroundColor: "#0047AB",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  summaryModalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  summaryPopupCard: {
    width: "90%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 30,
    overflow: "hidden",
    elevation: 20,
  },

  loadingCard: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    elevation: 10,
  },
  loadingCircle: {
    width: 60,
    height: 60,
    marginBottom: 20,
    resizeMode: "contain",
  },
  loadingTextSmall: {
    fontSize: 18,
    color: "#0047AB",
    fontWeight: "bold",
    textAlign: "center",
  },
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
    marginBottom: 10,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#E0E0E0",
    borderWidth: 1,
    borderColor: "#D1E0F3",
    position: "relative",
  },
  mapInnerBorder: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.5)",
    position: "absolute",
  },
  mapImage: { flex: 1, width: "100%", height: "100%" },
  driverCard: {
    position: "absolute",
    top: 15,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    width: "90%",
    elevation: 5,
  },
  driverPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#10c044",
    marginBottom: 5,
  },
  starsImage: { width: 100, height: 20, resizeMode: "contain" },
  driverName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0047AB",
    marginTop: 5,
  },
  plateNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0047AB",
    marginTop: 5,
  },
  labelSub: { fontSize: 12, color: "#7A7A7A" },
  confirmRideCard: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: "center",
    elevation: 10,
  },
  indicatorBar: {
    width: 50,
    height: 5,
    backgroundColor: "#CCCCCC",
    borderRadius: 3,
    marginTop: 10,
    marginBottom: 15,
  },
  waitingText: {
    color: "#0047AB",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },
  tripStatsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  distanceText: { fontSize: 28, fontWeight: "bold", color: "#0047AB" },
  priceText: { fontSize: 24, fontWeight: "bold", color: "#B34D4D" },
  timeToReach: {
    fontSize: 13,
    color: "#B34D4D",
    borderBottomWidth: 1,
    borderBottomColor: "#B34D4D",
    marginBottom: 20,
  },
  timeToReachDestination: {
    fontSize: 13,
    color: "#B34D4D",
    borderBottomWidth: 1,
    borderBottomColor: "#B34D4D",
    marginBottom: 20,
    width: "100%",
    textAlign: "center",
  },
  destinationReachedText: {
    fontSize: 14,
    color: "#10c044",
    borderBottomWidth: 1,
    borderBottomColor: "#10c044",
    marginBottom: 20,
    width: "100%",
    textAlign: "center",
    fontWeight: "600",
  },
  confirmBtn: {
    backgroundColor: "#0047AB",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  reportBtn: {
    backgroundColor: "#D63439",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  endTripBtn: {
    backgroundColor: "#10c044",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  confirmBtnText: { color: "white", fontSize: 18, fontWeight: "bold" },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelBtn: {
    flex: 0.48,
    borderWidth: 1,
    borderColor: "#B34D4D",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  cancelBtnText: { color: "#B34D4D", fontSize: 16, fontWeight: "bold" },
  messageBtn: {
    flex: 0.48,
    borderWidth: 1,
    borderColor: "#0047AB",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  messageBtnText: { color: "#0047AB", fontSize: 16, fontWeight: "bold" },

  summaryHeader: {
    borderBottomWidth: 2,
    borderBottomColor: "#10c044",
    paddingVertical: 15,
    marginHorizontal: 20,
  },
  summaryHeaderText: {
    color: "#10c044",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  summaryContent: { padding: 20 },
  drivenByText: { color: "#0047AB", fontSize: 14, marginBottom: 15 },
  summaryLocItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F7FF",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#D1E0F3",
  },
  summaryLocIcon: { width: 25, height: 25, marginRight: 10 },
  summaryLocText: { color: "#B34D4D", fontWeight: "500" },
  specsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  specLabel: { color: "#0047AB", fontSize: 14 },
  fareLabel: { color: "#B34D4D", fontSize: 18, marginTop: 5 },
  fareAmount: { color: "#B34D4D", fontSize: 22, fontWeight: "bold" },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  ratingBox: { flex: 0.48 },
  ratingTitle: { color: "#0047AB", fontSize: 14, marginBottom: 5 },
  ratingStars: { width: "100%", height: 20, resizeMode: "contain" },
  sectionTitle: { color: "#0047AB", fontWeight: "bold", marginBottom: 10 },
  tipRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tipBtn: {
    flex: 0.3,
    borderWidth: 1,
    borderColor: "#0047AB",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  tipBtnActive: {
    flex: 0.3,
    backgroundColor: "#0047AB",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
  },
  tipBtnText: { color: "#0047AB", fontWeight: "bold" },
  tipBtnTextActive: { color: "white", fontWeight: "bold" },
  tipInput: {
    backgroundColor: "#F0F7FF",
    borderRadius: 5,
    padding: 10,
    marginBottom: 25,
    color: "#0047AB",
  },
  payBtnBlue: {
    backgroundColor: "#0047AB",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  payBtnYellow: {
    backgroundColor: "#FFCC00",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  payBtnGray: {
    backgroundColor: "#8E8E93",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  payBtnText: { color: "white", fontWeight: "bold", fontSize: 18 },
  payBtnTextDark: { color: "#444", fontWeight: "bold", fontSize: 18 },
});

export default TripPassenger;

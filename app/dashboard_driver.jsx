import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import { BottomNavbar } from "../component/bottom_navbar_driver";

const DashboardDriver = () => {
  const router = useRouter();

  const [isOnline, setIsOnline] = useState(false);
  const notifications = 5;

  return (
    <View style={styles.container}>
      <View style={styles.topNav}>
        <TouchableOpacity
          style={styles.profileCircle}
          onPress={() => router.push("/profile_driver")}
        >
          <Image
            source={require("../assets/erp/driver/profile_blue.png")}
            style={styles.avatar}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => router.push("/notification_driver")}
        >
          <Image
            source={require("../assets/erp/driver/notif.png")}
            style={styles.customIconSmall}
          />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{notifications}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIsOnline(!isOnline)}
          style={[
            styles.statusPill,
            {
              backgroundColor: isOnline ? "#10c044" : "#D63439",
              flexDirection: isOnline ? "row-reverse" : "row",
            },
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
          onPress={() => router.push("/chat_fleet_driver")}
        >
          <Image
            source={require("../assets/erp/driver/support.png")}
            style={styles.customIconSmall}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => router.push("/scan_driver")}
        >
          <Image
            source={require("../assets/erp/driver/icon_scan.png")}
            style={styles.customIconSmall}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.mapContainer}>
        <Image
          source={require("../assets/erp/driver/map.png")}
          style={styles.mapImage}
          resizeMode="cover"
        />
      </View>

      {/* start btn*/}
      {isOnline && (
        <View style={styles.startButtonWrapper}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => router.push("/passenger_book_list")}
          >
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* reusable bottom navbar */}
      <BottomNavbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F0F7FF" },
  topNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "white",
    paddingTop: 50,
  },
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: "#0047AB",
  },
  avatar: { width: "100%", height: "100%" },
  statusPill: {
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 25,
    gap: 8,
    minWidth: 110,
  },
  statusText: { color: "white", fontWeight: "bold", fontSize: 14 },
  iconBtn: { padding: 8, position: "relative" },
  badge: {
    position: "absolute",
    right: 2,
    top: 2,
    backgroundColor: "#D63439",
    borderRadius: 10,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: { color: "white", fontSize: 11, fontWeight: "bold" },
  customIconSmall: { width: 35, height: 35, resizeMode: "contain" },
  statusIcon: { width: 25, height: 25, resizeMode: "contain" },

  // map style
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
  },

  mapImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  startButtonWrapper: {
    position: "absolute",
    bottom: 150,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 20,
  },
  startButton: {
    backgroundColor: "#0047AB",
    paddingVertical: 10,
    width: "60%",
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: "center",
    alignItems: "center",
  },
  startButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 1,
  },
});

export default DashboardDriver;

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
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import BottomNavBar from "../component/bottom_navbar_passenger";

const DashboardProfilePassenger = () => {
  const router = useRouter();
  const [viewMode, setViewMode] = useState("profile");
  const [gender, setGender] = useState("female");
  const [showPassword, setShowPassword] = useState(false);

  const renderProfileView = () => (
    <View style={styles.profileMainContent}>
      <View style={styles.profileHeaderRow}>
        <Text style={styles.profileTitle}>Profile</Text>
        <TouchableOpacity
          style={styles.editInfoBtn}
          onPress={() => setViewMode("edit_basic")}
        >
          <Text style={styles.editInfoText}>Edit Info</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.avatarWrapper}>
        <View style={styles.avatarCircle}>
          <Image
            source={require("../assets/erp/passenger/profile_blue.png")}
            style={styles.avatarImage}
          />
          <TouchableOpacity style={styles.editIconBadge}>
            <FontAwesome name="pencil" size={16} color="#0047AB" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.userName}>Janine Dela Cruz</Text>
      <Text style={styles.userEmail}>janine@gmail.com</Text>

      <View style={styles.qrContainer}>
        <Image
          source={require("../assets/erp/passenger/qr_code.png")}
          style={styles.qrCode}
        />
      </View>

      <TouchableOpacity
        style={styles.viewAllBtn}
        onPress={() => setViewMode("edit_basic")}
      >
        <Text style={styles.viewAllText}>View All Information</Text>
      </TouchableOpacity>

      {/* logout btn*/}
      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => {
          if (router.canDismiss()) {
            router.dismissAll();
          }
          router.replace("/");
        }}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );

  const renderEditForms = () => (
    <View style={styles.formContainer}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            viewMode === "edit_basic" && styles.tabActive,
          ]}
          onPress={() => setViewMode("edit_basic")}
        >
          <Text
            style={[
              styles.tabText,
              viewMode === "edit_basic" && styles.tabTextActive,
            ]}
          >
            Basic Information
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            viewMode === "edit_password" && styles.tabActive,
          ]}
          onPress={() => setViewMode("edit_password")}
        >
          <Text
            style={[
              styles.tabText,
              viewMode === "edit_password" && styles.tabTextActive,
            ]}
          >
            Password
          </Text>
        </TouchableOpacity>
      </View>

      {viewMode === "edit_basic" ? (
        <View>
          <Text style={styles.labelText}>Full Name</Text>
          <View style={styles.inputWrapper}>
            <View style={styles.iconBox}>
              <FontAwesome name="user" size={18} color="white" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#A9B9D1"
            />
          </View>

          <Text style={styles.labelText}>Mobile Number</Text>
          <View style={styles.inputWrapper}>
            <View style={styles.iconBox}>
              <FontAwesome name="phone" size={18} color="white" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              keyboardType="phone-pad"
              placeholderTextColor="#A9B9D1"
            />
          </View>

          <Text style={styles.labelText}>Email Address</Text>
          <View style={styles.inputWrapper}>
            <View style={styles.iconBox}>
              <MaterialIcons name="email" size={18} color="white" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              keyboardType="email-address"
              placeholderTextColor="#A9B9D1"
            />
          </View>

          <Text style={styles.labelText}>Gender</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={gender}
              onValueChange={(v) => setGender(v)}
              style={styles.picker}
            >
              <Picker.Item label="Choose" value="" color="#A9B9D1" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>

          <View style={styles.row}>
            <View style={{ flex: 2 }}>
              <Text style={styles.labelText}>Date of Birth</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="MM/DD/YYYY"
                  placeholderTextColor="#A9B9D1"
                />
                <FontAwesome
                  name="calendar"
                  size={16}
                  color="#0047AB"
                  style={{ marginRight: 10 }}
                />
              </View>
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.labelText}>Age</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input, { textAlign: "center" }]}
                  placeholder="00"
                  keyboardType="numeric"
                  placeholderTextColor="#A9B9D1"
                />
              </View>
            </View>
          </View>

          <Text style={styles.labelText}>Home Address</Text>
          <View style={styles.inputWrapper}>
            <View style={styles.iconBox}>
              <FontAwesome name="home" size={18} color="white" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Home Address"
              placeholderTextColor="#A9B9D1"
            />
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.labelText}>Current Password</Text>
          <View style={styles.inputWrapper}>
            <View style={styles.iconBox}>
              <FontAwesome name="key" size={18} color="white" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Current Password"
              secureTextEntry={!showPassword}
              placeholderTextColor="#A9B9D1"
            />
          </View>

          <Text style={styles.labelText}>New Password</Text>
          <View style={styles.inputWrapper}>
            <View style={styles.iconBox}>
              <FontAwesome name="key" size={18} color="white" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              secureTextEntry={!showPassword}
              placeholderTextColor="#A9B9D1"
            />
          </View>

          <Text style={styles.labelText}>Confirm New Password</Text>
          <View style={styles.inputWrapper}>
            <View style={styles.iconBox}>
              <FontAwesome name="key" size={18} color="white" />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Confirm New Password"
              secureTextEntry={!showPassword}
              placeholderTextColor="#A9B9D1"
            />
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitBtnText}>Update</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelBtn}
        onPress={() => setViewMode("profile")}
      >
        <Text style={styles.backFullBtnText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground
      source={require("../assets/erp/bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
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
              {viewMode === "profile" ? renderProfileView() : renderEditForms()}
              <View style={{ height: 120 }} />
            </ScrollView>
          </View>
          <BottomNavBar />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, width: "100%", height: "100%" },
  safeContainer: { flex: 1 },
  header: {
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  headerLogo: { width: 220, height: 80, resizeMode: "contain" },
  contentContainer: {
    flex: 1,
    backgroundColor: "#F0F7FF",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: "hidden",
  },
  scrollContent: { paddingHorizontal: 25, paddingTop: 30 },
  profileHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  profileTitle: { fontSize: 24, fontWeight: "bold", color: "#0047AB" },
  editInfoBtn: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D1E0F3",
  },
  editInfoText: { color: "#4A78B5", fontSize: 13, fontWeight: "700" },
  profileMainContent: { alignItems: "center" },
  avatarWrapper: { marginBottom: 15 },
  avatarCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "white",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
  },
  avatarImage: { width: "100%", height: "100%", borderRadius: 70 },
  editIconBadge: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "white",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0047AB",
    marginTop: 10,
  },
  userEmail: { fontSize: 14, color: "#4A78B5", marginBottom: 20 },
  qrContainer: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 25,
    marginBottom: 25,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#D1E0F3",
  },
  qrCode: { width: 220, height: 220 },
  viewAllBtn: {
    backgroundColor: "#0047AB",
    width: "100%",
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  viewAllText: { color: "white", fontSize: 16, fontWeight: "bold" },
  logoutBtn: {
    backgroundColor: "#D32F2F",
    width: "100%",
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  logoutText: { color: "white", fontSize: 16, fontWeight: "bold" },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 4,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#D1E0F3",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  tabActive: { backgroundColor: "#0047AB" },
  tabText: { color: "#0047AB", fontWeight: "700", fontSize: 13 },
  tabTextActive: { color: "white" },
  labelText: {
    fontSize: 11,
    color: "#4A78B5",
    fontWeight: "700",
    marginBottom: 4,
    marginLeft: 2,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1E0F3",
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "white",
    height: 45,
    overflow: "hidden",
  },
  iconBox: {
    backgroundColor: "#0047AB",
    width: 45,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: { flex: 1, paddingHorizontal: 12, fontSize: 14, color: "#333" },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#D1E0F3",
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "white",
    height: 45,
    justifyContent: "center",
  },
  picker: { width: "100%" },
  row: { flexDirection: "row", width: "100%" },
  submitBtn: {
    backgroundColor: "#32D76B",
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  submitBtnText: { color: "white", fontSize: 18, fontWeight: "bold" },
  cancelBtn: {
    backgroundColor: "#D32F2F",
    width: "100%",
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  backFullBtnText: { color: "white", fontSize: 16, fontWeight: "600" },
});

export default DashboardProfilePassenger;

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const DriverMessagePassenger = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const [chatHistory] = useState([
    {
      id: 1,
      text: "san na pu kau",
      sender: "driver",
      time: "20:20",
    },
    {
      id: 2,
      text: "otw na pu, wait lang po",
      sender: "passenger",
      time: "20:20",
    },
    { id: 3, text: "ingat puuuuu", sender: "driver", time: "20:20" },
  ]);

  return (
    <ImageBackground
      source={require("../assets/erp/bg.png")}
      style={styles.background}
    >
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
          <Image
            source={require("../assets/erp/passenger/profile_blue.png")}
            style={styles.headerAvatar}
          />
          <Text style={styles.headerName}>Juan Dela Cruz</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconCircle}>
            <Ionicons name="call" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={28}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.contentContainer}
      >
        <View style={styles.messageBoard}>
          <View style={styles.titleBanner}>
            <Text style={styles.titleText}>Driver Message</Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.chatScroll}
          >
            {chatHistory.map((item) => (
              <View
                key={item.id}
                style={[
                  styles.messageWrapper,
                  item.sender === "driver"
                    ? styles.meWrapper
                    : styles.themWrapper,
                ]}
              >
                {item.sender === "passenger" && (
                  <Image
                    source={require("../assets/erp/passenger/profile_blue.png")}
                    style={styles.chatAvatar}
                  />
                )}
                <View style={styles.bubbleContainer}>
                  <View
                    style={[
                      styles.bubble,
                      item.sender === "driver"
                        ? styles.meBubble
                        : styles.themBubble,
                    ]}
                  >
                    <Text
                      style={[
                        styles.messageText,
                        item.sender === "driver"
                          ? styles.meText
                          : styles.themText,
                      ]}
                    >
                      {item.text}
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.timeText,
                      item.sender === "driver" && { alignSelf: "flex-end" },
                    ]}
                  >
                    {item.time}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type your message..."
              placeholderTextColor="#AAA"
              value={message}
              onChangeText={setMessage}
              multiline
            />
            <TouchableOpacity style={styles.sendButton}>
              <Ionicons name="send" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: "#0047AB" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  headerAvatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    borderWidth: 1,
    borderColor: "white",
  },
  headerName: { color: "white", fontSize: 18, fontWeight: "500" },
  headerRight: { flexDirection: "row", alignItems: "center", gap: 15 },
  iconCircle: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#F0F7FF",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: "hidden",
  },
  messageBoard: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
  titleBanner: {
    backgroundColor: "#0047AB",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  titleText: { color: "white", fontSize: 22, fontWeight: "bold" },
  chatScroll: { paddingBottom: 100 },
  messageWrapper: { flexDirection: "row", marginBottom: 20, maxWidth: "85%" },
  meWrapper: { alignSelf: "flex-end" }, // "Me" (current user) on the right
  themWrapper: { alignSelf: "flex-start" }, // "Them" (other person) on the left
  chatAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  bubbleContainer: { flexShrink: 1 },
  bubble: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 1,
  },
  meBubble: { backgroundColor: "white", borderTopRightRadius: 0 }, // White bubble for "Me"
  themBubble: { backgroundColor: "#0047AB", borderTopLeftRadius: 0 }, // Blue bubble for "Them"
  messageText: { fontSize: 14, lineHeight: 20 },
  meText: { color: "#333" },
  themText: { color: "white" },
  timeText: { fontSize: 10, color: "#888", marginTop: 4 },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    maxHeight: 100,
    borderWidth: 1,
    borderColor: "#D1E0F3",
    color: "#333",
  },
  sendButton: {
    backgroundColor: "#0047AB",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
});

export default DriverMessagePassenger;

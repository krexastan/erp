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

const AgentChatPassenger = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const [chatHistory] = useState([
    {
      id: 1,
      text: "Hi Janine, what's on your mind?",
      sender: "agent",
      time: "20:20",
    },
    {
      id: 2,
      text: "Can I ask? Do your system has discounts for PWD?",
      sender: "passenger",
      time: "20:20",
    },
    {
      id: 3,
      text: "Okay, Thank you asking that question. To answer that, yes we have discount for that.\n\nDo you have any other question/concerns?",
      sender: "agent",
      time: "20:20",
    },
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
          <View style={styles.agentHeaderIcon}>
            <Ionicons name="person-circle" size={35} color="white" />
          </View>
          <Text style={styles.headerName}>Agent</Text>
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
            <Text style={styles.titleText}>How can we help you?</Text>
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
                  item.sender === "passenger"
                    ? styles.meWrapper
                    : styles.themWrapper,
                ]}
              >
                {item.sender === "agent" && (
                  <Ionicons
                    name="person-circle"
                    size={40}
                    color="#007AFF"
                    style={styles.chatIcon}
                  />
                )}
                <View style={styles.bubbleContainer}>
                  <View
                    style={[
                      styles.bubble,
                      item.sender === "passenger"
                        ? styles.meBubble
                        : styles.themBubble,
                    ]}
                  >
                    <Text
                      style={[
                        styles.messageText,
                        item.sender === "passenger"
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
                      item.sender === "passenger" && { alignSelf: "flex-end" },
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
  agentHeaderIcon: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: "#1E90FF",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  titleText: { color: "white", fontSize: 22, fontWeight: "bold" },
  chatScroll: { paddingBottom: 100 },
  messageWrapper: { flexDirection: "row", marginBottom: 20, maxWidth: "85%" },
  meWrapper: { alignSelf: "flex-end" },
  themWrapper: { alignSelf: "flex-start" },
  chatIcon: { marginRight: 10 },
  bubbleContainer: { flexShrink: 1 },
  bubble: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    elevation: 1,
  },
  meBubble: { backgroundColor: "white", borderTopRightRadius: 0 },
  themBubble: { backgroundColor: "#1E90FF", borderTopLeftRadius: 0 },
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
    backgroundColor: "#007AFF",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
});

export default AgentChatPassenger;

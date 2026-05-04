import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

const Index = () => {
  // Create an animated value for the glow intensity
  const glowAnim = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    // Create a looping pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 0.4,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [glowAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: glowAnim }}>
        <Text style={styles.glowText}>tanginamo austria</Text>
      </Animated.View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Dark background makes glow stand out
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    // Text shadow creates the "glow"
    textShadowColor: 'rgba(0, 255, 255, 0.9)', 
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
    letterSpacing: 2,
  },
});
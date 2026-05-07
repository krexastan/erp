import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* handles navigation between all your pages */}
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="passenger_driver" />
        <Stack.Screen name="dashboard_passenger" />
        <Stack.Screen name="dashboard_driver" />
        <Stack.Screen name="register_passenger" />
        <Stack.Screen name="register_driver" />
      </Stack>
    </SafeAreaProvider>
  );
}
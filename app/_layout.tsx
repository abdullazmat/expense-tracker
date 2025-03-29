import { AuthProvider } from "@/contexts/authContext";
import { Stack } from "expo-router";
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const StackLayout = () => {
  return <Stack screenOptions={{ headerShown: false }}></Stack>;
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <StackLayout />
    </AuthProvider>
  );
}
const styles = StyleSheet.create({});

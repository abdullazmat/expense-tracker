import { CustomTabs } from "@/components/CustomTabs";
import { Tabs } from "expo-router";
import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

const _laypout = () => {
  return (
    <Tabs tabBar={CustomTabs} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="statistics" />
      <Tabs.Screen name="wallet" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

const styles = StyleSheet.create({});
export default _laypout;

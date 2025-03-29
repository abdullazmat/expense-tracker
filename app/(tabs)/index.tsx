import Button from "@/components/Button";
import Typo from "@/components/Typo";
import { auth } from "@/config/firebase";
import { colors } from "@/constants/theme";
import { signOut } from "firebase/auth";
import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

const Home = () => {
  const handleLogOut = async () => {
    await signOut(auth);
  };
  return (
    <View>
      <Text> Home </Text>
      <Button onPress={handleLogOut}>
        <Typo color={colors.black}>Log Out</Typo>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Home;

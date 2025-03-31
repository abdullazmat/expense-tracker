import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { auth } from "@/config/firebase";
import { colors } from "@/constants/theme";
import { useAuth } from "@/contexts/authContext";
import { signOut } from "firebase/auth";
import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

const Home = () => {
  const { user } = useAuth();
  // console.log("user", user);
  // const handleLogOut = async () => {
  //   await signOut(auth);
  // };
  return (
    <ScreenWrapper>
      <Typo> Home </Typo>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});
export default Home;

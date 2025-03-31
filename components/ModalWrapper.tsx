import ScreenWrapper from "@/components/ScreenWrapper";
import { colors, spacingY } from "@/constants/theme";
import { ModalWrapperProps } from "@/types";
import React, { Component } from "react";
import { Text, StyleSheet, View, Platform } from "react-native";

const isIos = Platform.OS == "ios";
const ModalWrapper = ({
  style,
  children,
  bg = colors.neutral800,
}: ModalWrapperProps) => {
  return (
    <View style={[styles.container, { backgroundColor: bg }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isIos ? spacingY._15 : 50,
    paddingBottom: isIos ? spacingY._20 : spacingY._10,
  },
});
export default ModalWrapper;

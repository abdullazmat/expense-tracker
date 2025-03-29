import { colors, radius } from "@/constants/theme";
import { BackButtonProps } from "@/types";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import { CaretLeft } from "phosphor-react-native";
import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const BackButton = ({ style, iconSize = 26 }: BackButtonProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={[styles.button, style]}
    >
      <CaretLeft
        size={verticalScale(iconSize)}
        color={colors.white}
        weight="bold"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.neutral600,
    alignSelf: "flex-start",
    borderRadius: radius._12,
    borderCurve: "continuous",
    padding: 5,
  },
});
export default BackButton;

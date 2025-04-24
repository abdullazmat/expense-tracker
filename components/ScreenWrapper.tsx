import { colors } from "@/constants/theme";
import { ScreenWrapperProps } from "@/types";
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Platform,
  Dimensions,
  StatusBar,
} from "react-native";

const { height } = Dimensions.get("window");

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ style, children }) => {
  let paddingTop = Platform.OS === "ios" ? height * 0.06 : 50;

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: colors.neutral900,
        },
        style,
      ]}
    >
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.neutral900}
      />
      {children}
    </View>
  );
};

export default ScreenWrapper;

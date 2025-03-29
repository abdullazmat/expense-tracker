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
          paddingTop,
          flex: 1,
          backgroundColor: colors.neutral900,
        },
        style,
      ]}
    >
      <StatusBar barStyle={"dark-content"} />
      {children}
    </View>
  );
};

export default ScreenWrapper;

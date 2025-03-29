import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Touchable,
  TouchableOpacity,
  Image,
} from "react-native";

const Welcome = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Login Button  */}
        <View>
          <TouchableOpacity style={styles.loginButton}>
            <Typo fontWeight={"500"}>Sign In</Typo>
          </TouchableOpacity>
          <Image
            source={require("../../assets/images/welcome.png")}
            style={styles.welcomeImage}
            resizeMode="contain"
          />
        </View>
        {/* Login Button  */}
        <View style={styles.footer}>
          <View style={{ alignItems: "center" }}>
            <Typo fontWeight={"800"} size={30}>
              Always Take Control
            </Typo>
            <Typo fontWeight={"800"} size={30}>
              Of Your Finances
            </Typo>
          </View>
          <View style={{ alignItems: "center" }}>
            <Typo color={colors.textLight} size={15}>
              Finances must be arranged to set a better
            </Typo>
            <Typo color={colors.textLight} size={15}>
              lifestyle in future
            </Typo>
          </View>
          <View style={styles.buttonContainer}>
            {/* Button  */}
            <Button>
              <Typo size={22} color={colors.black} fontWeight={"600"}>
                Get Started
              </Typo>
            </Button>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },
  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
    marginTop: verticalScale(100),
  },
  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingX._20,
  },
  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingX._25,
  },
});

export default Welcome;

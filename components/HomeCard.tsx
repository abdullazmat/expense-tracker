import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Typo from "./Typo";
import { scale, verticalScale } from "@/utils/styling";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { ImageBackground } from "expo-image";
import * as Icons from "phosphor-react-native";

const HomeCard = () => {
  return (
    <ImageBackground
      source={require("../assets/images/card.png")}
      contentFit="cover"
      style={styles.bgImage}
    >
      <View style={styles.container}>
        {/* Total Balance */}
        <View style={{ marginBottom: spacingY._20 }}>
          <View style={styles.totalBalanceRow}>
            <Typo color={colors.neutral800} size={17} fontWeight={"500"}>
              Total Balance
            </Typo>
            <Icons.DotsThreeOutline
              size={verticalScale(33)}
              color={colors.black}
              weight="fill"
            />
          </View>
          <Typo color={colors.black} fontWeight={"bold"} size={30}>
            $60000
          </Typo>
        </View>
        {/* Total Expenses and Income */}
        <View style={styles.stats}>
          {/* Income */}
          <View style={{ gap: verticalScale(5) }}>
            <View style={styles.incomeExpenses}>
              <View style={styles.statsIcon}>
                <Icons.ArrowDown
                  color={colors.black}
                  size={verticalScale(15)}
                  weight="bold"
                />
              </View>
              <Typo fontWeight={500} size={16} color={colors.neutral700}>
                Income
              </Typo>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Typo size={17} color={colors.green} fontWeight={600}>
                $1000
              </Typo>
            </View>
          </View>
          {/* Expenses*/}
          <View style={{ gap: verticalScale(5) }}>
            <View style={styles.incomeExpenses}>
              <View style={styles.statsIcon}>
                <Icons.ArrowUp
                  color={colors.black}
                  size={verticalScale(15)}
                  weight="bold"
                />
              </View>
              <Typo fontWeight={500} size={16} color={colors.neutral700}>
                Expense
              </Typo>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Typo size={17} color={colors.rose} fontWeight={600}>
                $1000
              </Typo>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    height: scale(210),
    width: "100%",
  },
  container: {
    padding: spacingX._20,
    paddingHorizontal: scale(23),
    height: "87%",
    width: "100%",
    justifyContent: "space-between",
  },
  totalBalanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacingY._5,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statsIcon: {
    backgroundColor: colors.neutral350,
    padding: spacingY._5,
    borderRadius: 50,
  },
  incomeExpenses: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacingY._7,
  },
});
export default HomeCard;

import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Typo from "./Typo";
import { TransactionItemProps, TransactionListType } from "@/types";
import { colors, radius, spacingX, spacingY } from "@/constants/theme";
import { FlashList } from "@shopify/flash-list";
import { verticalScale } from "@/utils/styling";
import Loading from "./Loading";
import { expenseCategories } from "@/constants/data";
import Animated, { FadeInDown } from "react-native-reanimated";

const TransactionList = ({
  data,
  title,
  loading,
  emptyListMessage,
}: TransactionListType) => {
  const handleClick = () => {
    // open transaction detail
  };
  return (
    <View style={styles.container}>
      {title && (
        <Typo size={20} fontWeight={500}>
          {title}
        </Typo>
      )}

      <View style={styles.list}>
        <FlashList
          data={data}
          renderItem={({ item, index }) => (
            <TransactionItem
              item={item}
              index={index}
              handleClick={handleClick}
            />
          )}
          estimatedItemSize={60}
        />
        {!loading && data?.length == 0 && (
          <Typo
            color={colors.neutral400}
            size={15}
            style={{ textAlign: "center", marginTop: spacingY._15 }}
          >
            {emptyListMessage}
          </Typo>
        )}

        {loading && (
          <View style={{ top: verticalScale(100) }}>
            <Loading />
          </View>
        )}
      </View>
    </View>
  );
};

const TransactionItem = ({
  item,
  index,
  handleClick,
}: TransactionItemProps) => {
  let category = expenseCategories["utilities"];
  const IconComponent = category.icon;
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 70)
        .springify()
        .damping(14)}
    >
      <TouchableOpacity style={styles.row} onPress={() => handleClick(item)}>
        <View style={[styles.icon, { backgroundColor: category.bgColor }]}>
          {IconComponent && (
            <IconComponent
              size={verticalScale(25)}
              weight="fill"
              color={colors.white}
            />
          )}
        </View>
        <View style={styles.categoryDes}>
          <Typo size={17}>{category.label}</Typo>
          <Typo
            color={colors.neutral400}
            size={12}
            textProps={{ numberOfLines: 1 }}
          >
            paid wifi bill
          </Typo>
        </View>

        <View style={styles.amountDate}>
          <Typo fontWeight={"500"} color={colors.primary}>
            + $23
          </Typo>
          <Typo size={13} color={colors.neutral400}>
            12 Jan
          </Typo>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacingY._17,
  },
  list: {
    minHeight: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacingX._12,
    marginBottom: spacingY._12,

    // list with background
    backgroundColor: colors.neutral800,
    padding: spacingY._10,
    paddingHorizontal: spacingY._10,
    borderRadius: radius._17,
  },
  icon: {
    height: verticalScale(44),
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: radius._12,
    borderCurve: "continuous",
  },
  categoryDes: {
    flex: 1,
    gap: 2.5,
  },
  amountDate: {
    alignItems: "flex-end",
    gap: 3,
  },
});
export default TransactionList;

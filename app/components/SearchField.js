import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import colors from "../config/colors";
import SPACING from "../config/SPACING";

import { Ionicons } from "@expo/vector-icons";

const SearchField = () => {
  return (
    <View
      style={{
        backgroundColor: '#ffff',
        borderRadius: SPACING,
        overflow: "hidden",
      }}
    >
      <BlurView
        intensity={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            width: "100%",
            color: colors.black,
            fontSize: SPACING * 1.7,
            padding: SPACING,
            paddingLeft: SPACING * 3.5,
          }}
          placeholder="Поиск"
          placeholderTextColor={colors.gray}
        />
        <Ionicons
          style={{
            position: "absolute",
            left: 10,
          }}
          name="search"
          color={colors.gray}
          size={24}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});
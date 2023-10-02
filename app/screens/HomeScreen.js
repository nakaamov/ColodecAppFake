import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions,
  // StatusBar,
} from "react-native";
import React, { useState } from "react";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import SearchField from "../components/SearchField";
import Categories from "../components/Categories";
import coffees from "../config/coffees";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const avatar = require("../../assets/avatar.png");

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [focused, setFocused] = useState(true);
  const handlePress = () => {
    setFocused(!focused);
  };

  const navigation = useNavigation();
  const handleKolodecPress = () => {
    navigation.navigate("KolodecScreen");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.dark }}>
      <StatusBar style="dark" />
      <ScrollView
        style={{ padding: 10, marginBottom: 20, }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            padding: SPACING,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* MORE ICON */}

          <TouchableOpacity
            onPress={handleKolodecPress}
            style={{
              borderRadius: SPACING,
              overflow: "hidden",
              width: SPACING * 4,
              height: SPACING * 4,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="menu" size={SPACING * 2.5} color={colors.gray} />
            </BlurView>
          </TouchableOpacity>

          {/* LOGO TEXT */}

          <View
            style={{
              width: "50%",
              marginVertical: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: colors.green,
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Логотип
            </Text>
          </View>

          {/* SEPET ICON */}

          <View
            style={{
              width: SPACING * 4,
              height: SPACING * 4,
              overflow: "hidden",
              borderRadius: SPACING,
            }}
          >
            <TouchableOpacity>
              <BlurView
                style={{
                  height: "100%",
                  padding: SPACING / 2,
                }}
              >
                <Image
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: SPACING,
                  }}
                  source={avatar}
                />
              </BlurView>
            </TouchableOpacity>
          </View>
        </View>

        <SearchField />

        <Categories onChange={(id) => setActiveCategoryId(id)} />

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: 3,
          }}
        >
          {coffees
            .filter((coffee) => {
              if (activeCategoryId === null) {
                return true;
              }
              return coffee.categoryId === activeCategoryId;
            })
            .map((coffee) => (
              <View
                key={coffee.id}
                style={{
                  width: width / 2 - SPACING * 2,
                  marginBottom: SPACING,
                  borderRadius: SPACING * 2,
                  overflow: "hidden",
                }}
              >
                <BlurView
                  intensity={95}
                  style={{
                    backgroundColor: colors.white,
                    padding: SPACING,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: 150,
                      widht: "100%",
                    }}
                  >
                    <Image
                      source={coffee.image}
                      style={{
                        width: "100%",
                        height: "104%",
                        aspectRatio: 1,
                        borderRadius: SPACING * 2,
                        resizeMode: "cover",
                      }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        overflow: "hidden",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          flexDirection: "row",
                          padding: SPACING - 2,
                        }}
                        onPress={handlePress}
                      >
                        <Ionicons
                          style={{
                            marginLeft: SPACING / 2,
                          }}
                          name={focused ? "heart-outline" : "heart"}
                          color={colors.blue}
                          size={SPACING * 2.5}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                  <Text
                    numberOfLines={2}
                    style={{
                      color: colors.gray,
                      fontWeight: "600",
                      fontSize: SPACING * 1.7,
                      marginTop: SPACING,
                      marginBottom: SPACING / 2,
                    }}
                  >
                    {coffee.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      color: colors.green,
                      fontSize: SPACING * 1.2,
                      fontWeight: "800",
                    }}
                  >
                    {coffee.included}
                  </Text>
                  <View
                    style={{
                      marginVertical: SPACING / 2,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      marginBottom: -11,
                      marginRight: -11,
                    }}
                  >
                    <TouchableOpacity
                      onPress={handleKolodecPress}
                      style={{
                        flexDirection: "row",
                        backgroundColor: colors.blue,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 16,
                        paddingRight: 11,
                      }}
                    >
                      <Text
                        style={{ color: colors.gray, fontSize: SPACING * 1.6 }}
                      >
                        {coffee.price}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </BlurView>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  StatusBar: {
    color: "black",
  },
});

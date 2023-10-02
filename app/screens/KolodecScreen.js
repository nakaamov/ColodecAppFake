import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { BlurView } from "expo-blur";

const { height, width } = Dimensions.get("window");

const KolodecScreen = ({ coffee }) => {
  const [activeSize, setActiveSize] = useState(null);
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <ImageBackground
            // style={styles.kolodec}
            source={require("../../assets/keci.jpg")}
            style={{
              height: height / 2 + SPACING * 2,
              justifyContent: "space-between",
            }}
            imageStyle={{
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: SPACING * 2,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: colors.dark,
                  padding: SPACING,
                  borderRadius: SPACING * 1.5,
                }}
              >
                <Ionicons
                  name="arrow-back"
                  color={colors.light}
                  size={SPACING * 2}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.dark,
                  padding: SPACING,
                  borderRadius: SPACING * 1.5,
                }}
              >
                <Ionicons
                  name="heart"
                  color={colors.light}
                  size={SPACING * 2}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderRadius: SPACING * 3,
                overflow: "hidden",
              }}
            >
              <BlurView
                intensity={80}
                tint="dark"
                style={{
                  padding: SPACING * 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: SPACING * 2,
                      color: colors.white,
                      fontWeight: "600",
                      marginBottom: SPACING,
                    }}
                  >
                    Именной колодец
                  </Text>
                  <Text
                    style={{
                      fontSize: SPACING * 1.8,
                      color: colors["white-smoke"],
                      fontWeight: "500",
                      marginBottom: SPACING,
                    }}
                  >
                    Бангладеш
                  </Text>
                </View>
                <View
                  style={{
                    width: "35%",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        padding: SPACING / 2,
                        width: SPACING * 5,
                        height: SPACING * 5,
                        backgroundColor: colors.dark,
                        borderRadius: SPACING,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons
                        name="person"
                        size={SPACING * 2}
                        color={colors.green}
                      />
                      <Text
                        style={{
                          color: colors["white-smoke"],
                          fontSize: SPACING,
                        }}
                      >
                        5345
                      </Text>
                    </View>
                    <View
                      style={{
                        padding: SPACING / 2,
                        width: SPACING * 5,
                        height: SPACING * 5,
                        backgroundColor: colors.dark,
                        borderRadius: SPACING,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Ionicons
                        name="water"
                        size={SPACING * 2}
                        color={colors.green}
                      />
                      <Text
                        style={{
                          color: colors["white-smoke"],
                          fontSize: SPACING,
                        }}
                      >
                        3324
                      </Text>
                    </View>
                  </View>
                </View>
              </BlurView>
            </View>
          </ImageBackground>

          <View
            style={{
              padding: SPACING,
            }}
          >
            <Text
              style={{
                color: colors["white-smoke"],
                fontSize: SPACING * 1.7,
                marginBottom: SPACING,
              }}
            >
              Описание
            </Text>
            <View>
              <Text style={styles.paragraph}>
                Колодец - это не только вода, которую они могут пить и
                использовать для готовки пищи, это также возможность избежать
                многих заболеваний, связанных с загрязненной водой, и экономить
                время, которое они могут потратить на образование или заработок.
              </Text>
              <Text style={styles.paragraph}>
                За счет наличия колодца, местные жители могут выращивать овощи и
                фрукты, которые также нужны для пропитания. Кроме того, они
                могут использовать воду для купания и мытья белья, что также
                является очень важным аспектом жизни в условиях, когда гигиена
                играет важную роль в предотвращении различных заболеваний.
              </Text>
              <Text style={styles.paragraph}>
                Но возможности не заканчиваются на этом. Благодаря колодцу,
                местные жители могут выращивать овощи, пробовать и использовать
                вырученные деньги на покупку одежды и необходимых предметов. Так
                же, они могут использовать воду для производства кирпичей и
                строительства домовушек и других построек, что помогает улучшить
                качество жизни и сделать их дома более комфортабельными и
                безопасными. Таким образом, заказав у нас водяной колодец, вы не
                только помогаете местным жителям, но и становитесь частью
                прекрасного дела, которое вносит свой вклад в улучшение качества
                жизни людей и развитие социально-экономического потенциала
                региона.
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <SafeAreaView
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <View
          style={{
            padding: SPACING,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: SPACING * 3,
          }}
        >
          <Text style={{ color: colors.white, fontSize: SPACING * 1.5 }}>
            Цена
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: colors.green, fontSize: SPACING * 2 }}>
              $
            </Text>
            <Text
              style={{
                color: colors.white,
                fontSize: SPACING * 2,
                marginLeft: SPACING / 2,
              }}
            >
              30 000 ₽
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            marginRight: SPACING,
            backgroundColor: colors.green,
            width: width / 2 + SPACING * 3,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SPACING * 2,
          }}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: SPACING * 2,
              fontWeight: "700",
            }}
          >
            Заказать колодец
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default KolodecScreen;

const styles = StyleSheet.create({
  paragraph: {
    marginBottom: 10,
    color: "white",
  },
  // kolodec: {
  //   height: height / 2 + SPACING * 2,
  //   justifyContent: "space-between",
  //   // borderBottomEndRadius: 30,
  //   // borderBottomRightRadius: 30,
  //   borderRadius: 50,
  //   borderBottomLeftRadius
  // },
});

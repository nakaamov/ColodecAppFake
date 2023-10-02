import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./app/screens/HomeScreen";
import Answers from "./app/screens/tabbar/Answers";
import Liked from "./app/screens/tabbar/Liked";
import Profile from "./app/screens/tabbar/Profile";
import Project from "./app/screens/tabbar/Project";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 6000);
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Главное"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Главное") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Проекты") {
              iconName = focused ? "copy" : "copy-outline";
            } else if (route.name === "Избранное") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Отчёты") {
              iconName = focused
                ? "checkmark-circle"
                : "checkmark-circle-outline";
            } else if (route.name === "Профиль") {
              iconName = focused ? "person" : "person-outline";
            }

            return (
              <Ionicons
                name={iconName}
                size={26}
                color={focused ? "#38D302" : "#9FB2AF"}
              />
            );
          },
          tabBarActiveTintColor: "#38D302",
          tabBarInactiveTintColor: "#9FB2AF",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Проекты" component={Project} />
        <Tab.Screen name="Избранное" component={Liked} />
        <Tab.Screen name="Главное" component={HomeScreen} />
        <Tab.Screen name="Отчёты" component={Answers} />
        <Tab.Screen name="Профиль" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
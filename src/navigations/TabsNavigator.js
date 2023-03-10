import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import TransactionsScreen from "../screens/SearchScreen";
import StatisticsScreen from "../screens/FavoriteScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {COLORS} from "../theme/theme";
import AddButton from "../components/AddButton";
import {useTabMenu} from "../context/TabContext";
// import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator();

const getIconColor = focused => ({
  tintColor: focused ? COLORS.primary : COLORS.dark,
});

const TabsNavigator = () => {
  const {opened, toggleOpened} = useTabMenu();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <AntDesign name="home" size={28} color={focused? '#00CC99':'#fff'} />
              
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <AntDesign name="search1" size={28} color={focused? '#00CC99':'#fff'} />
              {/* <Image
                source={require("../../assets/images/Transactions.png")}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              /> */}
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      {/* <Tab.Screen
        name="Add"
        component={HomeScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarButton: () => (
            <AddButton opened={opened} toggleOpened={toggleOpened} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <AntDesign name="hearto" size={28} color={focused? '#00CC99':'#fff'} />

              {/* <Image
                source={require("../../assets/images/Graph.png")}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              /> */}
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <AntDesign name="setting" size={28} color={focused? '#00CC99':'#fff'} />
              {/* <Image
                source={require("../../assets/images/Setting.png")}
                resizeMode="contain"
                style={[styles.tabIcon, getIconColor(focused)]}
              /> */}
              
              
              
            </View>
          ),
        }}
        listeners={{
          tabPress: e => opened && e.preventDefault(),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    padding: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 52,
    borderRadius: 0,
    backgroundColor: COLORS.white,
    borderTopColor: "transparent",
    shadowColor: COLORS.dark,
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  tabIconContainer: {
    position: "absolute",
    top: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tabIcon: {
    width: 32,
    height: 20,
  },
});

export default TabsNavigator;

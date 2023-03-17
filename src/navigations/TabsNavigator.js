import React from "react";
import { StyleSheet, View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import {COLORS} from "../theme/theme";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Navigater ,NavigaterSearch } from "./MainNavigator";
import FavoriteScreen from "../screens/FavoriteScreen";


const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
    independent={true}
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="home"
        component={Navigater}
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
        
      />
      <Tab.Screen
        name="search"
        component={NavigaterSearch}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <AntDesign name="search1" size={28} color={focused? '#00CC99':'#fff'} />
            </View>
          ),
        }}
      />
      
      <Tab.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{
          tabBarItemStyle: {
            height: 0,
          },
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <AntDesign name="hearto" size={28} color={focused? '#00CC99':'#fff'} />
            </View>
          ),
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
            </View>
          ),
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

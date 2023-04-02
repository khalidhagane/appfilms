import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import HomePage from '../screens/HomePage'
import Details from '../components/Details'
import Popular from '../screens/Popular'
import ActorDetail from '../components/ActorDetail'
import Search from '../screens/Search'
import Home from '../screens/Home'






const Stack = createNativeStackNavigator()


export const Navigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Popular" component={Popular} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="actorDetail" component={ActorDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const SearchNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="actorDetail" component={ActorDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const HomeApi = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="actorDetail" component={ActorDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomePage} />
        <Stack.Screen name="root" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default MainNavigator

const styles = StyleSheet.create({

})
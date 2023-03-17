import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import TabsNavigator from './TabsNavigator';
import DetailleMovie from '../screens/DetailleMovie';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';


const Stack = createNativeStackNavigator();

export const Navigater = () => {
  return (
      <Stack.Navigator independent={true} screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="detaile" component={DetailleMovie} />
      </Stack.Navigator>
  );
};

export const NavigaterSearch = () => {
  return (
      <Stack.Navigator independent={true} screenOptions={{headerShown: false}}>
        <Stack.Screen name="search" component={SearchScreen} />
        <Stack.Screen name="detaile" component={DetailleMovie} />
      </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      independent={true}
        initialRouteName="Root"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Root" component={TabsNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
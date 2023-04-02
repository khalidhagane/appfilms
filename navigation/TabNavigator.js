
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Setting from '../screens/Setting'
import Profile from '../screens/Popular'
import { HomeApi, Navigator, SearchNavigator } from './MainNavigator'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'








const Tab = createBottomTabNavigator()
const colortab = ['#09FACA', '#FF35B8']

const TabNavigator = () => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName='home'
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: Styles.tabBar,
                }}>
                <Tab.Screen name="home" component={HomeApi}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{}}>
                                <Ionicons name="home" size={25} color={focused ? '#000' : '#748c94'} />
                            </View>
                        ),
                    }} />
                   <Tab.Screen name="populair" component={Navigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{}}>
                                <MaterialIcons name="movie-filter" size={25} color={focused ? '#000' : '#748c94'} />
                            </View>
                        ),
                    }}
                />  
                <Tab.Screen name="search" component={SearchNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{}}>
                                <Ionicons name="search" size={25} color={focused ? '#000' : '#748c94'} />
                            </View>
                        ),
                    }}
                />
                {/* <Tab.Screen name="Setting" component={Setting}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={{}}>
                                <Ionicons name="settings" size={25} color={focused ? '#000' : '#748c94'} />
                            </View>
                        ),
                    }}
                /> */}
                {/* <Tab.Screen name="add" component={PlayMusic} screenOptions={{ tabBarStyle: Styles.add }} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const Styles = StyleSheet.create({
    tabBar: {
    borderTopWidth: 1,
    position: 'absolute',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // backgroundColor: 'transparent',
    // elevation: 0,

    },

})


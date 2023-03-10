// import React from 'react';
// import Ionic from 'react-native-vector-icons/Ionicons'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';

// import Home from './screens/Home';
// import Profile from './screens/Profile';
// import Search from './screens/Search';

// // import Library from './screens/Library';
// // import Settings from './screens/Settings';



// const App = () => {
//   const Tab = createBottomTabNavigator();
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           tabBarIcon: ({focused,size,colour}) => {
//             let icomName;
//             if(route.name === "Home"){
//               icomName= focused ? "home" : "ios-home-outline"
//             } else if(router.name === "Search"){
//               icomName= focused ? "Search" : "ios-home-outline"
//             }else if(router.name === "Profile"){
//               icomName= focused ? "Profile" : "ios-home-outline"
//             }
            
//           },
//           // return <Ionic name={icomName} size={size} colour={colour}/>

//         })}>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Search" component={Search} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// // Screens
// import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import SettingsScreen from './screens/SettingsScreen';

// //Screen names
// const homeName = "Home";
// const detailsName = "Details";
// const settingsName = "Settings";

// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName={homeName}
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             let rn = route.name;

//             if (rn === homeName) {
//               iconName = focused ? 'home' : 'home-outline';

//             } else if (rn === detailsName) {
//               iconName = focused ? 'list' : 'list-outline';

//             } else if (rn === settingsName) {
//               iconName = focused ? 'settings' : 'settings-outline';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'tomato',
//           inactiveTintColor: 'grey',
//           labelStyle: { paddingBottom: 10, fontSize: 10 },
//           style: { padding: 10, height: 70}
//         }}>

//         <Tab.Screen name={homeName} component={HomeScreen} />
//         <Tab.Screen name={detailsName} component={DetailsScreen} />
//         <Tab.Screen name={settingsName} component={SettingsScreen} />

//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import React from "react";

import MainNavigator from "./src/navigations/MainNavigator";

const App = () => {
  return <MainNavigator />;
};

export default App;
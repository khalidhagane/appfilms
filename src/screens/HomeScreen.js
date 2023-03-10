import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView,ScrollView,TouchableOpacity, StatusBar, FlatList } from "react-native";
import { COLORS } from "../theme/theme";
import TabContainer from "../components/TabContainer";

const DATA = [
  {
    id: "1",
    title: "Avatar : la voie de l'eau",
    image: require('../../assets/images/avatar.png')
  },
  {
    id: "2",
    title: "Avatar : la voie de la terre",
    image: require('../../assets/images/avatar.png')
  },
  {
    id: "3",
    title: "Avatar : la voie de l'air",
    image: require('../../assets/images/avatar.png')
  }
];




const HomeScreen = () => {



  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        style={{
          resizeMode: 'stretch',
          height: 100,
          width: 200,
          borderRadius:8,
        }}
        source={item.image}
      />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );


  return (
    <View style={styles.container}>



      <View>
     
      <Text  style={styles.titleList}>films </Text>
      </View>
    <SafeAreaView >
      
      <FlatList
      style={styles.containerLst}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.bg,
  },
  titleList:{
    fontWeight: "bold",
    fontSize: 20,
    justifyContent:'flex-start',
    color: COLORS.body,
  }
  ,
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.body,
  },
  itemContainer: {
    
    alignItems: "center",
    // justifyContent: "center",
    marginHorizontal: 10,
  },
  containerLst:{
    backgroundColor: COLORS.bg,
  },


});

export default HomeScreen;

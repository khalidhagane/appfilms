import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../theme/theme";
import TabContainer from "../components/TabContainer";
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  return (
    <TabContainer>
      <View style={styles.container}>
        <View style={styles.headerSearch} >
      <AntDesign name="arrowleft" size={28} color= '#fff' />
        
        <TextInput 
        

          style={styles.input}
          placeholder="Search"
          onChangeText={handleSearch}
          value={searchTerm}
          // color='#fff'

        />
        {/* <Text style={styles.text}>Search Screen</Text> */}
      {/* <AntDesign name="search1" size={28} color= '#00CC99' style={styles.Designflich} /> */}
        </View>
      </View>
      
    </TabContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop:20,
    // flexWrap:'nowrap',

    flex: 1,
    flexDirection:'row',
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.bg,
    // backgroundColor: '#fff',

  },
  headerSearch:{
    paddingTop:20,
    // flexWrap:'nowrap',

    // flex: 1,
    flexDirection:'row',
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#272E3A',
    height:80,
    width:360,
    
  },
  // text: {
  //   fontWeight: "bold",
  //   fontSize: 32,
  //   color: COLORS.body,
  // }
  
  input: {
    
    height: 40,
    width: "75%",
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
    color:COLORS.dark,
    // marginLeft:10,
    marginRight:8,
    marginStart:20,
    backgroundColor: '#fff',
    
  },
  // Designflich:{
  //   // margin:7
  // }
});

export default SearchScreen;

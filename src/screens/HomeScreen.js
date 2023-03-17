import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView,TouchableOpacity, FlatList, } from "react-native";
import { COLORS } from "../theme/theme";
import { useDispatch, useSelector } from "react-redux";
import {fetchMovies} from '../../features/movies/moviesSlice'

const HomeScreen = ({navigation}) => {

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data.results);

  useEffect(() => {
      dispatch(fetchMovies());
  },[])

  // console.log(movies);
  const pathImg = 'https://image.tmdb.org/t/p/w500';

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={()=> navigation.navigate("detaile", {item}) }>
      <Image
        style={{
          resizeMode: 'stretch',
          height: 240,
          width: 320,
          borderRadius:8,
        }}
        source={{uri:pathImg + item.poster_path}}
      /></TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.containertitle}>
      <Text  style={styles.titleList}>Enjoy the Spanish  </Text>
      <Text  style={styles.titleList}> movie of the year </Text>

      </View>
    <SafeAreaView >
      
      <FlatList
      // style={styles.containerList}
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal={true}
        // virticale={true}
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
    color: "#c2c0c0",
  }
  ,
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: COLORS.body,
  },
  itemContainer: {
    alignItems: "center",
    marginHorizontal: 10,
    paddingBottom: 15,

  },
  containertitle:{
    paddingTop: 30,
    paddingBottom: 2,
    justifyContent: "center",
  },


});

export default HomeScreen;

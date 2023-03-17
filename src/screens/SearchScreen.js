import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS } from "../theme/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
// import { useDispatch, useSelector } from "react-redux";
// import {searchMovies} from '../../features/movies/searchMovies'


const SearchScreen = ({navigation}) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
//   const dispatch = useDispatch();
// const movies = useSelector((state) => state.movies.data.results);


//   useEffect(() => {
//     dispatch(searchMovies());
// },[])

  const pathImg = "https://image.tmdb.org/t/p/w500";

  
  const searchData = async (searchTerm) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9fb7ddbe7eae0462355b142582be0d1c&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    );
    const data = await response.json();
    setMovies(data.results);
  };


  const handleSearch = (text) => {
    setSearchTerm(text);
    searchData(text);
  };

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("detaile", {item})}>
      <View style={styles.wrapper}>
        {item.poster_path !== null ? (
          <Image
            source={{ uri: pathImg + item.poster_path }}
            style={styles.imgSearch}
          />
        ) : (
          <Text style={styles.image}>{item.original_title}</Text>
        )}

        <View style={styles.averege}>
          <Text style={styles.aver}>{item.vote_average.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerSearch}>
        {/* <AntDesign name="arrowleft" size={28} color="#fff" /> */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={handleSearch}
          value={searchTerm}
        />
      </View>
      <View>
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          onEndReachedThreshold={0.5}
          columnWrapperStyle={styles.row}
          style={styles.flatList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  headerSearch: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#272E3A",
    height: 80,
    width: "100%",
  },
  input: {
    height: 40,
    width: "75%",
    borderColor: COLORS.border,
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 20,
    color: COLORS.dark,
    marginRight: 8,
    marginStart: 8,
    backgroundColor: "#fff",
  },
  imgSearch: {
    width: 100,
    height: 150,
  },
  wrapper: {
    flex: 1,
    margin: 5,
    height: 180,
    borderRadius: 10,
    overflow: "hidden",
  }
})
export default SearchScreen

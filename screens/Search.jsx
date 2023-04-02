import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageCarousel from '../components/ImageCarousel';
import moviesApi from '../features/movies/moviesService';
import {getPoster, searchMovies} from '../components/getPoster';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const Search = ({navigation}) => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);



  const fetchSearchMovie = async query => {
    const response = await moviesApi.searchMovies(query);
    try {
      console.log('search', response.results);
      setData(response.results);
    } catch (error) {
      console.log(error);
    }
  };

 

  const renderItem = ({item}) => (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('details', {item})}>
      <View style={styles.wrapper}>
        {item.poster_path !== null ? (
          <Image
            source={{uri: getPoster(item.poster_path)}}
            style={styles.img}
          />
        ) : (
          <Text style={styles.image}>{item.original_title}</Text>
        )}

        <View style={styles.averege}>
          <Ionicons name="star" size={46} color="#d9a224" />
          <Text style={styles.aver}>{item.vote_average.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <ImageBackground
      source={require('../assets/img/Backgroundz.png')}
      style={{width: width, height: height, backgroundColor: '#171719'}}>
      <SafeAreaView style={styles.container}>
        <View style={{marginTop: 15}}>
          <Text style={styles.title}>What would you like to Search?</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Ionicons name="search" size={20} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#A9A9A9"
            value={query}
            onChangeText={text => {
              setQuery(text);
              fetchSearchMovie(text);
            }}
          />
        </View>
        <View style={styles.newMovies}>
          {/* <Text style={styles.titleWrap}>New Movies</Text> */}
          <View>
            {data.length === 0 && (
              <Text style={styles.titleWrap}>Search for your best movie</Text>
            )}
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={3} 
              columnWrapperStyle={styles.row} 
              onEndReachedThreshold={0.5}
              style={styles.flatList}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#9CA8A7',
    fontSize: 30,
    width: width - 150,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1.4,
    padding: 10,
    borderRadius: 10,
    borderColor: '#fff',
    color: '#fff',
    width: width - 25,
    paddingLeft: 40,
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 20,
    left: 20,
  },
  // newMovies: {
  //   width: width - 60,
  //   height: 200,
  //   borderRadius: 10,
  //   marginTop: 9,
  // },
  titleWrap: {
    color: '#9CA8A7',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'center',
    marginTop: 30,
  },
  // imgMovies: {
  //   marginTop: 10,
  // },
  row: {
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 1,
    margin: 5,
    height: 180,
    borderRadius: 10,
    overflow: 'hidden',
  },
  flatList: {
    marginTop: 10,
  },
  img: {
    flex: 1,
    width: 120,
    height: 180,
    resizeMode: 'cover',
  },
  check: {
    position: 'absolute',
    right: 0,
    top: -49,
    left: 310,

    // bottom: 0,
  },
  averege: {
    position: 'absolute',
    top: 10,
    right: 3,
    color: '#fff',
    fontSize: 15,
  },
  image: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
    marginTop: 70,
  },
  flatList: {
    paddingBottom: 200,
    marginBottom: 260,
  },
  aver: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    position: 'absolute',
    top: 17,
    right: 13,
  },
});

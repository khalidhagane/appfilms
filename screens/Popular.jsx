import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovies} from '../features/movies/moviesSlice';
import {getPoster} from '../components/getPoster';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const Popular = ({navigation}) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.data.results);
  const [currentPAge, setCurrentPAge] = useState(1);
  const [numColumns, setNumColumns] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
 

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchMovies(currentPAge));
    setIsLoading(false);
  }, [currentPAge]);

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    ) : null;
  };

  const loaderMoreItems = () => {
    setCurrentPAge(currentPAge + 1);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('details', {item})}
        style={{width: '50%'}}>
        <View style={styles.wrapper}>
          <Image
            source={{uri: getPoster(item.poster_path)}}
            style={styles.img}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {/* <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold', margin: 10, width:80, overflow:'hidden'}}>{item.title .slice(0, 10)} ...</Text> */}
            <AntDesign name="star" size={10} color="#fff" style={{margin: 3}} />
            <Text style={styles.averege}>
              {item.vote_average ? item.vote_average : '?'}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/img/Backgroundz.png')}
      style={{width: width, height: height, backgroundColor: '#171719'}}>
      <SafeAreaView style={styles.container}>
        <Text
          style={{color: '#fff', fontSize: 20, fontWeight: 'bold', margin: 10}}>
          Popular Movies
        </Text>

        {movies.length === 0 && (
          <ActivityIndicator
            size="large"
            color="#fff"
            style={{justifyContent: 'center', alignItems: 'center'}}
          />
        )}
        <FlatList
          data={movies}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          numColumns={numColumns}
          columnWrapperStyle={styles.row}
          style={styles.flatList}
          key={numColumns}
          ListFooterComponent={renderLoader}
          onEndReached={loaderMoreItems}
          onEndReachedThreshold={0}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Popular;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    margin: 20,
    height: 220,
    width: 140,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171719',
  },
  img: {
    flex: 1,
    width: 140,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  averege: {
    // position: 'absolute',
    // top: 10,
    // right: 10,
    color: '#fff',
    fontSize: 15,
  },
  flatList: {
    paddingBottom: 100,
    marginBottom: 100,
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});

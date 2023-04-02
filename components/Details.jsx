import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getPosterActor, getPosterOne} from './getPoster';
import moviesApi from '../features/movies/moviesService';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {WebView} from 'react-native-webview';
import TrailerButton from './TrailerButton';


const {width, height} = Dimensions.get('window');

const Details = ({route, navigation}) => {
  const {item} = route.params;
  const [detailMovie, setDetailMovie] = useState([]);
  const [actorMovies, setActorMovies] = useState([]);
  const [trailer, setTrailer] = useState('');
  const [cas, setCas] = useState('');

  const fetchActorMovies = async id => {
    const response = await moviesApi.actorMovies(id);
    try {
      // console.log('actors', ...response.cast);
      setActorMovies(response.cast);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTralerMovie = async id => {
    const response = await moviesApi.getMovieTrailer(id);
    try {
     if(response.results[0].key !== undefined){
      setTrailer(`https://www.youtube.com/watch?v=${response.results[0].key}`);
      console.log(`https://www.youtube.com/watch?v=${response.results[0].key}`);
     }else{
        setCas('No trailer available')
     }
    } catch (error) {
      console.log(error);
    }
  };

  
  const fetchDetailMovies = async id => {
    const response = await moviesApi.detailMovies(id);
    try {
      setDetailMovie(response);
      // console.log('detail', response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchActorMovies(item.id);
    fetchDetailMovies(item.id);
    fetchTralerMovie(item.id);
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('actorDetail', {item})}>
        <View style={styles.wrapper}>
          <Image
            source={
              {uri: getPosterActor(item.profile_path)}
                ? {uri: getPosterActor(item.profile_path)}
                : require('../assets/img/blank-profile-picture-g5215f2cd1_1280.png')
            }
            style={styles.img}
          />
          <Text style={styles.person}>{item.character}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/img/Backgroundz.png')}
      style={{width: '100%', height: '100%', backgroundColor: '#171719'}}>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle="dark-content"
        />
        <Image
          source={{uri: getPosterOne(item.backdrop_path)}}
          style={styles.imgAD}
        />
       

        <View style={{ zIndex:1}}>
          {trailer !== '' ? (
          <TrailerButton trailerUrl={trailer} />
          ) : (
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop: 10, marginLeft: 10,}}>{cas}</Text>
          )}
        </View>


        <View style={styles.avrege}>
          <Ionicons name="star" size={50} color="#d9a224" />
          <Text style={[{color: '#000'}, styles.title]}>
            {item.vote_average.toFixed(1)}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#c2c0c0',
              fontSize: 26,
              fontWeight: 'bold',
              marginTop: 20,
              width: width - 40,
              textAlign: 'center',
            }}>
            {item.original_title}
          </Text>


          <Text
            style={{
              color: '#c2c0c0',
              fontSize: 17,
              marginTop: 5,
              fontWeight: 'bold',
            }}>
            overview
          </Text>
          <ScrollView style={{height: 145}}>
            <Text
              style={{
                color: '#c2c0c0',
                fontSize: 15,
                marginTop: 7,
                textAlign: 'center',
                width: width - 40,
                // height: 200,
                lineHeight: 25,
                // overflow: 'hidden',
              }}>
              {item.overview}
            </Text>
          </ScrollView>
        </View>
        <View style={styles.line}></View>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
            marginLeft: 10,
          }}>
          Casts
        </Text>
        {actorMovies.length === 0 && (
          <ActivityIndicator
            size="large"
            color="#fff"
            style={{justifyContent: 'center', alignItems: 'center'}}
          />
        )}
        <FlatList
          data={actorMovies}
          keyExtractor={item => item.order}
          renderItem={renderItem}
          horizontal={true} // set the horizontal prop to true
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />
      </View>
    </ImageBackground>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    margin: 5,
    height: 140,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    flex: 1,
    width: 100,
    height: 160,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  nameOriginal: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 8,
  },
  imgAD: {
    width: width,
    height: height - 520,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  flatList: {
    marginTop: 10,
    backgroundColor: '#171719',
  },
  line: {
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    marginTop: 10,
    width: width - 40,
    alignSelf: 'center',
  },
  linea: {
    marginTop: 10,
    width: width,
    height: 40,

    position: 'absolute',
    zIndex: 1,
    top: 318,
    shadowColor: '#000',
  },
  avrege: {
    position: 'absolute',
    zIndex: 1,
    top: 130,
    right: 10,
  },
  title: {
    position: 'absolute',
    zIndex: 1,
    top: 19,
    left: 14,
    fontWeight: 'bold',
  },
  flatList: {
    marginTop: 0,
  },
  person: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
 
});

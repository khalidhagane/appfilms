import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import moviesApi from '../features/movies/moviesService';
import {getPoster, getPosterOne} from './getPoster';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

const ActorDetail = ({route, navigation}) => {
  const {item} = route.params;
  const [detailActor, setDetailActor] = useState([]);
  const [moviesActor, setMoviesActor] = useState([]);

  // console.log('actor', item);

  // console.log('actor', item.id);

  const fetchDetailActor = async id => {
    const response = await moviesApi.detailActor(id);
    try {
      setDetailActor(response);
      console.log('detail', response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMoviesActor = async id => {
    const response = await moviesApi.getAllMoviesForOneActor(id);
    try {
      setMoviesActor(response.cast);
      console.log('movies Actor', response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetailActor(item.id);
    fetchMoviesActor(item.id);
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('details', {item})}>
        {item.poster_path !== null ? (
          <View style={styles.wrapper}>
            <Image
              source={{uri: getPoster(item.poster_path)}}
              style={styles.imgMovies}
            />
          </View>
        ) : (
          <View
            style={[
              {justifyContent: 'center', alignSelf: 'center'},
              styles.wrapper,
            ]}>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
              {item.title ? item.title : 'No image'}{' '}
            </Text>
          </View>
        )}
      </TouchableWithoutFeedback>
    );
  };

  return (
    <ImageBackground
      source={require('../assets/img/Background.png')}
      style={{width: width, height: height, backgroundColor: '#171719'}}>
      <SafeAreaView>
        <Image
          source={{uri: getPoster(detailActor.profile_path)} ? {uri: getPoster(detailActor.profile_path)} : require('../assets/img/blank-profile-picture-g5215f2cd1_1280.png')}
          style={[
            styles.img,
            {
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 10},
              shadowOpacity: 0.5,
              shadowRadius: 10,
            },
          ]}
        />

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={[{color: '#DCDCDC', marginLeft: 5}, styles.titleOriginal]}>
            {detailActor.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 16,
            }}>
            <Text style={[{color: '#DCDCDC', marginLeft: 5}]}>
              {detailActor.birthday}
            </Text>
            <Text style={[{color: '#DCDCDC', marginLeft: 5}]}>
              {detailActor.place_of_birth}
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          {moviesActor.length === 0 && (
            <ActivityIndicator
              size="large"
              color="#fff"
              style={{justifyContent: 'center', alignItems: 'center'}}
            />
          )}
          <FlatList
            data={moviesActor}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns={3} // number of columns in the grid
            columnWrapperStyle={styles.row} // style for the wrapper around each row
            onEndReachedThreshold={0.5}
            style={styles.flatList}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ActorDetail;

const styles = StyleSheet.create({
  img: {
    width: width,
    height: height - 500,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  titleOriginal: {
    marginTop: 10,
    fontSize: 45,
    fontFamily: 'Abril Fatfacer',
  },
  imgMovies: {
    flex: 1,
    width: 120,
    height: 180,
    resizeMode: 'cover',
  },
  wrapper: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  model: {
    position: 'absolute',
    bottom: 280,
    left: 10,
    zIndex: 1,
    padding: 10,
    borderRadius: 10,
  },
  flatList: {
    paddingBottom: 100,
    marginBottom: 250,
  },
});

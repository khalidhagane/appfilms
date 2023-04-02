import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  ScrollView
} from 'react-native';
import React, {useState, useEffect} from 'react';
import apiHome from '../components/fetchApiHome';
import {getPoster} from '../components/getPoster';
const {width, height} = Dimensions.get('window');
import Ionicons from 'react-native-vector-icons/Ionicons';


const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [upComingData, setUpComingData] = useState([]);

  useEffect(() => {
    apiHome
      .fetchMoviesTopRated()
      .then(response => {
        setData(response.results);
      })
      .catch(error => {
        console.log(error);
      });

    apiHome
      .fetchMoviesUpcoming()
      .then(response => {
        setUpComingData(response.results);
      })
      .catch(error => {
        console.log(error);
      }
      );
  }, []);


  const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('details', {item})}>
        <View style={styles.wrapper}>
          <Image
            source={{uri: getPoster(item.poster_path)}}
            style={styles.img}
          />
         <View style={styles.averege}>
          <Ionicons name="star" size={46} color="#d9a224" />
         <Text style={styles.aver}>{item.vote_average}</Text>
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
    <Text style={styles.title}>What would you like to watch?</Text>
<ScrollView height={height}>
      <View style={styles.container}>
        <Text style={styles.topRated}>Movies Top Rated</Text>
        <FlatList
          data={data}
          style={{flex: 1}}
          renderItem={renderItem}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.topRated}>Movies Up coming</Text>
        <FlatList
          data={upComingData}
          style={{flex: 1}}
          renderItem={renderItem}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
</ScrollView>
    </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  wrapper: {
    flex: 1,
    margin: 5,
    height: 180,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {
    flex: 1,
    width: 120,
    height: 180,
    resizeMode: 'cover',
  },
  averege: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  topRated: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
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

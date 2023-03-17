import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { COLORS } from "../theme/theme";

import React from 'react';
import {getPosterImageMovies} from '../../components/getPathImageHome'
import Ionicons from 'react-native-vector-icons/Ionicons'

const {width, height} = Dimensions.get('window')

const DetailleMovie = ({route}) => {
  const {item} = route.params;
  console.log(item);

  return (
    <SafeAreaView style={styles.container}>
    
      <Image
        source={{uri: getPosterImageMovies(item.poster_path)}}
        style={styles.imgAD}
      />
      <View style={styles.avrege}>
        <Ionicons name="star" size={46} color="#d9a224" />
        <Text style={[{color: '#fff'}, styles.title]}>{item.vote_average}</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#c2c0c0',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
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
      
          <Text
            style={{
              color: '#c2c0c0',
              fontSize: 15,
              marginTop: 7,
              textAlign: 'center',
              width: width - 40,
              height: 150,
            }}>
            {item.overview}
          </Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailleMovie;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,

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
        resizeMode: 'contain',
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
        height: height - 500,
        resizeMode: 'contain',
        borderRadius: 10,
      },
      flatList: {
        marginTop: 10,
        backgroundColor: '#171719',
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
        top: 30,
        left: 10,
      },
});

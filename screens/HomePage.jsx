import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import React from 'react';
import {s} from 'react-native-wind';
import LinearGradient from 'react-native-linear-gradient';


const {width, height} = Dimensions.get('window');

const HomePage = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/img/Background.png')}
      style={{width: width, height: height, backgroundColor: '#171719'}}>
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../assets/img/Avatar.png')}
          style={styles.img}
        />
        <Text style={styles.textWrapp}>
          Watch movies in your best Application
        </Text>
        <Text style={styles.textWrapper}>
          Watch online for your upcoming movies
        </Text>
        <LinearGradient
          colors={['#09FACA','#00FAFE', '#FF35B8']}
          style={[styles.linearGradient, {borderRadius: 50, padding: 10, marginTop: 30}]}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('root')}>
            <Text style={styles.textBtn}>Get Started</Text>
        </TouchableOpacity>
          </LinearGradient>
        {/* <Text style={[styles.foter, {bottom: 60}]}>Project By Boubker </Text> */}
        {/* <Text style={[styles.foter, {bottom: 40}]}> Al-Right Reserved </Text> */}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: width - 100,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  textWrapp: {
    color: '#fff',
    fontSize: 30,
    marginTop: 30,
    textAlign: 'center',
    width: width - 100,
  },
  textWrapper: {
    color: '#A9A9A9',
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
    width: width - 100,
  },
  btn: {
    backgroundColor: '#171719',
    width: '108%',
    height: 43,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171719',
    shadowOffset: { width: 3, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10, // for android
  },
  textBtn: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linearGradient: {
    width: width - 200,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foter: {
    color: '#fff',
    fontSize: 12,
    position: 'absolute',
    bottom: 20,
    top: 0,
  },
});

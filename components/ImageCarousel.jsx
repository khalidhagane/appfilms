import { StyleSheet, Text, FlatList, View, Image, Dimensions } from 'react-native'
import React from 'react'
const {width, height} = Dimensions.get('window');

const ImageCarousel = () => {

const data = [
    {
        id: 1,
        image: require('../assets/img/Vector9.png'),
    },
    {
        id: 2,
        image: require('../assets/img/Vector9.png'),
    },
    {
        id: 3,
        image: require('../assets/img/Vector9.png'),
    },

]

  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      style={{ flex: 1 }}
      renderItem={({ item }) => {
        return <Slide data={item} />;
      }}
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
    />
    </View>
  )
}

function Slide({ data }) {
  return (
    <View
      style={{
        
      }}
    >
      <Image
        source={data.image}
        style={{ width: width-10,height: height-600,  resizeMode: 'contain'  }}
      />
    </View>
  );
}

export default ImageCarousel

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
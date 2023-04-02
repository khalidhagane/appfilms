import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import AntDesign from 'react-native-vector-icons/AntDesign';


const TrailerButton = ({ trailerUrl }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  const handlePress = () => {
    setShowTrailer(true);
  };

  const handleClose = () => {
    setShowTrailer(false);
  };
console.log('trailerUrl', trailerUrl);
  return (
    <View>
      {/* <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Watch Trailer</Text>
      </TouchableOpacity> */}
       <View style={styles.video}>
          <TouchableOpacity onPress={handlePress}>
            <AntDesign
              name="play"
              size={40}
              color="#fff"
              style={styles.playIcon}
            />
          </TouchableOpacity>
        </View>
      {showTrailer && (
        <View style={styles.webViewContainer}>
          <WebView
            source={{ uri: trailerUrl }}
            allowsFullscreenVideo={true}
            allowsInlineMediaPlayback={true}
            mediaPlaybackRequiresUserAction={false}
          />
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <AntDesign name="closecircle" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007aff',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  webViewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    height: 500,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#007aff',
    borderRadius: 5,
    padding: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  video: {
    position: 'absolute',
    zIndex: 1,
    bottom: -20,
    left: 10,
  }
});

export default TrailerButton;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, WebView } from 'react-native';
import moviesApi from '../features/movies/moviesService';

const MovieTrailerButton = ({ movieId }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [trailerKey, setTrailerKey] = useState('');


  const fetchVedioMovies = async id => {
    const response = await moviesApi.getMovieTrailer(id);
    try {
     const trailers = response.data.results.filter((video) => video.type === 'Trailer');
     if (trailers.length > 0) {
          setTrailerKey(trailers[0].key);
        }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVedioMovies(movieId);
  }, [movieId]);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Watch Trailer</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        {trailerKey ? (
          <WebView source={{ uri: `https://www.youtube.com/embed/${trailerKey}` }} />
        ) : (
          <Text>No trailer available</Text>
        )}
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 40,
    right: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MovieTrailerButton;

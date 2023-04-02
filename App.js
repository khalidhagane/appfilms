import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigator from './navigation/MainNavigator'
import { Provider } from 'react-redux'
import store from './app/store'




const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainNavigator />
      </View>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
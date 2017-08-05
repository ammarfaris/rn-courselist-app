import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { TabNavigator } from 'react-navigation'

import ReactCourses from './src/components/ReactCourses'
import ReactNativeCourses from './src/components/ReactNativeCourses'


export default class App extends Component {
  render() {
    const MainNavigator = TabNavigator({
      ReactCourses: { screen: ReactCourses },
      ReactNativeCourses : { screen: ReactNativeCourses }
    })

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})

import React, { Component } from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { TabNavigator } from 'react-navigation'

import ReactCourses from './src/components/ReactCourses'
import ReactNativeCourses from './src/components/ReactNativeCourses'
import GraphQLCourses from './src/components/GraphQLCourses'


export default class App extends Component {
  render() {
    const MainNavigator = TabNavigator({
      ReactCourses: { screen: ReactCourses },
      ReactNativeCourses : { screen: ReactNativeCourses },
      GraphQLCourses: { screen: GraphQLCourses}
    }, {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        showIcon: true,
        labelStyle: { fontSize: 9, margin: 0, padding: 0 },
        iconStyle: {
          width: 20,
          height: 20,
          marginBottom: 5
        },
        tabStyle: { height: 50 },
        indicatorStyle: { backgroundColor: 'white' },
        style: { backgroundColor: Platform.OS === 'android' ? 'grey' : 'transparent' }
      }
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

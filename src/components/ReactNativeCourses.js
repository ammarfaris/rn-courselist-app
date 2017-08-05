import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

class ReactNativeCourses extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>ReactNativeCourses</Text>
        <Text>ReactNativeCourses</Text>
        <Text>ReactNativeCourses</Text>
        <Text>ReactNativeCourses</Text>
        <Text>ReactNativeCourses</Text>
        <Text>ReactNativeCourses</Text>
        <Text>ReactNativeCourses</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'snow',
    paddingTop: 10
  },
  header: {
    fontSize: 30
  }
})

export default ReactNativeCourses

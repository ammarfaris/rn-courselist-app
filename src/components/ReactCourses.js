import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

class ReactCourses extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>ReactCourses</Text>
        <Text>ReactCourses</Text>
        <Text>ReactCourses</Text>
        <Text>ReactCourses</Text>
        <Text>ReactCourses</Text>
        <Text>ReactCourses</Text>
        <Text>ReactCourses</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    paddingTop: 10
  },
  header: {
    fontSize: 30
  }
})

export default ReactCourses

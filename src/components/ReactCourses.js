import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native'
import { Card, Button } from 'react-native-elements'

import data from '../data/courses.json'

// ListView take all the data, create a list AND updates dynamically
const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2 // callback fn returns TRUE when the row has changed
})

// Filter data to just select ReactCourses, will INCLUDE object in new array if the "test-function" returns TRUE
const toInclude = new Set(['react'])
const reactList = data.filter(obj => toInclude.has(obj.category))

// our dataSource for ListView, if rowHasChanged will update dynamically
const dataSource = ds.cloneWithRows(reactList)

export default class ReactCourses extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>React Courses</Text>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) =>
            <Card title={rowData.title}>
              <View style={styles.description}>
                <Text>{rowData.description}</Text>
              </View>
              <Button
                title="Go to Course"
                icon={{ name: 'my-location' }}
                backgroundColor="#03A9F4"
              />
            </Card>
          }
        >
        </ListView>
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
  },
  description: {
    marginBottom: 10
  }
})

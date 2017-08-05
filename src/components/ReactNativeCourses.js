import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ListView,
  Image,
  Linking
} from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'

import data from '../data/courses.json'

// ListView take all the data, create a list AND updates dynamically
const dsRN = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2 // callback fn returns TRUE when the row has changed
})

// Filter data to just select ReactCourses, will INCLUDE object in new array if the "test-function" returns TRUE
const toInclude = new Set(['native'])
const rnList = data.filter(obj => toInclude.has(obj.category))

// our dataSource for ListView, if rowHasChanged will update dynamically
const dataSource = dsRN.cloneWithRows(rnList)


export default class ReactNativeCourses extends Component {
  static navigationOptions = {
    tabBarLabel: 'React Native',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="tablet" type="entypo" size={20} color={tintColor} />;
    }
  }

  handleClick = (link) => {
    // Linking allow us to open link in default browser for the device
    // canOpenURL returns a Promise
    Linking.canOpenURL(link)
      .then(supported => {
        if(supported) {
          Linking.openURL(link)
        } else {
          console.log("Don't quite know how to open URL: " + link)
        }
      })
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={dataSource}
        renderRow={(rowData) =>
          <Card title={rowData.title}
                image={{ uri: rowData.image }}>
            <Text style={styles.description}>{rowData.description}</Text>
            <Button
              title="Go to Course"
              icon={{ name: 'my-location' }}
              backgroundColor="#03A9F4"
              onPress={() => {
                this.handleClick(rowData.link)
              }}
            />
          </Card>
        }
        renderHeader={() => (
          <Text style={styles.header}>React Native Courses</Text>
        )}
      >
      </ListView>
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
    fontSize: 30,
    textAlign: 'center'
  },
  description: {
    marginBottom: 10
  }
})

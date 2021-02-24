import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Todo List</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    container: {
      paddingTop: 35,
      paddingBottom: 15,
      alignSelf: 'stretch',
      height: 95,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#4287f5',
    },
    title: {
      color: 'white',
      fontSize: 40,
    }
  }
);
import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Header extends React.Component {
  render() {
    const { item } = this.props.item;
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.item.item.title}</Text>
        <View>
          <Button onPress={() => this.props.delete(this.props.item.item.id)} title="Delete"></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 40,
    }
  }
);
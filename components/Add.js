import React from "react";
import { StyleSheet, Button, View, TextInput } from 'react-native';

export default class Add extends React.Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  handleChange = (input) => {
    this.setState({text: input});
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput onChangeText={this.handleChange} placeholder="Add Task..." style={styles.input}></TextInput>
        <Button onPress={() => this.props.add(this.state.text)} title="Add Task +"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: 'white',
      alignSelf: 'stretch',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      alignItems: 'center'
    },

    title: {
      color: 'black',
      fontSize: 20,
    },
    input: {
      fontSize: 20,
    }
  }
);
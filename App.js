import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/Header';
import Task from './components/Task';
import Add from './components/Add';

import uuid from 'uuid'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      tasks: [
        {id: 1, title: 'task 1' },
        {id: 2, title: 'task 2' },
        {id: 3, title: 'task 3' },
        {id: 4, title: 'task 4' },
      ]
    }
  }
  delete = (id) => {
    this.setState({
      tasks: this.state.tasks.filter( (item) => item.id !== id )
    })
  }

  add = (text) => {
    // need to add input for ask name
    this.setState({
      tasks: [{id: Math.random(), title: text}, ...this.state.tasks]
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Add add={ this.add }></Add>
        <FlatList style={styles.flatlist} data={ this.state.tasks } 
        renderItem={ (item) => 
          <Task item={ item }
          delete={ this.delete }  
          ></Task> }>
        </FlatList>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  flatlist:{
    display: 'flex',
  },
  text: {
    fontSize: 100,
  }
});

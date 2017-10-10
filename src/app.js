import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBQMr5STMruUGS6W0b93KfhpfUXir1yvSw',
      authDomain: 'electric-block-696.firebaseapp.com',
      databaseURL: 'https://electric-block-696.firebaseio.com',
      projectId: 'electric-block-696',
      storageBucket: '',
      messagingSenderId: '128873310281'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}


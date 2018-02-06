import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm form './components/LoginForm';


export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp( {
      apiKey: 'AIzaSyCQV1KnV1MQpRHwJ-5FlpD-cUpbg5IZO7U',
      authDomain: 'auth-39405.firebaseapp.com',
      databaseURL: 'https://auth-39405.firebaseio.com',
      projectId: 'auth-39405',
      storageBucket: 'auth-39405.appspot.com',
      messagingSenderId: '569405544103'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

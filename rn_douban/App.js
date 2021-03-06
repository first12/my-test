/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './src/components/home/Home.js';
import Mine from './src/components/mine/Mine.js';
import Movie from './src/components/movie/Movie.js';
// import {Platform, StyleSheet, Text, View} from 'react-native';

//导入相应的组件


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap1s haha R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
const TabBar = createBottomTabNavigator({
  Home: Home,
  Mine: Mine,
  Movie: Movie,
})
const TabBarContent = createAppContainer(TabBar)
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: <TabBar />,
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <TabBar/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen'
import IssuesScreen from './Screens/IssuesScreen'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import {TabNavigator} from './components/AppTabNavigator'

export default class App extends Component{
  render(){
    return (
    <AppContainer/>
      )
  }
 
}

const SwitchNavigator=createSwitchNavigator({
  WelcomeScreen:{
    screen:WelcomeScreen
  },
  Home:{
    screen:TabNavigator
  }
})

const AppContainer=createAppContainer(SwitchNavigator)


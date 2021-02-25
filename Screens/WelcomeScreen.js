import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import {Card} from 'react-native-elements'
import MyHeader from '../components/Header'
import db from '../config'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            username:'',
            contact:''
        }

    }

    userLogin=(email,password)=>{
        try {firebase.auth().signInWithEmailAndPassword(email,password)
        alert('User logged in')
        this.props.navigation.navigate('IssuesScreen')
    }
        catch(error){}
    }

    userSignIn=(email,password)=>{
        try {firebase.auth().createUserWithEmailAndPassword(email,password)
        db.collection('users').add({
            email:this.state.email,
            contact:this.state.contact,
            username:this.state.username,
            password:this.state.password
        })
        alert('User Signed in')
        }
        catch(error){}
    }


    render(){
      return (
    <SafeAreaProvider>
         <ScrollView style={styles.container}>
    <MyHeader title={'Green Earth'}/>

    <TextInput
    style={styles.input}
    placeholder={'Enter Email'}
    keyboardType={'email-address'}
    onChangeText={text=>{this.setState({email:text})}}
   
    />

    <TextInput
    style={styles.input}
    placeholder={'Enter Password'}
    secureTextEntry={true}
    onChangeText={text=>{this.setState({password:text})}}
    
    />

    <TouchableOpacity
    style={styles.loginButton}
    onPress={()=>{this.userLogin(this.state.email,this.state.password)}}
    >
        <Text style={styles.loginButtonText}>Login</Text>
    </TouchableOpacity>

    <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />

    
    <Card>
    <TextInput
    style={styles.input}
    placeholder={'Enter Email'}
    keyboardType={'email-address'}
    onChangeText={text=>{this.setState({email:text})}}
    
    />

    <TextInput
    style={styles.input}
    placeholder={'Enter Password'}
    secureTextEntry={true}
    onChangeText={text=>{this.setState({password:text})}}
    
    />

    <TextInput
    style={styles.input}
    placeholder={'Enter Username'}
    onChangeText={text=>{this.setState({username:text})}}
    
    />

    <TextInput
    style={styles.input}
    placeholder={'Enter Contact Number'}
    keyboardType={'numeric'}
    onChangeText={text=>{this.setState({contact:text})}}
    
    />

    <TouchableOpacity
    style={styles.loginButton}
    onPress={()=>{this.userSignIn(this.state.email,this.state.password)}}
    >
        <Text style={styles.loginButtonText}>Sign In</Text>
    </TouchableOpacity>
    </Card>

      </ScrollView>
    </SafeAreaProvider>
    )
    }
   
  }

  const styles=StyleSheet.create({
      container:{
          flex:1,
          
      },
      input:{
          borderBottomWidth:1,
          marginTop:10,
          width:250,
          height:50
      },
      loginButton:{
          backgroundColor:'blue',
          height:50,
          width:150,
          borderRadius:20,
          marginTop:15
      },
      loginButtonText:{
          color:'white',
          fontWeight:'bold',
          fontSize:18,
          alignSelf:'center'
      },

      

  })
  
  
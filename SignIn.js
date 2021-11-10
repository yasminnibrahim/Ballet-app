//import * as React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity , Alert,Button } from 'react-native';
import Constants from 'expo-constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';

const createAlertt =()=>

      Alert.alert(
      "Congratulations",
      "You signed up successfully!",
      [
       
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
     );
export default function App() {
 
  const {data,setData}=React.useState({
  isValidEmail:true,
  secureText:true,
  isvalidPassword:true,
  password:'',
  mail:'',
  checkInputText:false
  })
  const handleEmail =(val)=>{

  if (val.includes("@")&&val.includes(".com")){
    setData({
      ...data,
      isValidEmail:true,
    });
  }
  else{
    setData({
      ...data,
      isValidEmail:false
    })
  }

  }
    
    const handlePassword = (val)=>{
      if (val.length>=6){
        setData({
          ...data,
          isvalidPassword:true
        })
      }
      else{
        setData({
          ...data,
          isvalidPassword:false
        })
      }
    }

 



  return (
    
    <View style={styles.container}>
     <ScrollView>
      <Text style={styles.paragraph}>
        Sign In
      </Text>
      <View style={{margin:10}}>
      <Text style={styles.input}>Email</Text>
      
      <View style={styles.inputText}>
      <TextInput
      placeholder="example@mail.com"
      keyboardType = "email-address"
      />
        </View>
        </View>
        <View style={{flexDirection:"row",paddingLeft:5}}>
        <FontAwesome
        name="lock"
        size={18}
        />
    <Text style={styles.input}>Password</Text>
    </View>
     <View style={styles.inputText}>
      <TextInput
      placeholder="******"
      
      />

        </View>    
        </ScrollView>
        </View>
    
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff0f5",
  },
  inputText:{
    fontSize: 15,
    color :'black',
    marginLeft:5,
    paddingLeft:9,
    borderRadius:6,
    width:300,
    height:30,
    

  },
  paragraph: {
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#900C3F',
  },
  input:{
    fontSize: 24,
    color :'#900C3F',
   // marginL:5,
    paddingLeft:5,
    borderRadius:6,
    width:300,
    height:30,
    //paddingBottom:4,
  },
  
  sign: {
        flexDirection: 'row',
        marginLeft: 30,
        justifyContent: 'center',
        
    },
});

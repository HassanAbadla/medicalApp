import React, { Component } from "react";
import { ImageBackground, StyleSheet, Text, View , TextInput  , onChangeText ,number ,onChangeNumber , Button ,Alert ,TouchableOpacity} from "react-native";
import AssetExample from './AssetExample';

const Home = ({navigation}) =>  (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/care2.jpg')} resizeMode="fit" style={styles.image}>
  <View style={styles.wraper}>
    <Text style={styles.enter} >Enter Information </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder=" ID/Phone Number:"
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder=" Password:" 
          keyboardType="text"
        />

    <TouchableOpacity style={styles.signIn}               
          onPress={() => navigation.navigate('AssetExample')}>
          <Text style={styles.btnTxt} >Sign In</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.signUp}      
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.btnTxt} >Sign Up</Text>
    </TouchableOpacity>
  </View>
</ImageBackground> 

</View>
);



const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    wraper:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-around',
      flex: 1,
      alignItems:'center',
      backgroundColor: "#bc4f7e",
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      height:400,
      opacity:0.9,
      
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
  
      textLOL: {
      color: "white",
      fontSize: 42,
      lineHeight: 80,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
    },
  
    input: {
      height: 50,
      width: 350 ,
      margin:5,
      borderWidth: 0,
      borderRadius:20,
      padding: 20,
      backgroundColor: "#ffc0cb",
      color: '#000000',
      
    },
  
    signIn: {
      // height: 50,
      // width: 350 ,
      borderWidth: 0,
      borderRadius:20,
      paddingHorizontal: 100,
      paddingVertical: 20,
      backgroundColor: "#ff1493",    
      color: 'white',
      marginTop: 20,
      marginBottom: 20
    },
    signUp: {
      // height: 50,
      // width: 350 ,
      borderWidth: 2,
      borderColor: 'white',
      borderRadius:20,
      paddingHorizontal: 100,
      paddingVertical: 20,
      // backgroundColor: "#bb5b7d",
      color: 'darkgray',
      marginBottom: 50
    },
    btnTxt: {
      color: 'white',
      fontWeight: 'bold',
      letterSpacing: 2
    },
  
    enter: {
    borderRadius:20,
    padding: 20,
    fontSize : 34,
    fontWeight: 'bold',
    color: '#fafafa',
    },
  
  });
  
  export default Home;
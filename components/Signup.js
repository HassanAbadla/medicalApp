import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View , TextInput  , onChangeText ,number ,onChangeNumber , Button ,Alert ,TouchableOpacity} from "react-native";
import axios from 'axios'

export default function Signup({navigation}) {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

   const  register = async () => {
    let fields = {
        name, email, password, password_confirmation:password, isAdmin:false, 
    }
    console.log(fields);
       let response = await axios.post('http://127.0.0.1:8000/api/register', fields).then(res => {
           console.log(res.data);
        })
        navigation.navigate('UserScreen')
       
    }
  return (
    <View style={styles.container} >
        <Text style={styles.header}>Fill in your Info</Text>
        <Text>{name}</Text>
        <TextInput  
            style={styles.input}
            keyboardType="text"
            placeholder='Your name...'
            onChangeText={(name) => setName(name)}
        />
        <TextInput  
            style={styles.input}
            keyboardType="number"
            placeholder='Your mobile number...'
            onChangeText= {(mobile) => setMobile(mobile)}
        />
        <TextInput  
            style={styles.input}
            keyboardType="text"
            placeholder='Your email...'
            onChangeText={(email) => setEmail(email)}
            // onChangeText={email=>{setEmail({email})}}
        />
        <TextInput  
            style={styles.input}
            keyboardType="text"
            placeholder='Your password...'
            onChangeText={(password) => setPassword(password)}
        />

        <TouchableOpacity
        style={styles.register}
        onPress={register}
        >
            <Text style={styles.btnTxt} >Register</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        color: "white",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },  
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: '#bf4f7f',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
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
    register :{
        borderWidth: 0,
        borderRadius:20,
        paddingHorizontal: 100,
        paddingVertical: 20,
        backgroundColor: "#ff1493",    
        color: 'white',
        marginTop: 20,
        marginBottom: 20
    },
    btnTxt: {
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 2
      },
})

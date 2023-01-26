import  React, {useEffect} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios'

export default function UserScreen() {

    useEffect(() => {
        let response =  axios.get('https://anapioficeandfire.com/api/houses/1')
        console.log(response.data);
    })

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        This is the user screen general info
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
      <TouchableOpacity style={styles.signIn}               
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnTxt} >Sign In</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});

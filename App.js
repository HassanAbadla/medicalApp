import React, { Component } from "react";
import { ImageBackground, StyleSheet, Text, View , TextInput  , onChangeText ,number ,onChangeNumber , Button ,Alert ,TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import AssetExample from './components/AssetExample';
import Signup from './components/Signup';
import UserScreen from './components/UserScreen';

const Stack = createNativeStackNavigator();

const App = ({navigation}) =>  (
<NavigationContainer>
  <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
          options= {{
            title: 'Care 4 Here',
            headerStyle: {
              backgroundColor: '#b85186',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="AssetExample" component={AssetExample} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="UserScreen" component={UserScreen} />
  </Stack.Navigator>
</NavigationContainer>
);


const styles = StyleSheet.create({
  

});

export default App;
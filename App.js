/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <FlatList
        data={[
        {key:1, nome:"Ricardo"},
        {key:2, nome:"Bugan"}]}
        renderItem = { ({item}) => 
        <Fragment>
          
          <View style={estilos.cabecalho}>
            <Image source={require("./res/img/alura.jpg")} style={estilos.fotoPerfil}/>
            <Text>{item.nome}</Text>
          </View>

          <Image source={require("./res/img/alura.jpg")} style={estilos.foto}/>
        
        </Fragment>
        }
      />
    </Fragment>
  );
};


let largura = Dimensions.get("screen").width;

const estilos = StyleSheet.create({
  cabecalho:{
    flexDirection:"row",
     alignItems:"center"
  },

  fotoPerfil:{
    width:50,
    height:50,
    borderRadius:30,
    margin:10
  },

  foto:{
    width:largura,
    height:largura
  }
})

export default App;

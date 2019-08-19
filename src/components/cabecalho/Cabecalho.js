import React from "react";
import { Image, View, Text } from "react-native";
import estilos from "./estilo";

const Cabecalho = ({ nome, url }) => {
  return (
    <View style={estilos.cabecalho}>
      <Image source={{ uri: url }} style={estilos.fotoPerfil} />
      <Text>{nome}</Text>
    </View>
  );
};

export default Cabecalho;

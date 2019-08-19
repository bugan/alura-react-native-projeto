import React, { Fragment, useState } from "react";
import {
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  View
} from "react-native";

import estilos from "./estilo";

const Comentarios = ({ comentarios }) => {
  const [estComentarios, setComentarios] = useState(comentarios);

  let valorComentario = "";
  let inputTexto;

  const addComentario = texto => {
    inputTexto.clear();
    const novoComentario = {
      text: texto,
      userName: "Bugan",
      date: Date.now()
    };
    setComentarios([...estComentarios, novoComentario]);
  };

  return (
    <Fragment>
      <FlatList
        data={estComentarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={estilos.comentario}>
            <Text style={estilos.nomeComentario}>{item.userName}</Text>
            <Text> {item.text}</Text>
          </View>
        )}
      />
      <View style={estilos.imputComentario}>
        <TextInput
          ref={textoInput => (inputTexto = textoInput)}
          placeholder="Deixe um comentário"
          onChangeText={texto => (valorComentario = texto)}
          style={{ flex: 1 }}
        />
        <TouchableOpacity onPress={() => addComentario(valorComentario)}>
          <Image
            source={require("../../../res/img/send.png")}
            style={estilos.imgSend}
          />
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Comentarios;

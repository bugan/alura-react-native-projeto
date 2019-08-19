import React, { Fragment, useState } from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import estilos from "./estilo";
import curtirFoto from "../../api/curtidas";

const Foto = ({ url, likes, curtiu }) => {
  const [estCurtiu, setCurtir] = useState(curtiu);
  const [qntLikes, setLikes] = useState(likes);

  const clicouCurtir = (curtiu, likes) => {
    const [curtiuRes, likesRes] = curtirFoto(curtiu, likes);
    setCurtir(curtiuRes);
    setLikes(likesRes);
  };

  return (
    <Fragment>
      <Image source={{ uri: url }} style={estilos.foto} />
      <View style={estilos.contagemCurtidas}>
        <TouchableOpacity onPress={() => clicouCurtir(estCurtiu, qntLikes)}>
          <Image source={IconeLike(estCurtiu)} style={estilos.like} />
        </TouchableOpacity>
        <Text> curtidas {qntLikes}</Text>
      </View>
    </Fragment>
  );
};

const IconeLike = curtida => {
  if (curtida) {
    return require("../../../res/img/s2-checked.png");
  } else {
    return require("../../../res/img/s2.png");
  }
};

export default Foto;

import { Dimensions, StyleSheet } from "react-native";

let largura = Dimensions.get("screen").width;

const estilos = StyleSheet.create({
  foto: {
    width: largura,
    height: largura
  },

  like: {
    height: 40,
    width: 40,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10
  },

  contagemCurtidas: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default estilos;

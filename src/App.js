/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useState, useEffect } from "react";
import { FlatList, Image } from "react-native";
import { Cabecalho } from "./components/cabecalho";
import getFotos from "./api/feed";
import { Foto } from "./components/foto";
import { Comentarios } from "./components/comentarios";

const lerFotos = async () => {
  const fotosFeed = await getFotos();
  setFotos(fotosFeed);
};

const App = () => {
  [fotos, setFotos] = useState([]);

  useEffect(() => {
    lerFotos();
  }, []);

  return (
    <Fragment>
      <FlatList
        data={fotos}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => (
          <Fragment>
            <Cabecalho nome={item.userName} url={item.userURL} />
            <Foto url={item.url} likes={item.likes} curtiu={item.curtiu} />
            <Comentarios comentarios={item.comentarios} />
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default App;

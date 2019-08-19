const getFotos = async () => {
  const fotosFeed = await fetch("http:10.0.2.2:3030/feed");
  const json = await fotosFeed.json();
  return json;
};

export default getFotos;

const curtirFoto = (curtiu, likes) => {
  if (curtiu) {
    return descurtir(likes);
  }
  return curtir(likes);
};

const descurtir = likes => {
  curtiu = false;
  likes--;
  return [curtiu, likes];
};

const curtir = likes => {
  curtiu = true;
  likes++;
  return [curtiu, likes];
};

export default curtirFoto;

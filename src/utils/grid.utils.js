const gridCount = (width) => {
  if (width < 760) {
    return 1;
  } else if (width < 1001) {
    return 2;
  } else {
    return 3;
  }
};

export default gridCount;

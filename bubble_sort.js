const sorting = () => {
  let array = [];
  for (let i = 0; i < 7; i++){
    array.push(Math.floor(Math.random()*10));
  }
  console.log(`Array: ${array}`);
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let max = array[i];
        array[i] = array[i + 1];
        array[i + 1] = max;
      }
    }
  }
  return `NewArray: ${array}`;
}

const qsort = (array) => {
  if (array.length < 2) {
    return array;
  }
  let pivot = array[Math.round((array.length - 1) / 2)];
  let less = [];
  let more = [];
  for (let i = 1; i < array.length; i+=1) {
    pivot < array[i] ? more.push(array[i]) : less.push(array[i]);
  }
  return qsort(less).concat(pivot, qsort(more));
}
 let list = [];
  for (let i = 0; i < 8; i+=1) {
    list.push(Math.floor(Math.random()*10));
  }

const dataArray = [1, 2, 'tiga', 'empat']
console.log(dataArray);
console.log(dataArray[0]);

const dataObject = { mobil: 'merah', motor: 'kuning', pesawat: 1 }
console.log(dataObject);
console.log(dataObject.motor);

console.log(dataArray.slice(1, 3))

dataArray.push('lima');
console.log(dataArray);

console.log(dataArray.length)


for (let i = 0; i < dataArray.length; i++) {
  console.log(dataArray[i])
}

console.log('\n' + 'PISAH' + '\n')

dataArray.forEach(value => console.log(value))

console.log('\n' + 'PISAH MAP' + '\n');

dataArray.map((value, index) => console.log(index, value))
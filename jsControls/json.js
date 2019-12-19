const data = '{"motor": "biru", "mobil": "kuning", "pesawat": 10}'

dataJSON = JSON.parse(data);

console.log(dataJSON);

dataString = JSON.stringify(dataJSON);

console.log(dataString)
var hasil ='';

for (let a = 1; a<=5; a ++){
    for (let b = 4; b >=a; b--){
    hasil += ' ';
    }
    for (let c = 1; c <=a; c++){
    hasil += '*';
    }
    for (let d = 1; d <=a-1; d++){
    hasil += '*';
    }
    hasil += '\n';
}
console.log(hasil)
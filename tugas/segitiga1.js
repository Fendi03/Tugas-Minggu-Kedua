var hasil ='';
for (let baris = 10; baris>0; baris --){
    for (let kolom = 1; kolom <baris; kolom++){
    hasil += '*';
    }
    hasil += '\n';
}
console.log(hasil)
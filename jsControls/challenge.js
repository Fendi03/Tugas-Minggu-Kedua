for (let baris = 7; baris>0; baris --){
    let hasil = '';
    for (let kolom = 1; kolom < baris; kolom++){
        hasil = hasil.toString().concat(kolom)
    }
    console.log(hasil)
}
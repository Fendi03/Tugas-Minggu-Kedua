const meja = 2;
let kursi = 1;

switch(meja){
    case 1:
        kursi = 2;
        break;
    case 2:
        kursi = 4;
        break;
    case 3:
        kursi = 12;
        break;
    default:
        kursi = 100;
        break;
}

console.log(kursi);
//Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
let diagonal1 = 0;
let diagonal2 = 0;

for(let i = 0; i < matrix.length; i++) {
  diagonal1 += matrix[i][i];
  diagonal2 += matrix[i][matrix.length - 1 - i];
}

const hasil = diagonal1 - diagonal2;
console.log("4. " + hasil);
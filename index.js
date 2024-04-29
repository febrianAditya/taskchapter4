/**
 * Hapus item terkhir
 * 
 * let fruits = ['apple', 'banana', 'cherry']
 */

// let fruits = ['apple', 'banana', 'cherry']
console.log(fruits," ==> RESULT");
// Output: ['apple', 'banana']



/**
 * Cari panjang array
 * 
 * Diberikan sebuah array ['a', 'b', 'c', 'd', 'e']. Tentukan panjang dari 
array tersebut.
 */

let bulkAlphabet = ['a', 'b', 'c', 'd', 'e']
console.log(bulkAlphabet);
// Output: 5



/**
 * Filter huruf ganjil
 * 
 * Diberikan sebuah array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. 
 * Buatlah sebuah array baru yang hanya berisi angka ganjil dari array 
tersebut.
 * 
 * Ketentuan tanpa menggunakan built in function
 */
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let angkaGanjil = []
console.log(angkaGanjil); // [1, 3, 5, 7, 9]



/**
 * Cari nilai tertinggi dan terendah
 * 
 * Terdapat array [21, 19, 10, 89, 3, 20, 33, 34], tentukan nilai 
tertinggi dan nilai terendah. 
 * Setelah itu urutkan array tersebut tanpa menggunakan built in function
 */
let angkaUnik = [21, 19, 10, 89, 3, 20, 33, 34]

// console.log(angkaUnik)



/**
 * Mengakses Properti Bertingkat
 * 
 * Diberikan sebuah objek bertingkat. Akses value dar key city
 */

const data = {
    user: {
        profile: {
            name: "John Doe",
            address: {
                city: "Jakarta",
                postalCode: "12345"
            }
        }
    }
};

let result // "Jakarta"



/**
 * Mencari Nilai Tertinggi dan tampilkan nama dan nilainya
 * 
 * Gunakan looping untuk mencarinya. Lalu resultnya menjadi string dengan 
pernyataan
 */

const mahasiswa = [
    { nama: "Budi", nilai: 85 },
    { nama: "Ana", nilai: 90 },
    { nama: "Dono", nilai: 78 },
    { nama: "Dewi", nilai: 92 }
];

// OUPUT: Students yang mendapatkan nilai terbesar adalah ... dengan nilai 
...




/**
 * Penghitungan Suara Pemilihan
 * 
 * Terdapat sebuah array berisi suara pemilihan. Hitunglah total suara 
untuk masing-masing kandidat dan kembalikan dalam bentuk objek.
 */

const suara = ['Budi', 'Ana', 'Budi', 'Citra', 'Ana', 'Budi', 'Dewi', 
'Dewi', 'Ana'];
// OUTPUT :
// { Budi: 3, Ana: 3, Citra: 1, Dewi: 2 }



/**
 * Konversi Array ke Objek
 * 
 * Diberikan sebuah array yang berisi string, [ 'Apel', 'Mangga', 
'Pisang', 'Jeruk' ] dan sebuah array berisi number, [4, 6, 6, 5]. 
 * Ubahlah array tersebut menjadi objek dengan kunci berupa nama buah dan 
nilai berupa panjang dari nama buah tersebut.
 */

let fruits = [ 'Apel', 'Mangga', 'Pisang', 'Jeruk' ]
let amount = [4, 6, 6, 5]

// OUTPUT: { Apel: 4, Mangga: 6, Pisang: 6, Jeruk: 5 }



/**
 * Menghitung Kemunculan Kata
 * 
 * Diberikan sebuah kalimat, "saya suka makan nasi goreng dan saya juga 
suka minum teh". 
 * Buatlah sebuah objek yang menghitung berapa kali masing-masing kata 
muncul di dalam kalimat tersebut.
 */

let favWord = "saya suka makan nasi goreng dan saya juga suka minum teh"

// OUTPUT:  { saya: 2, suka: 2, makan: 1, nasi: 1, goreng: 1, dan: 1, 
juga: 1, minum: 1, teh: 1 }



/**
 * Grup Orang Berdasarkan Usia
 * 
 * Diberikan sebuah array objek yang berisi nama dan usia.
 * 1. Akses umur Dewi
 * 2. Kelompokkan objek didalam array berdasarkan usia, dan keluarkan 
dalam bentuk objek
 * 
 */

const people = [
    { nama: "Budi", usia: 25 },
    { nama: "Ana", usia: 20 },
    { nama: "Citra", usia: 25 },
    { nama: "Dewi", usia: 32 },
    { nama: "Eka", usia: 30 }
  ]


let collectionUmur
// OUTPUT:
// {
//     20: [ { nama: 'Ana', usia: 20 } ],
//     25: [ { nama: 'Budi', usia: 25 }, { nama: 'Citra', usia: 25 } ],
//     30: [ { nama: 'Eka', usia: 30 } ],
//     32: [ { nama: 'Dewi', usia: 20 } ]
// }


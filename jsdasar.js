// STRUKTUR CODE
// Statement
alert('hello World!')

// COMMENT / KOMENTAR
// Komentar 1 Baris
alert('Hello World!'); console.log('statement baris kedua');

/*
Komentar Multi
Baris
*/
console.log('statement 1 baris')

// JAVASCRIPT VARIABEL
// Variabel
var fullName = "Aan"

document.write(fullName)

// Mengubah Value Variabel
var fullName = "Aan"

fullName = "Lionel Messi"

fullName = "Cristiano Ronaldo"

document.write(fullName)

// Menggunakan Variabel
var fullName = "Aan"

fullName = "Lionel Messi"

fullname = "Cristiano Ronaldo"

document.writeln(fullName)
document.writeln('<br>')
document.writeln(fullName)
document.writeln('<br>')
document.writeln(fullName)
document.writeln('<br>')
document.writeln(fullName)
document.writeln('<br>')
document.writeln(fullName)
document.writeln('<br>')
document.writeln(fullName)
document.writeln('<br>')
document.writeln(fullName)

// Var vs Let vs Const
let fullNama = "Lionel Messi"

fullNama = "Joko"

document.write(fullNama) // Output Joko

// Var vs Let vs Const
// const fullNam = "Lionel Messi"

// fullNam = "Joko"

// document.write(fullNam) // Error: Assignment to constant variable

// Masalah variabel var
// Menggunakan var
var x = 10;
if (true) {
    var x = 20;
    console.log("Nilai x di dalam blok:", x); // Output 20
}
console.log("Nilai x di luar blok:", x); // Output 20

// Menggunakakn let
let h = 10;
if (true) {
    let h = 20;
    console.log("Nilai h di dalam blok:", h); // Output 20
}
console.log("Nilai h di luar blok:", h); // Output 10

// TIPE DATA
// Tipe Data Number
let bl = 25
let desimal = 25.2

document.writeln(bl)
document.writeln('<br>')
document.writeln(desimal)
document.writeln("Hasil Penjumlahan = ")
document.writeln(desimal + bl)

// Tipe Data Number
let blt = 25
let strng = 'a'

document.writeln(blt/0) // Ouput Infinity
document.writeln('<br>')
document.writeln(strng/5) // Output Nan

// Tipe Data Bigint
let bulat = 123123314324213421244233341231242513n

document.writeln(bulat)

// Tipe Data String
let text = "arkatama"

document.writeln(text)

// Tipe Data Boolean
let admn = true
let perbandingan = 15 > 9

document.writeln(perbandingan)

// Tipe Data Undifined
let adm

document.writeln(adm)

// Tipe Data Null
let admin = null

document.write(admin)

// Tipe Data Symbol
let employe = Symbol('Joko')

console.log(employe);
console.log(employe.description);

// Tipe Data Object
let employee = {
    name: "john",
    age: 30,
    job: "web developer",
    isMarried: false,
}

document.write(`My Name is ${employee.name} and he is ${employee.age} years old`)

// TYPE CONVERSION
// Type Conversion: String
let value = false
let st = String(value)

alert(typeof value)

// Type Conversion: Numeric
let str = "123"
let nbr = Number("123")

alert(typeof nbr)

// Type Conversion: Boolean
alert(Boolean(0))
alert(Boolean(1))

// JAVASCRIPT OPERATOR
// Operator Aritmatika
let u = 3
let v = 5

console.log(u + v);
console.log(u - v);
console.log(u * v);
console.log(u ** v);
console.log(u / v);
console.log(u % v);

// Operator Comparison / Perbandingan
let p = 3
let s = 5

console.log(p == s);
console.log(p < s);
console.log(p > s);
console.log(p != s);

// Operator Logika
let n = 3
let m = 5

console.log(n && m);
console.log(n || m);
console.log(!n);

// Operator Bitwise
let f = 3
let g = 5

console.log(f & g);
console.log(f | g);
console.log(f ^ g);
console.log(~f);

// Operator Ternary
let a = 3
let c = 5

console.log(a == c ? 'sama' : 'tidak sama');

// POPUP
// Popup: Alert
alert('Hallo Selamat datang di Arkatama')

// Popup: Prompt
let y = prompt("Apakah kamu mau makan malam denganku?")
alert('Jawaban anda' + y)

// Popup: Confirm
let t = confirm("Apakah kamu mau makan malam denganku?")

t ? alert('Jawaban anda mau') : alert('Jawaban anda tidak mau')

// PERCABANGAN
// Percabangan: If
let r = confirm("Apakah kamu mau makan malam denganku?")

if (r) {
    alert('Jawaban anda mau')
}

// Percabangan If - Else
let e = confirm("Apakah kamu mau makan malam denganku?")

if(e) {
    alert('Jawaban anda mau')
} else {
    alert('jawaban anda tidak mau')
}

// Percabangan: Else - If
let q = prompt("1 + 1 ?")

if (q = 2) {
    alert('Jawaban anda betul')
} else if (q > 2) {
    alert('Jawaban anda kelebihan')
} else if (q < 2) {
    alert('Jawaban anda kurang')
} else {
    alert('Jawaban anda salah')
}

// Percabangan: Switch
var string = "blue";

switch (string) {
    case "red":
        alert('I Love Red!')
        break;

    case "blue":
        alert('I Love Blue!')
        break;
    
    default:
        alert('I dont know what color is!')
        break;
}

// Perulangan / Loop
// Perulangan For
for (let i = 1; i < 5; i++) {
    document.writeln(i)
    document.writeln("<br>")
}

// Perulangan While
let b = 1

while (b < 5) {
    document.writeln(b)
    document.writeln("<br>")
    b++
}

// Perulangan Do While
let i = 1;

document.writeln('Perulangan do while')
document.writeln("<br>")
do {
    document.writeln(i)
    document.writeln("<br>")
    i++
} while (i < 5);

// Loop Control:break
document.writeln('Perulangan for')
document.writeln("<br>")
for(let a = 1; a < 5; a++) {
    if(a == 3) {
        break
    }
    document.writeln(a)
    document.writeln("<br>")
}

// Loop control:continue
document.writeln('Perulangan for')
document.writeln("<br>")
for(let a = 1; a < 5; a++) {
    if(a == 3) {
        continue
    }
    document.writeln(a)
    document.writeln("<br>")
}
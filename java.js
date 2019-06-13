alert ('JavaScript site');
alert ('For training');

function button() {
    alert ('E un buton lucrator');
}
 
function text() {
    alert ('Nu e buton da tot merge');
}

function f1() {
    alert ('E chiar un buton adevarat');
}

function java() {
    alert ('Da e un site JavaScript');
}

function numar(id) {
    return +document.getElementById(id).value
}

function patrat() {
    var num2 = numar('inp1')
    alert (num2*num2);
}

function cube() {
    alert (numar('inp4') * numar('inp4') * numar('inp4'));
}

function adunare()  {
    alert (numar('inp2') + numar('inp3'));

}

function scadere(){
    alert (numar('inp2') - numar('inp3'));
}

function inmultire(){
    alert (numar('inp2') * numar('inp3'));
}

function impartire(){
    alert (numar('inp2') / numar('inp3'));
}

function out(){
    var p;
    p = document.getElementById('out()');
    p.innerHTML += '<b>=Ai apasat un buton</b>'
}


//var a, b
a=8
b=8

if (a>b) {
    alert ('Prima cifra e mai mare');
}

else if (a==b) {
    alert ('Cifrele sunt egale')
}

else{
    alert ('A doua cifra e mai mare');
}

function compara() {
    var n;
    n = document.getElementById('num1').value
    p = document.getElementById('out');
    n = parseInt (n);
    if  (n==100) {
        p.innerHTML = 'Numaru e egal cu 100'
    }
    else if (n<100) {
        p.innerHTML = 'Numarul e mai mic'
    }
    else {
    p.innerHTML = 'Numarul e mai mare'
    }
}

var tempOut1, prNum1;
prNum = Math.floor((Math.random() * 10) + 1);
//tempOut = document.getElementById('temp-out');
//tempOut.innerHTML = prNum;



function f2() {
    var num, out;
    
    num = document.getElementById('mynum').value;
    out = document.getElementById('out');

    /*

    a = 1, b = 1 : a = b
    a = 0, b = 1 : a < b
    a = 1, b = 0 : a > b


    */


    /*
    Add some comments
    */

    if (num == prNum) {
        out.innerHTML = 'Ai ghicit!!!';
    }
    else if (num > prNum) {
        out.innerHTML = 'Numarul de ghicit e mai mic'
    }
    else {
        out.innerHTML = 'Numarul de ghicit e mai mare'
    }
}

function ciclu() {
    var p;
    p = document.getElementById('out2');
    
    for (var i=0; i<=100; i=i + 1){
        p.innerHTML += i+', ';
    }

}

function cicluwhile() {
    var p;
    p = document.getElementById('out3');
    p1 = document.getElementById('out4')
    p3 = document.getElementById('out5')
    var i=0
    while (i<=100) {
        p.innerHTML+=i+', ';
        i++;
    }

    var j=0;
    do {
        p1.innerHTML+=j + ', '
        j++;
    }
    while (j<=30)

    var l=100
    do {
        p3.innerHTML+=l + ', '
        l--;
    }
    while (l>=0)
}

document.getElementById('slider-left').onclick = sliderLeft;
var left = 0
 
function sliderLeft() {
    var polosa = document.getElementById('polosa')
    left = left - 128;
    if (left < -512) {
        left = 0
    }
    polosa.style.left = left +'px';
}

document.getElementById('slider-right').onclick = sliderRight
var right = 0

function sliderRight() {
    var polosa = document.getElementById('polosa')
    right = right + 128;
    if (right > + 512) {
        right = 0
    }
    polosa.style.right = right +'px';
}
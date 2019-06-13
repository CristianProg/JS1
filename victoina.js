var prNum, tempOut;
prNum = Math.floor((Math.random() * 10) + 1);
tempOut = document.getElementById('temp-out');
tempOut.innerHTML = prNum;

function f1() {
    var num, out;

    num = document.getElementById('mynum').value;
    out = document.getElementById('out');

    if (num == prNum) {
        out.innerHTML = 'Ai ghicit!!!';
    }
    else if (num > prNum) {
        out.innerHTML = 'Numaru e mai mic'
    }
    else {
        out.innerHTML = 'Numar e mai mare'
    }



}
let liczby = document.getElementsByClassName('licz');
let wynik = document.getElementById('wynik');
let przec = document.getElementById('przec');
let bprzec = true;

let operacja, tmp, mem = 0;

for(let i = 0; i < liczby.length; i++){
    liczby[i].addEventListener('click', function() {
        if(wynik.value == '0')
            wynik.value = '';

        wynik.value += liczby[i].innerHTML;
    });

    przec.addEventListener('click', e => {
        if(bprzec == true){
            wynik.value += przec.innerHTML;
            bprzec = false;
        }
    });
}

document.getElementById('bck').addEventListener('click', function() {
    wynik.value = wynik.value.substr(0, wynik.value.length - 1);
    sprWynik();
});

document.getElementById('ce').addEventListener('click', function() {
    wynik.value = '0';
});

document.getElementById('c').addEventListener('click', function() {
    wynik.value = '0';
    oper = '';
    tmp = 0;
});

document.getElementById('plus').addEventListener('click', function() {
    tmp = wynik.value;
    oper = '+';
    wynik.value = '0';
});

document.getElementById('minus').addEventListener('click', function() {
    tmp = wynik.value;
    oper = '-';
    wynik.value = '0';
});

document.getElementById('mnoz').addEventListener('click', function() {
    tmp = wynik.value;
    oper = '*';
    wynik.value = '0';
});

document.getElementById('dziel').addEventListener('click', function() {
    tmp = wynik.value;
    oper = '/';
    wynik.value = '0';
});

document.getElementById('proc').addEventListener('click', function() {
    wynik.value = (wynik.value * tmp)/100;
});

document.getElementById('pierw').addEventListener('click', function() {
    wynik.value = Math.sqrt(wynik.value);
});

document.getElementById('pot').addEventListener('click', function() {
    wynik.value = Math.pow(wynik.value, 2);
});

document.getElementById('odwr').addEventListener('click', function() {
    wynik.value = 1/wynik.value;
});

document.getElementById('plusmin').addEventListener('click', function() {
    wynik.value = -wynik.value;
});

document.getElementById('rowna').addEventListener('click', function() {
    switch(oper){
        case '+':
            wynik.value = +tmp + +wynik.value;
            break;

        case '-':
            wynik.value = tmp-wynik.value;
            break;

        case '*':
            wynik.value = tmp*wynik.value;
            break;

        case '/':
            wynik.value = tmp/wynik.value;
            break;
    }
});


document.getElementById('mc').addEventListener('click', function() {
    mem = 0;
});

document.getElementById('ms').addEventListener('click', function() {
    mem = 0;
    mem = wynik.value;
});

document.getElementById('mr').addEventListener('click', function() {
    wynik.value = '';
    wynik.value = mem;
});

document.getElementById('mplus').addEventListener('click', function() {
    mem += +wynik.value;
});

document.getElementById('mminus').addEventListener('click', function() {
    mem -= wynik.value;
});

function sprWynik(){
    if(wynik.value == '')
        wynik.value = '0';

    if(!wynik.value.includes(','))
        bprzec = true;
}
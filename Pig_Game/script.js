'use strict';

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//selektovanje elemenata
const igrac0 = document.querySelector('.igrac--0');
const igrac1 = document.querySelector('.igrac--1');
const rezultat1 = document.querySelector('#bod--0');
const rezultat2 = document.querySelector('#bod--1');
const trenutno1 = document.querySelector('#trenutno--0');
const trenutno2 = document.querySelector('#trenutno--1');

const kocka1 = document.querySelector('.kocka');
const nova = document.querySelector('.nova');
const bacaj = document.querySelector('.baci');
const storniraj = document.querySelector('.cekaj');

let rezultati, aktivniIgrac, trenutniRezultat, igra;

//trenutniRezultat = 0;
//aktivniIgrac = 0;
//igra = true;
//rezultati =[0, 0];

//pocetna pozicija
const pocetak = function() {
    rezultati = [0, 0];
    trenutniRezultat = 0;
    aktivniIgrac = 0;
    igra = true;

    rezultat1.textContent = 0;
    rezultat2.textContent = 0;
    trenutno1.textContent = 0;
    trenutno2.textContent = 0;

    kocka1.classList.add('hidden');
    igrac0.classList.remove('igrac--pobednik');
    igrac1.classList.remove('igrac--pobednik');
    igrac0.classList.add('igrac--aktivni');
    igrac1.classList.remove('igrac--aktivni');
};
pocetak();

//promena igraca
const promenaIgraca = function(){
    document.getElementById(`trenutno--${aktivniIgrac}`).textContent = 0;
    trenutniRezultat = 0;
    aktivniIgrac = aktivniIgrac === 0 ? 1 : 0;
    igrac0.classList.toggle('igrac--aktivni');
    igrac1.classList.toggle('igrac--aktivni');
};


//bacanje kockice
bacaj.addEventListener('click', function(){
//    let age = 10;
////    if (age <= 18){
////        console.log('Moras piti vodu!');
////    } else {
////        console.log('Mozes da pijes i ALKOHOL!')
////    }
//    age <= 18 ? console.log('Moras da pijes vodu!') : console.log('Mozes i ALKOHOL!')

    if(igra) {
        let dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice)

        kocka1.classList.remove('hidden');
        kocka1.src = `img/dice-${dice}.png`;

        if(dice != 1) {
            trenutniRezultat += dice;
            document.getElementById(`trenutno--${aktivniIgrac}`).textContent = trenutniRezultat;
        } else {
            promenaIgraca();
        }
    }
});


//storniranje rezultata
storniraj.addEventListener('click', function(){

    if(igra) {
        rezultati[aktivniIgrac] += trenutniRezultat;

        document.getElementById(`bod--${aktivniIgrac}`).textContent = rezultati[aktivniIgrac];

        if(rezultati[aktivniIgrac] >=100) {
            igra = false;
            kocka1.classList.add('hidden');

            document.querySelector('.naslov').textContent = `Pobednik!`;

            document
                .querySelector(`.igrac--${aktivniIgrac}`)
                .classList.add('igrac--pobednik');
            document
                .querySelector(`.igrac--${aktivniIgrac}`)
                .classList.remove('igrac--aktivni');
        } else {
            promenaIgraca();
        }
    }
});

nova.addEventListener('click', pocetak);

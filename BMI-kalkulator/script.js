'use strict';

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let stisak1 = document.querySelector('.btn1');
let stisak2 = document.querySelector('.btn2');
let stisak3 = document.querySelector('.pomoc');
let veliki = document.querySelector('.veliki').innerHTML;
let mali = document.querySelector('.mali').innerHTML;
let odgovor = document.querySelector('.odgovor').innerHTML;
let pocetna = document.querySelector('.pocetna').innerHTML;
let pothranjen = document.querySelector('.pothranjen').innerHTML;
let normalno = document.querySelector('.normalno').innerHTML;
let previse = document.querySelector('.prekomerna').innerHTML;
let pretilo = document.querySelector('.pretilo').innerHTML;
let izrazito = document.querySelector('.izrazito').innerHTML;

// let visina = document.querySelector('.visina').value;
// let tezina = document.querySelector('.tezina').value;
// let bmi = (tezina / (visina * visina)).toFixed(1);

stisak1.addEventListener('click', function(){

    let visina = document.querySelector('.visina').value;
    let tezina = document.querySelector('#tezina').value;

    let bmi = (tezina / (visina * visina)).toFixed(1);

    if (bmi <= 18.5){
        document.querySelector('.pocetna').innerHTML = pothranjen;
        document.querySelector('.veliki').textContent = 'Vas BMI index je';
        document.querySelector('.mali').textContent = `${bmi}`;
        document.querySelector('.mali').style.color = 'red';
        document.querySelector('.mali').style.fontSize = '2em';
    } else if(bmi >= 18.6 && bmi <= 24.9){
        document.querySelector('.pocetna').innerHTML = normalno;
        document.querySelector('.veliki').textContent = `Vas BMI index je`;
        document.querySelector('.mali').textContent = `${bmi}`;
        document.querySelector('.mali').style.color = 'green';
        document.querySelector('.mali').style.fontSize = '2em';
    } else if(bmi >= 25 && bmi <= 30){
        document.querySelector('.pocetna').innerHTML = previse;
        document.querySelector('.veliki').textContent = 'Vas BMI index je';
        document.querySelector('.mali').textContent = `${bmi}`;
        document.querySelector('.mali').style.color = 'orange';
        document.querySelector('.mali').style.fontSize = '2em';
    } else if(bmi >= 31 && bmi <= 40){
        document.querySelector('.pocetna').innerHTML = pretilo;
        document.querySelector('.veliki').textContent = `Vas BMI index je`;
        document.querySelector('.mali').textContent = `${bmi}`;
        document.querySelector('.mali').style.color = 'orange';
        document.querySelector('.mali').style.fontSize = '2em';
    } else if(bmi >= 40.1){
        document.querySelector('.pocetna').innerHTML = izrazito;
        document.querySelector('.veliki').textContent = 'Vas BMI index je';
        document.querySelector('.naslov .mali').textContent = `${bmi}`;
        document.querySelector('.mali').style.color = 'red';
        document.querySelector('.mali').style.fontSize = '2em';
    } else {
        alert('Nije dobar broooj!')
    }
})



stisak2.addEventListener('click', function(){
  document.querySelector('.pocetna').innerHTML = pocetna;
  document.querySelector('.veliki').innerHTML = veliki;
  document.querySelector('.mali').innerHTML = mali;
  document.querySelector('.mali').style.color = '#569099';
    document.querySelector('.mali').style.fontSize = '1em';
})

stisak3.addEventListener('click', function(){
  document.querySelector('.pocetna').innerHTML = odgovor;
})

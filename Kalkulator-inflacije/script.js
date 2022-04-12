'use strict';

function inflacija() {
    var inflationRate = parseFloat(document.getElementById('postotak').value);
    var pare = parseFloat(document.getElementById('koliko_eura').value);
    var vreme = parseFloat(document.getElementById('koliko_godina').value);

    let vrednost = pare + (pare * (inflationRate / 100));

    console.log(vrednost)

    for(let i = 1; i < vreme; i++){
        vrednost += vrednost * (inflationRate / 100);
//        vrednost.toFixed(2)
    }

    let novi_el = document.querySelector('.rezultat');

    novi_el.textContent = `${pare} eura ce za ${vreme} godina po stopi inflacije od ${inflationRate}% vrediti ${vrednost.toFixed(2)} eura.`;

    console.log(vrednost.toFixed(2))
}



//const izracunaj = document.querySelector('.dugme');
//
//izracunaj.addEventListener('click', inflacija())

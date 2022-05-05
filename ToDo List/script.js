'use strict';

const dodaj = document.querySelector('.dugme');
let kontejner = document.querySelector('.container');
let noviText = document.querySelector('input');


dodaj.addEventListener('click', function(){
    if(noviText.value) {

    // create row  node
    let noviZ = document.createElement('li');
    let checkIcon = document.createElement('i');
    let trashIcon = document.createElement('i');

    noviZ.classList = 'zadatak';

    // create text node
    let textnode = document.createTextNode(noviText.value);

    noviZ.appendChild(checkIcon);

    // append textnode to div
    noviZ.appendChild(textnode);

    // append novi to toDo
    kontejner.appendChild(noviZ);

    trashIcon.className = 'fa-regular fa-trash-can';
    checkIcon.className = 'fa-solid fa-circle-check';

    noviZ.appendChild(trashIcon);

    ///// uklananje zadatka ////////////
    trashIcon.addEventListener('click', function(){
        noviZ.remove()
    })

    ////// resen zadatak /////////
        checkIcon.addEventListener('click', function(){
            checkIcon.classList.toggle('resenZadatak')
            noviZ.classList.toggle('resenaLista')
            trashIcon.classList.toggle('resenoKanta')
        })

     ///// posle dodaj se prazni polje
    noviText.value = ''
    } else {
        alert('Moras uneti neki zadatak!')
    }
})


//// dodavanje novih elemenata ////////
//let novi_el = document.createElement('div');
//
//novi_el.classList  = 'novi-element';
//novi_el.innerText = 'pozdrav!!!';
//
//
//let body = document.querySelector('body')
//
//body.appendChild(novi_el);

'use strict';

//--- mobilni meni ------------------------------------------
let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-veliki');
let navLink = document.querySelectorAll('.nav-link');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})
navLink.forEach(n => n.addEventListener('click', () =>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))
//-----------------------------------------------------------
//-----------------------------------------------------------

let stranaFilma = document.querySelector('.stranica-filma');
let naslovi = document.querySelector('.naslovi');
let overlay = document.querySelector('.overlay');

let thumb = document.querySelector('.thumb');
let slikaScreen = document.querySelector('.slika-pozadina')
let ime2 = document.querySelector('.ime2');
let god2 = document.querySelector('.gf2');
let vreme2 = document.querySelector('.vf2');
let ocena2 = document.querySelector('.ocenaf2');
let imdbLink2 = document.querySelector('.imdb2');
let sadrzaj2 = document.querySelector('.sadrzaj-str');
let gledaj2 = document.querySelector('.gledaj2');
let skini2 = document.querySelector('.skini2');


function infoFilma(element) {
    let mainEl = element.closest('.item');
    let imeFilma = mainEl.querySelector('.ime-filma').innerText;
    let itemSlika = mainEl.querySelector('.img1');
    let godFilma = mainEl.querySelector('.god-filma').innerText;
    let screenFilma = mainEl.querySelector('.film-screen');
    let vreme1 = mainEl.querySelector('.trajanje-filma').innerText;
    let sadrzaj1 = mainEl.querySelector('.radnja-filma').innerText;
    let ocena1 = mainEl.querySelector('.ocena1').innerText;
    let imdb1 = mainEl.querySelector('.imdbL');
    let gledajFilm = mainEl.querySelector('.gledaj-film');
    let skini1 = mainEl.querySelector('.skini-film');

    thumb.src = 'img/' + imeFilma + '.jpg';

    slikaScreen.style.backgroundImage = `linear-gradient(to bottom, transparent,
    var(--bg2) 90% ), url('img/${imeFilma}-bg.jpg')`;

    ime2.textContent = imeFilma;
    god2.textContent = godFilma;
    vreme2.textContent = vreme1;
    ocena2.textContent = ocena1;
    sadrzaj2.textContent = sadrzaj1;
    imdbLink2.href = imdb1.href;

    gledaj2.href = gledajFilm.href;
    skini2.href = skini1.href;

    stranaFilma.style.display = 'block';
    overlay.style.display = 'block';

    naslovi.style.pointerEvents = 'none';

    window.scrollTo({ top: 0, behavior: 'smooth' }); //na klik ide se na vrh str.




    if(gledajFilm.href === "file:///C:/Users/andre/github/tests/Cinemania-filmoteka/nema") {
      gledaj2.style.color = 'red';
    } else {
      gledaj2.style.color = 'black';
    }

    if(skini1.href === "file:///C:/Users/andre/github/tests/Cinemania-filmoteka/nema") {
      skini2.style.color = 'red';
    } else {
      skini2.style.color = 'blue';
    }


    // console.log();
}



    // console.log(gledaj2);

//-----------------------------------------------------------
//---- dugme nazad ----------------------------------------
function nazad() {

    stranaFilma.style.display = 'none';

    overlay.style.display = 'none';

    naslovi.style.pointerEvents = 'all';

    console.log()
}
//-----------------------------------------------------------
//-----------------------------------------------------------

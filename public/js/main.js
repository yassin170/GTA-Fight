document.addEventListener('DOMContentLoaded', ()=> {

    let boxCJ = document.querySelector('.boxCJ');
    let boxNB = document.querySelector('.boxNB');
    let boxCLAUDE = document.querySelector('.boxCLAUDE');

    boxCJ.addEventListener('click', ()=> {
        choosePerso('Carl Johnson', './public/src/img/personnages/CarlJohnson.gif');
    });

    boxNB.addEventListener('click', ()=> {
        choosePerso('Nico Bellic', './public/src/img/personnages/NicoBellic.gif');
        });

    boxCLAUDE.addEventListener('click', ()=> {
        choosePerso('Claude', './public/src/img/personnages/Claude.gif');
        });
    });

    function choosePerso(nomPerso, persoImage) {
    // Cacher le menu
    let menu = document.querySelector('.menu');
    menu.style.display = 'none';

    // Afficher la game
    let game = document.querySelector('.game');
    game.style.display = 'flex';

    // Mettre a jour fighter choisi
    let fighter1 = document.getElementById('fighter1');
    fighter1.src = persoImage;

     // Choix aleatoire pour l ordi
    let fighters = [
        './public/src/img/personnages/Claude.gif',
        './public/src/img/personnages/CarlJohnson.gif',
        './public/src/img/personnages/NicoBellic.gif'
    ];

    let randomIndex = Math.floor(Math.random() * fighters.length);
    let ordiFighter = fighters[randomIndex];

    // Mettre a jour le fighter pour l ordi
    let fighter2 = document.getElementById('fighter2');
    fighter2.src = ordiFighter;

    // effet miroir pour le fighter2
    fighter2.style.transform = 'scaleX(-1)';
}


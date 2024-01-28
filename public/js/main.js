document.addEventListener('DOMContentLoaded', () => {
    let boxCJ = document.querySelector('.boxCJ');
    let boxNB = document.querySelector('.boxNB');
    let boxCLAUDE = document.querySelector('.boxCLAUDE');

    let isUserTurn = true;

    let damageOrdi = 0;
    let damageUser = 0;

    let attack1 = document.getElementById('attack1');
    let attack2 = document.getElementById('attack2');
    let attack3 = document.getElementById('attack3');
    let attack4 = document.getElementById('attack4');

    let userStars2 = document.querySelector('.userStars2');
    let userStars3 = document.querySelector('.userStars3');
    let userStars4 = document.querySelector('.userStars4');
    let userStars5 = document.querySelector('.userStars5');

    let ordiStars2 = document.querySelector('.ordiStars2');
    let ordiStars3 = document.querySelector('.ordiStars3');
    let ordiStars4 = document.querySelector('.ordiStars4');
    let ordiStars5 = document.querySelector('.ordiStars5');

    let finisherCJ = document.getElementById('finisherCJ');

    boxCJ.addEventListener('click', () => {
        choosePerso('./public/src/img/personnages/CarlJohnson.gif');
    });

    boxNB.addEventListener('click', () => {
        choosePerso('./public/src/img/personnages/NicoBellic.gif');
    });

    boxCLAUDE.addEventListener('click', () => {
        choosePerso('./public/src/img/personnages/Claude.gif');
    });

    function choosePerso(persoImage) {
        let menu = document.querySelector('.menu');
        menu.style.display = 'none';

        let game = document.querySelector('.game');
        game.style.display = 'flex';

        let fighter1 = document.getElementById('fighter1');
        fighter1.src = persoImage;

        let fighters = [
            './public/src/img/personnages/Claude.gif',
            './public/src/img/personnages/CarlJohnson.gif',
            './public/src/img/personnages/NicoBellic.gif'
        ];

        fighters = fighters.filter(fighter => fighter !== persoImage);

        let randomIndex = Math.floor(Math.random() * fighters.length);
        let ordiFighter = fighters[randomIndex];

        let fighter2 = document.getElementById('fighter2');
        fighter2.src = ordiFighter;
        fighter2.style.transform = 'scaleX(-1)';


        function performTurn() {
            isUserTurn = false;

            // Simulation du tour de l'ordinateur
            setTimeout(() => {
                computerTurn();
                isUserTurn = true;
            }, 1000);
        }

        function updateStars(attackValue) {
            switch (attackValue) {
                case 5:
                    damageOrdi += 5;
                    if (damageOrdi >= 10) {
                        ordiStars5.style.display = 'none';
                    } 
                    if (damageOrdi >= 20) {
                        ordiStars5.style.display = 'none';
                        ordiStars4.style.display = 'none';
                    }
                    if (damageOrdi >= 30) {
                        ordiStars5.style.display = 'none';
                        ordiStars4.style.display = 'none';
                        ordiStars3.style.display = 'none';
                    } 
                    if (damageOrdi >= 40) {
                        ordiStars5.style.display = 'none';
                        ordiStars4.style.display = 'none';
                        ordiStars3.style.display = 'none';
                        ordiStars2.style.display = 'none';
                    } 
                    if (damageOrdi >= 50) {
                        menu.style.display = 'none';
                        game.style.display = 'none';
                        finisherCJ.style.display = 'flex';
                    }  
                    break;
                case 10:
                    damageOrdi += 10;
                    if (damageOrdi >= 10) {
                        ordiStars5.style.display = 'none';
                    } 
                    if (damageOrdi >= 20) {
                        ordiStars5.style.display = 'none';
                        ordiStars4.style.display = 'none';
                    }
                    if (damageOrdi >= 30) {
                        ordiStars5.style.display = 'none';
                        ordiStars4.style.display = 'none';
                        ordiStars3.style.display = 'none';
                    } 
                    if (damageOrdi >= 40) {
                        ordiStars5.style.display = 'none';
                        ordiStars4.style.display = 'none';
                        ordiStars3.style.display = 'none';
                        ordiStars2.style.display = 'none';
                    } 
                    if (damageOrdi >= 50) {
                        menu.style.display = 'none';
                        game.style.display = 'none';
                        finisherCJ.style.display = 'flex';
                    }  
                    break;
                case 15:
                    damageOrdi += 15;
                    if (damageOrdi >= 10) {
                        ordiStars5.style.display = 'none';
                    } 
                    if (damageOrdi >= 20) {
                        ordiStars5.style.display = 'none';
                        ordiStars4.style.display = 'none';
                    }
                    if (damageOrdi >= 30) {
                        ordiStars5.style.display = 'none';
                        ordiStars4.style.display = 'none';
                        ordiStars3.style.display = 'none';
                    } 
                    if (damageOrdi >= 40) {
                        ordiStars5.style.display = 'none';
                        ordiStars4.style.display = 'none';
                        ordiStars3.style.display = 'none';
                        ordiStars2.style.display = 'none';
                    } 
                    if (damageOrdi >= 50) {
                        menu.style.display = 'none';
                        game.style.display = 'none';
                        finisherCJ.style.display = 'flex';
                    }  
                    break;
                case 20:
                    damageOrdi += 20;
                    if (damageOrdi >= 10) {
                        ordiStars5.style.display = 'none';
                    } 
                    if (damageOrdi >= 20) {
                        ordiStars5.style.display = 'none';
                        ordiStars4.style.display = 'none';
                    }
                    if (damageOrdi >= 30) {
                        ordiStars5.style.display = 'none';
                        ordiStars4.style.display = 'none';
                        ordiStars3.style.display = 'none';
                    } 
                    if (damageOrdi >= 40) {
                        ordiStars5.style.display = 'none';
                        ordiStars4.style.display = 'none';
                        ordiStars3.style.display = 'none';
                        ordiStars2.style.display = 'none';
                    } 
                    if (damageOrdi >= 50) {
                        menu.style.display = 'none';
                        game.style.display = 'none';
                        finisherCJ.style.display = 'flex';
                    }  
                    break;
                default:
                    break;
            }
        }

        // Fonction pour simuler le tour de l'ordinateur
        function computerTurn() {
            function choisirValeurAleatoire() {
                let valeursPossibles = [5, 10, 15];
                let choixAleatoire = valeursPossibles[Math.floor(Math.random() * valeursPossibles.length)];
                return choixAleatoire;
            }
            let resultat = choisirValeurAleatoire();
            if (resultat == 5) {
                damageUser = damageUser + 5;
                if (damageUser >= 10) {
                    userStars5.style.display = 'none';
                } if (damageUser >= 20) {
                    userStars5.style.display = 'none';
                    userStars4.style.display = 'none';
                } if (damageUser >= 30) {
                    userStars5.style.display = 'none';
                    userStars4.style.display = 'none';
                    userStars3.style.display = 'none';
                } if (damageUser >= 40) {
                    userStars5.style.display = 'none';
                    userStars4.style.display = 'none';
                    userStars3.style.display = 'none';
                    userStars2.style.display = 'none';
                } if (damageUser >= 50) {
                    menu.style.display = 'none';
                    game.style.display = 'none';
                    finisherCJ.style.display = 'flex';
                }  
            }
            if (resultat == 10) {
                damageUser = damageUser + 10;
                if (damageUser >= 10) {
                    userStars5.style.display = 'none';
                } if (damageUser >= 20) {
                    userStars5.style.display = 'none';
                    userStars4.style.display = 'none';
                } if (damageUser >= 30) {
                    userStars5.style.display = 'none';
                    userStars4.style.display = 'none';
                    userStars3.style.display = 'none';
                } if (damageUser >= 40) {
                    userStars5.style.display = 'none';
                    userStars4.style.display = 'none';
                    userStars3.style.display = 'none';
                    userStars2.style.display = 'none';
                } if (damageUser >= 50) {
                    menu.style.display = 'none';
                    game.style.display = 'none';
                    finisherCJ.style.display = 'flex';
                }  
            }
            if (resultat == 15) {
                damageUser = damageUser + 15
                if (damageUser >= 10) {
                    userStars5.style.display = 'none';
                } if (damageUser >= 20) {
                    userStars5.style.display = 'none';
                    userStars4.style.display = 'none';
                } if (damageUser >= 30) {
                    userStars5.style.display = 'none';
                    userStars4.style.display = 'none';
                    userStars3.style.display = 'none';
                } if (damageUser >= 40) {
                    userStars5.style.display = 'none';
                    userStars4.style.display = 'none';
                    userStars3.style.display = 'none';
                    userStars2.style.display = 'none';
                } if (damageUser >= 50) {
                    menu.style.display = 'none';
                    game.style.display = 'none';
                    finisherCJ.style.display = 'flex';
                }  
            }
        }

        attack1.addEventListener('click', () => {
            if (isUserTurn) {
                updateStars(5);
                performTurn();
            }
        });
        

        attack2.addEventListener('click', () => {
            if (isUserTurn) {
                updateStars(10);
                performTurn();
            }
        });
        

        attack3.addEventListener('click', () => {
            if (isUserTurn) {
                updateStars(15);
                performTurn();
            }
        });
        
        attack4.addEventListener('click', () => {
            if (isUserTurn) {
                updateStars(20);
                performTurn();
            }
        });
    }
});




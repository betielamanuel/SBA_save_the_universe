class Ship {

    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    isDestroyed() {
        return this.hull <= 0;
    }

    attack(targetShip){
        if(Math.random() >= this.accuracy) { 
            console.log("Attacked successfully!")
            targetShip.hull -= this.firepower; 
        } 
        else { 
            console.log('You missed!') 
        }
    }
};

class AlienAssembly {
    constructor() {
    this.alienShips = [];
    }

    createAlienShip() {
    const hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
    const firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
    const accuracy = Math.random() * (.8 - .6 + 1) + .6;

    const newAlienShip = new Ship(hull, firepower, accuracy);
    this.alienShips.push(newAlienShip);
    return newAlienShip;
    }
};

const USS_AssemblyShip = new Ship(20, 5, 0.7);
const alienAssembly = new AlienAssembly();
const alienShips = [];

for (let i = 0; i < 6; i++){
    alienShips.push(alienAssembly.createAlienShip());
};

// alienShipsIndex = Math.floor(Math.random() * 5);
// console.log(USS_AssemblyShip.attack(alienShips[0]));

//console.log(alienShips[0].isDestroyed());
//console.log(USS_AssemblyShip.isDestroyed());
// function startGame (alien, captain){
//     while(alien.isDestroyed) {

//     }

function startGame(alien, captain) {
    console.log("Engage, Captain! Initiate the attack!");
    captain.attack(alien);

    if (alien.isDestroyed()) {
        console.log("Congratulations, Captain! alien ship is destroyed and Victory is yours!");
    } else if(captain.isDestroyed()){
        console.log("Defeat, Captain. Your ship is destroyed. You lost the battle!");
    } else{
        console.log("Warning, Captain! Incoming alien attack!")
        alien.attack(captain);
    }
}

startGame(alienShips[0], USS_AssemblyShip);

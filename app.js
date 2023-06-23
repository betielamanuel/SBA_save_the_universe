// Define a parent Ship class

class Ship {
//parent class will have three properties

    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

//parent class will have these methods

    // method to check if the ship is destroyed
    isDestroyed() {
        return this.hull <= 0;
    }

    // method to calculate if the ship hits its target or misses it
    hitsTarget(){
        return Math.random() >= this.accuracy; 
    }

    // method to attack a target ship
    attack(targetShip){
        if(this.hitsTarget()) { 
            targetShip.hull -= this.firepower; 
            console.log("Attacked successfully!")
        } 
        else { 
            console.log('You missed!') 
        }
    }
}

// Define a child sub-class (USS Assembly)

class EarthShip extends Ship {
    constructor(){
        super(20, 5, 0.7);
    }
}

// Define a child sub-class (AlienShip)

class AlienShip extends Ship {
    constructor() {
        super (
            Math.floor(Math.random() * 4), // hull value
            Math.floor(Math.random() * 3) + 2, // firepower value
            Math.random() * 0.2 + 0.6 //accuracy value
        )
    }
}
// create instance of EarthShip and AlienShip

const playerShip = new EarthShip();
const alienShip = new AlienShip();
// create a function to start the game

function startGame(playerShip, alienShip) {
    while(!alienShip.isDestroyed() && !playerShip.isDestroyed) {
        console.log("Engage, Captain! Initiate the attack!");
        playerShip.attack(alienShip)

        if(alienShip.isDestroyed()) {
            console.log("Congratulations, Captain! alien ship is destroyed and Victory is yours!");
            break;
        } else {
            console.log("Warning, Captain! Incoming alien attack!")
            alienShip.attack(playerShip);

            if(playerShip.isDestroyed()) {
                console.log("Defeat, Captain. Your ship is destroyed. You lost the battle!");
                break;
            }
        }
    }
}

console.log(startGame(playerShip, alienShip));
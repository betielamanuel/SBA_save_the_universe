**game logic explained**

- One parent ship class
- one alien ship sub-class
- one uss assembly sub-class
- generate 6 alien ship with random unique property value
- parent class have the following properties - that will be shared with the sub classes
    
    - hull - main body of the ship - if there are 0 hull, that means the ship is destroyed
        * create a method `destroy` that aims to decrease hull

    - firepower
        * represents the amount of damage done to the hull
        of the target ship with a successful hit.
        * when an attack is successful, the firepower value of the attacking ship is
        substracted from the `hull` property of the target ship.
        * amount of damage - how do i measure this
            * the amount of damage inflicted by a successful hit is determined
            by the `firepower` value of the attacking ship.
            * When an attack is successful, the `firepower` value of the attacking ship
            is substracted from the `hull` property of the target ship.
        * hull of target - 0 - the ship is destroyed
        
    - accuracy

        * the chance between 0 and 1 that the ship will hit its target
        * the accuracy of an uss ship is 0.7 and the attack is initiated, the game
        * will generate a random number between 0 and 1. 
            * if the generated number is less than  0.7 the attack is will miss
            * if the generated number is greater than 0.7 the attack is considered 
             successful and will hit the target.
        * An attack is considered successful if the generated random number for 
        accuracy is greater than the ship's accuracy value
        

**implementation**

&#9744;  *create a parent Ship class*

* parent class will have three properties 

            constructor (hull, firepower, accuracy) {
                this.hull = hull;
                this.firepower = firepower;
                this.accuracy = accuracy;
            }

* parent class will have these methods
    * method to check if the ship is destroyed

    * method to attack a target ship 
        - Math.random() - generates a random floating number between 0(inclusive) and 1(exclusive)
        - If the randomly generated number is greater than or equal to the ship's accuracy
                
                if (math.random () >= uss.accuracy){
                    console.log(`you hit your target`)
                    }

    * method to attack a target ship
        - this method calculates if the ship hits its target or misses it 
        - passing *targetShip* as an argument, allows the method to access and modify the the property of target ship
        - if the attack is successful the hull (hitpoints) of the target ship is reuced by the value of *firepower*
        - when the condition within the `if ` statement is false - it means the that the attack is missed.
        - then the code within the `else` statement is executed, no damage is applied to the target ship, proceed game.
            - e.g. if the accuracy generated is less than the ship's(either alien or uss)
                the attack misses the target. so this will give the opposing ship a chance to attack
            - checks the hit method  
                - if accuracy passed then target ship is attacked.

&#9744;  *create a uss asembly ship sub-class of Ship class*

* Define the EarthShip sub-class by using the following property values
 
  * `hull` - 20
  * `firepower` - 5
  * `accuracy` - 0.7

        class EarthShip extends Ship {
            constructor(){
                super(20, 5, 0.7);
            }
        }

&#9744;  *create an alien ship sub-class of Ship class*
* The alien ships should each have the following range of properties, detemined randomly

    * `hull` - between 3 and 6
        - generate a number between 3 and 6 using Math.random() built in function
            ```

            Math.floor(Math.random() * 4) + 3;
            
    * `firepower` - between 2 and 4
        - generate a number between 2 and 4 using Math.random() built in function
            ```

            Math.floor(Math.random() * 3) + 2

    * `accuracy` - between .6 and .8
        - generate a number between 0.6 and 0.8 using Math.random() built in function
            ```

                Math.random() * 0.2 + 0.6

* Define the AlienShip sub-class by passing the property values
    ```
    class AlienShip extend Ship {
        constructor(){
            super(
                Math.floor(Math.random() * 4),
                Math.floor(Math.random() * 3) + 2,
                Math.random() * 0.2 + 0.6
            )
        }
    };

&#9744;  *create instance of EarthShip and AlienShip*
    
    const playerShip = new EarthShip();
    const alienShip = new AlienShip();

* but we need to generate 6 AlienShip that will inherit the sub-class properties

&#9744;  *create a function to start the game*

    function startGame(){

        };

- the function will check for the following condition

    - the function `startGame` passes two parameters, playerShip and alienShip which are the instances of EarthShip and AlienShip
    each with unique property values
    
            function startGame(playerShip, alienShip){

                }

    - As long as there are Alien ships and Earth ships remaining, both ships continue
    to attack each other.

            while (!alienShip.isDestroyed() && !playerShip.isDestroyed){
                console.log("Engage, Captain! Initiate the attack!")
                playerShip.attack(alienShip);
            }

    - within the `while` loop set the if condition
        
        - if the alienship is destroyed 

                if (alienShip.isDestroyed()) {
                    console.log("Congratulations, Captain! alien ship is destroyed and Victory is yours!");
                    break;
                }

        - if the alienship is not destroyed, the alienship attacks playership, if player ships is destroyed, game over!

                else {
                    console.log("Warning, Captain! Incoming alien attack!")
                    alienShip.attack(playerShip);

                    if (assemblyShip.isDestroyed()) {
                        console.log("Defeat, Captain. Your ship is destroyed. You lost the battle!");
                        break;
                    }
                }


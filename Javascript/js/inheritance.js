

class Animal{
    constructor(type, modeOfMovement){
        this.type = type
        this.modeOfMovement = modeOfMovement
    }
    produceSound(){
        console.log('General animal sound heard');
    }
 }
// class Dog extends Animals{
//     constructor(type, modeOfMovement,breed){
//         super(type,modeOfMovement);
//         this.breed = breed;
//     }
//     // overriding
//     produceSound(){
//         console.log('Barking')
//     }
// }

// let newAnimal = new Animal('Mammal', 'Walks')
// newAnimal.produceSound()

// let newDog = new Dog('Mammal','Walks','Husky')
// newDog.produceSound()

class Cat extends Animal{
    constructor(type, modeOfMovement,breed, furColour){
        super(type,modeOfMovement);
        this.breed = breed;
        this.furColour = furColour;
    }
    // overriding
    produceSound(){
        console.log('Meows')
    }
}

let newCat = new Cat('Mammal','Walks','Munchkin','Orange')
newCat.produceSound()
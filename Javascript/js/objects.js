{
    const person1 = {
        firstName: 'Stephen',
        lastName: 'Njoroge',
        age: 99+1,
        footballTeam: 'Manchester United'
    }
    
    const person2 = {
        firstName: 'Erick',
        lastName: 'Omondi',
        age: 99+1,
        footballTeam: 'Loserfools',
    
    }
    console.log( person1.footballTeam);
    console.log(person2["footballTeam"]);
}

const person3 = {
    fname: "John",
    lname: "Doe",
    yob: 2005,
    fullname: function(){
        console.log(this.fname + " " + this.lname);
    },
     age: function(){
        return 2024 - this.yob;
     }
    }
    person3.fname
    person3.fullname()
    console.log(person3.age());

// const person = {
//     name: 'Stephen',
//     age: '99+',
//     profession: 'Centurion',
//     birthPlace: {
//         continent:'Mama Africa',
//         country: 'Kenya',
//         location:'Mombasa',
//         language:'Swahili',
//         skills:'Bow and Arrow'

//     }
// }

//  let newPerson = {...person, name:'Alexander The Great', age:'150+',birthPlace: {...person.birthPlace, continent:'Europe', country:'Italy', location:'Roma',language:'Italian', skills:{...person.birthPlace,skills:{officialSkills:'Politics and Showmanship', unOfficialSkills:'Partying like there is no tomorrow'},bestAt:'Demonstrating Leadership'}}, bestKnownFor:'Conquering a third of the world'}

//  console.log(person)
//  console.log(newPerson)


// console.log(person)
// console.log(newPerson)

const country = {
    name: 'Kenya',
    population: '42M',
    continent: 'Africa',
    more:{
        climate:'Hot and Wet',
        level: 'Developing',

    }

}
// Clone the Object, Change the name to Canada, population to 50M, continent to North America, language to French, level to Developed and climate to Cold and Wet 

let newCountry = {...country, name:'Canada', population:'50M',continent:'North America', more:{...country.more, climate:'Cold and Wet',level: 'Developed',language:'French'}}

console.log(country)
console.log(newCountry)


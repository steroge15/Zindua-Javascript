
async function getData(){
    let img = document.getElementById('dogimg')
    let response = await fetch('https://dog.ceo/api/breeds/image/random')
    let data = await response.json()
    console.log(data)
    img.src = data.message
}

const button = document.getElementById('myButton')
button.addEventListener('click', getData)



async function getJoke(){
    let myPar = document.getElementById('myParagraph')
    let response = await fetch('https://official-joke-api.appspot.com/random_joke')
    let data = await response.json()
    console.log(data)
    
}

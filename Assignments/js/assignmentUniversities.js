// async function getUniversities(){
//     // let myCountry = document.getElementById('country')
//     let response = await fetch ('http://universities.hipolabs.com/search?country=kenya')
//     let data = await response.json()
//     console.log(data)

//     data.forEach(element => {
        
//     });

    
// }

// getUniversities()




{
    let button = document.getElementById("myButton")
    async function getUniversities(){
            let country = document.getElementById("myInput").value
            let response = await fetch("http://universities.hipolabs.com/search?country=" + country)
            let countryData = await response.json()
            const countryContainer = document.getElementById("countryContent");
            countryContainer.innerHTML = ''
            for( m = 0; m < 30; m++){
                let newDiv = document.createElement("div")
                newDiv.innerHTML = `<ul>
                <li>${countryData[m].name}</li>
                <li>${countryData[m].country}</li>
                <li>${countryData[m]['state-province']}</li>
                <li><a href="${countryData[m].web_pages}" target="_blank">${countryData[m].web_pages}</a></li>
            </ul>`
            newDiv.style.margin= "1rem";
            newDiv.style.borderRadius = "2rem";
            newDiv.style.backgroundColor = "lightgrey";
            countryContainer.appendChild(newDiv)
            }
    }
    getUniversities()
    button.addEventListener("click", getUniversities)
}
async function getuniversities(){
    try{
    country=document.getElementById("myinput").value
    let resp=await fetch(" http://universities.hipolabs.com/search?country="+country)
    let data =  await resp.json()
    const div = document.getElementById("postcontainer");
    console.log(data)
    data.forEach(post => {
        const newdiv = document.createElement("div")
        newdiv.classList.add("post");
        const name = document.createElement("h2")
        name.classList.add("titlesclass")
        name.innerHTML = post.name;
        const country = document.createElement("p");
        country.classList.add("countryclass")
        country.innerHTML = "country:"+ post.country;
        const state = document.createElement("p");
        state.innerHTML = "state:"+post["state-province"];
        const link = document.createElement("a");
        link.href=post.web_pages[0];
        link.innerHTML = "webpage:"+post["web_pages"]
        newdiv.appendChild(name)
        newdiv.appendChild(country)
        newdiv.appendChild(state)
        newdiv.appendChild(link)
        div.appendChild(newdiv)
    });
}catch(error) {
    console.error('error fetching and displaying posts:', error.message);
}
}
const  button=document.getElementById("mybutton")
     button.addEventListener("click",getuniversities)

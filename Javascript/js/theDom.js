// {
//     const myPar = document.getElementById("some_id")
//     myPar.innerHTML = `<h1 style="font-size: 4em; color: red;">Javascript is freaking hard but interesting!</h1>`


//     // const myPar1 = document.getElementById("some_id")
//     // myPar.innerHTML = `<h2 style="font-size: 4em; color: red;">JAVASCRIPT IS FREAKING HARD BUT INTERESTING!</h2>`
//     {
       
//     const myImage = document.getElementById('image1');
//      myImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PO_8AEswBgj0AR8s2VjIXp7S39ezvkFjvw&s'

//      console.log(myPar);

//      const myPar2 = document.getElementsByTagName("p");
//      console.log(myPar2);

//      const elementsClass = document.getElementsByClassName("example_class");
//     console.log(elementsClass);

//     for (let i= 0; i <elementsClass.length; i++){
//         console.log(elementsClass[i]);
//     }
//     const elementsByQuery = document.querySelectorAll("p.example_class");
//      console.log(elementsByQuery);

//     function changeStyle(){
//         const thePar = document.getElementById("par2");
//         thePar.style.color = 'yellow';

//     }
//  }

// }


const myH1=document.getElementById("myH1")
    const button=document.getElementById("myButton")
    
    let isDefault = true;
    function changestyleofH1(){
        if (isDefault){
        myH1.className="headingstyle"
        isDefault = false
    
    } else {
        myH1.className="headingstyle"
        isDefault = true
    }
    
    }
{
    const myPar = document.getElementsByTagName('p');

    console.log(myPar.length);


    function manipulatePTags(){
        for ( let i = 0; i<myPar.length;i++){
            myPar[i].innerText = "Paragraph " + i
        }
    }


}
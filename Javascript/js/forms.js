{
    function validateInput(){
        let myInput = document.getElementById('numb');

        let user_value = myInput.value;

        if( isNaN (user_value) || (user_value < 1) ||(user_value >10) ){
            alert ('wrong Input');

        } else{
            alert('correct');
        }


    }

function validateInput(){
    let myInput = document.getElementById("numb");

    let user_value = myInput.value

    if (isNaN (user_value) || !( user_value >= 1 && user_value <= 10)){
        alert ("Wrong Input");

    } else {
        alert ( 'Correct');
    }

}

function changeToUpperCase(){
    let myInput = document.getElementById('numb')

    myInput.value = myInput.value.toUpperCase()


}



}
let sample_pass = "dan1234#%"
sample_numbers = "0123456789"
sample_special = "#/|\\*&%$@.`~!^:;?"
sample_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
sample_lowercase = "abcdefghijklmonpqrstuvwxyz"
const button = document.getElementById("myButton")
function checkPassword(password, regular){
    for(i = 0; i<regular.length; i++){
        if(password.includes(regular[i])){
            return true
        }
    }
    return false;
}
let input = document.getElementById("myInput")
function validateInpiut(){
    password = input.value
    let par = document.getElementById("message")
    if(checkPassword(password, sample_numbers) && checkPassword(password, sample_special) && checkPassword(password, sample_uppercase) && checkPassword(password, sample_lowercase) && password.length >=8){
        par.innerHTML = `<h3>Correct</h3>`
        input.style.borderColor = "green"
    }else if(!checkPassword(password, sample_numbers)){
        par.innerHTML = `<h3>Lack numbers</h3>`
        input.style.borderColor = "red"
    }else if(!checkPassword(password, sample_special)){
        par.innerHTML = `<h3>Lack special</h3>`
        input.style.borderColor = "red"
    }else if(!checkPassword(password, sample_lowercase)){
        par.innerHTML = `<h3>Lack lowecase</h3>`
        input.style.borderColor = "red"
    }else if(!checkPassword(password, sample_uppercase)){
        par.innerHTML = `<h3>Lack uppercase</h3>`
        input.style.borderColor = "red"
    }else if(password.length < 8){
        par.innerHTML = `<h3>Should be 8 or more characters</h3>`
        input.style.borderColor = "red"
    }else{
        par.innerHTML = `<h3>Incorrect</h3>`
        input.style.borderColor = "red"
    }
}
button.addEventListener("click", validateInpiut)
input.addEventListener("input", validateInput)
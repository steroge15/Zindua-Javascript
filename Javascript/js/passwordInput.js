

// button.addEventListener('click', )


// document.addEventListener('click', function() ){
//     let buttonsContainer = document.getElementById('buttons-container');
//     let page = document.getElementById('page');
//     let previousColor = null}




// function displayMessage() {
//     document.getElementById("heading").textContent = "Hello DOM";
//   }
//   const specialCharacters = ''

// let sample_password = 'dan12345!@#';
//     sample_numbers = '0123456789';
//     sample_character = '!@~#$%^&*()_+}{|":?><';

//     function checkPassword (password, regular) {
//         for ( i = 0; i < regular.length; i++) {
//             if (password.includes(regular))
//         }
//     }


// {
//     let button = document.getElementById("submitBtn")
//     sampleNumbers ="0123456789"
//     sampleSpecial ="#\\|*&%^$£"
//     function checkpassword(password, regular) {
//         for(i =0;i<regular.length;i++){
//             if(password.includes(regular[i])){
//                 return true
//             }
//         }
//         return false
//     }
//     function validatePassword(){
//         let password = document.getElementById("password").value
//         if(checkpassword(password, sampleNumbers) && checkpassword(password, sampleSpecial)){
//             alert("Correct")
//         }else{
//             alert("Incorrect")
//         }
//     }
//     button.addEventListener('click', validatePassword)
// }






// In this modified version:

// I've added a minLength variable to specify the minimum length required for the password.
// After getting the password, the function checks if its length is at least minLength. If not, it alerts the user.
// It checks if the password contains at least one number and at least one special character using the checkPassword function.
// It also checks if the password contains at least one uppercase letter by comparing the password with its lowercase version. If they are the same, it means there are no uppercase letters.
// If all conditions are met, it alerts the user that the password is strong and valid.


const button = document.getElementById("submitBtn");
const sampleNumbers = "0123456789";
const sampleSpecial = "#\\|*&%^$£";

function checkPassword(password, regular) {
    for (let i = 0; i < regular.length; i++) {
        if (password.includes(regular[i])) {
            return true;
        }
    }
    return false;
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const minLength = 8; // Minimum password length

    if (password.length < minLength) {
        alert("Password must be at least " + minLength + " characters long");
        return;
    }

    if (!checkPassword(password, sampleNumbers)) {
        alert("Password must contain at least one number");
        return;
    }

    if (!checkPassword(password, sampleSpecial)) {
        alert("Password must contain at least one special character");
        return;
    }

    if (password === password.toLowerCase()) {
        alert("Password must contain at least one uppercase letter");
        return;
    }

    alert("Password is strong and valid!");
}

button.addEventListener('click', validatePassword);

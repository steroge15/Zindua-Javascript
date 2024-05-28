//     // hover over the button; change the h1 to green
//     // when you leave the button, mouseout: change the h1 back to black
//     // use addEventListeners 

// const button = document.getElementById('someButton'); 

// // Toggling Function using if statement
// let bodyIsDefault = true;
// function changeBackground() {
//     // document.body.style.backgroundColor = 'violet';
//     if (bodyIsDefault){
//         document.body.style.backgroundColor = 'Yellow';
//         bodyIsDefault = false
//     } else {
//         document.body.style.backgroundColor = 'white';
//         bodyIsDefault = true
//     }
// }

// // Toggling Function using switch statement
// function changeBackground(){
//     switch(bodyIsDefault){
//         case true:
//             document.body.style.backgroundColor = 'yellow';
//             bodyIsDefault = false
//             break;
//         default:
//             document.body.style.backgroundColor= 'white';
//             bodyIsDefault = true
//             break;    
//     }
// }



// button.addEventListener('click', changeBackground);

// const header = document.getElementById('someHeader'); 

// function hoverOverMouse() {
//     header.style.backgroundColor = 'green'; 
// }

// function unHoverOverMouse() {
//     header.style.backgroundColor = 'black'; 
// }

// header.addEventListener('mouseover', hoverOverMouse); 
// header.addEventListener('mouseout', unHoverOverMouse); 


// const chooserButton = document.getElementById('chooser');

// function chooseBackgroundColor(user_color){
//     document.body.style.backgroundColor = user_color;

//   chooserButton.addEventListener('click', function(){
//     let userInput = prompt ('Give me your choice of color')
//     chooseBackgroundColor(userInput)
//   })  
// }


document.addEventListener('DOMContentLoaded', function() {
    let buttonsContainer = document.getElementById('buttons-container');
    let page = document.getElementById('page');
    let previousColor = null;

    buttonsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('button')) {
            let buttonColor = event.target.style.backgroundColor;
            if (buttonColor !== '') {
                previousColor = page.style.backgroundColor;
                page.style.backgroundColor = buttonColor;
                console.log('Background color changed to ' + buttonColor);
            }
        }
    });

    page.addEventListener('click', function() {
        console.log('Page clicked');
    });

    let undoButton = document.createElement('button');
    undoButton.textContent = 'Undo';
    undoButton.classList.add('button');
    undoButton.addEventListener('click', function() {
        if (previousColor !== null) {
            page.style.backgroundColor = previousColor;
            console.log('Background color reverted to ' + previousColor);
            previousColor = null;
        } else {
            console.log('Nothing to undo');
        }
    });
    buttonsContainer.appendChild(undoButton);
});


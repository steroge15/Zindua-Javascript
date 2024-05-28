



let a = 17;
switch(a){
    case 3:
        console.log( 'a is three');
        break;
    case 5:
        console.log( 'a is five');
        break;
    case 10:
        console.log( 'a is a ten');
        break;
    default:
        console.log( 'value is not found');
}




        
let day1 = 3;
switch (day1) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}




let fruit = 'Banana';

switch (fruit) {
  case 'Apple':
    console.log('Apple is delicious!');
    break;
  case 'Banana':
    console.log('Banana is tasty too!');
    break;
  case 'Orange':
    console.log('Oranges are juicy!');
    break;
  default:
    console.log('Unknown fruit');
}




// ****************************************INCORRECT VERSION********************************
// let day = 3;

// switch (day) {
//   case 1 = 'Monday':
//   case 2 = 'Tuesday':
//   case 3 = 'Wednesday':
//   case 4 = 'Thursday':
//   case 5 = 'Friday':
//     console.log('Weekday');
//     break;
//   case 6:
//   case 7:
//     console.log('Weekend');
//     break;
//   default:
//     console.log('Invalid day');
// }


// ****************CORRECTED VERSION*******************************

let day = 3;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
  case 7:
    console.log('Weekend');
    break;
  default:
    console.log('Invalid day');
}



let option = 2;

switch (option) {
  case 1:
    console.log('Option 1 selected');
  case 2:
    console.log('Option 2 selected');
  case 3:
    console.log('Option 3 selected');
  default:
    console.log('Invalid option');
}


let grade = 'B';

switch (grade) {
  default:
    console.log('Unknown grade');
    break;
  case 'A':
    console.log('Excellent!');
    break;
  case 'B':
    console.log('Good job!');
    break;
  case 'C':
    console.log('Passed!');
    break;
}








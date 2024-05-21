
let greaterNum = 1001;

if ( greaterNum <= 100 ){
    console.log( 'This number is less than 100');
} else if ( greaterNum < 250 ){
    console.log( 'This number is greater than 100 but less than 250');
} else if ( greaterNum < 500 ){
    console.log( 'This number is greater than 250 but less than 500' );
} else if ( greaterNum < 750 ){
    console.log( 'This number is greater than 500 but less than 750' );
} else {
    console.log( 'This number is greater than 750 but less than 1000');
}
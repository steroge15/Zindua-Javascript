


// function fibonacci(n) {
//     let sequence = [];
//     if (n >= 1) {
//         sequence.push(0);
//     }
//     if (n >= 2) {
//         sequence.push(1);
//     }
//     for (let i = 2; i < n; i++) {
//         sequence.push(sequence[i - 1] + sequence[i - 2]);
//     }
//     return sequence;
// }

// // Example usage:
// let n = 15;
// var fibSequence = fibonacci(n);
// console.log(fibSequence); // Output: [0, 1, 1, 2, 3, 5]




function fibonacci1 (n) {
    if (n == 0 ){
        return [];
    } if ( n == 1 )
        return [0,1];
    } if (n == 2 ){
        for ( i = 2; i < n; i++ ) {
            let n = [0,i]
            last_element == i-1;
            second_last_element == i-2;
            number_to_be_pushed == last_element + second_last_element;

        }
        return number_to_be_pushed

    }console.log( fibonacci1(10));


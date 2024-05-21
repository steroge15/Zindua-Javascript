{
    
    let x = 10;
while ( x >= 0){
    console.log(x);

    x--
}

}




{
    const arr = [76,89,23,45,67,98,79];
    let x = 0;

    while ( x < arr.length) {
        console.log(arr[x]);
        x++
    }
    console.log(x);

    function getSum(arr){
        sum = 0;
        while ( x < arr.length){
        sum = sum + arr[x];
        
        x++
    }
    return sum;
}
    console.log(getSum(arr));

}
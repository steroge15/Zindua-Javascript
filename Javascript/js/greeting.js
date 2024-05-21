{
    let greeting;
    let hour = 27;
    if ( hour < 3 ){
     greeting = "Good Night";
    }else if (hour < 12){
     greeting = "Good morning";
    }else if(hour < 16){
     greeting = "Good afternoon";
    }else{
     greeting = "Good evening";
    }
    console.log(greeting);
 }
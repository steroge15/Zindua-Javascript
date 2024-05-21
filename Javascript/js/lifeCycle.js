    
    //0 - 3 child  should be at home
    // 3 - 6 should be kindergarten
    // 6 - 10 lower primary
    // 10 - 14 upper primary
    // 15 - 18 high school
    // 18 - 24 campus
    // 24 - 60 - employed
    // 60 120 retired

    let age = 23;

    if ( age <= 3 ){
        console.log('Child should be at Home');
    } else if ( age <= 6 ){
        console.log('Child should be in Kindergarten');
    }else if ( age <= 10 ){
        console.log('Child should be in Lower Primary School');
    } else if ( age <= 14){
        console.log('Child should be in Upper Primary school');
    } else if ( age <= 18){
        console.log('Student should be in High School');
    } else if ( age <= 24){
        console.log('Student should be in Campus');
    } else if ( age <= 60){
        console.log('The Adult should be making money either by being employed, in business and/or both');
    } else {
        console.log('This person should be retired');
    }
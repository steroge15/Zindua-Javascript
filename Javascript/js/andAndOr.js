
//nested if statement
let age = 66;
let height = 170
gender = "male";
prof = 'lawyer';
{
    if ( age >= 18 ){
        if(gender == "male"){
            console.log("Allowed")
        }else{
            console.log("You are not male")
        }
    }else{
        console.log("You are not old enough");
    }
}
//convert this to and or
// (age is 18) and (gender is male or female)
// developers and engineers= 10
// age > 25 lawyers and doctors = 9
// young professional between 20 and 25 -> 1
// retired professionals > 15
{
    if ( (age >= 18) && ( (prof == "developer") || (prof == "engineer") ) ){
        console.log("Go to number 10")
    }else if ( (age > 25) && ( (prof == "lawyer") || prof == "doctor") ){
        console.log("Go to number 9")
    }else if ( (age >= 20) && (age <= 25) ) {
        console.log("Go to number 1")
    }else if ((age > 65)){
        console.log("Go to number 15")
    }else{
        console.log("Go to School");
    }
}
//
{
    let maths = "pass";
    let english = "fail";
    let chemistry = "fail";
    let physics = "pass";
    let kiswahili = "fail";

    // computer science: maths or pass one of the languages
    // journlism: pass maths, english and kiswahili
    // engineer: maths, one of the languages and pass physics\
    // medicine: pass maths, pass one of the languages and pass chemistry
    //what happens if someone passes all subjects -> output of: you can chooose a course of your choice.
    // you are not able to do any course


if ( ( maths == 'pass' && english == 'pass' && chemistry == 'pass' && physics == 'pass' && kiswahili == 'pass')){
    console.log( 'You can choose a course of your choice');
} else if ( ( maths == 'pass') && ( ( english == 'pass' || kiswahili == 'pass') )){
    console.log( 'You can take the Computer Science course');
} else if ( ( maths == 'pass' && english == 'pass' && kiswahili == 'pass') ){
    console.log( 'You can take the Journalism Course');
} else if ( ( maths == 'pass' && physics == 'pass' && ( english == 'pass' || kiswahili == 'pass'))){
    console.log( 'You can take the Engineering Course');
} else if ( ( maths == 'pass') && chemistry == 'pass' && ( english == 'pass' || kiswahili == 'pass')){
    console.log( 'You can take the Medicine Course');}
 else {
    console.log( 'You are not able to do any course');
}

}


{
    let maths = "pass";
    let english = "fail";
    let chemistry = "fail";
    let physics = "pass";
    let kiswahili = "fail";
    let history = "pass"
    let geog = "pass"
    // git hub
    // takeaway assignment
    // languages: english and kiswahili
    //humanities: history and geog
    // computer science: maths and pass one of the languages and pass either physics or chemistry
    // journlism: pass maths, english and kiswahili and one of the humanities
    // engineer: maths, one of the languages and pass physics and chemistry and one of the humanities\
    // medicine: pass maths, pass one of the languages and pass chemistry and pass one of the humanities
    //law: pass maths, pass wither physics or chemistry and pass both humanities
    //what happens if someone passes all subjects -> output of: you can chooose a course of your choice.
    // you are not able to do any course
}







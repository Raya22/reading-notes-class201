'use strict';

let user=prompt("what is your name ?");
alert("welcome "+user+" nice to have you here ");
console.log("welcome "+user+" nice to have you here ");

let gender = prompt('Before you enter , can you guess my gender (male/female)?\n type one of them');
console.log("'Before you enter , can you guess my gender (male/female)?\n type one of them'");
switch(gender)
{
    case "male"||"Male"||"MALE" :
        alert("No , I am a female");
        break;

        case "female"||"Female"||"FEMALE" :
            alert("yes , that's right and my name is Raya");
            break;

            default:
                alert("you input something wrong");
}
console.log(gender);

let nation =prompt("do you think that I am arabian ?");
console.log("do you think that I am arabian ?");

switch(nation)
{
    case "yes"||"Yes"||"Yes" :
        alert("that's right , I am from Jordan");
        console.log("that's right , I am from Jordan");
        break;

        case "no"||"NO"||"No" :
            alert("no , I am Arabian");
            console("no , I am Arabian");
            break;

            default :
            alert("I think you typed something wrong try to answer with (yes or no)");
            prompt("do you think that I am arabian ?");
}

/*let study=prompt("do you think I am a student ?");
if (studt ==="yes"||"Yes"||"Yes") {
    alert("no , I have Graduated two years ago ");
    
} else if ("no"||"NO"||"No") {

    alert("That's right, I have Graduated two years ago ");
} else {
    alert("I think you typed something wrong try to answer with (yes or no)");   
}

let conf= confirm("do you like ");*/

let conf = confirm("do you want to see the page ?");
if (conf) {
    alert("welcome again ")
    
} else {
    alert("it is ok , maybe another time ");
    
}













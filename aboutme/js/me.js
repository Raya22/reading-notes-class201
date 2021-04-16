'use strict';



let counter=0;

let user=prompt('what is your name ?');
alert('welcome '+user+' nice to have you here in the page ');
//console.log( user);

// eslint-disable-next-line no-unused-vars
function funGender(gender){

  gender = prompt('Before you enter , can you guess my gender (male/female)?\n type one of them').toLowerCase();
  //console.log("'Before you enter , can you guess my gender (male/female)?\n type one of them'");
  switch(gender)
  {
  case 'male' :
  case 'm' :
    alert('No , I am a female');
    break;

  case 'female' :
  case 'f' :
    alert('yes , that\'s right and my name is Raya');
    counter++;
    break;

  default:
    alert('you input something wrong');
  }
//console.log(gender);
}
// eslint-disable-next-line no-unused-vars
let gender;
funGender(gender);


// eslint-disable-next-line no-unused-vars
function funNation(nation) {

  // eslint-disable-next-line no-undef
  nation =prompt('do you think that I am arabian ?').toLowerCase();
  //console.log("do you think that I am arabian ?");

  switch(nation)
  {
  case 'yes' :
  case 'y' :
    alert('that\'s right , I am from Jordan');
    counter++;
    break;

  case 'no' :
  case 'n' :
    alert('no , I am Arabian');
    break;

  default :
    alert('I think you typed something wrong try to answer with (yes or no)');
    prompt('do you think that I am arabian ?');
  }
}
let nation;
funNation(nation);

// eslint-disable-next-line no-unused-vars
function funStudy(){
  // eslint-disable-next-line no-undef
  study=prompt('do you think I am a student ?').toLowerCase();

  // eslint-disable-next-line no-undef
  if (study === 'yes'|| study==='y') {
    alert('no , I have Graduated two years ago ');
  // eslint-disable-next-line no-undef
  } else if (study ==='no'|| study ==='n') {
    alert('That\'s right, I have Graduated two years ago');
    counter++;

  } else {
    alert('I think you typed something wrong try to answer with (yes or no)');
  }
}
let study ;
funStudy(study);

// eslint-disable-next-line no-unused-vars
function funMajor(majour){
  majour= prompt('do you think that I have an experience with IT works ?').toLowerCase();
  if (majour === 'yes'|| majour==='y') {
    alert('That\'s right , I am a computer engineer ');
    counter++;
  } else if (majour ==='no'|| majour ==='n') {
    alert('no ,I am a computer engineer');

  } else {
    alert('I think you typed something wrong try to answer with (yes or no)');
  }
}
// eslint-disable-next-line no-unused-vars
let majour;
funMajor(majour);

// eslint-disable-next-line no-unused-vars
function funTravel(travel){
  travel=prompt('do you think that I love travel ?').toLowerCase();

  if (travel === 'yes'|| travel==='y') {
    alert('yes , I love it so much ');
    counter++;
  } else if (travel ==='no'|| travel ==='n') {
    alert('No, I love travel so much ');


  } else {
    alert('I think you typed something wrong try to answer with (yes or no)');
  }}
let travel;
funTravel(travel);





for(let i=0;i<4;i++)
{
  let num1=prompt('I have a number in my mind  it is even between 1-10 , try to guess and type what is the number');

  if(num1 > 2)
  {
    alert('it\'s too high');
  }
  else if (num1 == 2)
  {
    alert('yeess that\'s right');
    counter++;
    break;
  }
  else {
    alert('it\'s too low');
  }

}



let travelarray = ['Qatar', 'Lebanon', 'Syria' , 'Kuwait' , 'Oman'];
console.log(travelarray);

let arrchoice=prompt('try to guess where I traveled before ').toLowerCase();

  for(let k=0 ; k<5 ;k++){
   
    switch(arrchoice)
    {
    case 'qatar' :
      alert('yes that is right');
      counter++;
      k=5;
      break;
    case 'lebanon':
      alert('yes that is right');
      counter++;
      k=5;
      break;
    case 'syria':
      alert('yes that is right');
      counter++;
      break;
      k=5;
    case 'kuwait':
      alert('yes that is right');
      counter++;
      k=5;
      break;
    case 'oman':
      alert('yes that is right');
      counter++;
      k=5;
      break;
    default:
      arrchoice=prompt('try to guess where I traveled before ').toLowerCase();
  }

}




alert('you answered '+counter+' correct answer out of 7');


let conf = confirm('do you want to see the page ?');
if (conf) {
  alert('welcome again ');
} else {
  alert('it is ok , maybe another time ');
}














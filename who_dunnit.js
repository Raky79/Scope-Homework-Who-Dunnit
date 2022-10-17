//EPISODE 1: 
//Prediction: returns "The murderer is Miss Scarlett"
//Reason : After creating an object, we are declaring a const variable with a function (declareMurderer) in the one 
//^^^we are returning a string + the element we want to get from the object. Next to this we create another const variable 
//^^^(verdict) equal to the previous declareMurderer, to return the result of this function.      


// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   };
  
//   const verdict = declareMurderer();
//   console.log(verdict);
  
  //EPISODE 2: 
  //Prediction: Returns an error, as we are declaring a const variable (const murderer) and we cannot change this object 
  //^^^ as we are trying to do on the line 27, should we wish to be able to change the value of this variable we in this
  //^^^ case we should declare a let variable (let murderer), in this case , the result would be: "The murderer is Mrs.Peacock".

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//EPISODE 3: 
//Prediction: Returns "First Verdict: The murderer is Mrs. Peacock" (on the line 46 we declare a a const variable with a function that 
//^^^ changes the value of the let murderer and on the line 52 we create a variable to call this variable and return 
//^^^this changed value ) / "Second Verdict: The murderer is Professor Plum" (in this case we are not referring to the values inside the
// ^^^ {} in the const declareMurderer variable therefore refers to the variable stored outside (let murderer) ).
// 

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

//EPISODE 4: 
//Prediction: Returns "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard "/"Suspect three is Mrs. Peacock"
//the first string returned is based in the const variable declared in the line 68 inside the one {} the name of the suspectThree is changed,
//^^^therefore, when this is called inside the const suspects, returns the name of the third suspect changed. 
// the second string ("Suspect three is Mrs. Peacock") refers to the let variable created outside the const declareAllSuspects, therefore
//returnes the value that was asigned to the suspectThree originally. 

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

//EPISODE 5: 
//Prediction: Returns: "The weapon is the revolver" // We are changing the object's value weapon by calling the function in the 
//const changeWeapon variable on the line 98 and assigning it a new value ('Revolver'), then, in order to get the string with the relevant 
//^^^ element from the object scenario on the line 100 we declare a const variable verdict equal to the declareWeapon that we have 
// ^^^ created prevously so we can refer to that element , already changed in the previous line.  

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

  //EPISODE 6: 
  //Prediction: Returns: "The murderer is Mrs. White" , we declare a const variable (changeMurderer) to change the original value of the let variable (murderer)
  //^^^, inside this const variable we declare a function to change the name of the murderer twice with variables, but calling at the end 
  // ^^^ the second one plotTwist(); for this reason this last second value will be the one returned when calling the variable changeMurderer(); 
  // ^^^ in the line 126

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//EPISODE 7: 
//Prediction: Returns: "The murderer is Mr. Green" , the let variable (let murderer = 'Colonel Mustard') is only available inside the block, for this reason  
//^^^when we call the const variable changeMurderer on the line 156, returns the first value changed assigned to the murderer 'Mr.Green' and outside the 
//^^^ plotTwist variable   

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//EPISODE 8: 
//Prediction: Returns "The weapon is Candle Stick" // In the const changeScenario we are changing the original room of the scenario object Conservatory to Dining Room
//^^^ then we are declaring a variable with a function and a if loop inside that one (plotTwist) to change the murderer to 'Colonel Mustard' in the case the 
//^^^room is the Dining room and on the line 181 we dclare a new variable with a function and an if loop to change the weapon to 'Candle stick' in the case the murderer
//^^^is the 'Colonel Mustard' , then we call the variable  unexpectedOutcome with 'Colonel Mustard' as an argument and associated to the 'candle stick', and 
//^^^ and  plotTwist('Dinig Room') associated with the 'Colonel Mustard' as well and the 'Candle Stick' weapon. 

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);

//EPISODE 9: 
//Prediction: "The murderer is Professor Plum" // the let variable is only available inside the block therefore the original value assigned in the let murderer 
//^^^variable is the one that prevails. 


let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);


// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let userWord = ''

function initialPrompt() {
  console.log('Lets play some Scrabble!\n')
   userWord = input.question("Enter a word to score: ")
   //let alphabet = /^[A-Za-z]+$/;
   /*while (userWord.split('') !== alphabet){
     userWord = input.question("Incorrect Input. Enter a word to score: ");
   }*/
   //let  = userWord[i]
   //if (userWord[i] !== /[a-zA-Z]/) {
    //userWord = input.question("Incorrect //Input. Enter a word to score: ");
   //}
  //for (i = 0; i !== /[a-zA-Z]/; i++) {
     //userWord = input.question("Incorrect Input. Enter a word to score: ")
  //}
};


let simpleScore = function(word) {
    return word.toLowerCase().length;
    //return word.trim().toLowerCase().length;
  };

let vowelBonusScore = function(word){
  let findingVowels = word.toLowerCase().split('');
  let score = 0;
  for (i = 0; i < word.length; i++) {
    if (findingVowels[i] === 'a'||findingVowels[i] ==='e'||findingVowels[i] ==='i'||findingVowels[i] ==='o'||findingVowels[i] ==='u') {
       score += 2;
    } 
  }
  return word.length + score;
};



let scrabbleScore = function(word) {
  word = word.toLowerCase();
  let letterPoints = 0;
  for (let i = 0; i < word.length; i++) {
    for (const letter in newPointStructure) {
      if (letter === (word[i])) {
        letterPoints += newPointStructure[letter];
      }
    }
  } 
  return letterPoints
};


const scoringAlgorithms = [
  simpleScoreObject = {
    name: "Simple Score",
    description: "Each Letter is worth 1 point.",
    scoringFunction: simpleScore
  },
  vowelBonusScoreObject = {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  },
   oldScrabbleScorerObject = {
    name: "Scrabble",
    description: 'The traditional scoring alogrithm.',
    scoringFunction: scrabbleScore
  }
];

function scorerPrompt() {
  console.log("Which scoring alogrithm would you like to use?\n")
    for (i = 0; i < scoringAlgorithms.length;i++){
      console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
    }
  let userInput = Number(input.question('Enter 0, 1, or 2: '));
    while (userInput > 2 || userInput < 0) {
    
      userInput = Number(input.question('Incorrect Input. Enter 0, 1, or 2: '));
      
      } 
  console.log(`Score for '${userWord}': ${scoringAlgorithms[userInput].scoringFunction(userWord)}`) 
}

function transform(ptStructure) {
  let newObj = {};
  
  /*let func = function(x) {
    return x.toLowerCase()
  }
    ptStructure = */
  //if (ptStructure[key] !==)
  //for (item in ptStructure) {
    //for (i = 0; i < ptStructure[item].length; i++)
      //ptStructure[item] = ptStructure[i].toLowerCase();
  //}
  for (key in ptStructure) {
    for (i = 0; i < ptStructure[key].length; i++){
      let lowerCasedLetter = ptStructure[key][i].toLowerCase();
      newObj[lowerCasedLetter] = Number(key);
    //ptStructure.tolowercase()[item]
    //console.log(item + ', ' + ptStructure[item]);
    //newObj[ptStructure[key][i]] = Number(key);    //this is mine and it worked
    //console.log(ptStructure[key][i])
    //console.log(ptStructure[key][i].toLowerCase());
    //ptStructure[item][item];
  }
  //newObj = newObj.map(item.toLowerCase())
  }
  return newObj;
};

let newPointStructure = transform(oldPointStructure);


function runProgram() {
  console.log(initialPrompt());
  console.log(scorerPrompt());
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


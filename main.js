console.log("Hello Super Group 19");

// grab DOM variable for question and answer

const displaysSection = document.getElementById("question-answer");
let typeOfQuestion = "multiple"; // boolean / Every Boolean answer is true can't use this for a true or false API
let difficultyLevel = "easy"; // medium || hard - can hard code it for now
let categoryNumber = 0;
let quantity = 5;
let questions = document.getElementById("question-answer")
const questionHeader = document.getElementById("question-header")
// 11 is Film
// 12 is Music
// 22 is Geography
// 27 is Animals
// Not one for food


function changeCategoryType() {
  let category = document.getElementById("category");
  let categoryValue = category.value;

  if (categoryValue === "music-category") {
    categoryNumber = 12;
    console.log(categoryNumber);
  } else if (categoryValue === "film-category") {
    categoryNumber = 11;
    console.log(categoryNumber);
  } else if (categoryValue === "geography-category") {
    categoryNumber = 22;
    console.log(categoryNumber);
  } else if (categoryValue === "celebrity-category") {
    categoryNumber = 26;
    console.log(categoryNumber);
  }else if (categoryValue === "animal-category") {
    categoryNumber = 27;
    console.log(categoryNumber);
}
}



function changeDifficultylevel() {
  const easy = document.getElementById("easy").checked;
  const medium = document.getElementById("medium").checked;
  const hard = document.getElementById("hard").checked;

  if (easy) {
    difficultyLevel = "easy";
  } else if (medium) {
    difficultyLevel = "medium";
  } else if (hard) {
    difficultyLevel = "hard";
  }
  console.log(difficultyLevel)
}

function changeQuestionBackground(){
  questionHeader.innerText = "Your Questions"
  questionHeader.style.fontWeight = "bold"; 
  questionHeader.style.fontSize = "26px";   
  questionHeader.style.fontStyle = "italic";   
}

async function fetchQuizQuestions() {

  changeQuestionBackground()
  changeCategoryType(categoryNumber);
  changeDifficultylevel(difficultyLevel)
  changeName()
  clearName()
  changeamountofQuestions()
  questions.style.backgroundColor = "white"; 
  

  {
    // use fetch to do GET request for questions
    // chose music category; amount of questions = 10; difficulty =easy; type = multiple( multiple choice)
    // you can change the amount, category,difficulty, and type based on user input
  }
  const requestUrl = await fetch(
    `https://opentdb.com/api.php?amount=${quantity}&category=${categoryNumber}&difficulty=${difficultyLevel}&type=${typeOfQuestion}`
  );
  const dataResponse = await requestUrl.json();
  console.log(dataResponse);
  const result = dataResponse.results;
  generateQuestions(result);
}

function generateQuestions(results) {
  
  let generateQuestions = "";
  results.map((result) => {
    
    generateQuestions += 
    `
    <div class="border question-background"> ${result.question}</div>
    <div class="border corect-background">${result.correct_answer} ✔ </div>
    <div class="border answer-background">${result.incorrect_answers[0]}</div>
    <div class="border answer-background">${result.incorrect_answers[1]}</div>
    <div class="border answer-background">${result.incorrect_answers[2]}</div>
    
    `
    
  });
  displaysSection.innerHTML = generateQuestions;
}

//change the text of the header to the value in the name box 
let changeH1 = document.getElementById("category-text")
let nameValue = document.getElementById("name-input").input

function changeName(){ 
let nameValue = document.getElementById("name-input").value;
if (nameValue == ""){
    nameValue = "QuizLeap"
}
let capitalName = capitalise(nameValue);
changeH1.innerText = (`${capitalName}'s Quiz`)
}

function capitalise(word) {
    // Remove first letter 
    let lowerCaseWord = word.toLowerCase();
    let upperCaseLetter = lowerCaseWord[0];
    lowerCaseWord = lowerCaseWord.substring(1);
    // Change letter to capital 
    upperCaseLetter = upperCaseLetter.toUpperCase();
    // Add letter back on to word
    let capitaliseWord = upperCaseLetter + lowerCaseWord;

    return capitaliseWord;
  }

  // input changes the amount of questions

  function changeamountofQuestions() {
    let questionQuantity = document.getElementById("quantity");
    quantity = questionQuantity.value;

  } 

  // clear input section 
  function clearName(){
    document.getElementById('name-input').value = '';
  }
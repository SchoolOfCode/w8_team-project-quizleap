console.log("Hello Super Group 19");

// grab DOM variable for question and answer

const displaysSection = document.getElementById("question-answer");
let typeOfQuestion = "multiple"; // boolean / Every Boolean answer is true can't use this for a true or false API
let difficultyLevel = "easy"; // medium || hard - can hard code it for now
let categoryNumber = 0;
let quantity = 5;
let questions = document.getElementById("question-answer");
const questionHeader = document.getElementById("question-header");
const YOUR_API_KEY = "IqF46LnFbxjHxtdgk53tzd943vxFQgV3";
const submit = document.getElementById("submit-button");

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
  } else if (categoryValue === "animal-category") {
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
  console.log(difficultyLevel);
}

function changeQuestionBackground() {
  // questionHeader.innerText = "Your Questions"
  questionHeader.style.fontWeight = "bold";
  questionHeader.style.fontSize = "1.5rem";
  questionHeader.style.fontSize = "1.5rem";
  questionHeader.style.marginBottom = "-10px";
  changeName();
  
}

async function fetchQuizQuestions() {
  changeQuestionBackground();
  changeCategoryType(categoryNumber);
  changeDifficultylevel(difficultyLevel);
  changeAmountOfQuestions();

  // clearName() - removed
  questions.style.backgroundColor = "white";
  submit.innerText = "Next Round"
  
  let explanation =   document.getElementById("explanation-section");
  explanation.classList.add("hide");
  let nameText =   document.getElementById("search-section");
  nameText.classList.add("hide");

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
    generateQuestions += `
    
    <section class="question-answer grid-container">
    <div class="border question-answer question-background Question"> ${result.question}</div>
    <div class="border corect-background Answer-1" >${result.correct_answer} ✔ </div>
    <div class="border answer-background Answer-2">${result.incorrect_answers[0]}</div>
    <div class="border answer-background Answer-3">${result.incorrect_answers[1]}</div>
    <div class="border answer-background Answer-4">${result.incorrect_answers[2]}</div>
    </section>
    `;
  });
  displaysSection.innerHTML = generateQuestions;
  let topButton = document.getElementById("top-button")
  topButton.classList.remove("hide");
}

//change the text of the header to the value in the name box
let changeH1 = document.getElementById("category-text");
let nameValue = document.getElementById("name-input").input;

// function changeName(){
// let nameValue = document.getElementById("name-input").value;
// if (nameValue == ""){
//     nameValue = "QuizLeap"
// }
// let capitalName = capitalise(nameValue);
// changeH1.innerText = (`${capitalName}'s Quiz`)
// }

// change your to name
let changeH2 = document.getElementById("your-questions");

function changeName() {
  console.log("why arent you working");
  nameValue = document.getElementById("name-input").value;
  if (nameValue == "") {
    nameValue = "Clive";
  }
  let capitalName = capitalise(nameValue);
  changeH2.innerText = `${capitalName}'s Questions`;
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

function changeAmountOfQuestions() {
  let questionQuantity = document.getElementById("quantity");
  quantity = questionQuantity.value;
}


async function getGiphyOfTheDay(){
  const requestURL = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${YOUR_API_KEY}`);
  const response = await requestURL.json();
  console.log(response);
  const giphyResult = response.data;
  console.log(giphyResult);
  const giphyImage = document.createElement("img");

  giphyImage.setAttribute("id", "giphy-img");
  giphyImage.src = giphyResult["image_original_url"];
  giphyImage.setAttribute("width", "900px")

  let giphyText =   document.getElementById("giphy-explanation");
  giphyText.classList.add("hide");
  let giphySection = document.getElementById("giphy-section");
  giphySection.innerHTML= "";
  giphySection.appendChild(giphyImage);
}


async function fetchRandomJoke(){
  const requestURL = await fetch ("https://official-joke-api.appspot.com/random_joke");
  const jokeResponse = await requestURL.json();
  console.log(jokeResponse);

  const punchLine = jokeResponse.punchline;
  console.log(punchLine);
  const setUp = jokeResponse.setup;
  console.log(setUp);

  let jokeDisplay = document.getElementById("joke-display");
  jokeDisplay.innerHTML= "";
  jokeDisplay.style.backgroundColor = "white";
  jokeDisplay.style.marginTop = "50px";
  jokeDisplay.style.padding = "50px";
  jokeDisplay.style.width = "4000px";
  let pTagOne = document.createElement("p");
  pTagOne.innerHTML = setUp;
  jokeDisplay.appendChild(pTagOne);
  let pTagTwo = document.createElement("p");
  pTagTwo.innerHTML = punchLine;
  jokeDisplay.appendChild(pTagTwo);

}

// clear input section
// function clearName() {
//   document.getElementById("name-input").value = "";
// }

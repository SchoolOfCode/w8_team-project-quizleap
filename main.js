console.log("Hello Super Group 19");

const displaysSection = document.getElementById("question-answer");
let typeOfQuestion = "multiple"; // boolean 
let difficultyLevel = "easy"; // medium || hard - can hard code it for now
let categoryNumber = 0;
let quantity = 5;
let questions = document.getElementById("question-answer");
const questionHeader = document.getElementById("question-header");
const YOUR_API_KEY = "IqF46LnFbxjHxtdgk53tzd943vxFQgV3";
const submit = document.getElementById("submit-button");

// changes the category level of generated questions

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
    // } else if (categoryValue === "celebrity-category") {
    //   categoryNumber = 26;
    //   console.log(categoryNumber);
  } else if (categoryValue === "animal-category") {
    categoryNumber = 27;
    console.log(categoryNumber);
  } else if (categoryValue === "general-category") {
    categoryNumber = 9;
    console.log(categoryNumber);
  } else if (categoryValue === "books-category") {
    categoryNumber = 10;
    console.log(categoryNumber);
    // } else if (categoryValue === "musicals-category") {
    //   categoryNumber = 13;
    //   console.log(categoryNumber);
  } else if (categoryValue === "television-category") {
    categoryNumber = 14;
    console.log(categoryNumber);
  } else if (categoryValue === "video-category") {
    categoryNumber = 15;
    console.log(categoryNumber);
  } else if (categoryValue === "board-category") {
    categoryNumber = 16;
    console.log(categoryNumber);
  } else if (categoryValue === "mythology-category") {
    categoryNumber = 20;
    console.log(categoryNumber);
  } else if (categoryValue === "sports-category") {
    categoryNumber = 21;
    console.log(categoryNumber);
  } else if (categoryValue === "history-category") {
    categoryNumber = 23;
    console.log(categoryNumber);
    // } else if (categoryValue === "politics-category") {
    //   categoryNumber = 24;
    //   console.log(categoryNumber);
    // }else if (categoryValue === "art-category") {
    //   categoryNumber = 25;
    //   console.log(categoryNumber);
  } else if (categoryValue === "vehicles-category") {
    categoryNumber = 28;
    console.log(categoryNumber);
  } else if (categoryValue === "comics-category") {
    categoryNumber = 29;
    console.log(categoryNumber);
  } else if (categoryValue === "manga-category") {
    categoryNumber = 31;
    console.log(categoryNumber);
  } else if (categoryValue === "cartoon-category") {
    categoryNumber = 32;
    console.log(categoryNumber);
  } else if (categoryValue === "nature-category") {
    categoryNumber = 17;
    console.log(categoryNumber);
  } else if (categoryValue === "computing-category") {
    categoryNumber = 18;
    console.log(categoryNumber);
    // } else if (categoryValue === "gadgets-category") {
    //   categoryNumber = 19;
    //   console.log(categoryNumber);
    // }
  }
}

// changes the difficulty level of generated questions

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

// changes the background style of generated questions

function changeQuestionBackground() { 
  questionHeader.style.fontWeight = "bold";
  questionHeader.style.fontSize = "1.5rem";
  questionHeader.style.fontSize = "1.5rem";
  questionHeader.style.marginBottom = "-10px";
  changeName();
}

// gets quiz questions from API 

async function fetchQuizQuestions() {
  changeQuestionBackground();
  changeCategoryType(categoryNumber);
  changeDifficultylevel(difficultyLevel);
  changeAmountOfQuestions();
  questions.style.backgroundColor = "white";
  submit.innerText = "Next Round";

  let explanation = document.getElementById("explanation-section");
  explanation.classList.add("hide");
  let nameText = document.getElementById("search-section");
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
  
  const result = dataResponse.results;
  generateQuestions(result);
}

// displays questions on the screen 

function generateQuestions(results) {
  let generateQuestions = "";
  results.map((result) => {
    generateQuestions += `
    
    <section class="question-answer grid-container">
    <div class="border question-answer question-background Question"> ${result.question}</div>
    <div class="border corect-background Answer-1" >${result.correct_answer} ??? </div>
    <div class="border answer-background Answer-2">${result.incorrect_answers[0]}</div>
    <div class="border answer-background Answer-3">${result.incorrect_answers[1]}</div>
    <div class="border answer-background Answer-4">${result.incorrect_answers[2]}</div>
    </section>
    `;
  });
  displaysSection.innerHTML = generateQuestions;
  let topButton = document.getElementById("top-button");
  topButton.classList.remove("hide");
}

//change the text of the header to the value in the name box
let changeH1 = document.getElementById("category-text");
let nameValue = document.getElementById("name-input").value;

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

// capatalise a word 

function capitalise(word) {
    
  let lowerCaseWord = word.toLowerCase();
  let upperCaseLetter = lowerCaseWord[0];
  lowerCaseWord = lowerCaseWord.substring(1);
  upperCaseLetter = upperCaseLetter.toUpperCase();
  let capitaliseWord = upperCaseLetter + lowerCaseWord;

  return capitaliseWord;
}

// input changes the amount of questions

function changeAmountOfQuestions() {
  let questionQuantity = document.getElementById("quantity");
  quantity = questionQuantity.value;
}

// get giphy of the day from giphy API
async function getGiphyOfTheDay() {
  const requestURL = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${YOUR_API_KEY}`
  );
  const response = await requestURL.json();
  const giphyResult = response.data;
  // create img tag
  const giphyImage = document.createElement("img");
  giphyImage.setAttribute("id", "giphy-img");
  // set image as fetched giphy
  giphyImage.src = giphyResult["image_original_url"];
  giphyImage.setAttribute("width", "900px");
  // set giphy text
  let giphyText = document.getElementById("giphy-explanation");
  giphyText.classList.add("hide");
  let giphySection = document.getElementById("giphy-section");
  giphySection.innerHTML = "";
  giphySection.appendChild(giphyImage);
}

// fetch randomly generated joke
async function fetchRandomJoke() {
  const requestURL = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const jokeResponse = await requestURL.json();
  const punchLine = jokeResponse.punchline;
  const setUp = jokeResponse.setup;
  let jokeDisplay = document.getElementById("joke-display");
  jokeDisplay.innerHTML = "";
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

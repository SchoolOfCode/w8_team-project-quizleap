console.log("Hello Super Group 19");

// grab DOM variable for question and answer

const displayedQuestion = document.getElementById("question-1");
const displayedAnswer = document.getElementById("answer-1");
const submitButton = document.getElementById("submit-button");

const displaysSection = document.querySelector(".question-answer");
let typeOfQuestion = "multiple"; // boolean / Every Boolean answer is true can't use this for a true or false API
let difficultyLevel = "easy"; // medium || hard - can hard code it for now
let categoryNumber = 0;
// 11 is Film
// 12 is Music
// 22 is Geography
// 27 is Animals
// Not one for food

// submitButton.addEventListener("click", hello);

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
    categoryNumber = 22;
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


async function fetchQuizQuestions() {
  changeCategoryType(categoryNumber);
  changeDifficultylevel(difficultyLevel)

  {
    // use fetch to do GET request for questions
    // chose music category; amount of questions = 10; difficulty =easy; type = multiple( multiple choice)
    // you can change the amount, category,difficulty, and type based on user input
  }
  const requestUrl = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${categoryNumber}&difficulty=${difficultyLevel}&type=${typeOfQuestion}`
  );
  const dataResponse = await requestUrl.json();
  console.log(dataResponse);
  const results = dataResponse.results;
  generateQuestions(results);
}

function generateQuestions(results) {
  let generateQuestions = "";
  results.map((result) => {
    generateQuestions += `<div class="border question-background"> ${result.question}</div>
        <div class="border answer-background">${result.correct_answer}</div>`;
  });
  displaysSection.innerHTML = generateQuestions;
}

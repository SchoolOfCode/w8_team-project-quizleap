console.log("Hello Super Group 19")

// grab DOM variable for question and answer 

const displayedQuestion = document.getElementById("question-1");
const displayedAnswer = document.getElementById("answer-1");

const displaysSection = document.querySelector(".question-answer")
const typeOfQuestion = "multiple" // boolean / Every Boolean answer is true can't use this for a true or false API
const difficultyLevel = "easy"; // medium || hard - can hard code it for now
const musicButton = document.getElementById("music-category")



// testing API data  - Open trivia data base API 
// diplay music questions from API 


async function fetchQuizQuestions(){
    // use fetch to do GET request for questions
    // chose music category; amount of questions = 10; difficulty =easy; type = multiple( multiple choice)
    // you can change the amount, category,difficulty, and type based on user input
    const requestUrl = await fetch (`https://opentdb.com/api.php?amount=10&category=12&difficulty=${difficultyLevel}&type=${typeOfQuestion}`);
    const dataResponse = await requestUrl.json();
    console.log(dataResponse);
    const result = dataResponse.results;
    generateQuestions(result);
      
}

fetchQuizQuestions();


    function generateQuestions (results) {
      let generateQuestions = "";
      results.map(result => {
        generateQuestions  += 
        `
        <div class="border question-background"> ${result.question}</div>
        <div class="border answer-background">${result.correct_answer} ✔ </div>
        <div class="border answer-background">${result.incorrect_answers[0]}</div>
        <div class="border answer-background">${result.incorrect_answers[1]}</div>
        <div class="border answer-background">${result.incorrect_answers[2]}</div>

        `
      })
      displaysSection.innerHTML = generateQuestions;
    }
 
 
    

  
   

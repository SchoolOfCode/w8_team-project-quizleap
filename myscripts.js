console.log("Hello Super Group 19")

// grab DOM variable for question and answer 

const displayedQuestion = document.getElementById("question-1");
const displayedAnswer = document.getElementById("answer-1");

const displaysSection = document.querySelector(".question-answer");
const typeOfQuestion = "multiple" // boolean / Every Boolean answer is true can't use this for a true or false API
const difficultyLevel = "easy"; // medium || hard - can hard code it for now
const musicButton = document.getElementById("music-category");
let categoryNumber = null;


// testing API data  - Open trivia data base API 
// diplay music questions from API 


async function fetchQuizQuestions(categoryNumber){
    // use fetch to do GET request for questions
    // chose music category; amount of questions = 10; difficulty =easy; type = multiple( multiple choice)
    // you can change the amount, category,difficulty, and type based on user input
    const requestUrl = await fetch (`https://opentdb.com/api.php?amount=10&category=${categoryNumber}&difficulty=${difficultyLevel}&type=${typeOfQuestion}`);
    const dataResponse = await requestUrl.json();
    console.log(dataResponse);
    const result = dataResponse.results;
    generateQuestions(result);
      
}

    function generateQuestions (results) {
      let generateQuestions = "";
      results.map(result => {
        generateQuestions  += 
        `<div class="border question-background"> ${result.question
        }</div>
        <div class="border answer-background">${result.correct_answer}</div>`
      })
      displaysSection.innerHTML = generateQuestions;
    }


    fetchQuizQuestions(12);
  
// function to change category number on click of button 

 function handleClick(){

    // change page to q+a page 
     document.location='q+a-page.html';
    // // change category number 
     categoryNumber = 12; 
    // // display questions from that category number 
    // console.log(categoryNumber);
  
    //  console.log("Hello");   
}

//   musicButton.addEventListener("click", handleClick); 


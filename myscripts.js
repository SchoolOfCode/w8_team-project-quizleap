console.log("Hello Super Group 19")

// grab DOM variable for question and answer 

const displayedQuestion = document.getElementById("question-1");
const displayedAnswer = document.getElementById("answer-1");

const displaysSection = document.querySelector(".question-answer");
const typeOfQuestion = "multiple" // boolean / Every Boolean answer is true can't use this for a true or false API
const difficultyLevel = "easy"; // medium || hard - can hard code it for now
const musicButton = document.getElementById("music-category");
let resultQuestion = [];
let categoryNumber = null;


const questionOption = [ {
    category: "music",
    number: 12
},
{
    category: "movies",
    number: 11
}];


// testing API data  - Open trivia data base API 
// diplay music questions from API 


async function fetchQuizQuestions(categoryNumber){
    // use fetch to do GET request for questions
    // chose music category; amount of questions = 10; difficulty =easy; type = multiple( multiple choice)
    // you can change the amount, category,difficulty, and type based on user input
    const requestUrl = await fetch (`https://opentdb.com/api.php?amount=10&category=${categoryNumber}&difficulty=${difficultyLevel}&type=${typeOfQuestion}`);
    const dataResponse = await requestUrl.json();
    console.log(dataResponse);
    resultQuestion = dataResponse.results;
      
}

 

    // fetchQuizQuestions(12);
  
// function to change category number on click of button 

//  function handleClick(){

//     // change page to q+a page 
//      
//     // // change category number 
//      categoryNumber = 12; 
//     // // display questions from that category number 
//     // console.log(categoryNumber);
  
//     //  console.log("Hello");   
// }

  musicButton.addEventListener("click", async () => {
      await fetchQuizQuestions(12);
      document.location='q+a-page.html';
  }); 


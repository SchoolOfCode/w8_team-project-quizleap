console.log("Hello Super Group 19")

// grab DOM variable for question and answer 

const displayedQuestion = document.getElementById("question-1");
const displayedAnswer = document.getElementById("answer-1");

const displaysSection = document.querySelector(".question-answer")

// const displayedQuestion2 = document.getElementById("question-2");
// const displayedAnswer2 = document.getElementById("answer-2");

// const displayedQuestion3 = document.getElementById("question-3");
// const displayedAnswer3 = document.getElementById("answer-3");

// const displayedQuestion4 = document.getElementById("question-4");
// const displayedAnswer4 = document.getElementById("answer-4");

// const displayedQuestion5 = document.getElementById("question-5");
// const displayedAnswer5 = document.getElementById("answer-5");








// testing API data  - Open trivia data base API 
// diplay music questions from API 
async function fetchQuizQuestions(){
    // use fetch to do GET request for questions
    // chose music category; amount of questions = 10; difficulty =easy; type = multiple( multiple choice)
    // you can change the amount, category,difficulty, and type based on user input
    const requestUrl = await fetch ('https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple');
    const dataResponse = await requestUrl.json();
    console.log(dataResponse);
    const result = dataResponse.results;
      generateQuestions(result);
      
}

fetchQuizQuestions();

    // console.log(result);
    // const question = result[0].question;
    //  //remove random characters
    // let formatedQuestion =  question.replace(
    //     /&#039|&rsquo;|&quot;|&#39;|;/g,
    //     ""
    //   );

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
    
   
  
    // console.log(question);
    // const answer = result[0].correct_answer;
    // console.log(answer);
    // // change inner text of displayed question to match API data  
    // displayedQuestion.innerText = formatedQuestion;
    //  // change inner text of displayed asnwer to match API data  
    // displayedAnswer.innerText = answer;



fetchQuizQuestions();

// testing API data - trivia wilfry API 

// async function fetchQuizQuestions(){
//     // use fetch to do GET request for questions
//     // chose music category; amount of questions = 5; difficulty- no option ot choose it on this API; type = multiple( multiple choice)
//     // you can change the amount of questions and  category based on user input
//     const requestUrl = await fetch ('https://trivia.willfry.co.uk/api/questions?categories=music&limit=5');
//     const dataResponse = await requestUrl.json();
//     console.log(dataResponse);
// }

// fetchQuizQuestions();




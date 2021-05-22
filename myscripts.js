console.log("Hello Super Group 19")

// grab DOM variable for question and answer 

const displayedQuestion = document.getElementById("question-1");
const displayedAnswer = document.getElementById("answer-1");




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
    console.log(result);
    const question = result[0].question;
    console.log(question);
    const answer = result[0].correct_answer;
    console.log(answer);
    // change inner text of displayed question to match API data  
    displayedQuestion.innerText = question;
     // change inner text of displayed asnwer to match API data  
    displayedAnswer.innerText = answer;

}

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




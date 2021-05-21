console.log("Hello Super Group 19")

// testing API data  - Open trivia data base API 

// async function fetchQuizQuestions(){
//     // use fetch to do GET request for questions
//     // chose music category; amount of questions = 10; difficulty =easy; type = multiple( multiple choice)
//     // you can change the amount, category,difficulty, and type based on user input
//     const requestUrl = await fetch ('https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple');
//     const dataResponse = await requestUrl.json();
//     console.log(dataResponse);
// }

// fetchQuizQuestions();

// testing API data - trivia wilfry API 

async function fetchQuizQuestions(){
    // use fetch to do GET request for questions
    // chose music category; amount of questions = 5; difficulty- no option ot choose it on this API; type = multiple( multiple choice)
    // you can change the amount of questions and  category based on user input
    const requestUrl = await fetch ('https://trivia.willfry.co.uk/api/questions?categories=music&limit=5');
    const dataResponse = await requestUrl.json();
    console.log(dataResponse);
}

fetchQuizQuestions();
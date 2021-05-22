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
  
generateQuestions(resultQuestion);
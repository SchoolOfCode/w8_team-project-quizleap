# QuizLeap - an app designed and created for the quiz master

## Overview

For our Week 8 Front End project we have decided to create a **quiz app** website designed for quiz hosts. Using our app you can create and design personalised quizes that will take the user input on the desired category, number of questions, difficuty settings and automatically generate questions and answers. We have also included a link to a _scoreboard_ that the host can use to keep track of each team's score.

## Project management and understanding the problem

We have met everyday and devided the tasks between us. We have used **Trello** and **GitHub Projects** to keep track of what everyone is doing. All screenshots and ideas were saved and recorded in a shared _Google drive_.

We also has stand-ups every morning where we would outline the plan for the day and any issues that we had during the previous day.

## Initial research

After our initial project planning meeting each of us did an inital research on the options available for the project which included:

- Look at other similar websites
- Think about new ideas for that category
- What APIs are available

Result, together with a pros and cons list were recorded in [this](https://drive.google.com/drive/folders/15dy0gI3PanYp9DkNSPorNgAOFTBC6VB1) shared google drive where we have recorded all our planning and research for the project.

Analysing the research and resources available we have decided to create a **quiz app**.

## Understanding the problem

The goal was to create a quiz app that will help the quiz host write personalised quizes based on user input.

### User

- the quiz host/master.
- event organisers
- work gatherings/ team building quix host

### Problem:

- too much time spent to manually create and write quiz questions
- not personalised to the user

## Existing solutions

- information overload
- nothing available on the market that will provide questions+answers on each category based on user input

### Understanding the why - User research

We have used [this survey](https://docs.google.com/forms/d/1N8hOHJWRofNwi3P-5pdgvVV9NAWR31IHbEnNU-EK0aY/edit) to gather more information. We have used the responses and applied this in the design and functionality of our app.

The **main problem** to solve was the time spent on gathering the info. The **solution** will be the _fetched_ questions and answers from the **API** data.

### Success will be measured by:

- building a functional quiz app
- have information gathered from _API_ data
- have information changed depending on user input

## Ideation

### Dream product

- A quiz with videos, gifs, images, sounds
- Multiple Categories ✅
- Online community
- Option to save the quiz to reuse it
- Leader Board
- Difficulty Settings ✅
- Different themes like hen do, work, birthdays
- Ability to create your own quiz ✅
- Ability to generate a pre made quiz with option to change questions
- Accessibility - Log in on phone or website with a code
- UX UI Design ✅
- User Feedback and Change the design ✅
- Option to present Quiz by zoom
- Navigation Bar ✅

### Realistic product

- Website that writes a quiz for the host ✅
- API will fetch questions from the input ✅
- All questions displayed on the same page for quiz host to read ✅
- User can pick a selection of categories - Check Box ✅
- Multiple APIs used ✅
- landing page ✅

### Initial strech goals

- Use API to change difficulty of the questions based on user input ✅
- Refresh button for each question
- Multiple Choice on Answers ✅
- Refactor HTML to add information with JS ✅
- Joke connected to the category ✅

## Designing

- name chosen - QuizLeap
- color palette chosen
- logo chosen - frog theme

We researched the look of other websited to see what is out there and get inpired for our design. You can see some of the result [here](https://docs.google.com/document/d/1kAEoQkFJgqP6iV6wF7lIc03h1D8FsS3Bx471HAjWqf0/edit).

We have used **Figma** to design the [wireframe](https://www.figma.com/file/km7l71nGem0NN07SMdIaCP/Untitled?node-id=0%3A1) which also gives a demo on how the website is supposed to look like.

## Data planning

### Data needed

- User Input
- Questions generated from API
- Multiple API - Joke, Giphy generator

Research on the API data can be found [here](https://docs.google.com/document/d/1oX5UWMvClzCN7ftg5Wq_VL_45_7GywUgZkpRXWlbYCg/edit). Every API was tsted using **POSTMAN** and the **browser**.

## Coding sprint

We have split the tasks using [this](https://docs.google.com/spreadsheets/d/1eLNhIGaTccZ_VmUEheTp4jwI_AVnqjV0DUZKh5cBy6Q/edit#gid=1570969880) spreadsheet. We have also used **Git issues** and **Git projects** to track what everyone was doing.

## API used

We have used [Open Trivia API](https://opentdb.com/api_config.php) as it was the only one that gave us the option to change categories and difficulty levels and number of questions based on the user input. It was also the API with the widest category selection.

We have used **GET** requests to grab our data from the API. We practice our favourite async await function to enter the request-response cycle dance. The REST API gave us the response formatted as JSON (JavaScript Object Notation). The data comes in pairs of keys and values that are colon-separated. We have used object dot notation to grab the data from the API and display that to the user.

Because this will be used for entertainment for our additional APIs we have used [Giphy generator](https://giphy.com/explore/generator) and [this](https://official-joke-api.appspot.com/random_joke) random joke generator that will definitely put a smile on everyone's face.

## Issues that we faced

### JS functionality did't work on multiple pages

Button that linked to the category page was not displaying the information when clicked. We discovered that was becasue we were trying to call the async function on multiple pages.

#### New plan:

- reduced the number of page to 2 : landing-page and input-page
- main.js is called only on the input-page
- Dificulty options and options to choose number of questions was added to the same page

## Feedback request - second user research

After completeing our basic version of the quiz app we have designed [this survey](https://docs.google.com/forms/d/1qYf2aGn22rkr2imjRI0K61NvAcYin36McP-Y6LLpJsc/edit) to show this to the users and see what improvements we can add to our app.

### Improvement suggestions

- confusion about the scoreboard button
- change background of correct answer to green
- description not very clear

### Changes made for the final version

- more categories added ✅
- added navbar ✅
- created page to display Giphy ✅
- created oage to display joke ✅
- back to top button added ✅
- background-color for correct answer changed to green ✅
- added extra info about the app ✅

## Things to add in the future - strech goals

- user research on name
- add true or false option
- make frogs animated
- make a picture round
- make a music/sound round
- Option to add theme like Birthday Hen do

## Overall conclusion

It was a long journey but we had loads of fun doing this. We all worked together to solve the problem for the user and create a fully functional version. We learned a lot from each other while practicing everything that we have learned until now!!

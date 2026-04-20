# React quiz app

- This app is used as a quiz for React questions

## Setup frontend

- Navigate to `src/` folder and run the command

```js
npm i
```

## Run the frontend application

- From `/src` folder run the command

```js
npm run dev
```

## Questions API

- Questions come from a fake server setup

### Start JSON server

```js
npm run server
```

## Change the questions in the quiz

- The list of questions is in `data/questions.json` file and questions can be modified in this particular file


## Future work
i. Allow user to navigate front and back between questions and show result in end
ii. Attach difficulty to each qn and allow filtering via difficulty
iii. When restart quiz post high score to fake api i.e questions.json so it can be read when app starts again and not from 0
iv. Make actual API using FastAPI or Springboot and maybe a DB
v. Add login information
vi. Add option to add new questions via a post request on adding a json of particular type
vii. Allow multiple quizzes of multiple topics to be visible on the app
viii. DB to store high score info and maybe who created quiz i.e username
ix. Allow only quiz owner who created quiz to edit questions
x. Dockerize the application
xi. Deploy using kubernetes
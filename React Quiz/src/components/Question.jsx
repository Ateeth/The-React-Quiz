import Options from "./Options";

function Question({ currentQuestion, dispatch, answer }) {
  const question = currentQuestion.question;
  const options = currentQuestion.options;
  const correctOption = currentQuestion.correctOption;

  return (
    <div>
      <h4>{question}</h4>
      <Options
        options={options}
        dispatch={dispatch}
        answer={answer}
        correctOption={correctOption}
      />
    </div>
  );
}

export default Question;

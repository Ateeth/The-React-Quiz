import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { currentQuestion, dispatch, answer } = useQuiz();
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

import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { answer, index, numQuestions, dispatch } = useQuiz();
  if (answer == null) return null;

  function handleClick() {
    dispatch({ type: "nextQuestion" });
  }

  function handleFinish() {
    dispatch({ type: "finish" });
  }

  if (index < numQuestions - 1) {
    return (
      <button className="btn btn-ui" onClick={handleClick}>
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button className="btn btn-ui" onClick={handleFinish}>
        Finish
      </button>
    );
  }
  return;
}
export default NextButton;

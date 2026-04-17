function StartScreen({ numQuestions, dispatch }) {
  function handleClick() {
    dispatch({ type: "start" });
  }

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>
        {numQuestions} question{numQuestions > 1 ? "s" : ""} to test your React
        Mastery
      </h3>
      <button className="btn btn-ui" onClick={handleClick}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;

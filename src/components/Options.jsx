function Options({ options, dispatch, answer, correctOption }) {
  const hasAnswered = answer !== null;
  function handleOptionClick(index) {
    dispatch({
      type: "newAnswer",
      payload: index,
    });
  }

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""}`}
          key={index}
          onClick={() => handleOptionClick(index)}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

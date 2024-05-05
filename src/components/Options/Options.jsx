import css from "./Options.module.css";
const Options = ({ onFeedbackClick, onResetClick, total }) => {
  return (
    <>
      <button
        className={css.button}
        type="button"
        onClick={() => onFeedbackClick("good")}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => onFeedbackClick("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => onFeedbackClick("bad")}
      >
        Bad
      </button>
      {total !== 0 && (
        <button className={css.button} type="button" onClick={onResetClick}>
          Reset
        </button>
      )}
    </>
  );
};

export default Options
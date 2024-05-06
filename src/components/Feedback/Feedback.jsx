import css from "./Feedback.module.css";
const Feedback = ({
  feedback: { good, neutral, bad }, total,
  positive,
}) => {
  return (
    <>
      <p className={css.good}>Good: {good}</p>
      <p className={css.good}>Neutral: {neutral}</p>
      <p className={css.bad}>Bad: {bad}</p>
      <p className={css.total}>Total: {total}</p>
      <p className={css.positive}>Positive: {positive}%</p>
    </>
  );
};

export default Feedback
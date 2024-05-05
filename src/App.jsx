import { useState, useEffect } from "react";


import css from "./App.module.css"
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [feedback, setFeedback] = useState(() => {

    const savedFeedbacks = JSON.parse(window.localStorage.getItem("saved-feedbacks"))

    return savedFeedbacks || initialState
  });

  const onButtonClick = (feedbackValue) => {
    setFeedback({ ...feedback, [feedbackValue]: feedback[feedbackValue] + 1 });
  };

  useEffect(() => {
    window.localStorage.setItem(
      "saved-feedbacks",
      JSON.stringify(feedback))
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const onResetButtonClick = () => {
    setFeedback(initialState);
  };

  return (
    <div className={css.app}>
      <Description />
      <Options
        onFeedbackClick={onButtonClick}
        onResetClick={onResetButtonClick}
        total={totalFeedback}
      />
      <Feedback
        feedback={feedback}
        total={totalFeedback}
        positive={positiveFeedback}
      />
      <Notification total={totalFeedback} />
    </div>
  );
}

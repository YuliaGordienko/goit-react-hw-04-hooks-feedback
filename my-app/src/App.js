import "./App.css";
import React, { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notofication from "./Statistics/Notification/Notification";
export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickFeedback = (e) => {
    const targetBtn = e.currentTarget.textContent.toLowerCase();
    switch (targetBtn) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round(100 / (good + neutral + bad)) * good;
  };

  return (
    <div className="main-div">
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onClickFeedback} />
      </Section>

      <Section title="Statistics">
        {good + neutral + bad === 0 ? (
          <Notofication />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

import React from "react";
import s from "./FeedbackOptions.module.css";
export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <button type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </div>
  );
}

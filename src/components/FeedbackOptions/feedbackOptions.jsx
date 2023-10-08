import React from 'react';
import css from './feedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.feedback}>
    <h1>Pleas leave feedback</h1>
    {options.map(option => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

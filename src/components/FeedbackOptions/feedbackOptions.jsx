import React from 'react';
import css from './feedbackOptions.module.css';
import { Button } from 'components/Buttons/buttons';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.feedback}>
    <h1>Please leave feedback</h1>
    <Button text="Good" onClick={() => onLeaveFeedback('good')} />
    <Button text="Neutral" onClick={() => onLeaveFeedback('neutral')} />
    <Button text="Bad" onClick={() => onLeaveFeedback('bad')} />
  </div>
);

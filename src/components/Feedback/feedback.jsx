import React, { Component } from 'react';
import css from './feedbackMain.module.css';
import { FeedbackOptions } from 'components/FeedbackOptions/feedbackOptions';
import { Statistics } from 'components/Statistics/statistics';
import { Section } from 'components/Section/section';
import { Button } from 'components/Buttons/buttons';
import { Notification } from 'components/Notification/notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const options = ['good', 'neutral', 'bad'];

    return (
      <div className={css.feedbackmain}>
        <div>
          <Section>
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.handleFeedback}
            ></FeedbackOptions>
          </Section>
        </div>
        <div>
          <Section>
            {totalFeedback > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={positiveFeedbackPercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </div>
    );
  }
}

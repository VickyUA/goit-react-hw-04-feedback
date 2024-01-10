import Feedback from 'components/feedback/Feedback';
import Statistics from './statistics/Statistics';
import Section from './section/Section';
import Notification from './notification/Notification';
import { useState } from 'react';

export default function App() {
  const [option, setOption] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const chooseOption = option => {
    setOption(prev => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return option.good + option.neutral + option.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((100 / countTotalFeedback()) * option.good).toFixed(0);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Section title={'Please leave your feedback'}>
        <Feedback options={Object.keys(option)} onChosenOption={chooseOption} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={option.good}
            neutral={option.neutral}
            bad={option.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

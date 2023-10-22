import { useState } from 'react';
import { createElement } from 'react';

const HTag = ({textContent, level}) => {
  return createElement(`h${level}`, null, `${textContent}`);
  
}

const Button = ({textContent, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {textContent}
    </button>
  )
}

const StatisticLine = ({valueLabel, value}) => {
  return (
    <p>{valueLabel} {value}</p>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <StatisticLine valueLabel={'good'} value={good} />
        <StatisticLine valueLabel={'neutral'} value={neutral} />
        <StatisticLine valueLabel={'bad'} value={bad} />
        <StatisticLine valueLabel={'all'} value={all} />
        <StatisticLine valueLabel={'average'} value={(good - bad) / all} />
        <StatisticLine valueLabel={'positive'} value={`${100 * (good / all)}%`} />
      </div>
    )
  }
  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <HTag textContent={'give feedback'} level={1} />

      <Button textContent={'good'} handleClick={() => setGood(good + 1)}/>
      <Button textContent={'neutral'} handleClick={() => setNeutral(neutral + 1)}/>
      <Button textContent={'bad'} handleClick={() => setBad(bad + 1)}/>
      
      <HTag textContent={'statistics'} level={2} />

      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App
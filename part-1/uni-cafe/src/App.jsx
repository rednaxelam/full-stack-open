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

const Result = ({valueLabel, value}) => {
  return (
    <p>{valueLabel} {value}</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad;
  return (
    <div>
      <HTag textContent={'give feedback'} level={1} />

      <Button textContent={'good'} handleClick={() => setGood(good + 1)}/>
      <Button textContent={'neutral'} handleClick={() => setNeutral(neutral + 1)}/>
      <Button textContent={'bad'} handleClick={() => setBad(bad + 1)}/>
      
      <HTag textContent={'statistics'} level={2} />

      <Result valueLabel={'good'} value={good} />
      <Result valueLabel={'neutral'} value={neutral} />
      <Result valueLabel={'bad'} value={bad} />
      <Result valueLabel={'all'} value={all} />
      <Result valueLabel={'average'} value={(all === 0) ? 'NA' : (good - bad) / all} />
      <Result valueLabel={'positive'} value={(all === 0) ? 'NA' :`${100 * (good / all)}%`} />

      <Result />
    </div>
  )
}

export default App
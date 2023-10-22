import { useState } from 'react'

const Button = ({textContent, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {textContent}
    </button>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
    "They Don't Think It Be Like It Is, But It Do"
  ]

   
  const [selected, setSelected] = useState(0)
  const [anecdotesVotes, setAnecdotesVotes] = useState(Array(anecdotes.length).fill(0));

  const voteForAnecdote = () => {
    const newAnecdotesVotes =  [...anecdotesVotes];
    newAnecdotesVotes[selected]++;
    setAnecdotesVotes(newAnecdotesVotes);
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {anecdotesVotes[selected]} votes</p>
      <Button textContent={'vote'} handleClick={() => voteForAnecdote(selected)} />
      <Button textContent={'next anecdote'} handleClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} />
    </div>
  )
}

export default App
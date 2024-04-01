import {useState} from "react";

const randomNumber = (min , max) => {
  return Math.floor(Math.random() * (max + min) + min)
}
const Button = ({handleClick, text}) => {
  return(
      <button onClick={handleClick}> {text} </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const initialValues = Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialValues)

    const maxVotesIndex = () => {
        const maxIndex = votes.reduce((maxValue, current, index) => current > votes[maxValue] ? index : maxValue, 0)
        console.log('Max index of Votes: ', maxIndex)
        return maxIndex;
    }

  const DisplayRandom = ({random}) => {
    return (
        <>
          <p>
            {anecdotes[random]}
          </p>
          <p>Has {votes[random]} votes</p>
        </>
    )
  }

  const handleVote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <DisplayRandom random = {selected}/>
      <Button handleClick = {() => setSelected(randomNumber(0, 8))} text ='Next Anecdote'/>
      <Button handleClick = {handleVote} text ='Vote'/>
      <h2>Anecdote with most votes</h2>
      <DisplayRandom random = {maxVotesIndex()}/>
    </div>
  )
}

export default App

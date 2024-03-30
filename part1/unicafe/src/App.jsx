import {useState} from "react";

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}> {text} </button>
)

const StatisticLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad
    return (
        total === 0 ?
            <div> Ne Feedback Given</div> :
            <table>
                <tbody>
                <StatisticLine text="Good" value={good}/>
                <StatisticLine text="Neutral" value={neutral}/>
                <StatisticLine text="Bad" value={bad}/>
                <StatisticLine text="All" value={total}/>
                <StatisticLine text="Average" value={calculateAverage(good, neutral, bad)}/>
                <StatisticLine text="Positive" value={calculatePositiveFeedback(good, neutral, bad)}/>
                </tbody>
            </table>
    )

}
const calculateAverage = (good, neutral, bad) => {
    const totalFeedback = good + neutral + bad
    return totalFeedback === 0 ? 0 : (good + neutral + bad / 3)
}
const calculatePositiveFeedback = (good, neutral, bad) => {
    const totalFeedback = good + neutral + bad
    return totalFeedback === 0 ? 0 :((good + neutral)/totalFeedback) * 100
}
const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleSetGood = () => {
        setGood(good + 1)
    }

    const handleSetNeutral = () => {
        setNeutral(neutral + 1)
    }

    const handleSetBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button  handleClick={handleSetGood} text = 'Good'/>
            <Button  handleClick={handleSetNeutral} text = 'Neutral'/>
            <Button  handleClick={handleSetBad} text = 'Bad'/>
            <h2>Statistics</h2>
            <Statistics good ={good} neutral ={neutral} bad = {bad}/>
        </div>
    )
}

export default App

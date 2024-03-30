const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    const partContent = props.parts.map( part => (
        <p key = {part.name}>
            {part.name} {part.exercise}
        </p>
    ));
    console.log(partContent)
    return (
        <div>
            {partContent}
        </div>
    )
}
const Total = (props) => {
    let total = 0;
    props.parts.forEach(value => {
        total = total + value.exercise
    })
    console.log(total)
    return (
        <p>Number of exercises: {total}</p>
    )
}
/* eslint-disable no-unused-vars */
const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercise: 10
        },
        {
            name: 'Using props to pass data',
            exercise: 7

        },
        {
            name: 'State of a component',
            exercise: 14
        }
    ]

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total parts={parts}/>
        </div>
    )
}

export default App

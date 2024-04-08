import Course from "./components/Course.jsx";
/*const Total = (props) => {
    let total = 0;
    props.parts.forEach(value => {
        total = total + value.exercise
    })
    console.log(total)
    return (
        <p>Number of exercises: {total}</p>
    )
}*/
/* eslint-disable no-unused-vars */
const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                id: 1,
                name: 'Fundamentals of React',
                exercise: 10

            },
            {
                id: 2,
                name: 'Using props to pass data',
                exercise: 7

            },
            {
                id: 3,
                name: 'State of a component',
                exercise: 14
            }

        ]
    }

    return (
        <div>
            <Course course={course} />
        </div>
    )
}

export default App

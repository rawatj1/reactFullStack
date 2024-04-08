import Course from "./components/Course.jsx";

/* eslint-disable no-unused-vars */
const App = () => {
    const courses = [
        {
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
                },
                {
                    id: 4,
                    name: 'Redux',
                    exercise: 11
                }

            ]
        }, {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercise: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercise: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div>
            <h1>Web Development curriculum</h1>
            {courses.map( course =>
                <Course key={course.id} course={course}/>
            )}
        </div>
    )
}

export default App

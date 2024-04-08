const Header = ({course}) => {
    return (
        <h1>{course}</h1>
    )
}

const Content = (props) => {
    const partContent = props.parts.map( part => (
        <p key = {part.name}>
            {part.name} {part.exercise}
        </p>
    ));
    return (
        <div>
            {partContent}
        </div>
    )
}
const Total = (props) => {
    const total = props.parts.reduce((acc, curVal) => acc + curVal.exercise, 0)
    console.log('Total ', total)
    return (
        <p>Total of Exercise: {total}</p>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header course={props.course.name}/>
            <Content parts={props.course.parts}/>
            <Total parts={props.course.parts}/>
        </div>
    )
}

export default Course
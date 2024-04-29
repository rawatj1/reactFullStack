const Header = ({course}) => {
    return (
        <h1>{course}</h1>
    )
}

const Content = (props) => {
    console.log('Parts: ', props.parts)
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

const Course = (props) => {
    console.log('Props111: ', props.course.parts)
    return (
        <div>
            <Header course={props.course.name}/>
            <Content parts={props.course.parts}/>
        </div>
    )
}

export default Course
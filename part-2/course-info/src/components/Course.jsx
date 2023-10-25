import HTag from "./HTag"

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part name={part.name} exercises={part.exercises} key={part.id}/>)}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Total = ({parts}) => {
  let totalExercises = parts.reduce((total, current) => total + current.exercises, 0);

  return (
    <p>
      total of {totalExercises} exercises
    </p>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <HTag textContent={course.name} level={2} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course
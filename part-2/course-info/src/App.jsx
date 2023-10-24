import { createElement } from 'react';

const HTag = ({textContent, level}) => {
  return createElement(`h${level}`, null, `${textContent}`);
  
}

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

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} key={course.id}/>
}

export default App
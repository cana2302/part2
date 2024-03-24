
const Course = ({ course }) => {

  const result = course.parts.reduce((sum, exerc) => {
    return sum + exerc.exercises;
  }, 0);

  return (
    <>
      <h2>{course.name}</h2>
      {course.parts.map(course_part => 
        <p key={course_part.id}>
          {course_part.name}&nbsp;{course_part.exercises}
        </p>
      )}
      <p><strong>Total of {result} exercises</strong></p>
    </>
  )
};

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

  return (
      <Course course={course} />
  )
}

export default App

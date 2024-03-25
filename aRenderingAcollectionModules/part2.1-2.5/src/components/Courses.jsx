import React from 'react';

const Courses = ({ courses }) => {

  return (
    <>
      {courses.map(course => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          {course.parts.map(course_part => (
            <p key={course_part.id}>
              {course_part.name}&nbsp;{course_part.exercises}
            </p>
          ))}
          <p><strong>Total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong></p>
        </div>
      ))}      
    </>
  );
};

export default Courses;
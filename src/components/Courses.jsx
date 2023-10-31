import Course from "./Course";

function Courses({ courses, removeCourse }) {
  return (
    <>
      {courses.map((course) => {
        return (
          <Course key={course.id} {...course} removeOneCourse={removeCourse} />
        );
      })}
    </>
  );
}

export default Courses;

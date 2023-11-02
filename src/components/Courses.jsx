import { useState } from "react";
import {
  HiOutlineArrowSmallRight,
  HiOutlineArrowSmallLeft,
} from "react-icons/hi2";

function Courses({ courses }) {
  const coursesLength = courses.length - 1;
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];

  const randomCourseGenerate = () => {
    setIndex(Math.floor(Math.random() * courses.length));
  };

  const prevCourse = () => {
    setIndex(index === 0 ? coursesLength : index - 1);
  };

  const nextCourse = () => {
    setIndex(index === coursesLength ? 0 : index + 1);
  };

  return (
    <>
      <div className="button-container">
        <button onClick={randomCourseGenerate}>Generate Random Course</button>
      </div>
      <div className="container">
        <div className="icon-left">
          <HiOutlineArrowSmallLeft
            style={{
              fontSize: "32px",
              padding: "10px",
              margin: "5px",
              borderRadius: "50%",
            }}
            onClick={prevCourse}
          />
        </div>
        <div className="courseBox">
          <h2>{title}</h2>
          <p>{content}</p>
          <h4>PRICE: {price} TL</h4>
        </div>
        <div className="icon-right" onClick={nextCourse}>
          <HiOutlineArrowSmallRight
            style={{
              fontSize: "32px",
              padding: "10px",
              margin: "5px",
              borderRadius: "50%",
            }}
          />
        </div>
        {/* {courses.map((course) => {
        return (
          <Course key={course.id} {...course} removeOneCourse={removeCourse} />
        );
      })} */}
      </div>
    </>
  );
}

export default Courses;

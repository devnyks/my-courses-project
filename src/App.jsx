import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Courses from "./components/Courses";
import Loading from "./components/Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const deleteCourse = (id) => {
    const afterDeletedCourse = courses.filter((course) => course.id !== id);
    setCourses(afterDeletedCourse);
  };
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setTimeout(() => {
        setLoading(false);
      }, 250);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <>
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div>
              <h1>My Courses</h1>
            </div>
            {courses.length === 0 ? (
              <div>
                <h2>You deleted all courses!</h2>
                <button style={{ marginLeft: "20px" }} onClick={fetchCourses}>
                  Refresh
                </button>
              </div>
            ) : (
              <Courses courses={courses} removeCourse={deleteCourse} />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;

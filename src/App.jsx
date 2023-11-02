import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Courses from "./components/Courses";
import Loading from "./components/Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
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
            <Courses courses={courses} />
          </>
        )}
      </div>
    </>
  );
}

export default App;

import Angular from "C:/Users/cansu/Desktop/course-app/src/images/angular.jpg";
import Bootstrap from "C:/Users/cansu/Desktop/course-app/src/images/bootstrap5.png";
import Ccsharp from "C:/Users/cansu/Desktop/course-app/src/images/ccsharp.png";
import CompleteWeb from "C:/Users/cansu/Desktop/course-app/src/images/kompleweb.jpg";
import 'C:/Users/cansu/Desktop/course-app/src/companent/Course.css'

const courseMap = {
  Angular: Angular,
  Bootstrap: Bootstrap,
  Ccsharp: Ccsharp,
  CompleteWeb: CompleteWeb,
};

const courseAdd = ({ courseName }) => {
  console.log(courseMap[courseName])
  return (
    <div className="course-wrap">
      <img className="courseImg" src={courseMap[courseName]} alt="course" />
    </div>
  );
};

export default courseAdd;
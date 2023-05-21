import "./App.css";
import Course from "./companent/Course.js";
import Angular from "./images/angular.jpg";
import bootstrap5 from "./images/bootstrap5.png";
import ccsharp from "./images/ccsharp.png";
import kompleweb from "./images/kompleweb.jpg";
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <section className="hero is-success">
        <div className="hero-body">
          <p className="title">Courses</p>
        </div>
      </section>
      <div className="container ">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular Course"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ex voluptas maiores, adipisci illo, non autem doloribus quae qui veritatis minima ipsum reiciendis impedit consequatur at omnis fugit recusandae atque."
              />
            </div>
            <div className="column">
              <Course
                image={bootstrap5}
                title="Bootstrap 5 Course"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ex voluptas maiores, adipisci illo, non autem doloribus quae qui veritatis minima ipsum reiciendis impedit consequatur at omnis fugit recusandae atque."
              />
            </div>
            <div className="column">
              <Course
                image={kompleweb}
                title="Complete Web Course"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ex voluptas maiores, adipisci illo, non autem doloribus quae qui veritatis minima ipsum reiciendis impedit consequatur at omnis fugit recusandae atque."
              />
            </div>
            <div className="column">
              <Course
                image={ccsharp}
                title="Programmer Course"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ex voluptas maiores, adipisci illo, non autem doloribus quae qui veritatis minima ipsum reiciendis impedit consequatur at omnis fugit recusandae atque."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

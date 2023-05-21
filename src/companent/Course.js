import React from "react";

const Course = ({ title, description, image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="courses" />
        </figure>
      </div>
      <div className="card-content">
        <div classNames="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        
        <div className="content">{description}</div>
      </div>
    </div>
  );
};

export default Course;

import React from "react";
import "./main.css";

const video = {
  "Falcon 1": "moon",
  "Falcon 9": "earth",
  "Falcon Heavy": "mars",
  other: "space",
};

function Main({ rocket, name }) {
  return (
    <section className="main">
      <h1 className="title">{
        name || rocket}
      </h1>

      {rocket && (
        <div className="video-container">
          <video
            className="video"
            autoPlay
            loop
            muted
            // hesOwnProperty - проверяет есть ли такое свойство в объекте, чере video[rocket] вытаскиваем нужное свойство
            src={`./video/${
              video.hasOwnProperty(rocket) ? video[rocket] : video.other
            }.mp4`}
          ></video>
        </div>
      )}
    </section>
  );
}

export default Main;

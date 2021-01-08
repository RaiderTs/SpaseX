import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useLaunches from "../Hooks/useLaunches";
import { Link } from "react-router-dom";
import Youtube from "react-youtube"
import "./details.css";
import Main from "../Main/Main";

const Details = (props) => {
  //  console.log(props.match.params.id)

  const [launch, setLaunch] = useState(null);

  const { getLaunch } = useLaunches();

  useEffect(() => {
    setLaunch(getLaunch(props.match.params.id));
  }, [getLaunch, props.match.params.id]);

  console.log(launch);

  const history = useHistory();

  if (!launch) return <div>Загружаем....</div>; // Выводим что-то пока грузится страница

  return (
    <>
      <Main name={launch.name} />
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src={launch.links.patch.small} alt={launch.name} />
            </div>
            <div className="details-content">
              <p className="details-description">{launch?.details}</p>
            </div>
          </div>
          {/* <div>
            <iframe
              className="details-youtube"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dLQ2tZEH6G0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div> */}
          <Youtube className="details-youtube"  videoId={launch.links.youtube_id}/>
        </div>
        <Link onClick={history.goBack} className="button button-back">
          go back
        </Link>
      </main>
    </>
  );
};

export default Details;

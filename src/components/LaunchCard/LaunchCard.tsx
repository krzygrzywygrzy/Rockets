import React from "react";
import Launch from "../../models/Launch";
import "./launchCard.css";

interface Props {
  launch: Launch;
}

const LaunchCard = React.memo<Props>(({ launch }) => {
  return (
    <div className="launch">
      <p>
        <b>{launch.mission_name}</b>
      </p>
      <p>Rocket name: {launch.rocket.rocket_name}</p>
      <p>Date: {launch.launch_date_local}</p>
      {launch.links.article_link && (
        <p>
          <a href={launch.links.article_link} target="_blank">
            Check out article
          </a>
        </p>
      )}
    </div>
  );
});

export default LaunchCard;

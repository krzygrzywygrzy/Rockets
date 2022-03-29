import "./launchesList.css";
import { useQuery } from "@apollo/client";
import React from "react";
import {
  GET_LAUNCHES,
  LaunchesData,
  LaunchesVars,
} from "../../graphql/getLaunches.query";
import { Waypoint } from "react-waypoint";
import LaunchCard from "../LaunchCard/LaunchCard";

const LaunchesList: React.FC = () => {
  const { data, fetchMore, networkStatus } = useQuery<
    LaunchesData,
    LaunchesVars
  >(GET_LAUNCHES, {
    variables: { limit: 10 },
    notifyOnNetworkStatusChange: true,
  });

  if (!data || !data.launchesPast)
    return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <header>Rocket Launches! 🚀</header>
      <div>
        {data.launchesPast.map((launch, index) => (
          <React.Fragment key={index}>
            <LaunchCard launch={launch} />
            {index === data.launchesPast.length - 1 && (
              <Waypoint
                onEnter={() =>
                  fetchMore({
                    variables: { limit: 10, offset: data.launchesPast.length },
                  })
                }
              />
            )}
          </React.Fragment>
        ))}
      </div>
      {networkStatus === 3 && (
        <div className="load-more">Loading more rockets...</div>
      )}
    </div>
  );
};

export default LaunchesList;

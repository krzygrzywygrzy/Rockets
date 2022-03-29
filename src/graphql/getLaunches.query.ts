import { gql } from "@apollo/client";
import Launch from "../models/Launch";

export const GET_LAUNCHES = gql`
  query GetLaunches($limit: Int!, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      mission_name
      launch_date_local
      links {
        article_link
      }
      rocket {
        rocket_name
      }
    }
  }
`;

export interface LaunchesData {
  launchesPast: Launch[];
}

export interface LaunchesVars {
  limit: number;
  offset?: number;
}

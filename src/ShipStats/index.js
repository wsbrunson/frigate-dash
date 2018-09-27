// @flow
import React from "react";
import ShipStatsItem from "./ShipStatsItem";
import styled from "react-emotion";
import type { TypeShip } from "../types.flow";

const StatsContainer = styled("div")`
  border: 6px solid black;
  padding: 1rem;
  width: 12rem;
`;

const StatsHeading = styled("h2")`
  margin: 0;
  margin-bottom: 1rem;
`;

const StatsList = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 0;
`;

type TypeProps = {
  ship: TypeShip
};

const ShipStats = ({ ship }: TypeProps) => (
  <StatsContainer>
    <StatsHeading>Stats</StatsHeading>
    <StatsList>
      <ShipStatsItem label="Credits" value={String(ship.value)} />
      <ShipStatsItem label="Health" value={`${ship.stats.health * 100}%`} />
      <ShipStatsItem label="Armor" value={String(ship.stats.armor)} />
      <ShipStatsItem label="Speed" value={String(ship.stats.speed)} />
      <ShipStatsItem label="Weapons" value={String(ship.stats.weapons)} />
    </StatsList>
  </StatsContainer>
);

export default ShipStats;

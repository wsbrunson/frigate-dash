// @flow
import React from "react";
import styled from "react-emotion";

const StatsListItem = styled("li")`
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-top: 3px solid black;
  display: flex;
  justify-content: space-between;

  &:last-child {
    border-bottom: 3px solid black;
  }
`;

type TypeProps = {
  label: string,
  value: string
};

const ShipStatsItem = ({ label, value }: TypeProps) => (
  <StatsListItem>
    <span>{label}</span>
    <span>{value}</span>
  </StatsListItem>
);

export default ShipStatsItem;

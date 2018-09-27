// @flow
import React from "react";
import styled from "react-emotion";
import type { TypeShip } from "../types.flow";

const ShipItem = styled("li")`
  display: flex;
  width: 100%;
  border-top: 3px solid black;
  justify-content: space-between;
  background-color: white;
  transition: all 2s;
  padding: 0.3rem;
  cursor: pointer;

  &:hover {
    background-color: lightgreen;
    transition: all 1s;
  }

  &:last-child {
    border-bottom: 3px solid black;
  }
`;

const ShipCallSign = styled("span")`
  font-family: monospace;
  font-size: 1.3rem;
`;

type TypeProps = {
  ship: TypeShip,
  onShipClick: string => void
};

const SaleShip = ({ ship, onShipClick }: TypeProps) => (
  <ShipItem onClick={() => onShipClick(ship.id)}>
    <ShipCallSign>{ship.callSign}</ShipCallSign>
    <span>${ship.value}</span>
  </ShipItem>
);

export default SaleShip;

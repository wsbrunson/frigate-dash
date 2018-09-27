// @flow
import * as React from "react";
import Panel from "../components/Panel";
import styled from "react-emotion";
import type { TypeShip } from "../types.flow";

const ShipsHeading = styled("h2")`
  margin: 0;
  margin-bottom: 0.5rem;
`;

type TypeOnShipClick = string => void;

type TypeProps = {
  ships: TypeShip[],
  heading: string,
  ShipListItem: React.ComponentType<{
    ship: TypeShip,
    onShipClick: TypeOnShipClick
  }>,
  onShipClick: TypeOnShipClick
};

const ShipList = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
`;

const ShipsPanel = ({
  ships,
  heading,
  ShipListItem,
  onShipClick
}: TypeProps) => (
  <Panel>
    <ShipsHeading>{heading}</ShipsHeading>
    <ShipList>
      {ships.map(ship => (
        <ShipListItem key={ship.id} ship={ship} onShipClick={onShipClick} />
      ))}
    </ShipList>
  </Panel>
);

export default ShipsPanel;

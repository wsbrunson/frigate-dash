// @flow
import * as React from "react";
import { navigate } from "@reach/router";
import Panel from "../components/Panel";
import SaleShip from "./SaleShip";
import ShipsPanel from "./ShipsPanel";
import UserShip from "./UserShip";
import styled from "react-emotion";
import type { TypeAppActions, TypeAppState } from "../types.flow";

const DashboardContainer = styled("div")`
  display: flex;
`;

type TypeProps = {
  appState: TypeAppState,
  appActions: TypeAppActions,
  children: React.Node
};

const Dashboard = ({ appState, appActions, children }: TypeProps) => (
  <React.Fragment>
    <DashboardContainer>
      <ShipsPanel
        heading="My Ships"
        ships={Object.keys(appState.userShips).map(id => ({
          ...appState.userShips[id]
        }))}
        ShipListItem={UserShip}
        onShipClick={id => navigate(`/ship/${id}`)}
      />
      <ShipsPanel
        heading="Ships For Sale"
        ships={Object.keys(appState.saleShips).map(id => ({
          ...appState.saleShips[id]
        }))}
        ShipListItem={SaleShip}
        onShipClick={id => navigate(`/buy-ship/${id}`)}
      />
      <Panel>
        <span>Credits: </span>
        <span>{appState.credits}</span>
        <button onClick={() => appActions.addCredits(3000)}>
          Add Credits +
        </button>
      </Panel>
    </DashboardContainer>
    {children}
  </React.Fragment>
);

export default Dashboard;

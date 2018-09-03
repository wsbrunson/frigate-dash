// @flow
import "@reach/dialog/styles.css";
import { Router } from "@reach/router";
import AppState from "./AppState";
import BuyShipModal from "./BuyShipModal";
import Dashboard from "./Dashboard";
import EditShipModal from "./EditShipModal";
import React from "react";
import styled from "react-emotion";

const borderWidth = 6;
const borderStyle = `${borderWidth}px solid black;`;

const AppContainer = styled("div")`
  height: calc(100vh - ${borderWidth * 2}px);
  width: calc(100vw - ${borderWidth * 2}px);
  border: ${borderStyle};
  padding: 1rem;
`;

const App = () => (
  <AppState>
    {({ appState, appActions }) => (
      <AppContainer>
        <Router>
          <Dashboard path="/" appState={appState} appActions={appActions}>
            <EditShipModal
              path="/ship/:id"
              appState={appState}
              appActions={appActions}
              id=""
            />
            <BuyShipModal
              path="/buy-ship/:id"
              appState={appState}
              appActions={appActions}
              id=""
            />
          </Dashboard>
        </Router>
      </AppContainer>
    )}
  </AppState>
);

export default App;

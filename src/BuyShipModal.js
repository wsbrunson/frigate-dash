// @flow
import { Dialog } from "@reach/dialog";
import { Match, navigate } from "@reach/router";
import Component from "@reach/component-component";
import React from "react";
import styled from "react-emotion";
import type { TypeAppActions, TypeAppState, TypeShip } from "./types.flow";

type TypeProps = {
  appState: TypeAppState,
  appActions: TypeAppActions,
  id: string
};

const BuyShipModal = ({ appState, appActions, id }: TypeProps) => (
  <Match path="/buy-ship/:id">
    {props => (
      <Component initialState={{ isDialogOpen: props.match }}>
        {({ state }) => (
          <Dialog isOpen={state.isDialogOpen}>
            <button onClick={() => navigate("/")}>Close</button>
            <span>
              ${appState.saleShips[id] ? appState.saleShips[id].value : 0}
            </span>
            <button
              onClick={() => {
                navigate("/");
                appActions.buyShip(appState.saleShips[id]);
              }}
            >
              Buy Ship
            </button>
            <button onClick={() => navigate("/")}>No Thanks</button>
          </Dialog>
        )}
      </Component>
    )}
  </Match>
);

export default BuyShipModal;

// @flow
import { Dialog } from "@reach/dialog";
import { Match, navigate } from "@reach/router";
import {
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalHeading
} from "../components";
import { getSaleShipValue } from "../state/selectors";
import Button from "../components/Button";
import Component from "@reach/component-component";
import React from "react";
import ShipStats from "../ShipStats";
import type { TypeAppActions, TypeAppState } from "../types.flow";

type TypeProps = {
  appState: TypeAppState,
  appActions: TypeAppActions,
  id: string
};

const BuyShipModal = ({ appState, appActions, id }: TypeProps) => (
  <Match path="/buy-ship/:id">
    {({ match }) => (
      <Component initialState={{ isDialogOpen: match }}>
        {({ state }) => (
          <Dialog isOpen={state.isDialogOpen}>
            <ModalHeader>
              <ModalHeading>Buy Ship</ModalHeading>
              <Button type="button" onClick={() => navigate("/")}>
                Close
              </Button>
            </ModalHeader>
            <ModalContent>
              <ShipStats ship={appState.saleShips[id]} />
            </ModalContent>
            <ModalFooter>
              <Button
                type="button"
                disabled={appState.credits < getSaleShipValue(appState, id)}
                onClick={() => {
                  navigate("/");
                  appActions.buyShip(appState.saleShips[id]);
                }}
              >
                Buy Ship
              </Button>
              <Button type="button" onClick={() => navigate("/")}>
                No Thanks
              </Button>
            </ModalFooter>
          </Dialog>
        )}
      </Component>
    )}
  </Match>
);

export default BuyShipModal;

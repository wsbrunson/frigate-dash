// @flow
import * as React from "react";
import { generateShips } from "./utilities/generateShips";
import { omit } from "ramda";
import Chance from "chance";
import type { TypeAppActions, TypeAppState, TypeShip } from "./types.flow";

const LOCAL_STORAGE_KEY = "frigate-dash-data";

const createNormalizedShips = chance =>
  generateShips(chance).reduce((map, ship) => {
    map[ship.id] = ship;

    return map;
  }, {});

type TypeProps = {
  children: ({
    appState: TypeAppState,
    appActions: TypeAppActions
  }) => React.Node
};

export default class AppState extends React.Component<TypeProps, TypeAppState> {
  state = {
    userShips: {},
    saleShips: {},
    credits: 0
  };

  componentDidMount() {
    const chance = new Chance();
    const localState = JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_KEY)
    );

    if (localState) {
      this.setState(localState);
    } else {
      const state = {
        userShips: {
          ...createNormalizedShips(chance)
        },
        saleShips: {
          ...createNormalizedShips(chance)
        },
        credits: chance.integer({ min: 1, max: 50000 })
      };

      this.updateState(state);
    }
  }

  updateState = (state: $Shape<TypeAppState>) => {
    this.setState({
      ...this.state,
      ...state
    });

    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        ...this.state,
        ...state
      })
    );
  };

  updateShip = (ship: TypeShip) =>
    this.updateState({
      userShips: {
        ...this.state.userShips,
        ships: {
          ...this.state.userShips.ships,
          [ship.id]: ship
        }
      }
    });

  addCredits = (credits: number) =>
    this.updateState({
      credits: this.state.credits + credits
    });

  buyShip = (shipToBuy: TypeShip) => {
    const state = {
      saleShips: {
        ...this.state.saleShips,
        ...omit(shipToBuy.id, this.state.saleShips)
      },
      userShips: {
        ...this.state.userShips,
        [shipToBuy.id]: shipToBuy
      },
      credits: this.state.credits - shipToBuy.value
    };

    this.updateState(state);
  };

  render() {
    return this.props.children({
      appState: {
        ...this.state
      },
      appActions: {
        updateShip: this.updateShip,
        addCredits: this.addCredits,
        buyShip: this.buyShip
      }
    });
  }
}

// @flow
import type { TypeAppState, TypeShip } from "./types.flow";

export const getUserShip = (state: TypeAppState, id: string): TypeShip =>
  state.userShips[id];
export const getSaleShip = (state: TypeAppState, id: string): TypeShip =>
  state.saleShips[id];

export const getUserShipValue = (state: TypeAppState, id: string): number => {
  const ship = getUserShip(state, id);

  return ship ? ship.value : 0;
};

export const getSaleShipValue = (state: TypeAppState, id: string): number => {
  const ship = getSaleShip(state, id);

  return ship ? ship.value : 0;
};

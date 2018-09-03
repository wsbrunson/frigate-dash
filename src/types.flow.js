// @flow
export type TypeShip = {|
  callSign: string,
  captainName: string,
  id: string,
  shipName: string,
  health: number,
  value: number
|};

type TypeShips = {
  [string]: TypeShip
};

export type TypeAppState = {|
  userShips: TypeShips,
  saleShips: TypeShips,
  credits: number
|};

export type TypeAppActions = {|
  updateShip: TypeShip => void,
  addCredits: number => void,
  buyShip: TypeShip => void
|};

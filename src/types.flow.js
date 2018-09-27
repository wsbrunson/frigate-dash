// @flow

export type TypeShipStats = {|
  health: number,
  armor: number,
  speed: number,
  weapons: number
|};

export type TypeShip = {|
  callSign: string,
  captainName: string,
  id: string,
  shipName: string,
  value: number,
  stats: TypeShipStats
|};

type TypeShips = {|
  [string]: TypeShip
|};

export type TypeAppState = {|
  userShips: TypeShips,
  saleShips: TypeShips,
  credits: number
|};

export type TypeAppActions = {|
  updateShip: TypeShip => void,
  addCredits: number => void,
  buyShip: TypeShip => void,
  sellShip: TypeShip => void
|};

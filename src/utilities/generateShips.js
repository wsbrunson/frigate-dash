// @flow
import type { TypeShip } from "../types.flow";
const generateCharacterNoSymbols = chance =>
  chance.character({ alpha: true, casing: "upper" });

const generateCallSign = chance =>
  `${generateCharacterNoSymbols(chance)}${generateCharacterNoSymbols(
    chance
  )}${generateCharacterNoSymbols(chance)}${generateCharacterNoSymbols(chance)}`;

const generateShip = chance => (id): TypeShip => ({
  id,
  callSign: generateCallSign(chance),
  captainName: chance.name(),
  shipName: chance
    .sentence({ words: chance.integer({ min: 1, max: 3 }) })
    .split(" ")
    .map(chance.capitalize)
    .join(" ")
    .replace(".", ""),
  value: chance.integer({ min: 2000, max: 64000 }),
  health: 1
});

export const generateShips = (chance: Object): TypeShip[] => {
  const numberOfShips = chance.integer({ min: 1, max: 10 });

  return chance.n(chance.guid, numberOfShips).map(generateShip(chance));
};

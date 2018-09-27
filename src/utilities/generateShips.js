// @flow
import type { TypeShip, TypeShipStats } from "../types.flow";
const generateCharacterNoSymbols = chance =>
  chance.character({ alpha: true, casing: "upper" });

const generateCallSign = chance =>
  `${generateCharacterNoSymbols(chance)}${generateCharacterNoSymbols(
    chance
  )}${generateCharacterNoSymbols(chance)}${generateCharacterNoSymbols(chance)}`;

const generateShip = chance => (id): TypeShip => {
  const initialShip = {
    id,
    callSign: generateCallSign(chance),
    captainName: chance.name(),
    shipName: chance
      .sentence({ words: chance.integer({ min: 1, max: 3 }) })
      .split(" ")
      .map(chance.capitalize)
      .join(" ")
      .replace(".", ""),
    stats: {
      health: 1,
      armor: chance.integer({ min: 1, max: 10 }),
      speed: chance.integer({ min: 1, max: 10 }),
      weapons: chance.integer({ min: 1, max: 10 })
    }
  };

  return {
    ...initialShip,
    value: calculateValue(initialShip.stats)
  };
};

export const calculateValue = (stats: TypeShipStats) => {
  const armorValue = stats.armor * 3000;
  const weaponsValue = stats.weapons * 4000;
  const speedValue = stats.speed * 2000;

  return (armorValue + weaponsValue + speedValue) * stats.health;
};

export const generateShips = (chance: Object): TypeShip[] => {
  const numberOfShips = chance.integer({ min: 1, max: 10 });

  return chance.n(chance.guid, numberOfShips).map(generateShip(chance));
};

import { Flex } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import Planet from '../Planet/Planet';
import planets from '../../data';
import Sun from '../Sun/Sun';

function System() {
  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <div id="galaxy">
        <div id="sun" />
      </div>
      {planets.map((planet) => (
        <Planet
          key={uuidv4()}
          radius={planet.radius}
          orbitalSpeed={planet.orbitalSpeed}
          orbitDimensions={planet.orbitDimensions}
          speedAroundAxis={planet.speedAroundAxis}
          planetColor={planet.planetColor}
        />
      ))}
    </Flex>
  );
}

export default System;

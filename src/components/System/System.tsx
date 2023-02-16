import { Flex, Image } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import Planet from '../Planet/Planet';
import planets from '../../data';
import Sun from '../Sun/Sun';
import AsteroidBelt from '../AsteroidBelt/AsteroidBelt';

function System() {
  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <div className="stars" />
      <div className="twinkling" />
      <div id="galaxy">
        <AsteroidBelt orbitalSpeed={30} orbitDimensions={90} />
        <AsteroidBelt orbitalSpeed={30} orbitDimensions={190} />
        <Sun />
        {planets.map((planet) => (
          <Planet
            key={uuidv4()}
            orbitalSpeed={planet.orbitalSpeed}
            orbitDimensions={planet.orbitDimensions}
            speedAroundAxis={planet.speedAroundAxis}
            planetImg={planet.planetImg}
            size={planet.size}
            isClockwise={planet.isClockwise}
          />
        ))}
      </div>
    </Flex>
  );
}

export default System;

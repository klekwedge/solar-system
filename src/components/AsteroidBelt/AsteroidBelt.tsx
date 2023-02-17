import { Box, Image } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import getRandomCoord from '../../hooks/useRandomCoord';

interface AsteroidBeltProps {
  orbitalSpeed: number;
  orbitDimensions: number;
}

function AsteroidBelt({ orbitalSpeed, orbitDimensions }: AsteroidBeltProps) {

  const asteroids = new Array(100).fill(1).map((item) => getRandomCoord(orbitDimensions));

  return (
    <Box
      className="asteroid-orbit"
      w={`${orbitDimensions}em`}
      h={`${orbitDimensions}em`}
      animation={`orbitAnimNotClockwise ${orbitalSpeed}s linear 0s infinite`}
    >
      {asteroids.map((styles) => (
        <Image
          style={{
            ...styles,
          }}
          src="/img/meteorite.png"
          w="50px"
          h="50px"
          position="absolute"
          key={uuidv4()}
        />
      ))}
    </Box>
  );
}

export default AsteroidBelt;

import { Box, Image } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

interface AsteroidBeltProps {
  orbitalSpeed: number;
  orbitDimensions: number;
}

function AsteroidBelt({ orbitalSpeed, orbitDimensions }: AsteroidBeltProps) {
  function getRandomCoord() {
    const radius = orbitDimensions * 8;

    const x0 = radius;
    const y0 = radius;

    const x = Math.floor(Math.random() * (radius + 1));
    const y = Math.floor(Math.sqrt(radius ** 2 - (x - x0) ** 2) + y0);

    const left = Math.floor(Math.random() * 2);
    const top = Math.floor(Math.random() * 2);

    let styles;

    if (left) {
      styles = {
        left: `${x}px`,
      };
    } else {
      styles = {
        right: `${x}px`,
      };
    }

    if (top) {
      styles = {
        ...styles,
        top: `${y}px`,
      };
    } else {
      styles = {
        ...styles,
        bottom: `${y}px`,
      };
    }

    return styles;
  }

  const asteroids = new Array(100).fill(1).map((item) => getRandomCoord());

  return (
    <Box
      className="asteroid-orbit"
      w={`${orbitDimensions}em`}
      h={`${orbitDimensions}em`}
      mt={`-${orbitDimensions / 2}em`}
      ml={`-${orbitDimensions / 2}em`}
      animation={`orbitAnim ${orbitalSpeed}s linear 0s infinite`}
    >
      {asteroids.map((styles) => (
        <Image
          style={{
            ...styles,
          }}
          src="/public/img/meteorite.png"
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

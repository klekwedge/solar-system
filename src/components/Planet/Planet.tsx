import { Box, Image } from '@chakra-ui/react';
import { useState } from 'react';
import getRandomCoord, { getStandardCoord } from '../../hooks/useRandomCoord';
import './Planet.scss';

interface PlanetProps {
  orbitalSpeed: number;
  orbitDimensions: number;
  speedAroundAxis: number;
  planetImg: string;
  size: number;
  isClockwise: boolean;
}

function Planet({ orbitalSpeed, orbitDimensions, speedAroundAxis, planetImg, size, isClockwise }: PlanetProps) {
  const coord = getStandardCoord();

  return (
    <Box
      className="orbit"
      w={`${orbitDimensions}em`}
      h={`${orbitDimensions}em`}
      // animation={
      //   isClockwise
      //     ? `orbitAnimClockwise ${orbitalSpeed}s linear 0s infinite`
      //     : `orbitAnimNotClockwise ${orbitalSpeed}s linear 0s infinite`
      // }
    >
      <Image
        className="planet"
        style={{ ...coord }}
        // animation={`rotateAnim ${speedAroundAxis}s linear 0s infinite`}
        src={planetImg}
        w={`${size}px`}
        h={`${size}px`}
      />
    </Box>
  );
}

export default Planet;

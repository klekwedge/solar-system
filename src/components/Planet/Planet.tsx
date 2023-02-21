import { Box, Image, keyframes } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
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
  const [coord, setCoord] = useState(getStandardCoord());
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (deg >= 360) {
        setDeg(0);
      } else {
        setDeg((pastValue) => pastValue + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);


  return (
    <Box
      className="orbit"
      w={`${orbitDimensions}em`}
      h={`${orbitDimensions}em`}
      animation={
        isClockwise
          ? `orbitAnimClockwise ${orbitalSpeed}s linear 0s infinite`
          : `orbitAnimNotClockwise ${orbitalSpeed}s linear 0s infinite`
      }
    >
      <Image
        className="planet"
        style={{ ...coord,
          transition: `${speedAroundAxis}s linear 0s infinite`,
          transform: `${coord?.transform} rotate(${(deg)}deg)` }}
        // animation={`rotateAnim ${speedAroundAxis}s linear 0s infinite`}
        src={planetImg}
        w={`${size}px`}
        h={`${size}px`}
      />
    </Box>
  );
}

export default Planet;

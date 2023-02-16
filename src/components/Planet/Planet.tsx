import { Box, Image } from '@chakra-ui/react';
import './Planet.scss';

interface PlanetProps {
  orbitalSpeed: number;
  orbitDimensions: number;
  speedAroundAxis: number;
  planetImg: string;
}

function Planet({ orbitalSpeed, orbitDimensions, speedAroundAxis, planetImg }: PlanetProps) {
  return (
    <Box
      className="orbit"
      w={`${orbitDimensions}em`}
      h={`${orbitDimensions}em`}
      mt={`-${orbitDimensions / 2}em`}
      ml={`-${orbitDimensions / 2}em`}
      animation={`orbitAnim ${orbitalSpeed}s linear 0s infinite`}
    >
      <Image
        className="planet"
        left={`${50}%`}
        transform={`translateY(-${50}%)`}
        top="0"
        animation={`rotateAnim ${speedAroundAxis}s linear 0s infinite`}
        src={planetImg}
        w="70px"
        h="70px"
      />
    </Box>
  );
}

export default Planet;

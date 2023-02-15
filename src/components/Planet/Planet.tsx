import { Box } from '@chakra-ui/react';
import './Planet.scss';

interface PlanetProps {
  radius: number;
  orbitalSpeed: number;
  orbitDimensions: number;
  speedAroundAxis: number;
  planetColor: string;
}

function Planet({ radius, orbitalSpeed, orbitDimensions, speedAroundAxis, planetColor }: PlanetProps) {
  return (
    <Box
      className="orbit"
      w={`${orbitDimensions}em`}
      h={`${orbitDimensions}em`}
      mt={`-${orbitDimensions / 2}em`}
      ml={`-${orbitDimensions / 2}em`}
      animation={`orbitAnim ${orbitalSpeed}s linear 0s infinite`}
      fontSize={`${radius}em`}
    >
      <Box
        className="planet"
        left="50%"
        top="1%"
        backgroundColor={planetColor}
        animation={`rotateAnim ${speedAroundAxis}s linear 0s infinite`}
      />
    </Box>
  );
}

export default Planet;

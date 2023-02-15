import { Box } from '@chakra-ui/react';
import './Planet.scss';

interface PlanetProps {
  size: number;
  orbitalSpeed: number;
  orbitDimensions: number;
  speedAroundAxis: number;
  backgroundColor: string;
}

function Planet({ size, orbitalSpeed, orbitDimensions, speedAroundAxis, backgroundColor }: PlanetProps) {
  return (
    <Box
      className="orbit"
      id="mercury"
      w={`${orbitDimensions}em`}
      h={`${orbitDimensions}em`}
      mt={`-${orbitDimensions / 2}em`}
      ml={`-${orbitDimensions / 2}em`}
      animation={`orbitAnim ${orbitalSpeed}s`}
    >
      <Box className="planet" />
    </Box>
  );
}

export default Planet;

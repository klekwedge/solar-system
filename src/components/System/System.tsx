import { Flex } from '@chakra-ui/react';
import Planet from '../Planet/Planet';
import Sun from '../Sun/Sun';

function System() {
  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <div id="galaxy">
        <div id="sun" />
      </div>
      <Planet radius={3} orbitalSpeed={10} speedAroundAxis={3} planetColor="#2fdc08" orbitDimensions={12} />
      <Planet radius={4} orbitalSpeed={5} speedAroundAxis={3} planetColor="#537FE7" orbitDimensions={12} />
      <Planet radius={5} orbitalSpeed={15} speedAroundAxis={3} planetColor="#ed23d2" orbitDimensions={12} />
    </Flex>
  );
}

export default System;

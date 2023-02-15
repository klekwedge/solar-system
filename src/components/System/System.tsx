import { Flex } from '@chakra-ui/react';
import Planet from '../Planet/Planet';
import Sun from '../Sun/Sun';

function System() {
  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      <div id="galaxy">
        <div id="sun" />
      </div>
      <Planet size={4} orbitalSpeed={10} speedAroundAxis={20} backgroundColor="blue" orbitDimensions={12} />
    </Flex>
  );
}

export default System;

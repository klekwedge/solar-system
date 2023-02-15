import { Flex } from '@chakra-ui/react';
import Planet from '../Planet/Planet';
import Sun from '../Sun/Sun';

function System() {
  return (
    <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
      {/* <Sun /> */}
      <Planet />
    </Flex>
  );
}

export default System;

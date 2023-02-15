import { Box } from '@chakra-ui/react';
import './Planet.scss';

function Planet() {
  return (
    <>
      <div id="galaxy">
        <div id="sun" />
      </div>
      <div className="orbit" id="mercury">
        <div className="planet" />
        {/* <Box className="planet" w="50px" h="50px" backgroundColor="#537FE7" borderRadius="50%" /> */}
      </div>
    </>
  );
}

export default Planet;

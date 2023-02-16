import { Box } from '@chakra-ui/react';
import System from '../System/System';

function App() {
  return (
    <Box overflow='hidden'>
      <System />
      <div className="stars" />
      <div className="twinkling" />
    </Box>
  );
}

export default App;

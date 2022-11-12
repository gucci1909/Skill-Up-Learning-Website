import { Box } from '@chakra-ui/react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllPages from './Routes/AllPages';

function App() {
  return (
    <Box className="App">
       <Navbar />
      <AllPages/>
      <Footer />
    </Box>
  );
}

export default App;

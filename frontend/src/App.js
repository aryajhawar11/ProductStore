import React from 'react'
import { Route,Routes } from 'react-router-dom';
import { Box,useColorModeValue } from '@chakra-ui/react';
import NavBar from './components/NavBar'
import HomePage from './components/pages/HomePage';
import CreatePage from './components/pages/CreatePage'




function App() {
    
  
  return (

    <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>} />

      </Routes>
      
      
    </Box>
  );
}



export default App;

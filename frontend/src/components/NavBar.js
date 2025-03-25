import { Button, Container, Flex, HStack,Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import {AddIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';


const NavBar=()=> {
    const {colorMode, toggleColorMode}= useColorMode();

    
  return <Container maxW={"1140px"} px={4} >
        <Flex 
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
            base:"column",
            sm:"row"
        }}>

<Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='2xl'
  fontWeight='extrabold'
>
  <Link to={"/"}> Product Store</Link>
</Text>

<HStack spacing={2} alignItems={"center"}>
    <Link to={"/create"}>
    <Button>
        <AddIcon fontSize={20}></AddIcon>
    </Button>
    </Link>
    <Button onClick={toggleColorMode}>
        {colorMode==="light"?<MoonIcon/>: <SunIcon></SunIcon>}

    </Button>

</HStack>


        </Flex>
      
    </Container>;
  
};

export default NavBar

import { Button, Heading, Input, useColorModeValue, VStack,Box, Container } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useProductStore } from '../../store/product';

function CreatePage() {
    const[newProduct,setNewProduct]=useState({
        name:"",
        price:"",
        image:""
    });

    const {createProduct}= useProductStore()
    const handleAddProduct=async()=>{
        const {success,message}= await createProduct(newProduct)
        console.log("success:",success)
        console.log("messsage:",message)
    }
  return (
    <Container maxW={"container.sm"}>
        <VStack spacing={0}>
            <Heading as={"h1"} size={"21"} textAlign={"center"} mb={8}>
                Create New Product
            </Heading>

            <Box
            w={"full"} bg={useColorModeValue("white","gray.800")}
            p={6} rounded={"lg"} shadow={"md"}>
                    <VStack spacing={4}>
                        <Input
                            placeholder='Product Name'
                            name='name'
                            value={newProduct.name}
                            onChange={(e)=>setNewProduct({...newProduct, name:e.target.value}) }></Input>
                        <Input
                            placeholder='Price'
                            name='price'
                            value={newProduct.price}
                            onChange={(e)=>setNewProduct({...newProduct, price:e.target.value}) }></Input>
                        <Input
                            placeholder='Image'
                            name='image'
                            value={newProduct.image}
                            onChange={(e)=>setNewProduct({...newProduct, image:e.target.value}) }></Input>

                        <Button colorScheme='blue' onClick={handleAddProduct} w='full'>Add Product</Button>        


                    </VStack>

            </Box>

        </VStack>
    </Container>
  )
}

export default CreatePage

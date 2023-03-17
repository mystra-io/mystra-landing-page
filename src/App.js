import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  Button,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" bg="#111111">
        <Grid alignItems="center" minH="100vh" p={3}>
          <VStack spacing={8}>
            <Image mr="15px" src="/mystra-logo.svg" minW="300px" maxW="300px" />
            <Box maxW="500px" color="white"> Our landing page is currently being rebranded. In the meantime, please visit the old landing page </Box>
            <Flex gap="12px" flexDir={{base: "column", md: "initial"}}>
              <Link href="https://casperarmy.org/tickets" >
                <Button color="white" _hover={{textDecoration:"none", bgColor: "#964BF7" }} bg="#964BF7">
                  Buy Call-up Ticket!
                </Button>
              </Link>
              <Link href="https://casperarmy.org/">
                <Button color="white" _hover={{textDecoration:"none" , bgColor: "#964BF7" }} bg="none" border="1px solid" borderColor="#964BF7" _hover={{bg: "#964BF7"}}>
                  Visit old landing page
                </Button>
              </Link>
            </Flex>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

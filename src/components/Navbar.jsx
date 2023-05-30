import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <>
      <Flex as="nav" p="1rem" alignItems="center" mb="2rem">
        <Heading as="h1">Cube Tasks</Heading>
        <Spacer />
        <HStack spacing="1rem">
          <Box bg="gray.200" p="10px">
            S
          </Box>
          <Text>Steve</Text>
          <Button colorScheme="blue">Logout</Button>
        </HStack>
      </Flex>
    </>
  );
};

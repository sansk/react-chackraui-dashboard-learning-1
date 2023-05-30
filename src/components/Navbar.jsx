import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

export const Navbar = () => {
  const toast = useToast();

  const handleToast = () => {
    toast({
      title: "Logged Out!",
      description: "Successfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
    });
  };

  return (
    <>
      <Flex as="nav" p="1rem" alignItems="center" mb="2rem">
        <Heading as="h1">Cube Tasks</Heading>
        <Spacer />
        <HStack spacing="1rem">
          <Avatar name="Tony" src="img/tony.jpg">
            <AvatarBadge width="1.3em" bg="teal.500">
              <Text fontSize="xs" color="white">
                3
              </Text>
            </AvatarBadge>
          </Avatar>
          <Text>Steve</Text>
          <Button colorScheme="blue" onClick={handleToast}>
            Logout
          </Button>
        </HStack>
      </Flex>
    </>
  );
};

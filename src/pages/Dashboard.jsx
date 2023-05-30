import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const btnStyles = {
    my: "1rem",
    p: "1rem",
    bg: "blue.400",
    color: "white",
    letterSpacing: "0.15rem",
    textAlign: "center",
    transition: "0.3s ease-in-out all",
    ":hover": {
      bg: "blue.700",
      letterSpacing: "0.25rem",
    },
  };
  return (
    <>
      <Container>
        <Heading as="h1">Chackra UI</Heading>
        <Text>Normal Text to go with Chakra UI. I am learning Chakra UI</Text>
        <Box sx={btnStyles}>This is a BOX</Box>
      </Container>
    </>
  );
}

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { tasks } from "../../data/db";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";

export default function Dashboard() {
  return (
    <>
      <SimpleGrid spacing="1rem" minChildWidth="300px">
        {tasks &&
          tasks.map((task) => {
            return (
              <Card
                key={task.id}
                borderTop="8px"
                borderColor="blue.400"
                bg="white">
                <CardHeader>
                  <Flex>
                    <Box w="50px" h="50px">
                      AV
                    </Box>
                    <Box>
                      <Heading as="h3" size="sm">
                        {task.title}
                      </Heading>
                      <Text>by {task.author}</Text>
                    </Box>
                  </Flex>
                </CardHeader>
                <CardBody color="gray.500">
                  <Text>{task.description}</Text>
                </CardBody>
                <Divider borderColor="gray.300" />
                <CardFooter>
                  <HStack>
                    <Button variant="ghost" leftIcon={<ViewIcon />}>
                      Watch
                    </Button>
                    <Button variant="ghost" leftIcon={<EditIcon />}>
                      Comment
                    </Button>
                  </HStack>
                </CardFooter>
              </Card>
            );
          })}
      </SimpleGrid>
    </>
  );
}

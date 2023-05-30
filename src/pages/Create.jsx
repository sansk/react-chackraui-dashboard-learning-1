import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="2rem">
          <FormLabel>Task Name:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter the task name.</FormHelperText>
        </FormControl>
        <FormControl mb="2rem">
          <FormLabel>Task Description</FormLabel>
          <Textarea
            placeholder="Enter the task description..."
            name="description"
          />
        </FormControl>
        <FormControl mb="2rem" display="flex" alignItems="center">
          <Checkbox name="isPriority" size="lg" />
          <FormLabel ml="0.5rem" mb="0">
            Make this a Priority Task
          </FormLabel>
        </FormControl>
        <Button type="submit" bg="blue.400" color="white">
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  console.log(task);

  return redirect("/");
};

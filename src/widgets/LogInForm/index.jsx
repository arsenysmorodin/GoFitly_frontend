import PasswordInput from "../../shared/PasswordInput";
import EmailInput from "../../shared/EmailInput";

import { Text, Button, FormControl, Box } from "@chakra-ui/react";

function LogInForm() {
  return (
    <Box mt="10">
      <FormControl borderRadius="md" mb="2" p="4" border="1px gray solid">
        <Text textAlign="center" fontSize="2xl" mb="10">
          Log in
        </Text>

        <EmailInput></EmailInput>

        <PasswordInput></PasswordInput>

        <Button colorScheme="red">Log in</Button>
      </FormControl>

      <Text display="flex" justifyContent="center">
        or &nbsp;
        <Button colorScheme="red" variant="link">
          sign up
        </Button>
      </Text>
    </Box>
  );
}

export default LogInForm;

import { Input, InputGroup } from "@chakra-ui/react";

function EmailInput() {
  return (
    <InputGroup>
      <Input placeholder="Email" type="email" mb="4"></Input>
    </InputGroup>
  );
}

export default EmailInput;

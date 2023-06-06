import React from "react";
import { Input, InputRightElement, Button, InputGroup } from "@chakra-ui/react";

function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup>
      <Input
        placeholder="Password"
        type={show ? "text" : "password"}
        mb="4"
      ></Input>
      <InputRightElement width="4.5rem">
        <Button onClick={handleClick}>{show ? "Hide" : "Show"}</Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;

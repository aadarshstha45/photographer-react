import { Stack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack align={"center"} gap={0}>
      <Text fontSize={"4xl"} fontWeight={"bold"}>
        Dipak
        <Text as={"span"} color={"red.500"}>
          .
        </Text>
      </Text>
    </Stack>
  );
};

export default Header;

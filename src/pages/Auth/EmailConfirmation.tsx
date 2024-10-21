import { Center, Flex, Icon, Text } from "@chakra-ui/react";
import { Check } from "@phosphor-icons/react";

const EmailConfirmation = () => {
  return (
    <Center h={"100dvh"} w={"full"}>
      <Flex flexDir={"column"} gap={4} align={"center"}>
        <Icon
          bg={"green.100"}
          p={4}
          borderRadius={"full"}
          as={Check}
          w={24}
          h={24}
          color={"green.500"}
        />
        <Text fontSize={"2xl"}>
          An email has been sent to reset your password
        </Text>
      </Flex>
    </Center>
  );
};

export default EmailConfirmation;

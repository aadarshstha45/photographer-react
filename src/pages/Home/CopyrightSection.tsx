import { Flex, Text } from "@chakra-ui/react";

const CopyrightSection = () => {
  return (
    <Flex justify={"center"} align={"center"} p={6} borderTop={"1px solid"}>
      <Text fontSize={"25px"} fontFamily={"Bebas Neue"}>
        Copyright © 2024 - Deepak karki. All Rights Reserved. Designed By :{" "}
        <Text as={"span"} color={"primary"}>
          codetara
        </Text>
      </Text>
    </Flex>
  );
};

export default CopyrightSection;

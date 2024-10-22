import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const LayoutWrapper = () => {
  return (
    <Flex flexDir={"column"} maxW={"100vw"} overflow={"hidden"}>
      <Outlet />
    </Flex>
  );
};

export default LayoutWrapper;

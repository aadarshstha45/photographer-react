import { Center, Container, Flex, Spinner, Stack } from "@chakra-ui/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const LayoutWrapper = () => {
  const width = "250px";

  return (
    <Flex w={"100%"} gap={4} overflow={"hidden"}>
      <Sidebar width={width} />
      <Suspense
        fallback={
          <Center h={"100dvh"} w={"100dvw"}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              size={"xl"}
              emptyColor="gray.200"
              color="primary.500"
            />
          </Center>
        }
      >
        <Container
          pl={{
            md: `calc(${width} + 10px)`,
            xl: `calc(${width} + 50px)`,
          }}
          pr={{ xl: 20 }}
          maxW={"100vw"}
          px={4}
          py={{ base: 4, md: 10 }}
        >
          <Stack gap={4}>
            <Navbar />
            <Outlet />
          </Stack>
        </Container>
      </Suspense>
    </Flex>
  );
};

export default LayoutWrapper;

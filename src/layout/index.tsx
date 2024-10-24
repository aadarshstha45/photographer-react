import {
  Center,
  Container,
  Flex,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const LayoutWrapper = () => {
  const width = "250px";
  const { pathname } = useLocation();
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
            md: `calc(${width} + 20px)`,
            xl: `calc(${width} + 50px)`,
          }}
          pr={{ xl: 20 }}
          maxW={"100vw"}
          px={4}
          py={{ base: 4, md: 10 }}
        >
          <Stack gap={4}>
            {/* <Navbar /> */}
            <Text
              fontSize={"40px"}
              fontWeight={600}
              textTransform={"capitalize"}
            >
              {pathname === "/" ? "Dashboard" : pathname.split("/")[1]}
            </Text>
            <Outlet />
          </Stack>
        </Container>
      </Suspense>
    </Flex>
  );
};

export default LayoutWrapper;

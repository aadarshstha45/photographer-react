import { useFetchCategoryList } from "@/services/service-category";
import Loader from "@/utils/Loader";
import { Box, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

const Photographs = () => {
  const { data: photographs, isPending } = useFetchCategoryList();
  return isPending ? (
    <Loader height={"85dvh"} />
  ) : (
    <Container
      maxW={{ base: "100vw", sm: "95vw", md: "90vw", lg: "85vw" }}
      py={10}
    >
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 0: 1, 480: 2, 900: 3, 1400: 4 }}
      >
        <Masonry gutter="20px">
          {photographs?.data?.rows.map((item, index) => {
            console.log({ item });
            return (
              <Flex
                overflow={"hidden"}
                flexDir={"column"}
                gap={4}
                key={index}
                pos={"relative"}
                borderRadius={5}
                as={Link}
                to={`/photographs/${item.slug}`}
              >
                {item.image ? (
                  <Image
                    src={item.image ?? undefined}
                    borderRadius={5}
                    loading="lazy"
                    h={300}
                    aspectRatio={9 / 16}
                    fallback={
                      <Flex
                        bg={"gray.200"}
                        h={200}
                        w={"100%"}
                        align={"center"}
                      />
                    }
                    _hover={{ transform: "scale(1.1)" }}
                    transition={"transform 0.5s ease"}
                    key={index}
                    alt={item.name}
                    objectFit={"cover"}
                  />
                ) : (
                  <Flex bg={"gray.200"} h={300} w={"100%"} align={"center"} />
                )}

                <HStack
                  gap={2}
                  pos={"absolute"}
                  bottom={5}
                  left={5}
                  align={"center"}
                >
                  <Box bg={"primary"} h={10} w={1} />
                  <Text
                    fontSize={{
                      base: "20px",
                      sm: "30px",
                      md: "36px",
                      lg: "40px",
                    }}
                    textStyle={"heading"}
                    color={"white"}
                  >
                    {item.name}
                  </Text>
                </HStack>
              </Flex>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
};

export default Photographs;

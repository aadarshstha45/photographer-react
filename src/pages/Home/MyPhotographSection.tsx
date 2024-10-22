import Tripod from "@/assets/images/tripod.png";
import Header from "@/components/Header";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { myPhotographs } from "./data";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "@/components/Slider/Arrows";
import { Button } from "@/components/Button";

const MyPhotographSection = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px", // Adjust padding for 3D depth
    slidesToShow: 3, // Show three images at a time
    speed: 500,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Box as={"section"} id={"#my-photographs"} mb={8}>
      <Flex
        flexDir={"column"}
        gap={4}
        align={"center"}
        justify={"center"}
        py={20}
      >
        <HStack gap={8}>
          <Image src={Tripod} alt={"Tripod"} />
          <Header
            caption="My Photographs"
            heading="let's check my work"
            body="Capturing your wonderful and beautiful moment of your life."
            highlightText={["work"]}
          />
        </HStack>
      </Flex>
      <Box mt={10} mx={"auto"} className="slider-container" maxW={"90vw"}>
        <Slider {...settings}>
          {myPhotographs.map((photo, index) => (
            <Flex
              bg={`url(${photo.url})`}
              h={"535px"}
              bgSize={"cover"}
              bgPos={"center"}
              key={index}
              pos={"relative"}
            >
              {/* Dark Overlay for non-center slides */}
              <Box
                className="overlay"
                pos="absolute"
                top={0}
                left={0}
                h="full"
                w="full"
                bg="rgba(0, 0, 0, 0.6)"
                opacity={0.7}
                zIndex={1}
                transition="opacity 0.5s ease"
              />
              <HStack
                gap={2}
                pos={"absolute"}
                bottom={5}
                left={5}
                align={"center"}
              >
                <Box bg={"primary"} h={10} w={1} />
                <Text fontSize={"40px"} textStyle={"heading"} color={"white"}>
                  {photo.title}
                </Text>
              </HStack>
            </Flex>
          ))}
        </Slider>
      </Box>
      <HStack justify={"center"} mt={10} spacing={2}>
        <Button w={"265px"} variant={"primary"}>
          View More
        </Button>
      </HStack>
    </Box>
  );
};

export default MyPhotographSection;

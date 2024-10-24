import Tripod from "@/assets/images/tripod.png";
import { Button } from "@/components/Button";
import Header from "@/components/Header";
import { NextArrow, PrevArrow } from "@/components/Slider/Arrows";
import { useFetchCategoryList } from "@/services/service-category";
import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const { data: myPhotographs } = useFetchCategoryList();

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
          {myPhotographs?.data?.rows.map((item, index) => (
            <Flex
              bg={`url(${item.image})`}
              h={"535px"}
              aspectRatio={9 / 16}
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
              bgPos={"center"}
              key={index}
              pos={"relative"}
              overflow={"hidden"}
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
                  {item.name}
                </Text>
              </HStack>
            </Flex>
          ))}
        </Slider>
      </Box>
      <HStack justify={"center"} mt={10} spacing={2}>
        <Link to="/my-photographs">
          <Button w={"265px"} variant={"primary"}>
            View More
          </Button>
        </Link>
      </HStack>
    </Box>
  );
};

export default MyPhotographSection;

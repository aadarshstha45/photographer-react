import Header from "@/components/Header";
import {
  Flex,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { whatIDo } from "./data";
import Weeding from "@/assets/images/weeding.png";
const WhatIDoSection = () => {
  const fillColor = useColorModeValue("white", "black");
  const strokeColor = useColorModeValue("black", "");

  return (
    <Flex
      as={"section"}
      id={"#what-i-do"}
      maxW={"1058px"}
      borderLeft={"none"}
      borderEnd={"1px solid"}
      borderBlock={"1px solid"}
      borderColor={"primary"}
      pos={"relative"}
      my={4}
    >
      <Flex
        flexDir={"column"}
        gap={8}
        maxW={"749px"}
        pl={{ base: 4, sm: "50px", md: "135px" }}
        py={20}
      >
        <Header
          caption="what i do"
          heading="i capture moments, emotions and memories forever"
          body="A true fascination for photography and have been lucky enough to be working in the field for over a decade."
        />
        <Flex flexWrap={"wrap"} flexBasis={"33.33%"} gap={"70px"}>
          {whatIDo.map((item, index) => (
            <Stack gap={2} key={index} align={"center"}>
              <Icon
                as={item.icon}
                boxSize={"135px"}
                fill={fillColor}
                stroke={index !== 0 ? strokeColor : "none"}
              />
              <Text
                textTransform={"uppercase"}
                fontSize={{ base: "19px", md: "23px" }}
                fontFamily={"Bayon"}
                color={index === 0 ? "primary" : ""}
              >
                {item.title}
              </Text>
            </Stack>
          ))}
          {whatIDo.map((item, index) => (
            <Stack gap={2} key={index} align={"center"}>
              <Icon
                as={item.icon}
                boxSize={"135px"}
                fill={fillColor}
                stroke={index !== 0 ? strokeColor : "none"}
              />
              <Text
                textTransform={"uppercase"}
                fontSize={{ base: "19px", md: "23px" }}
                fontFamily={"Bayon"}
              >
                {item.title}
              </Text>
            </Stack>
          ))}
        </Flex>
      </Flex>
      <Image
        src={Weeding}
        alt={"Weeding"}
        pos={"absolute"}
        right={-52}
        top={"15%"}
        maxW={"447px"}
      />
    </Flex>
  );
};

export default WhatIDoSection;

import Weeding from "@/assets/images/weeding.png";
import Header from "@/components/Header";
import { useFetchCategoryList } from "@/services/service-category";
import SvgIcon from "@/utils/SvgIcon";
import { Flex, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
const WhatIDoSection = () => {
  const strokeColor = useColorModeValue("black", "");
  const { data: categoryList } = useFetchCategoryList();
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
          {categoryList?.data?.rows.map((item, index) => (
            <Stack gap={2} key={index} align={"center"}>
              <Flex
                border={"2px dashed"}
                borderRadius={"50%"}
                align={"center"}
                p={4}
                justify={"center"}
                boxSize={"120px"}
              >
                <SvgIcon
                  svgString={item.icon ?? ""} // SVG string from the data
                  boxSize={"80px"}
                  fill={"black"}
                  stroke={strokeColor}
                />
              </Flex>
              <Text
                textTransform={"uppercase"}
                fontSize={{ base: "19px", md: "23px" }}
                fontFamily={"Bayon"}
                color={index === 0 ? "primary" : ""}
              >
                {item.name}
              </Text>
            </Stack>
          ))}
        </Flex>
      </Flex>
      <Image
        src={Weeding}
        alt={"Weeding"}
        pos={"absolute"}
        right={-48}
        top={"15%"}
        hideBelow={"1280px"}
        maxW={"447px"}
      />
    </Flex>
  );
};

export default WhatIDoSection;

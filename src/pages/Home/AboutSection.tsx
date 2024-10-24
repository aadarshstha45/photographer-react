import CameraImage from "@/assets/images/camera.png";
import Header from "@/components/Header";
import { useStoreInitData } from "@/store";
import { GridItem, Image, SimpleGrid } from "@chakra-ui/react";

const AboutSection = () => {
  const { initData } = useStoreInitData();
  return (
    <SimpleGrid
      as={"section"}
      id={"#about"}
      columns={{ base: 1, md: 2 }}
      py={20}
    >
      <GridItem maxW={"595px"} colSpan={1}>
        <Image aspectRatio={1} src={CameraImage} alt={"Camera"} />
      </GridItem>
      <GridItem
        px={{ base: 4, md: 0 }}
        maxW={"539px"}
        colSpan={1}
        alignContent={"center"}
      >
        <Header
          caption={"Let's Know About Me"}
          heading={`I'm ${initData?.name}, a professional photographer based in New York.`}
          body={initData?.description ?? ""}
          highlightText={[initData?.name ?? ""]}
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default AboutSection;

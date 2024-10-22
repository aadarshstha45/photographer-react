import CameraImage from "@/assets/images/camera.png";
import Header from "@/components/Header";
import { GridItem, Image, SimpleGrid } from "@chakra-ui/react";

const AboutSection = () => {
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
          heading="I'm Deepak karki, a professional photographer based in New York."
          body="I'm capturing the best moments on film, while each time presenting a unique standpoint. Capturing your wonderful and beautiful moment of your life."
          highlightText={["Deepak", "karki"]}
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default AboutSection;

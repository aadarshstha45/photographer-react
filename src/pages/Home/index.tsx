import { Flex } from "@chakra-ui/react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import CopyrightSection from "./CopyrightSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import MyPhotographSection from "./MyPhotographSection";
import WhatIDoSection from "./WhatIDoSection";

const Home = () => {
  return (
    <Flex flexDir={"column"} maxW={"100vw"} overflow={"hidden"} gap={4}>
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <MyPhotographSection />
      <ContactSection />
      <FooterSection />
      <CopyrightSection />
    </Flex>
  );
};

export default Home;

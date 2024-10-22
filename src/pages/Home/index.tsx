import { Flex } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import WhatIDoSection from "./WhatIDoSection";
import MyPhotographSection from "./MyPhotographSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import CopyrightSection from "./CopyrightSection";

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

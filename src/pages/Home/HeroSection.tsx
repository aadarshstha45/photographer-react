import HomeBanner from "@/assets/banners/HomeBanner.png";
import { navItems } from "@/components/data";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { List } from "@phosphor-icons/react";
import { IconButton } from "@/components/Button";
import AppointmentForm from "./AppointmentForm";

const HeroSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as={"section"}
      id={"#hero"}
      bg={`linear-gradient(rgba(41, 41, 41, 0.32), rgba(41, 41, 41, 0.32)), url(${HomeBanner})`}
      h={{ base: "650px", md: "700px", lg: "750px" }}
      bgPos={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      flexDir={"column"}
    >
      <IconButton
        hideFrom={"md"}
        aria-label="menu"
        icon={<Icon as={List} boxSize={6} />}
        m={4}
        w={"max-content"}
        variant={"outline"}
      />
      <HStack hideBelow={"md"} py={4} justify={"center"} gap={10}>
        {navItems.map((item, index) => (
          <Link color={"white"} as={NavLink} to={item.to} key={index}>
            {item.title}
          </Link>
        ))}
        <Button
          borderRadius={"50px"}
          bg={"rgba(255, 255, 255, 0.30)"}
          backdropFilter={"blur(10px)"}
          _hover={{
            bg: "rgba(255, 255, 255, 0.40)",
          }}
          height={"60px"}
          p={"18px 28px"}
          textTransform={"uppercase"}
          onClick={onOpen}
        >
          Book an Appointment
        </Button>
      </HStack>
      <Flex justify={"center"} align={"center"} h={"100%"}>
        <Flex
          flexDir={"column"}
          align={"center"}
          justify={"center"}
          color={"white"}
          textAlign={"center"}
          w={"743px"}
          transform={{
            base: "translateY(-30%)",
            sm: "translateY(-20%)",
            md: "translateY(-10%)",
          }}
        >
          <Text
            lineHeight={"normal"}
            textShadow={"0px 4px 4px rgba(0, 0, 0, 0.20)"}
            textStyle={"heading"}
            fontSize={{
              base: "50px",
              sm: "75px",
              md: "100px",
              lg: "115px",
              xl: "130px",
            }}
            textTransform={"uppercase"}
          >
            Explore through the lens
          </Text>
          <Text fontSize={{ base: "14px", sm: "18px", lg: "20px" }}>
            Let's take your photograph to the next level. Capturing your
            wonderful and beautiful moment of your life.
          </Text>
        </Flex>
      </Flex>

      {/* AppointForm */}
      <AppointmentForm isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default HeroSection;

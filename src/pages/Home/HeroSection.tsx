import HomeBanner from "@/assets/banners/HomeBanner.png";
import { Button, IconButton } from "@/components/Button";
import { navItems } from "@/components/data";
import { Flex, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { List } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
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
          <Link
            as={NavLink}
            to={item.to}
            p={2}
            pos={"relative"}
            borderRadius={5}
            color={"white"}
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-1px",
              left: "0",
              width: "0",
              height: "2px",
              bgColor: "white",
              zIndex: 10,
              transition: "width 0.3s ease-in-out",
            }}
            _hover={{
              textDecoration: "none",
              _after: {
                width: "100%",
              },
            }}
            key={index}
          >
            {item.title}
          </Link>
        ))}
        <NavLink to={"/book-an-appointment"}>
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
          >
            Book an Appointment
          </Button>
        </NavLink>
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
            fontFamily={"Bebas Neue"}
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
    </Flex>
  );
};

export default HeroSection;

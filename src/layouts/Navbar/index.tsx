import { Button, IconButton } from "@/components/Button";
import { navItems } from "@/components/data";
import { Flex, HStack, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { List } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const borderColor = useColorModeValue("gray.900", "gray.100");
  const buttonBg = useColorModeValue(
    "rgba(1, 1, 1, 0.30)",
    "rgba(255, 255, 255, 0.30)"
  );
  const hoveredButtonBg = useColorModeValue(
    "rgba(0, 0, 0, 0.40)",
    "rgba(255, 255, 255, 0.40)"
  );
  const color = useColorModeValue("gray.900", "gray.100");
  return (
    <Flex p={4} justify={{ md: "center" }} align={"center"}>
      <IconButton
        hideFrom={"md"}
        aria-label="menu"
        icon={<Icon as={List} boxSize={6} />}
        m={4}
        w={"max-content"}
        variant={"outline"}
      />
      <HStack gap={6} hideBelow={"md"}>
        {navItems.map((item, index) => (
          <Link
            as={NavLink}
            to={item.to}
            p={2}
            pos={"relative"}
            borderRadius={5}
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-1px",
              left: "0",
              width: "0",
              height: "2px",
              backgroundColor: borderColor,
              transition: "width 0.3s ease-in-out",
            }}
            _hover={{
              textDecoration: "none",
              _after: {
                width: "100%",
              },
            }}
            _activeLink={{
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
            bg={buttonBg}
            backdropFilter={"blur(10px)"}
            _hover={{
              bg: hoveredButtonBg,
            }}
            color={color}
            height={"60px"}
            p={"18px 28px"}
            textTransform={"uppercase"}
          >
            Book an Appointment
          </Button>
        </NavLink>
      </HStack>
    </Flex>
  );
};

export default Navbar;

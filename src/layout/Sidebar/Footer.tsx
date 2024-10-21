import { IconButton } from "@/components/Button";
import { useLogout } from "@/services/service-auth";
import { HStack, Icon, useColorMode } from "@chakra-ui/react";
import { Gear, Moon, SignOut, Sun } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
const Footer = () => {
  const { mutateAsync: logout } = useLogout();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack align={"center"} justify={"center"} w={"full"}>
      <IconButton
        aria-label={"Toggle Color Mode"}
        icon={<Icon as={colorMode === "light" ? Moon : Sun} boxSize={5} />}
        onClick={toggleColorMode}
      />
      <Link to="/settings">
        <IconButton
          aria-label={"Settings"}
          icon={<Icon as={Gear} boxSize={5} />}
        />
      </Link>
      <IconButton
        aria-label={"Sign Out"}
        colorScheme="red"
        icon={<Icon as={SignOut} boxSize={5} />}
        onClick={async () => {
          await logout();
        }}
      />
    </HStack>
  );
};

export default Footer;

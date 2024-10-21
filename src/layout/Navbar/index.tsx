import Avatar1 from "@/assets/avatars/2.jpg";
import { SearchInput } from "@/components/Form";
import {
  Avatar,
  Box,
  HStack,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { List, MagnifyingGlass } from "@phosphor-icons/react";
import MobileNav from "./MobileNav";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isNavOpen,
    onOpen: onNavOpen,
    onClose: onNavClose,
  } = useDisclosure();
  // const attributes = {
  //   top: "-2",
  //   right: "-2",
  //   bg: "primary.500",
  //   borderRadius: "full",
  //   width: "24px",
  //   height: "24px",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   border: "2px solid white",
  // };

  return (
    <HStack gap={6} align={"center"} justify={"space-between"}>
      <HStack gap={2} display={{ base: "flex", md: "none" }}>
        <IconButton
          aria-label="Menu"
          icon={<Icon as={List} boxSize={5} />}
          onClick={onNavOpen}
          variant={"outline"}
        />
        <IconButton
          aria-label="Search"
          icon={<Icon as={MagnifyingGlass} boxSize={5} />}
          onClick={onOpen}
        />
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody borderRadius={5} overflow={"hidden"} p={0} bg={"red.200"}>
            <SearchInput
              onSearch={(value) => {
                console.log(value);
              }}
              border={0}
              placeholder="Search Here..."
              width={"full"}
              my={0}
              display={{ base: "flex", md: "none" }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <MobileNav isOpen={isNavOpen} onClose={onNavClose} />
      <HStack gap={4}>
        <Box borderRadius={"full"} bg={"white"} p={1}>
          <Avatar src={Avatar1} name={"Samantha"} />
        </Box>
      </HStack>
    </HStack>
  );
};

export default Navbar;

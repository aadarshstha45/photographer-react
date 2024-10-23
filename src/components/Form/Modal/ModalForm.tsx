import { Button } from "@/components/Button";
import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { SubmitHandler } from "react-hook-form";

interface IModalForm {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  isFetching?: boolean;
  id?: number | null;
  onSubmit: SubmitHandler<any>;
  isLoading?: boolean;
  children: React.ReactNode;
  formId?: string;
}

const ModalForm: React.FC<IModalForm> = ({
  isOpen,
  onClose,
  heading,
  isFetching,
  id,
  onSubmit,
  isLoading,
  children,
  formId = "form",
}) => {
  const bg = useColorModeValue("white", "gray.800");
  const headerBg = useColorModeValue("gray.50", "gray.900");
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInTop"
      preserveScrollBarGap
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        overflow={"hidden"}
        borderRadius={10}
        pos={"fixed"}
        maxH={"99dvh"}
        maxW={{ base: "98%", md: "80%", lg: "60%" }}
        bg={bg}
      >
        <ModalCloseButton />

        <ModalHeader bg={headerBg} fontWeight={500}>
          {heading}
        </ModalHeader>
        {isFetching || !!id ? (
          <Flex justify={"center"} align={"center"} h={"50vh"}>
            <Spinner
              size={"xl"}
              thickness="4px"
              speed="0.65s"
              color="primary.500"
            />
          </Flex>
        ) : (
          <ModalBody
            as={"form"}
            id={formId}
            onSubmit={onSubmit}
            maxH={window.innerHeight - 200}
            overflowY={"auto"}
            overflowX={"hidden"}
          >
            {children}
          </ModalBody>
        )}
        <ModalFooter gap={2}>
          <Button colorScheme="red" variant={"outline"} onClick={onClose}>
            Close
          </Button>
          <Button form={formId} type={"submit"} isLoading={isLoading}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalForm;

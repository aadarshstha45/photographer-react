import { Button } from "@/components/Button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface IConfirmModal {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  header?: string;
  message?: ReactNode | string;
  isLoading?: boolean;
}

const ConfirmModal: FC<IConfirmModal> = ({
  isOpen,
  onClose,
  onSubmit,
  header,
  message,
  isLoading,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      preserveScrollBarGap
      motionPreset="slideInTop"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontWeight={500} fontSize={"24px"}>
            {header ?? "Confirm?"}
          </Text>
        </ModalHeader>
        <ModalBody>{message ?? "Are you sure you want to proceed?"}</ModalBody>
        <ModalFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button isLoading={isLoading} onClick={onSubmit}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmModal;

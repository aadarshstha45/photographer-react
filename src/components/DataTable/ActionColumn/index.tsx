import { IconButton } from "@/components/Button";
import { HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { Pencil, Trash } from "@phosphor-icons/react";
import React from "react";

interface IActionColumn {
  handleEdit?: () => void;
  handleDelete: () => void;
}

const ActionColumn: React.FC<IActionColumn> = ({
  handleEdit,
  handleDelete,
}) => {
  const colorScheme = useColorModeValue("white", "black");

  return (
    <HStack w={"max-content"} mx={"auto"}>
      {handleEdit && (
        <IconButton
          size={"sm"}
          aria-label="edit"
          icon={<Icon as={Pencil} boxSize={5} color={"blue.500"} />}
          colorScheme={colorScheme}
          onClick={handleEdit}
        />
      )}
      <IconButton
        size={"sm"}
        aria-label="delete"
        colorScheme={colorScheme}
        onClick={handleDelete}
        icon={<Icon as={Trash} boxSize={5} color={"red.500"} />}
      />
    </HStack>
  );
};

export default ActionColumn;

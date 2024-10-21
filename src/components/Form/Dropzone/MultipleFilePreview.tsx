// MultipleFilePreviews.tsx

import React, { Dispatch, SetStateAction } from "react";
import {
  Flex,
  Icon,
  IconButton,
  Image,
  PositionProps,
  Text,
} from "@chakra-ui/react";
import { Trash } from "@phosphor-icons/react";

interface IPrevFiles {
  id: number;
  url: string;
}

interface FilePreview {
  id?: string | number;
  url: string;
  fileName?: string;
}

interface MultipleFilePreviewsProps {
  files: FilePreview[];
  prevFiles?: IPrevFiles[];
  setPrevFiles?: Dispatch<SetStateAction<IPrevFiles[]>>;
  setDeleteImages?: Dispatch<SetStateAction<string[]>>;
  onDelete: (index: number) => void;
}

const flexProps = {
  position: "relative" as PositionProps["position"],
  flexDir: "column" as const,
  gap: 4,
  flexShrink: 0,
  border: "1px solid",
  borderColor: "gray.200",
  borderRadius: "md",
  overflow: "hidden",
  bg: "rgba(241,242,244,0.40)",
  role: "files",
  cursor: "pointer",
  align: "center",
  justify: "center",
  textAlign: "center" as const,
};

const textProps = {
  pos: "absolute" as PositionProps["position"],
  bottom: 0,
  left: 0,
  right: 0,
  bg: "white",
  opacity: 0.9,
  textColor: "black",
  fontSize: {
    base: "xs",
    sm: "sm",
  },
  p: 2,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

const buttonProps = {
  alignSelf: "center",
  "aria-label": "Delete Image",
  icon: <Icon as={Trash} boxSize={5} />,
  borderRadius: 5,
  colorScheme: "red",
  size: "sm",
  position: "absolute" as PositionProps["position"],
  top: 0,
  right: 0,
};

const MultipleFilePreviews: React.FC<MultipleFilePreviewsProps> = ({
  files,
  prevFiles,
  setPrevFiles,
  setDeleteImages,
  onDelete,
}) => {
  console.log({ prevFiles });
  return (
    <>
      {prevFiles &&
        prevFiles?.length > 0 &&
        prevFiles?.map((file, index) => (
          <Flex {...flexProps} key={index}>
            <Image
              maxW={"250px"}
              objectFit={"cover"}
              aspectRatio={1}
              src={file.url}
            />

            <IconButton
              {...buttonProps}
              onClick={(e) => {
                e.stopPropagation();
                if (setPrevFiles) {
                  setPrevFiles((prevFiles) =>
                    prevFiles.filter((prevFile) => prevFile.id !== file.id)
                  );
                  setDeleteImages &&
                    setDeleteImages((ids) => [...ids, String(file.id)]);
                }
              }}
            />
          </Flex>
        ))}
      {files.map((file, index) => (
        <Flex {...flexProps} key={index}>
          <Image
            maxW={"250px"}
            objectFit={"cover"}
            aspectRatio={1}
            src={file.url}
          />

          <Text {...textProps}>{file.fileName}</Text>
          <IconButton
            {...buttonProps}
            onClick={(e) => {
              e.stopPropagation();
              if (onDelete) {
                onDelete(index);
              }
            }}
          />
        </Flex>
      ))}
    </>
  );
};

export default MultipleFilePreviews;

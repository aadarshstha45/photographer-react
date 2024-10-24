import {
  Divider,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";

interface IHeaderProps {
  heading: string;
  caption: string;
  body: string;
  highlightText?: string[]; // Now accepts an array of text to highlight
}

const Header: FC<IHeaderProps> = ({
  heading,
  caption,
  body,
  highlightText = [], // Default to an empty array if not provided
}) => {
  const textColor = useColorModeValue("gray.800", "#C2C2C2");

  // Split the heading and highlight multiple texts if provided
  const renderHeading = () => {
    if (highlightText.length === 0) {
      return heading;
    }

    // Create a regex from the highlightText array, joining the items with a "|" for OR matching
    const regex = new RegExp(`(${highlightText.join("|")})`, "gi");

    // Split the heading based on the regex and apply the highlight styles
    const parts = heading.split(regex);

    return parts.map((part, index) => (
      <Text
        as="span"
        key={index}
        textTransform={"capitalize"}
        color={
          highlightText.some(
            (text) => part.toLowerCase() === text.toLowerCase()
          )
            ? "primary"
            : undefined
        }
        fontWeight={
          highlightText.some(
            (text) => part.toLowerCase() === text.toLowerCase()
          )
            ? "bold"
            : undefined
        }
      >
        {part}
      </Text>
    ));
  };

  return (
    <Flex flexDir={"column"} gap={4}>
      <HStack gap={"20px"} align={"center"}>
        <Text textTransform={"capitalize"} textStyle={"caption"}>
          {caption}
        </Text>
        <Divider w={"90px"} borderColor={"primary"} opacity={"1"} />
      </HStack>
      <Text textStyle={"heading"}>{renderHeading()}</Text>
      <Divider w={"100%"} borderColor={"primary"} opacity={"1"} my={2} />
      <Text textStyle={"body"} textColor={textColor}>
        {body}
      </Text>
    </Flex>
  );
};

export default Header;

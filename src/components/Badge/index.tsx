import {
  BoxProps,
  Flex,
  ResponsiveValue,
  ThemeTypings,
} from "@chakra-ui/react";
import React from "react";

interface IBadge {
  colorScheme?: ThemeTypings["colorSchemes"];
  children?: React.ReactNode;
  width?: ResponsiveValue<number | string>;
}

const Badge: React.FC<IBadge & BoxProps> = ({
  colorScheme,
  children,
  width,
  ...props
}) => {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      bg={colorScheme ? `${colorScheme}.100` : "gray.100"}
      color={colorScheme ? `${colorScheme}.600` : "gray.600"}
      borderRadius={5}
      px={4}
      py={1}
      w={width ?? "max-content"}
      textTransform={"capitalize"}
      fontWeight={600}
      cursor={"default"}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Badge;

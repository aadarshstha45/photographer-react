import { IconButton } from "@/components/Button";
import { Icon } from "@chakra-ui/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      icon={<Icon as={CaretRight} boxSize={6} />}
      aria-label="Next"
      onClick={onClick}
      pos={"absolute"}
      display={{ base: "none", md: "flex" }}
      right={{ base: 0, md: -10 }}
      top={"50%"}
      size={"sm"}
      borderRadius={"full"}
    />
  );
};

const PrevArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      icon={<Icon as={CaretLeft} boxSize={6} />}
      aria-label="Previous"
      onClick={onClick}
      pos={"absolute"}
      display={{ base: "none", md: "flex" }}
      left={{ base: 0, md: -10 }}
      top={"50%"}
      size={"sm"}
      borderRadius={"full"}
    />
  );
};

export { NextArrow, PrevArrow };

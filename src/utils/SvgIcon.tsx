import { Icon } from "@chakra-ui/react";
import { FC, useMemo } from "react";

const SvgIcon: FC<any> = ({ svgString, ...props }) => {
  const svgElement = useMemo(() => {
    const parser = new DOMParser();
    const svg = parser
      .parseFromString(svgString, "image/svg+xml")
      .querySelector("svg");

    // Return a React component for the parsed SVG
    return (
      <Icon viewBox={svg?.getAttribute("viewBox") || "0 0 24 24"} {...props}>
        <g dangerouslySetInnerHTML={{ __html: svg?.innerHTML ?? "" }} />
      </Icon>
    );
  }, [svgString, props]);

  return svgElement;
};

export default SvgIcon;

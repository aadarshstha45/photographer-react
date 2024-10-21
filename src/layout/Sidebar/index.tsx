import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ResponsiveValue,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { sidebarItems } from "../data";
import Footer from "./Footer";
import Header from "./Header";
import SidebarItem from "./SidebarItem";
import { Authorities, getRole } from "@/services/service-auth";
interface ISidebarProps {
  width: ResponsiveValue<number | string>;
}

const Sidebar: FC<ISidebarProps> = ({ width }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { isAdmin } = getRole();
  const userRole = isAdmin ? Authorities.superadmin : Authorities.admin;

  const bg = useColorModeValue("gray.50", "#1A1A1A");

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <Card
      pos={"fixed"}
      h={"100dvh"}
      w={width}
      display={{ base: "none", md: "flex" }}
      borderRadius={0}
      shadow={"none"}
      transition={"all 0.25s cubic-bezier(.17,.67,.17,.88)"}
      bg={bg}
    >
      <CardHeader>
        <Header />
      </CardHeader>
      <CardBody overflowY={"auto"}>
        <Stack gap={4}>
          {sidebarItems
            .filter((item) => item.accessor?.includes(userRole))
            .map((item, index) => (
              <SidebarItem
                key={index}
                item={item}
                width={"250px"}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                onClose={() => {}}
              />
            ))}
        </Stack>
      </CardBody>
      <CardFooter>
        <Footer />
      </CardFooter>
    </Card>
  );
};

export default Sidebar;

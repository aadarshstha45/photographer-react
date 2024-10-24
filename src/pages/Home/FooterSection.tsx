import { useStoreInitData } from "@/store";
import {
  Flex,
  GridItem,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react";

// Define icon mapping
const iconMapping = {
  address: MapPin,
  phone: Phone,
  email: Envelope,
};

const FooterSection = () => {
  const { initData } = useStoreInitData();
  console.log({ initData });

  const contactInfo = {
    address: initData?.address,
    email: initData?.email,
    phone: initData?.phone,
  };

  const contactItems = Object.keys(contactInfo).map((key) => {
    const typedKey = key as keyof typeof contactInfo;
    return {
      title: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
      value: contactInfo[typedKey],
      icon: iconMapping[typedKey],
    };
  });
  return (
    <Flex flexDir={"column"} gap={16} py={10} maxW={"95vw"} mx={"auto"}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }} // 1 column on mobile, 2 on medium, 3 on large
        justifyItems={"center"}
        spacing={4}
      >
        {contactItems.map((info, index) => (
          <GridItem
            key={index}
            colSpan={1}
            borderRight={{ lg: "1px solid" }} // Hide border on smaller screens
            borderColor={{ lg: "primary" }}
            w={"full"}
            px={4}
            mb={{ base: 8, lg: 0 }} // Add bottom margin on mobile
          >
            <Stack mx={"auto"} align={"center"}>
              <HStack align={"center"} gap={4}>
                <Icon
                  as={info.icon}
                  boxSize={10}
                  color={"primary"}
                  weight="fill"
                />
                <Text textStyle={"heading"}>{info.title}</Text>
              </HStack>
              <Text textStyle={"caption"} textAlign={"center"}>
                {info.value}
              </Text>
            </Stack>
          </GridItem>
        ))}
      </SimpleGrid>
      <HStack align={"center"} justify={"center"} spacing={4}>
        <Link href={initData?.facebook} isExternal>
          <Icon
            as={FacebookLogo}
            boxSize={"30px"}
            color={"primary"}
            weight="fill"
          />
        </Link>
        <Text textStyle={"heading"}>{initData?.name}</Text>
        <Link href={initData?.instagram} isExternal>
          <Icon
            as={InstagramLogo}
            boxSize={"30px"}
            color={"primary"}
            weight="fill"
          />
        </Link>
      </HStack>
      <Text maxW={"912px"} textStyle={"body"} textAlign={"center"}>
        Thank you for considering me for your photography and videography needs.
        I look forward to working with you and creating unforgettable memories
        that will last a lifetime.
      </Text>
    </Flex>
  );
};

export default FooterSection;

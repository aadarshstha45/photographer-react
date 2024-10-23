import { Light } from "@/assets/icons";
import { Button } from "@/components/Button";
import TextInput from "@/components/Form/TextInput";
import Header from "@/components/Header";
import { useSendMessage } from "@/services/service-message";
import { GridItem, Icon, SimpleGrid } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const inputProps = {
  bg: "white",
  color: "black",
  _placeholder: { color: "gray.500" },
};

const ContactSection = () => {
  const defaultValues = {
    name: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  };

  const { control, handleSubmit, reset } = useForm({ defaultValues });
  const { mutateAsync: sendMessage, isPending: isSending } = useSendMessage();
  const onSubmit = async (data: any) => {
    await sendMessage({ data });
    reset();
  };

  return (
    <SimpleGrid
      justifyItems="center"
      alignContent={"center"}
      columns={{ base: 1, md: 2 }}
      spacing={10}
      my={10}
      w={"100%"}
      pos={"relative"}
      py={20}
      px={{ md: 10, lg: 20 }}
    >
      <GridItem colSpan={1} maxW={"569px"} px={4}>
        <Header
          heading="As I am the only photographer, I have to evaluate all my ordeals beforehand."
          caption="contact me"
          body="I will appreciate as many details about your particular wedding venue, dates, theme and other aspects, as you’d be willing to share."
        />
      </GridItem>
      <GridItem colSpan={1} w={"100%"} px={4}>
        <SimpleGrid
          columns={{ base: 1, sm: 2 }}
          maxW={"620px"}
          p={8}
          spacing={4}
          flexWrap={"wrap"}
          mx={"auto"}
          border={"1px solid"}
          borderColor={"primary"}
          borderTopEndRadius={"50px"}
          as={"form"}
          onSubmit={handleSubmit(onSubmit)}
        >
          <GridItem colSpan={{ base: 2, sm: 1 }}>
            <TextInput
              name="name"
              label="Name"
              placeholder="Enter your name"
              isRequired
              control={control}
              {...inputProps}
            />
          </GridItem>
          <GridItem colSpan={{ base: 2, sm: 1 }}>
            <TextInput
              name="phone"
              label="Phone"
              placeholder="Enter your phone."
              isRequired
              control={control}
              {...inputProps}
            />
          </GridItem>
          <GridItem colSpan={{ base: 2, sm: 1 }}>
            <TextInput
              name="email"
              label="Email"
              placeholder="Enter your email."
              isRequired
              control={control}
              {...inputProps}
            />
          </GridItem>
          <GridItem colSpan={{ base: 2, sm: 1 }}>
            <TextInput
              name="address"
              label="Address"
              placeholder="Enter your address."
              isRequired
              control={control}
              {...inputProps}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <TextInput
              name="message"
              label="Message"
              placeholder="Enter your message."
              isRequired
              type="textarea"
              control={control}
              {...inputProps}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Button
              isLoading={isSending}
              type="submit"
              w={"100%"}
              variant={"primary"}
            >
              Submit
            </Button>
          </GridItem>
        </SimpleGrid>
      </GridItem>
      <Icon
        as={Light}
        w={"163px"}
        h={"261px"}
        color={"primary"}
        pos={"absolute"}
        bottom={0}
        right={0}
      />
    </SimpleGrid>
  );
};

export default ContactSection;

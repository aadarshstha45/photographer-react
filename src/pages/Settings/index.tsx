import { Button } from "@/components/Button";
import { TextInput } from "@/components/Form";
import { useGetDirtyData } from "@/hooks";
import { toFormData } from "@/services/service-axios";
import { Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Settings = () => {
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    description: "",
    facebook: "",
    instagram: "",
    youtube: "",
  };

  const { control, handleSubmit, formState } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: typeof defaultValues) => {
    console.log({ data });
    const formData = toFormData<typeof defaultValues>(
      useGetDirtyData(formState, data)
    );
    console.log({ formData });
  };

  return (
    <Flex flexDir={"column"} gap={6}>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
        spacingX={4}
        id="profile-form"
      >
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <TextInput control={control} name="name" label="Name" isRequired />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <TextInput
            control={control}
            name="email"
            type="email"
            label="Email"
            isRequired
          />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <TextInput control={control} name="phone" label="Phone" isRequired />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <TextInput
            control={control}
            name="address"
            label="Address"
            isRequired
          />
        </GridItem>
        <GridItem colSpan={2}>
          <TextInput
            control={control}
            name="description"
            label="Description"
            type="textarea"
            isRequired
          />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <TextInput control={control} name="facebook" label="Facebook" />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <TextInput control={control} name="instagram" label="Instagram" />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <TextInput control={control} name="youtube" label="Youtube" />
        </GridItem>
      </SimpleGrid>
      <Button type="submit" form="profile-form">
        Save Changes
      </Button>
    </Flex>
  );
};

export default Settings;

import { Button } from "@/components/Button";
import { TextInput } from "@/components/Form";
import { useGetDirtyData } from "@/hooks";
import { toFormData } from "@/services/service-axios";
import {
  useGetPhotographer,
  useUpdatePhotographer,
} from "@/services/service-photographer";
import Loader from "@/utils/Loader";
import { Flex, GridItem, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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

  const [flag, setFlag] = useState<string>("view");

  const { data: photographer, isPending: isLoading } = useGetPhotographer();

  const { mutateAsync: updatePhotographer, isPending: isUpdating } =
    useUpdatePhotographer();

  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (photographer?.data) {
      reset({
        name: photographer?.data?.name,
        email: photographer?.data?.email,
        address: photographer?.data?.address,
        phone: photographer?.data?.phone,
        description: photographer?.data?.description,
        facebook: photographer?.data?.facebook,
        instagram: photographer?.data?.instagram,
        youtube: photographer?.data?.youtube,
      });
    }
  }, [photographer?.data]);

  const onSubmit = async (data: typeof defaultValues) => {
    const formData = toFormData<typeof defaultValues>(
      useGetDirtyData(formState, data)
    );
    const response = await updatePhotographer({
      data: formData,
    });
    if (response.data.status) {
      setFlag("view");
    }
  };

  if (isLoading) {
    return <Loader height={"70dvh"} width={"70dvw"} />;
  }

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
          <TextInput
            isReadOnly={flag === "view"}
            control={control}
            name="name"
            label="Name"
            isRequired
          />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <TextInput
            isReadOnly={flag === "view"}
            control={control}
            name="email"
            type="email"
            label="Email"
            isRequired
          />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <TextInput
            isReadOnly={flag === "view"}
            control={control}
            name="phone"
            label="Phone"
            isRequired
          />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <TextInput
            isReadOnly={flag === "view"}
            control={control}
            name="address"
            label="Address"
            isRequired
          />
        </GridItem>
        <GridItem colSpan={2}>
          <TextInput
            isReadOnly={flag === "view"}
            control={control}
            name="description"
            label="Description"
            type="textarea"
            isRequired
          />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <TextInput
            isReadOnly={flag === "view"}
            control={control}
            name="facebook"
            label="Facebook"
          />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <TextInput
            isReadOnly={flag === "view"}
            control={control}
            name="instagram"
            label="Instagram"
          />
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <TextInput
            isReadOnly={flag === "view"}
            control={control}
            name="youtube"
            label="Youtube"
          />
        </GridItem>
      </SimpleGrid>
      {flag === "view" && <Button onClick={() => setFlag("edit")}>Edit</Button>}

      {flag === "edit" && (
        <Button isLoading={isUpdating} type="submit" form="profile-form">
          Save Changes
        </Button>
      )}
    </Flex>
  );
};

export default Settings;

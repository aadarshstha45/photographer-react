import { Button } from "@/components/Button";
import DatePicker from "@/components/Form/Datepicker";
import SelectInput from "@/components/Form/SelectInput";
import TextInput from "@/components/Form/TextInput";
import { useFetchAvailableDates } from "@/services/service-availability";
import { toFormData } from "@/services/service-axios";
import { useSendAppointment } from "@/services/service-booking";
import { useFetchCategoryList } from "@/services/service-category";
import { formatSelectOptions } from "@/utils/format";
import Loader from "@/utils/Loader";
import { GridItem, SimpleGrid } from "@chakra-ui/react";

import { useForm } from "react-hook-form";

const AppointmentForm = () => {
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    message: "",
    category_id: "",
  };
  const { control, handleSubmit, reset } = useForm({ defaultValues });
  const { data: availableDates } = useFetchAvailableDates();
  const { data: categories, isPending: isLoading } = useFetchCategoryList();
  const { mutateAsync: sendAppointment, isPending: isSending } =
    useSendAppointment();
  const onSubmit = async (data: any) => {
    const formData = toFormData(data);
    await sendAppointment({
      data: formData,
    });
    reset();
  };

  const categoryOptions = formatSelectOptions({
    data: categories?.data?.rows,
    labelKey: "name",
    valueKey: "id",
  });

  return isLoading ? (
    <Loader height={"85vh"} />
  ) : (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={4}
      w="100%"
      as={"form"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <TextInput label="Name" name="name" control={control} isRequired />
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <TextInput label="Email" name="email" control={control} isRequired />
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <TextInput label="Phone" name="phone" control={control} isRequired />
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <TextInput
          label="Address"
          name="address"
          control={control}
          isRequired
        />
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <SelectInput
          label="Category"
          name="category_id"
          control={control}
          options={categoryOptions}
          isRequired
        />
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <DatePicker
          control={control}
          name="date"
          label="Date"
          isRequired
          includeDates={availableDates?.data?.rows?.map(
            (item) => new Date(item.date)
          )}
          w={"100%"}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <TextInput
          label="Message"
          name="message"
          control={control}
          type="textarea"
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Button isLoading={isSending} type="submit">
          Submit
        </Button>
      </GridItem>
    </SimpleGrid>
  );
};

export default AppointmentForm;

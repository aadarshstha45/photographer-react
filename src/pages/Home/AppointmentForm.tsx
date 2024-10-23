import DatePicker from "@/components/Form/Datepicker";
import { ModalForm } from "@/components/Form/Modal";
import SelectInput from "@/components/Form/SelectInput";
import TextInput from "@/components/Form/TextInput";
import { useFetchAvailableDates } from "@/services/sercive-availabity";
import { toFormData } from "@/services/service-axios";
import { useSendAppointment } from "@/services/service-booking";
import { useFetchCategoryList } from "@/services/service-category";
import { formatSelectOptions } from "@/utils/format";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";

import { useForm } from "react-hook-form";

interface IAppointmentForm {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentForm: FC<IAppointmentForm> = ({ isOpen, onClose }) => {
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
  const { data: availableDates } = useFetchAvailableDates(isOpen);
  console.log({ availableDates });
  const { data: categories, isPending: isLoading } =
    useFetchCategoryList(isOpen);
  const { mutateAsync: sendAppointment, isPending: isSending } =
    useSendAppointment();
  const onSubmit = async (data: any) => {
    const formData = toFormData(data);
    await sendAppointment({
      data: formData,
    });
    reset();
    onClose();
  };

  const categoryOptions = formatSelectOptions({
    data: categories?.data?.rows,
    labelKey: "name",
    valueKey: "id",
  });

  return (
    <ModalForm
      heading="Book an appointment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      formId="appointment-form"
      isLoading={isSending}
      isFetching={isLoading}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%">
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
      </SimpleGrid>
    </ModalForm>
  );
};

export default AppointmentForm;

import DatePicker from "@/components/Form/Datepicker";
import { ModalForm } from "@/components/Form/Modal";
import TextInput from "@/components/Form/TextInput";
import { toFormData } from "@/services/service-axios";
import { useSendAppointment } from "@/services/service-booking";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { FC } from "react";

import { useForm } from "react-hook-form";

const availableDates = ["2024-10-24", "2024-10-27", "2024-10-30"];

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
  };
  const { control, handleSubmit, reset } = useForm({ defaultValues });
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

  return (
    <ModalForm
      heading="Book an appointment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      formId="appointment-form"
      isLoading={isSending}
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
          <DatePicker
            control={control}
            name="date"
            label="Date"
            isRequired
            includeDates={availableDates.map((date) => new Date(date))}
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

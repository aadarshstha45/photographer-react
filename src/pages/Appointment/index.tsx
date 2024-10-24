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
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  GridItem,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    message: "",
    category_id: "",
  };
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm({ defaultValues });
  const { data: availableDates } = useFetchAvailableDates();
  const { data: categories, isPending: isLoading } = useFetchCategoryList();
  const { mutateAsync: sendAppointment, isPending: isSending } =
    useSendAppointment();
  const onSubmit = async (data: any) => {
    const formData = toFormData(data);
    const response = await sendAppointment({
      data: formData,
    });
    if (response.data.status) {
      navigate("/book-an-appointment/success");
    }
    reset();
  };

  const categoryOptions = formatSelectOptions({
    data: categories?.data?.rows,
    labelKey: "name",
    valueKey: "id",
  });

  const cardBg = useColorModeValue("gray.50", "gray.800");
  const borderColor = useColorModeValue("gray.300", "gray.700");
  return (
    <Center w={"100vw"} maxW={"95vw"} mx={"auto"} py={{ md: 5 }}>
      {isLoading ? (
        <Loader />
      ) : (
        <Card
          bg={cardBg}
          p={4}
          w={"full"}
          maxW={"800px"}
          border={"1px solid"}
          borderColor={borderColor}
          borderRadius={5}
          shadow={"none"}
          boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
        >
          <CardHeader>
            <Text fontSize="2xl" fontWeight={500}>
              Book an Appointment
            </Text>
          </CardHeader>
          <CardBody>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={4}
              w="100%"
              as={"form"}
              id="appointment-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <TextInput
                  label="Name"
                  name="name"
                  control={control}
                  isRequired
                />
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <TextInput
                  label="Email"
                  name="email"
                  control={control}
                  isRequired
                />
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <TextInput
                  label="Phone"
                  name="phone"
                  control={control}
                  isRequired
                />
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
          </CardBody>
          <CardFooter>
            <Button type="submit" form="appointment-form" isLoading={isSending}>
              Submit
            </Button>
          </CardFooter>
        </Card>
      )}
    </Center>
  );
};

export default Appointment;

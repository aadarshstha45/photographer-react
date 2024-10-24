import { IconButton } from "@/components/Button";
import { ConfirmModal, DeleteAlert } from "@/components/Form";
import {
  useAddAvailableDate,
  useDeleteAvailableDate,
  useFetchAvailableDates,
} from "@/services/service-availability";
import Loader from "@/utils/Loader";
import {
  Flex,
  Icon,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { DateSelectArg } from "@fullcalendar/core/index.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { X } from "@phosphor-icons/react";
import { useState } from "react";

const Availability = () => {
  const { data: availableDates, isPending } = useFetchAvailableDates();
  const { mutateAsync: addAvailableDate, isPending: isAdding } =
    useAddAvailableDate();
  const { mutateAsync: deleteAvailableDate, isPending: isDeleting } =
    useDeleteAvailableDate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();
  const [id, setId] = useState<string | null>(null);
  // State to hold the selected date information
  const [selectedDate, setSelectedDate] = useState(null);
  const eventColor = useColorModeValue("gray.200", "gray.900");
  const eventTextColor = useColorModeValue("gray.900", "gray.200");
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setSelectedDate(selectInfo); // Save selected date info
    onOpen(); // Open modal to confirm
  };

  // Function to confirm and add the available date via API call
  const handleConfirmDate = async () => {
    if (selectedDate) {
      // Make API call to add the available date
      const response = await addAvailableDate({
        data: { date: selectedDate.startStr },
      });

      if (response.data.status) {
        setSelectedDate(null);
        onClose();
      }
    }
  };

  return isPending ? (
    <Loader width={{ md: "70vw" }} height={{ md: "70vh" }} />
  ) : (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth",
        }}
        events={availableDates?.data.rows.map((date) => ({
          title: "Available",
          start: date.date,
          id: date.id.toString(),
          allDay: true,
        }))}
        aspectRatio={2}
        height={"auto"}
        eventBackgroundColor="transparent"
        eventBorderColor="transparent"
        eventContent={function (arg) {
          return (
            <Flex
              mx={"auto"}
              borderRadius={5}
              bg={eventColor}
              p={2}
              align="center"
              justify="space-between"
              cursor={"pointer"}
            >
              <Text fontWeight={500} color={eventTextColor}>
                {arg.event.title}
              </Text>
              <IconButton
                aria-label="delete-date"
                icon={<Icon as={X} boxSize={4} />}
                variant={"ghost"}
                colorScheme="red"
                size={"sm"}
                onClick={() => {
                  setId(arg.event.id);
                  onDeleteOpen();
                }}
              />
            </Flex>
          );
        }}
        select={handleDateSelect}
        selectable={true} // Enable selecting dates
      />

      {/* Modal for confirmation */}
      <ConfirmModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleConfirmDate}
        header={"Add Available Date"}
        message={
          <Text>
            Are you sure you want to add the available date for{" "}
            <Text as={"strong"}>{selectedDate?.startStr}</Text> ?
          </Text>
        }
        isLoading={isAdding}
      />
      <DeleteAlert
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
        heading="Delete Available Date?"
        message="Are you sure you want to delete the available date?"
        isDeleting={isDeleting}
        onDelete={async () => {
          if (id) {
            await deleteAvailableDate({ id });
            onDeleteClose();
            setId(null);
          }
        }}
      />
    </>
  );
};

export default Availability;

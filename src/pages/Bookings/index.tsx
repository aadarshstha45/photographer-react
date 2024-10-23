import Badge from "@/components/Badge";
import { IconButton } from "@/components/Button";
import { DataTable } from "@/components/DataTable";
import { DeleteAlert, SearchInput } from "@/components/Form";
import {
  useDeleteBooking,
  useFetchBookings,
  useUpdateBooking,
} from "@/services/service-booking";
import { BookingResponse, IRow } from "@/services/service-interface";
import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Check, DotsThreeOutline, Trash, X } from "@phosphor-icons/react";
import { useState } from "react";

const Bookings = () => {
  const [pageSize, _] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [searchText, setSearchText] = useState("");

  const [id, setId] = useState<number | null>(null);
  const { mutateAsync: deleteBooking, isPending: isDeleting } =
    useDeleteBooking();

  const { mutateAsync: updateBooking } = useUpdateBooking();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const columns = [
    {
      header: "S.N",
      accessorKey: "sn",
      cell: ({ row }: IRow<BookingResponse>) => {
        return <Text> {pageSize * (pageIndex - 1) + (row.index + 1)} </Text>;
      },
    },
    {
      header: "Ticket Number",
      accessorKey: "ticket_number",
    },
    {
      header: "Name",
      accessorKey: "name",
    },

    {
      header: "Phone",
      accessorKey: "phone",
    },
    {
      header: "Address",
      accessorKey: "address",
    },

    {
      header: "Status",
      accessor: "status",
      cell: ({ row }: IRow<any>) => {
        const { status } = row.original;
        return (
          <Badge
            mx={"auto"}
            colorScheme={
              status === "pending"
                ? "yellow"
                : status === "rejected"
                ? "red"
                : "green"
            }
          >
            {status}
          </Badge>
        );
      },
    },
    {
      header: "Action",
      accessor: "action",
      cell: ({ row }: IRow<BookingResponse>) => {
        const { id } = row.original;
        return (
          <Menu autoSelect={false}>
            <IconButton
              as={MenuButton}
              aria-label="View Booking"
              icon={<Icon as={DotsThreeOutline} boxSize={6} />}
              onClick={() => {
                console.log(row.original);
              }}
              colorScheme="blackAlpha"
              variant={"ghost"}
            />
            <MenuList minWidth="200px">
              <MenuItem
                _hover={{
                  bg: "none",
                }}
              >
                <Button
                  variant="ghost"
                  colorScheme="gray"
                  rightIcon={<Icon as={Check} boxSize={5} />}
                  justifyContent={"space-between"}
                  w={"full"}
                  onClick={async () => {
                    await updateBooking({ id, data: { status: "approved" } });
                  }}
                >
                  Approve
                </Button>
              </MenuItem>
              <MenuItem
                _hover={{
                  bg: "none",
                }}
              >
                <Button
                  variant="ghost"
                  colorScheme="gray"
                  rightIcon={<Icon as={X} boxSize={5} />}
                  justifyContent={"space-between"}
                  w={"full"}
                  onClick={async () => {
                    await updateBooking({ id, data: { status: "rejected" } });
                  }}
                >
                  Reject
                </Button>
              </MenuItem>
              <MenuItem
                _hover={{
                  bg: "none",
                }}
              >
                <Button
                  variant="ghost"
                  colorScheme="gray"
                  rightIcon={<Icon as={Trash} boxSize={5} />}
                  justifyContent={"space-between"}
                  w={"full"}
                  onClick={() => {
                    setId(id);
                    onDeleteOpen();
                  }}
                >
                  Delete
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        );
      },
    },
  ];

  const { data: bookings, isPending: isLoading } = useFetchBookings({
    page: pageIndex,
    perPage: pageSize,
  });

  return (
    <DataTable
      columns={columns}
      data={bookings?.data?.rows ?? []}
      isLoading={isLoading}
      count={bookings?.data?.count ?? 0}
      filter={{
        globalFilter: searchText,
        setGlobalFilter: setSearchText,
      }}
      pagination={
        bookings?.data.count ?? 0 > 0
          ? {
              manual: true,
              pageCount: bookings?.data?.pagination?.last_page,
              totalRows: bookings?.data?.pagination?.total,

              pageParams: {
                pageIndex,
                pageSize,
              },
            }
          : undefined
      }
    >
      <HStack justify={"space-between"} align={"center"}>
        <SearchInput
          placeholder="Search Bookings"
          maxW={"300px"}
          onSearch={setSearchText}
        />
      </HStack>
      <DeleteAlert
        heading="Delete Booking?"
        message="Are you sure you want to delete this booking?"
        isDeleting={isDeleting}
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
        onDelete={async () => {
          await deleteBooking({ id });
          onDeleteClose();
          setId(null);
        }}
      />
    </DataTable>
  );
};

export default Bookings;

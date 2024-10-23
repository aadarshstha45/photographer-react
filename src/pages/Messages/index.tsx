import { ActionColumn, DataTable } from "@/components/DataTable";
import { DeleteAlert, SearchInput } from "@/components/Form";
import { IRow, MessageResponse } from "@/services/service-interface";
import { useDeleteMessage, useFetchMessages } from "@/services/service-message";
import { Flex, HStack, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Messages = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const pageFromUrl = Number(urlParams.get("page")) || 1;

  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, _] = useState(10);
  const [searchText, setSearchText] = useState<string>("");
  const [id, setId] = useState<number | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutateAsync: deleteMessage, isPending: isDeleting } =
    useDeleteMessage();
  useEffect(() => {
    setPageIndex(pageFromUrl);
  }, [pageFromUrl]);
  const columns = [
    {
      header: "S.N",
      accessorKey: "sn",
      cell: ({ row }: IRow<MessageResponse>) => {
        return <Text> {pageSize * (pageIndex - 1) + (row.index + 1)} </Text>;
      },
      enableSorting: false,
    },
    {
      header: "Name",
      accessorKey: "name",
      cell: ({ row }: IRow<MessageResponse>) => {
        return (
          <Text textTransform={"capitalize"} fontWeight={500}>
            {row.original.name}
          </Text>
        );
      },
    },
    {
      header: "Email",
      accessorKey: "email",
      cell: ({ row }: IRow<MessageResponse>) => {
        return <Text textTransform={"capitalize"}>{row.original.email}</Text>;
      },
      enableSorting: false,
    },
    {
      header: "Address",
      accessorKey: "address",
      cell: ({ row }: IRow<MessageResponse>) => {
        return (
          <Text textTransform={"capitalize"} fontWeight={500}>
            {row.original.address}
          </Text>
        );
      },
      enableSorting: false,
    },
    {
      header: "Message",
      accessorKey: "message",
      cell: ({ row }: IRow<MessageResponse>) => {
        return (
          <Text textTransform={"capitalize"} fontWeight={500}>
            {row.original.message}
          </Text>
        );
      },
      enableSorting: false,
    },
    {
      header: "Phone",
      accessorKey: "phone",
      cell: ({ row }: IRow<MessageResponse>) => {
        return (
          <Text textTransform={"capitalize"} fontWeight={500}>
            {row.original.phone}
          </Text>
        );
      },
      enableSorting: false,
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }: IRow<MessageResponse>) => {
        const { id } = row.original;
        return (
          <HStack>
            <ActionColumn
              handleDelete={() => {
                setId(id);
                onOpen();
              }}
            />
          </HStack>
        );
      },
    },
  ];

  const { data: message, isPending: isLoading } = useFetchMessages();
  return (
    <Flex flexDir={"column"} gap={4}>
      <DataTable
        columns={columns}
        data={message?.data?.rows ?? []}
        isLoading={isLoading}
        count={message?.data.count ?? 0}
        filter={{
          globalFilter: searchText,
          setGlobalFilter: setSearchText,
        }}
        pagination={
          message?.data.count ?? 0 > 0
            ? {
                manual: true,
                pageCount: message?.data?.pagination?.last_page,
                totalRows: message?.data?.pagination?.total,
                pageParams: {
                  pageIndex,
                  pageSize,
                },
              }
            : undefined
        }
      >
        <Flex justify={"space-between"} align={"center"}>
          <SearchInput
            placeholder="Search Messages"
            maxW={"300px"}
            onSearch={setSearchText}
          />
        </Flex>
      </DataTable>
      <DeleteAlert
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setId(null);
        }}
        onDelete={async () => {
          await deleteMessage({ id });
          onClose();
          setId(null);
        }}
        heading="Delete Message?"
        message="Are you sure you want to delete this message?"
        isDeleting={isDeleting}
      />
    </Flex>
  );
};

export default Messages;

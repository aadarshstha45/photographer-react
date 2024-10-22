import { ActionColumn, DataTable } from "@/components/DataTable";
import { SearchInput } from "@/components/Form";
import { Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Messages = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const pageFromUrl = Number(urlParams.get("page")) || 1;

  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, _] = useState(10);
  const [searchText, setSearchText] = useState<string>("");
  useEffect(() => {
    setPageIndex(pageFromUrl);
  }, [pageFromUrl]);
  const columns = [
    {
      header: "S.N",
      accessorKey: "sn",
      cell: ({ row }: any) => {
        return <Text> {pageSize * (pageIndex - 1) + (row.index + 1)} </Text>;
      },
      enableSorting: false,
    },
    {
      header: "Name",
      accessorKey: "name",
      cell: ({ row }: any) => {
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
      cell: ({ row }: any) => {
        return <Text textTransform={"capitalize"}>{row.original.email}</Text>;
      },
      enableSorting: false,
    },
    {
      header: "Address",
      accessorKey: "address",
      cell: ({ row }: any) => {
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
      cell: ({ row }: any) => {
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
      cell: ({ row }: any) => {
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
      cell: ({ row }: any) => {
        return (
          <HStack>
            <ActionColumn
              handleEdit={() => {
                console.log({ row });
              }}
              handleDelete={() => {}}
            />
          </HStack>
        );
      },
    },
  ];
  return (
    <Flex flexDir={"column"} gap={4}>
      <DataTable
        columns={columns}
        data={[]}
        // isLoading={isLoading}
        // count={category?.data.count ?? 0}
        filter={{
          globalFilter: searchText,
          setGlobalFilter: setSearchText,
        }}
        // pagination={
        //   category?.data.count ?? 0 > 0
        //     ? {
        //         manual: true,
        //         pageCount: category?.data?.pagination?.last_page,
        //         totalRows: category?.data?.pagination?.total,
        //         pageParams: {
        //           pageIndex,
        //           pageSize,
        //         },
        //       }
        //     : undefined
        // }
      >
        <Flex justify={"space-between"} align={"center"}>
          <SearchInput
            placeholder="Search Messages"
            maxW={"300px"}
            onSearch={setSearchText}
          />
          <Button
            as={Link}
            to={"/category/add"}
            leftIcon={<Icon as={Plus} boxSize={5} />}
            size={"lg"}
          >
            Add
          </Button>
        </Flex>
      </DataTable>
    </Flex>
  );
};

export default Messages;

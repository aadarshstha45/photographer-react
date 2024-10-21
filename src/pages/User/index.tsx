import { ActionColumn, DataTable, StatusSwitch } from "@/components/DataTable";
import { UserResponse } from "@/services/service-interface";
import { HStack, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { Row } from "@tanstack/react-table";
import UserForm from "./Form";
import { useFetchUsers } from "@/services/service-user";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";
import { SearchInput } from "@/components/Form";

const Users = () => {
  const columns = [
    {
      header: "S.No",
      accessorKey: "sn",
      cell: ({ row }: { row: Row<UserResponse> }) => {
        return row.index + 1;
      },
      enableSorting: false,
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },

    {
      header: "Status",
      accessorKey: "status",
      cell: ({ row }: { row: Row<UserResponse> }) => {
        const { is_active, id } = row.original;
        return <StatusSwitch id={id} isActive={is_active} model="user" />;
      },
      enableSorting: false,
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({ row }: { row: Row<UserResponse> }) => {
        const { id } = row.original;
        return (
          <ActionColumn
            handleDelete={() => console.log("Delete", id)}
            handleEdit={() => console.log("Edit", id)}
          />
        );
      },
      enableSorting: false,
    },
  ];

  const { data: users, isPending } = useFetchUsers();
  const [searchText, setSearchText] = useState<string>("");
  const {
    isOpen: isFormOpen,
    onOpen: openForm,
    onClose: closeForm,
  } = useDisclosure();

  const bg = useColorModeValue("gray.50", "gray.900");
  useEffect(() => {
    console.log({ searchText });
  }, [searchText]);
  return (
    <>
      {/* Table to display users */}
      <DataTable
        columns={columns}
        data={users?.data?.rows ?? []}
        count={users?.data.count ?? 0}
        filter={{
          globalFilter: searchText,
          setGlobalFilter: setSearchText,
        }}
        pagination={{
          manual: true,
          pageCount: users?.data?.pagination?.last_page ?? 0,
          totalRows: users?.data?.pagination?.total ?? 0,
          pageParams: {
            pageIndex: users?.data?.pagination?.current_page ?? 0,
            pageSize: users?.data?.pagination?.per_page ?? 0,
          },
        }}
        isLoading={isPending}
        header={
          <HStack spacing={4} bg={bg} p={4} borderRadius={5}>
            <SearchInput w={"250px"} onSearch={setSearchText} />
            <Button size={"lg"} onClick={openForm}>
              Add User
            </Button>
          </HStack>
        }
      />

      {/* Form to add/edit user */}
      <UserForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
};

export default Users;

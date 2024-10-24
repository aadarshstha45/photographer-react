import { Button } from "@/components/Button";
import { ActionColumn, DataTable, StatusSwitch } from "@/components/DataTable";
import { SearchInput } from "@/components/Form";
import { IRow, UserResponse } from "@/services/service-interface";
import { useFetchUsers } from "@/services/service-user";
import { HStack, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import UserForm from "./Form";

const Users = () => {
  const columns = [
    {
      header: "S.No",
      accessorKey: "sn",
      cell: ({ row }: IRow<UserResponse>) => {
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
      cell: ({ row }: IRow<UserResponse>) => {
        const { is_active, id } = row.original;
        return <StatusSwitch id={id} isActive={is_active} model="user" />;
      },
      enableSorting: false,
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({ row }: IRow<UserResponse>) => {
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
      >
        <HStack justify={"space-between"} align={"center"} gap={4}>
          <SearchInput
            placeholder="Search Users"
            maxW={"300px"}
            onSearch={setSearchText}
          />
          <Button size={"lg"} onClick={openForm}>
            Add User
          </Button>
        </HStack>
      </DataTable>

      {/* Form to add/edit user */}
      <UserForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  );
};

export default Users;

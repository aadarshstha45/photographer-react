import { DataTable } from "@/components/DataTable";
import ActionColumn from "@/components/DataTable/ActionColumn";
import StatusSwitch from "@/components/DataTable/StatusSwitch";
import { DeleteAlert, SearchInput } from "@/components/Form";
import {
  useDeleteCategory,
  useFetchCategory,
} from "@/services/service-category";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Plus } from "@phosphor-icons/react";
import { CategoryResponse, IRow } from "@/services/service-interface";

const Category = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const pageFromUrl = Number(urlParams.get("page")) || 1;

  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, _] = useState(10);

  useEffect(() => {
    setPageIndex(pageFromUrl);
  }, [pageFromUrl]);

  const { data: category, isPending: isLoading } = useFetchCategory({
    page: pageFromUrl,
    perPage: pageSize,
  });
  const navigate = useNavigate();
  const [id, setId] = useState<number | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutateAsync: deleteCategory, isPending: isDeleting } =
    useDeleteCategory();
  const handleOpen = (id: number) => {
    setId(id);
    onOpen();
  };

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
      cell: ({ row }: IRow<CategoryResponse>) => {
        return (
          <Text textTransform={"capitalize"} fontWeight={500}>
            {row.original.name}{" "}
          </Text>
        );
      },
    },
    {
      header: "Description",
      accessorKey: "description",
      cell: ({ row }: IRow<CategoryResponse>) => {
        return (
          <Text textTransform={"capitalize"} fontWeight={500}>
            {row.original.description}{" "}
          </Text>
        );
      },
      enableSorting: false,
    },
    {
      header: "Image",
      accessorKey: "image",
      cell: ({ row }: IRow<CategoryResponse>) => {
        return (
          <Stack align={"center"}>
            <Image objectFit={"cover"} src={row.original.image} boxSize={10} />
          </Stack>
        );
      },
      enableSorting: false,
    },
    {
      header: "Status",
      accessorKey: "is_active",
      enableSorting: false,

      cell: ({ row }: any) => {
        const { is_active, id } = row.original;
        return (
          <StatusSwitch
            id={id as string}
            isActive={is_active}
            model="category"
          />
        );
      },
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }: IRow<CategoryResponse>) => {
        return (
          <HStack>
            <ActionColumn
              handleEdit={() => navigate(`/category/edit/${row.original.id}`)}
              handleDelete={() => handleOpen(row.original.id)}
            />
          </HStack>
        );
      },
    },
  ];

  const handleDelete = async () => {
    if (id) {
      await deleteCategory({ id });
      onClose();
      setId(null);
    }
  };

  return (
    <Flex flexDir={"column"} gap={4}>
      <DataTable
        columns={columns}
        data={category?.data.rows ?? []}
        isLoading={isLoading}
        count={category?.data.count ?? 0}
        filter={{
          globalFilter: searchText,
          setGlobalFilter: setSearchText,
        }}
        pagination={
          category?.data.count ?? 0 > 0
            ? {
                manual: true,
                pageCount: category?.data?.pagination?.last_page,
                totalRows: category?.data?.pagination?.total,
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
            placeholder="Search Category"
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

      <DeleteAlert
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setId(null);
        }}
        onDelete={handleDelete}
        heading="Delete Category"
        isDeleting={isDeleting}
        message="Are you sure you want to delete this category?"
      />
    </Flex>
  );
};

export default Category;

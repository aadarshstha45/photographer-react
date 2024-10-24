import { DataTable } from "@/components/DataTable";
import ActionColumn from "@/components/DataTable/ActionColumn";
import StatusSwitch from "@/components/DataTable/StatusSwitch";
import { DeleteAlert, SearchInput } from "@/components/Form";
import { CategoryResponse, IRow } from "@/services/service-interface";
import { useDeleteWork, useFetchWork } from "@/services/service-work";
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
import { Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Work = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);

  const pageFromUrl = Number(urlParams.get("page")) || 1;

  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, _] = useState(10);

  useEffect(() => {
    setPageIndex(pageFromUrl);
  }, [pageFromUrl]);

  const { data: work, isPending: isLoading } = useFetchWork({
    page: pageFromUrl,
    perPage: pageSize,
  });
  const navigate = useNavigate();
  const [id, setId] = useState<number | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { mutateAsync: deleteWork, isPending: isDeleting } = useDeleteWork();
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
      header: "Title",
      accessorKey: "title",
      cell: ({ row }: IRow<CategoryResponse>) => {
        return (
          <Text textTransform={"capitalize"} fontWeight={500}>
            {row.original.title}{" "}
          </Text>
        );
      },
    },
    {
      header: "Description",
      accessorKey: "description",
      maxSize: 500,
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
          <StatusSwitch id={id as string} isActive={is_active} model="work" />
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
              handleEdit={() => navigate(`/my-works/edit/${row.original.id}`)}
              handleDelete={() => handleOpen(row.original.id)}
            />
          </HStack>
        );
      },
    },
  ];

  const handleDelete = async () => {
    if (id) {
      await deleteWork({ id });
      onClose();
      setId(null);
    }
  };

  return (
    <Flex flexDir={"column"} gap={4}>
      <DataTable
        columns={columns}
        data={work?.data.rows ?? []}
        isLoading={isLoading}
        count={work?.data.count ?? 0}
        filter={{
          globalFilter: searchText,
          setGlobalFilter: setSearchText,
        }}
        pagination={
          work?.data.count ?? 0 > 0
            ? {
                manual: true,
                pageCount: work?.data?.pagination?.last_page,
                totalRows: work?.data?.pagination?.total,
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
            placeholder="Search Work"
            maxW={"300px"}
            onSearch={setSearchText}
          />
          <Button
            as={Link}
            to={"/my-works/add"}
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
        heading="Delete Work"
        isDeleting={isDeleting}
        message="Are you sure you want to delete this work?"
      />
    </Flex>
  );
};

export default Work;

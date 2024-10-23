import { Button } from "@/components/Button";
import { ReactDropzone, StatusRadio, TextInput } from "@/components/Form";
import { useGetDirtyData, useGetErrors } from "@/hooks";
import { toFormData } from "@/services/service-axios";
import {
  useAddCategory,
  useFetchSingleCategory,
  useUpdateCategory,
} from "@/services/service-category";
import Loader from "@/utils/Loader";
import { Flex, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const CategoryForm = () => {
  const defaultValues = {
    name: "",
    description: "",
    image: "",
    is_active: "1",
    images: [],
  };

  const { id } = useParams();

  const {
    mutateAsync: addCategory,
    isPending: isAdding,
    isError: isAddingError,
    error: addError,
  } = useAddCategory();

  const {
    mutateAsync: updateCategory,
    isPending: isUpdating,
    isError: isUpdatingError,
    error: updateError,
  } = useUpdateCategory();

  const navigate = useNavigate();

  const { control, handleSubmit, reset, formState } = useForm({
    defaultValues,
  });
  const { data: category, isFetching: isFetchingData } = useFetchSingleCategory(
    parseInt(id!)
  );
  const [prevImages, setPrevImages] = useState<{ id: number; url: string }[]>(
    []
  );
  const [removeImage, setRemoveImage] = useState<boolean>(false);
  const [deleteImages, setDeleteImages] = useState<string[]>([]);
  const [backendError, setBackendError] = useState<Record<string, string[]>>(
    {}
  );

  useEffect(() => {
    isAddingError
      ? setBackendError(useGetErrors(addError))
      : isUpdatingError
      ? setBackendError(useGetErrors(updateError))
      : {};
  }, [isAddingError, isUpdatingError, addError, updateError]);

  useEffect(() => {
    if (id) {
      reset({
        name: category?.data?.name,
        description: category?.data?.description,
        image: category?.data?.image,
        is_active: category?.data?.is_active ? "1" : "0",
      });
      if (category?.data?.images.length ?? 0 > 0) {
        setPrevImages(
          category?.data?.images?.map((item) => ({
            id: item.id,
            url: item.image,
          })) || []
        );
      }
    } else {
      reset(defaultValues);
    }
  }, [id, reset, category?.data]);

  const onSubmit = async (data: any) => {
    const formData = id
      ? toFormData<any>(useGetDirtyData(formState, data))
      : toFormData<any>(data); // For add, send full data
    if (id) {
      if (deleteImages.length > 0) {
        formData.append("deleted_images", JSON.stringify(deleteImages));
      }
      if (removeImage) {
        formData.append("remove_image", removeImage);
      }
      const response = await updateCategory({
        id,
        data: formData,
      });
      if (response.data.status) {
        reset(defaultValues);
        navigate("/category");
      }
    } else {
      const response = await addCategory({ data: formData });
      if (response.data.status) {
        reset(defaultValues);
        navigate("/category");
      }
    }
  };

  return isFetchingData ? (
    <Loader height={"70dvh"} width={"70dvw"} />
  ) : (
    <Flex flexDir={"column"} gap={4}>
      <Text fontWeight={600} fontSize={"2xl"}>
        {id ? "Edit" : "Add"} Category
      </Text>
      <Flex
        gap={4}
        flexDir={"column"}
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          name={"name"}
          control={control}
          label={"Name"}
          backendError={backendError.name}
          isRequired
        />
        <TextInput
          control={control}
          name={"description"}
          type="textarea"
          label={"Description"}
        />

        <ReactDropzone
          name={"image"}
          control={control}
          label={"Image"}
          options={{
            accept: { "image/png": [] },
          }}
          boxWidth={"250px"}
          boxHeight={"250px"}
          file={id ? category?.data?.image : ""}
          isRequired
          noMaxSize
          backendError={backendError.image}
          setRemoveImage={setRemoveImage}
        />
        <ReactDropzone
          isMultiple
          name={"images"}
          control={control}
          label={"Images"}
          options={{
            accept: { "image/png": [] },
          }}
          noMaxSize
          prevFiles={prevImages}
          setPrevFiles={setPrevImages}
          setDeleteImages={setDeleteImages}
          width={"100%"}
          boxWidth={"250px"}
          boxHeight={"250px"}
          isRequired
          backendError={backendError.images}
        />
        <StatusRadio control={control} />

        <HStack spacing={2} my={6}>
          <Button variant={"outline"} onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button type={"submit"} isLoading={id ? isUpdating : isAdding}>
            Submit
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default CategoryForm;

import { Button } from "@/components/Button";
import { ReactDropzone, StatusRadio, TextInput } from "@/components/Form";
import { useGetDirtyData, useGetErrors } from "@/hooks";
import { toFormData } from "@/services/service-axios";
import {
  useAddWork,
  useFetchSingleWork,
  useUpdateWork,
} from "@/services/service-work";
import Loader from "@/utils/Loader";
import { Flex, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const WorkForm = () => {
  const defaultValues = {
    title: "",
    description: "",
    image: "",
    is_active: "1",
    images: [],
  };

  const { id } = useParams();

  const {
    mutateAsync: addWork,
    isPending: isAdding,
    isError: isAddingError,
    error: addError,
  } = useAddWork();

  const {
    mutateAsync: updateWork,
    isPending: isUpdating,
    isError: isUpdatingError,
    error: updateError,
  } = useUpdateWork();

  const navigate = useNavigate();

  const { control, handleSubmit, reset, formState } = useForm({
    defaultValues,
  });
  const { data: work, isFetching: isFetchingData } = useFetchSingleWork(
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
        title: work?.data?.title,
        description: work?.data?.description,
        image: work?.data?.image,
        is_active: work?.data?.is_active ? "1" : "0",
      });
      if (work?.data?.images.length ?? 0 > 0) {
        setPrevImages(
          work?.data?.images?.map((item) => ({
            id: item.id,
            url: item.image,
          })) || []
        );
      }
    } else {
      reset(defaultValues);
    }
  }, [id, reset, work?.data]);

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
      const response = await updateWork({
        id,
        data: formData,
      });
      if (response.data.status) {
        reset(defaultValues);
        navigate("/my-works");
      }
    } else {
      const response = await addWork({ data: formData });
      if (response.data.status) {
        reset(defaultValues);
        navigate("/my-works");
      }
    }
  };

  return isFetchingData ? (
    <Loader height={"70dvh"} width={"70dvw"} />
  ) : (
    <Flex flexDir={"column"} gap={4}>
      <Text fontWeight={600} fontSize={"2xl"}>
        {id ? "Edit" : "Add"} Work
      </Text>
      <Flex
        gap={4}
        flexDir={"column"}
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          name={"title"}
          control={control}
          label={"Title"}
          backendError={backendError.title}
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
            accept: { "image/*": [] },
          }}
          boxWidth={"250px"}
          boxHeight={"250px"}
          file={id ? work?.data?.image : ""}
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
            accept: { "image/*": [] },
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

export default WorkForm;

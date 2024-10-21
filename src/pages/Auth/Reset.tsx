import { TextInput } from "@/components/Form";
import useGetErrors from "@/components/hooks/useGetErrors";
import { useResetPassword } from "@/services/service-user";
import { Button, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { boxProps } from "./boxProps";

const ResetPassword = () => {
  const defaultValues = {
    password: "",
  };
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({ defaultValues });
  const {
    mutateAsync: resetPassword,
    isError,
    error,
    isPending,
  } = useResetPassword();

  const [backendError, setBackendError] = useState<Record<string, string[]>>(
    {}
  );

  useEffect(() => {
    isError ? setBackendError(useGetErrors(error)) : setBackendError({});
  }, [isError, error]);

  const onSubmit = async (data: typeof defaultValues) => {
    const response = await resetPassword({ data });
    if (response.data.status) {
      navigate("/login");
    }
  };

  return (
    <Center h={"100dvh"} w={"full"}>
      <Flex
        {...boxProps}
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
        flexDirection="column"
      >
        <TextInput
          label={"Password"}
          isRequired
          placeholder={"Enter New Password"}
          control={control}
          name={"password"}
          type={"password"}
          backendError={backendError.password}
        />
        <Button type={"submit"} isLoading={isPending}>
          Submit
        </Button>
      </Flex>
    </Center>
  );
};

export default ResetPassword;

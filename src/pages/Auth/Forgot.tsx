import { TextInput } from "@/components/Form";
import useGetErrors from "@/components/hooks/useGetErrors";
import { useForgotPassword } from "@/services/service-user";
import { Button, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { boxProps } from "./boxProps";

const ForgotPassword = () => {
  const defaultValues = {
    email: "",
  };
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({ defaultValues });
  const {
    mutateAsync: forgotPassword,
    isError,
    error,
    isPending,
  } = useForgotPassword();

  const [backendError, setBackendError] = useState<Record<string, string[]>>(
    {}
  );

  useEffect(() => {
    isError ? setBackendError(useGetErrors(error)) : setBackendError({});
  }, [isError, error]);

  const onSubmit = async (data: typeof defaultValues) => {
    const response = await forgotPassword({ data });
    if (response.data.status) {
      navigate("/email-confirmation");
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
          label={"Email"}
          isRequired
          placeholder={"Enter your email"}
          control={control}
          name={"email"}
          type={"email"}
          backendError={backendError.email}
        />
        <Button type={"submit"} isLoading={isPending}>
          Submit
        </Button>
      </Flex>
    </Center>
  );
};

export default ForgotPassword;

import { TextInput } from "@/components/Form";
import useGetErrors from "@/components/hooks/useGetErrors";
import { useResetPassword } from "@/services/service-user";
import { Button, Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { boxProps } from "./boxProps";

const ResetPassword = () => {
  // Use useLocation to get the current location object
  const location = useLocation();

  // Function to retrieve query parameters
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const email = queryParams.get("email");
  console.log({ token, email });
  const defaultValues = {
    password: "",
    password_confirmation: "",
    token,
    email,
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
        <TextInput
          label={"Confirm Password"}
          isRequired
          placeholder={"Enter New Password Again"}
          control={control}
          name={"password_confirmation"}
          type={"password"}
          backendError={backendError.password_confirmation}
        />
        <Button type={"submit"} isLoading={isPending}>
          Submit
        </Button>
      </Flex>
    </Center>
  );
};

export default ResetPassword;

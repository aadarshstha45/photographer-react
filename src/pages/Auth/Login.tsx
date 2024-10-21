import { Button } from "@/components/Button";
import { TextInput } from "@/components/Form";
import { useLogin } from "@/services/service-auth";
import { Center, Flex, Link as CLink, Text, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { boxProps } from "./boxProps";
import { useEffect } from "react";
import { AxiosError } from "axios";

const Login = () => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const { control, handleSubmit } = useForm({
    defaultValues,
  });
  const { mutateAsync: login, isPending, isError, error } = useLogin();

  useEffect(() => {
    isError && console.log(error);
  }, [isError, error]);

  const onSubmit = async (data: typeof defaultValues) => {
    await login(data);
  };

  return (
    <Center h="100dvh" px={2}>
      <Flex
        {...boxProps}
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
        flexDirection="column"
      >
        {isError && (
          <Text
            textAlign={"center"}
            color={"red.500"}
            p={2}
            bg={"red.100"}
            borderRadius={5}
            fontWeight={500}
          >
            {(error as AxiosError<{ message: string }>)?.response?.data
              ?.message ?? "An error occurred."}
          </Text>
        )}
        <TextInput isRequired control={control} name="email" label="Email" />
        <TextInput
          isRequired
          control={control}
          name="password"
          label="Password"
        />
        <Stack align={"end"}>
          <CLink
            as={Link}
            variant="link"
            to="/forgot-password"
            w={"max-content"}
          >
            Forgot password?
          </CLink>
        </Stack>
        <Button type="submit" isLoading={isPending}>
          Login
        </Button>
      </Flex>
    </Center>
  );
};

export default Login;

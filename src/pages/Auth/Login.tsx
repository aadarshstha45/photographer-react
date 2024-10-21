import { Button } from "@/components/Button";
import { TextInput } from "@/components/Form";
import { useLogin } from "@/services/service-auth";
import { Center, Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const Login = () => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const { control, handleSubmit } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: typeof defaultValues) => {
    await login(data);
  };

  const { mutateAsync: login, isPending } = useLogin();

  return (
    <Center h="100dvh">
      <Flex
        flexDir={"column"}
        gap={4}
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          placeholder="Email"
          control={control}
          name="email"
          label="Email"
        />
        <TextInput control={control} name="password" label="Password" />
        <Button type="submit" isLoading={isPending}>
          Login
        </Button>
      </Flex>
    </Center>
  );
};

export default Login;

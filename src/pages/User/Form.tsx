import { StatusRadio, TextInput } from "@/components/Form";
import ModalForm from "@/components/Form/ModalForm";
import useGetErrors from "@/components/hooks/useGetErrors";
import { useAddUser } from "@/services/service-user";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface IUserForm {
  isOpen: boolean;
  onClose: () => void;
  id?: number | null;
}

const UserForm: FC<IUserForm> = ({ isOpen, onClose, id }) => {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    is_active: "1",
  };

  const { control, handleSubmit, reset } = useForm({ defaultValues });

  const {
    mutateAsync: addUser,
    isPending: isAdding,
    isError,
    error,
  } = useAddUser();
  const [backendError, setBackendError] = useState<Record<string, string[]>>(
    {}
  );

  useEffect(() => {
    isError ? setBackendError(useGetErrors(error)) : setBackendError({});
  }, [isError, error]);

  const onSubmit = async (data: typeof defaultValues) => {
    await addUser({ data });
    onClose();
    reset(defaultValues);
  };

  return (
    <ModalForm
      heading={id ? "Edit User" : "Add User"}
      id={id}
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setBackendError({});
        reset(defaultValues);
      }}
      onSubmit={handleSubmit(onSubmit)}
      isLoading={isAdding}
    >
      <TextInput
        name={"name"}
        control={control}
        label={"Name"}
        backendError={backendError.name}
      />
      <TextInput
        name={"email"}
        control={control}
        label={"Email"}
        type="email"
        backendError={backendError.email}
      />
      <TextInput name={"password"} control={control} label={"Password"} />
      <TextInput
        name={"password_confirmation"}
        control={control}
        label={"Confirm Password"}
      />
      <StatusRadio control={control} />
    </ModalForm>
  );
};

export default UserForm;

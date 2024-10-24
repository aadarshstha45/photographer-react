import { Button } from "@/components/Button";
import { Center, Icon, Stack, Text } from "@chakra-ui/react";
import { Check } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const AppointmentSuccess = () => {
  const navigate = useNavigate();
  return (
    <Center h={"85dvh"} w={"full"} maxW={"95vw"} mx={"auto"}>
      <Stack align={"center"}>
        <Icon
          as={Check}
          boxSize={20}
          bg={"success.200"}
          borderRadius={"full"}
          color={"success.500"}
          p={2}
        />
        <Text fontSize={"2xl"} fontWeight={500}>
          Your appointment has been successfully booked.
        </Text>
        <Text fontSize={"lg"} fontWeight={400}>
          You will receive an email confirmation shortly.
        </Text>
        <Text fontSize={"lg"} fontWeight={400}>
          Thank you for choosing us.
        </Text>
        <Button onClick={() => navigate("/")} mt={4}>
          Go back to Home
        </Button>
      </Stack>
    </Center>
  );
};

export default AppointmentSuccess;

import {
  Button,
  ChakraProvider,
  ColorModeScript,
  HStack,
  Text,
} from "@chakra-ui/react";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { config, theme } from "./theme";
const ErrorFallback = () => {
  return (
    <HStack justify={"center"}>
      <Text>Something went wrong:</Text>
      <Button onClick={() => window.location.reload()}>Retry</Button>
    </HStack>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnReconnect: true,
      staleTime: 30 * 1000,
    },
  },
  queryCache: new QueryCache(),
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <ColorModeScript initialColorMode={config.initialColorMode} />
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <ToastContainer
              position="bottom-right"
              newestOnTop
              autoClose={3000}
              pauseOnFocusLoss={false}
              transition={Slide}
            />
            <HelmetProvider>{children}</HelmetProvider>
          </QueryClientProvider>
        </ChakraProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default Provider;

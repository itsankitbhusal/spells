import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IProps {
  children: React.ReactNode;
}

const AppQueryProvider = ({ children }: IProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: 2,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppQueryProvider;

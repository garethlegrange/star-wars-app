"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StyledEngineProvider } from "@mui/material/styles";

const queryClient = new QueryClient();

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterCacheProvider>
        <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
      </AppRouterCacheProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

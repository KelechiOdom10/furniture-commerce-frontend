import { useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import Layout from "@components/Layout";
import { QUERY_OPTIONS_DEFAULT } from "@constants/index";
import "../styles/app.css";

export async function getStaticProps() {}

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: QUERY_OPTIONS_DEFAULT,
      })
  );

  return (
    <>
      <Head>
        <title>Commerce Frontend</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Commerce Frontend by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              fontFamily: "Work Sans",
              headings: {
                fontFamily: "Work Sans",
              },
              colorScheme: "light",
            }}
          >
            <NotificationsProvider position="top-right" zIndex={2077}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </NotificationsProvider>
          </MantineProvider>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

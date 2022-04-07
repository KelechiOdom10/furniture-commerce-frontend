import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import Navbar from "@components/layout/Navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
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
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "Work Sans",
          colorScheme: "light",
        }}
      >
        <NotificationsProvider>
          <Navbar />
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}

export default MyApp;

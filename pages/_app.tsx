import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import type { NextPage } from "next";
import { AppProps } from "next/app";

import { Layout } from "@components/layout";
import dataProvider from "@refinedev/simple-rest";
import "@styles/global.css";
import { appWithTranslation, useTranslation } from "next-i18next";

const API_URL = "https://api.fake-rest.refine.dev";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const renderComponent = () => {
    if (Component.noLayout) {
      return <Component {...pageProps} />;
    }

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };

  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <>
      <RefineKbarProvider>
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(API_URL)}
          i18nProvider={i18nProvider}
          resources={[
            {
              name: "loading",
              list: "/loading",
            },
            {
              name: "home",
              list: "/home",
            },
          ]}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          {renderComponent()}
          <RefineKbar />
        </Refine>
      </RefineKbarProvider>
    </>
  );
}

export default appWithTranslation(MyApp);

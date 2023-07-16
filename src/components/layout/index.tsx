import { ApplicationMenubar } from "@components/ApplicationMenubar";
import { Dock } from "@components/Dock/Index";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="layout">
      <div className="content">
        {router.pathname !== "/loading" && <ApplicationMenubar />}
        <div>{children}</div>
        {router.pathname !== "/loading" && <Dock />}
      </div>
    </div>
  );
};

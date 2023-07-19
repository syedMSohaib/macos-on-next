import { useReadLocalStorage } from "usehooks-ts";
import { NavigateToResource } from "@refinedev/nextjs-router";

export default function Home() {
  const isBooted = useReadLocalStorage("isBooted");

  // if (!isBooted) return <NavigateToResource resource="loading" />;
  return (
    <>
      <NavigateToResource resource="home" />
    </>
  );
}

Home.noLayout = true;

import { AiFillApple } from "react-icons/ai";
import { Progress } from "@components/ui/progress";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useRouter } from "next/router";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [isBooted, setIsBooted] = useLocalStorage("isBooted", false);
  const router = useRouter();

  useEffect(() => {
    if (isBooted) {
      router.push("/home");
      return;
    }

    const timer = setInterval(() => {
      // Increase the progress by 1 every second
      setProgress((prevProgress) => prevProgress + 1);
    }, 200);

    // Stop the timer when progress reaches 30
    if (progress == 100) {
      setIsBooted(true);
      clearInterval(timer);
      router.push("/home");
    }

    return () => {
      // Clean up the timer when the component unmounts
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="flex flex-col items-center">
        <AiFillApple className="text-white text-9xl" />
        <div className="mt-10 bg-primary w-60">
          <Progress value={progress} className="w-[100%]" />
        </div>
      </div>
    </div>
  );
}

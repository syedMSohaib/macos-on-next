import { ClassValue } from "clsx";
import React from "react";
import { cn } from "src/lib/utils";

interface BulletInterface {
  className?: ClassValue;
  children?: React.ReactNode;
}

export const Bullet = ({ className, children }: BulletInterface) => {
  return (
    <button
      className={cn(
        "h-[14px] w-[14px] border box-border relative mr-[3.5px] p-0 rounded-[100%] border-solid border-[rgba(0,0,0,0.06)]",
        "cursor-default",
        className
      )}
      id="close"
    >
      {children}
    </button>
  );
};

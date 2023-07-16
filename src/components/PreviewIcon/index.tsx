import React from "react";
import { cn } from "src/lib/utils";

interface IPreviewIcon {
  item: Item;
}

type Item = {
  title: string;
  icon: string;
};

export const PreviewIcon = ({ item }: IPreviewIcon) => {
  return (
    <div
      className={cn(
        "group cursor-pointer flex line-clamp-2 flex-col items-center"
      )}
    >
      <div
        className={cn(
          "w-[80px] h-[80px]",
          "group-hover:bg-black group-hover:bg-opacity-20",
          "flex justify-center items-center"
        )}
      >
        <img className={cn("w-[60px] h-[60px]")} src={item.icon} />
      </div>

      <p
        className={cn(
          "truncate w-[120px] text-white text-sm mt-1",
          "group-hover:bg-blue-500 group-hover:text-white group-hover:p-1"
        )}
      >
        {item.title}
      </p>
    </div>
  );
};

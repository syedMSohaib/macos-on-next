import React from "react";
import { cn } from "src/lib/utils";
import { dockElements } from "src/data/dockItems";

export const Dock = () => {
  return (
    <div>
      <div className="w-auto h-[60px]  flex justify-center absolute -translate-x-2/4 rounded-2xl left-2/4 bottom-5">
        <div className="w-auto h-full bg-white bg-opacity-20 border-gray-300 flex items-center justify-center backdrop-blur-[13px] p-[3px] rounded-2xl">
          {dockElements.map((element, index) => {
            return (
              <li
                className={cn(
                  `group li-${index + 1}`,
                  `flex items-center justify-center w-[50px] h-[50px] align-bottom transition-[0.2s] origin-[50%_100%]`,
                  "hover:mx-[13px] hover:my-0"
                )}
              >
                <div
                  className={cn(
                    "invisible group-hover:visible",
                    "absolute top-[-60px] text-[rgba(255,255,255,0.9)] h-2.5 flex items-center justify-center invisible px-[15px] py-3.5 rounded-[5px]",
                    "bg-[#00000080] text-xs font-medium",
                    "after:content-[''] after:absolute after:w-0 after:h-0 after:backdrop-blur-[13px]",
                    "after:border-t-[10px] after:border-t-[rgba(0,0,0,0.5)] after:border-x-[10px] after:border-x-transparent after:border-solid after:-bottom-2.5"
                  )}
                >
                  {element.name}
                </div>
                <img
                  className="group-hover:scale-125 group-hover:-translate-y-4 w-full h-full object-cover transition-[0.2s]"
                  src={element.img}
                  alt=""
                />
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

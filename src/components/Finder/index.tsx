import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dialog, DialogContent } from "@components/ui/dialog";
import TrafficLights from "@components/TrafficLight";
import { Bullet } from "@components/ui/Bullet";
import { finderItems } from "src/data/finderItem";
import { cn } from "src/lib/utils";

interface FinderItemProps {
  title: string;
  items: Item[];
}

interface Item {
  title: string;
  icon?: string;
  bg?: string;
}

export const Finder = () => {
  const [rerender, setRerender] = useState(false);
  const [open, setOpen] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const [isDragActive, setIsDragActive] = useState<boolean>(false);
  const initialPosition = useRef({ x: 0, y: 0 });

  const dragStartHandler = useCallback((event: MouseEvent) => {
    if (dragRef.current === event.target) {
      setIsDragActive(true);
      initialPosition.current = { x: event.x, y: event.y };
    }
  }, []);

  const draggingHandler = useCallback(
    (event: MouseEvent) => {
      if (isDragActive) {
        const { x, y } = initialPosition.current;

        if (boxRef.current) {
          const { offsetLeft, offsetTop } = boxRef.current;

          boxRef.current.style.left = `${offsetLeft - (x - event.x)}px`;
          boxRef.current.style.top = `${offsetTop - (y - event.y)}px`;
        }

        initialPosition.current = { x: event.x, y: event.y };
      }
    },
    [isDragActive]
  );

  const dragEndHandler = useCallback(() => {
    setIsDragActive(false);
    window.removeEventListener("mousemove", draggingHandler);
    window.removeEventListener("mouseup", dragEndHandler);
  }, [draggingHandler]);

  useEffect(() => {
    console.log("dragRef.current", dragRef.current);
    dragRef.current?.addEventListener("mousedown", dragStartHandler);
    window.addEventListener("mousemove", draggingHandler);
    window.addEventListener("mouseup", dragEndHandler);
  }, [dragEndHandler, dragStartHandler, draggingHandler]);

  console.log("boxRef", boxRef);
  console.log("dragRef", dragRef);

  useEffect(() => {
    setTimeout(() => {
      setRerender(true);
    }, 4000);
  }, []);

  return (
    <div className="">
      <button onClick={() => setOpen(!open)}>Open</button>
      <Dialog open={open}>
        <DialogContent
          ref={boxRef}
          className="resize rounded-md bg-[#323232] border-0 p-0 m-0"
        >
          <div className="min-w-md:min-w-[700px] grid grid-cols-[0.5fr_1.5fr] grid-rows-[1fr] gap-[0px_0px] grid-flow-row">
            <div ref={dragRef} className="bg-[#323232] p-2">
              <TrafficLights />
              <div className="mt-5">
                {finderItems.map((item: FinderItemProps, i: number) => (
                  <div key={i}>
                    <div className="pl-2 w-28 mt-1 text-white text-opacity-25 text-xs font-semibold leading-3 tracking-tight">
                      {item.title}
                    </div>
                    <div className="p-2 mt-1 flex flex-col gap-1">
                      {item.items.map((subItem: Item, j: number) => (
                        <div
                          className={cn(
                            "finder-item w-32 h-7 px-0 py-1.5 rounded-md flex-col justify-start items-start gap-2.5 inline-flex ",
                            "hover:bg-white hover:bg-opacity-20 cursor-default"
                          )}
                        >
                          <div className="w-28 justify-start items-center gap-0.5 inline-flex">
                            <div className="pr-5 justify-start items-start gap-1 flex">
                              <div className="relative flex-col justify-start items-start flex">
                                {subItem?.icon ? (
                                  <img
                                    className="w-3.5 h-3.5 me-1"
                                    src={subItem.icon as string}
                                    alt=""
                                  />
                                ) : (
                                  <Bullet
                                    className={cn("w-3.5 h-3.5", subItem?.bg)}
                                  />
                                )}
                              </div>
                              <div className="text-white text-xs font-normal leading-none tracking-tight">
                                {subItem.title}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1E1E1E]">body</div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@components/ui/dialog";
import TrafficLights from "@components/TrafficLight";
import { Bullet } from "@components/ui/Bullet";

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
        <DialogContent ref={boxRef} className="bg-[#323232] border-0 p-2 m-2">
          {/* <DialogHeader>
            <DialogTitle ref={dragRef} className="cursor-move"></DialogTitle>
            <button onClick={() => setOpen(!open)}>close</button>
          </DialogHeader> */}
          <div className="grid grid-cols-[0.5fr_1.5fr] grid-rows-[1fr] gap-[0px_0px] grid-flow-row">
            <div className="bg-[#323232] pl-3">
              <TrafficLights />
              <div className="w-28 mt-6 text-white text-opacity-25 text-xs font-semibold leading-3 tracking-tight">
                Favorites
              </div>

              <div className="w-28 mt-6 text-white text-opacity-25 text-xs font-semibold leading-3 tracking-tight">
                <ul>
                  <li>Air Drop</li>
                  <li>Recent</li>
                  <li>Desktop</li>
                  <li>Application</li>
                  <li>Documents</li>
                  <li>Downloads</li>
                </ul>
              </div>

              <div className="w-28 mt-6 text-white text-opacity-25 text-xs font-semibold leading-3 tracking-tight">
                ICloud
              </div>

              <div className="w-28 mt-6 text-white text-opacity-25 text-xs font-semibold leading-3 tracking-tight">
                <ul>
                  <li>ICloud Drive</li>
                </ul>
              </div>

              <div className="w-28 mt-6 text-white text-opacity-25 text-xs font-semibold leading-3 tracking-tight">
                Tags
              </div>

              <div className="w-28 mt-6 text-white text-opacity-25 text-xs font-semibold leading-3 tracking-tight">
                <ul>
                  <li>
                    <Bullet className="bg-blue-500" /> Blue Tag
                  </li>
                  <li>
                    <Bullet className="bg-orange-500" /> Orange Tag
                  </li>
                  <li>
                    <Bullet className="bg-green-500" /> Green Tag
                  </li>
                  <li>
                    <Bullet className="bg-purple-500" /> Purple Tag
                  </li>
                  <li>
                    <Bullet className="bg-teal-500" /> Teal Tag
                  </li>
                </ul>
              </div>
            </div>
            <div>body</div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

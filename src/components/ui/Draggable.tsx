import React, { FC, useCallback, useEffect, useRef, useState } from "react";

interface IProps {
  bodyStyle?: React.CSSProperties;
  children: React.ReactNode;
}

export const ReactPortalDialog__Overlay: React.CSSProperties = {
  position: "fixed",
  inset: "0",
  zIndex: "1000",
};

export const ReactPortalDialog__Body: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  maxHeight: "200px",
  width: "400px",
  backgroundColor: "rgb(223, 221, 221)",
  zIndex: "1000",
  transform: "translate(-50%, -50%)",
};

export const ReactPortalDialog__Move: React.CSSProperties = {
  backgroundColor: "salmon",
  textAlign: "center",
  padding: "5px",
  cursor: "move",
};

export const Draggable: FC<IProps> = ({ children, bodyStyle }) => {
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
    dragRef.current?.addEventListener("mousedown", dragStartHandler);
    window.addEventListener("mousemove", draggingHandler);
    window.addEventListener("mouseup", dragEndHandler);
  }, [dragEndHandler, dragStartHandler, draggingHandler]);

  return (
    <div ref={boxRef} style={ReactPortalDialog__Body}>
      <div
        ref={dragRef}
        style={ReactPortalDialog__Move}
        className="ReactPortalDialog__Move"
      >
        Move Her
      </div>
      {children}
    </div>
  );
};

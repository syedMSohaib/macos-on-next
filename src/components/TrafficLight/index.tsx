import { Bullet } from "@components/ui/Bullet";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsDashLg } from "react-icons/bs";
import { CiMaximize1 } from "react-icons/ci";

const TrafficLights = () => {
  return (
    <div className="group inline-flex gap-1">
      <Bullet className="bg-red-500">
        <AiOutlineClose className="text-black w-full h-full hidden group-hover:block" />
      </Bullet>
      <Bullet className="bg-yellow-500">
        <BsDashLg className="text-black w-full h-full hidden group-hover:block" />
      </Bullet>
      <Bullet className="bg-green-500">
        <CiMaximize1 className="text-black w-full h-full hidden group-hover:block" />
      </Bullet>{" "}
    </div>
  );
};

export default TrafficLights;

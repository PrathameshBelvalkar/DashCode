import React from "react";
import world from "@/constant/world-map.json";
import { VectorMap } from '@react-jvectormap/core'
import { worldMill } from '@react-jvectormap/world'

const VMap = () => {
  return (
    <div className="  w-full ">
      <VectorMap map={worldMill} style={{ backgroundColor: "transparent", height: "350px" }} containerStyle={{ backgroundColor: "transparent" }} className='h-[350px] w-full dash-codevmap' backgroundColor='transparent' />
    </div>
  );
};

export default VMap;

import { VectorMap } from '@react-jvectormap/core'
import { worldMill } from '@react-jvectormap/world'
import React from 'react'

export default function Worldmap() {
    return (
        <VectorMap map={worldMill} style={{ backgroundColor: "transparent", height: "350px" }} containerStyle={{ backgroundColor: "transparent" }} className='h-[350px] w-full dash-codevmap' backgroundColor='transparent' />
    )
}

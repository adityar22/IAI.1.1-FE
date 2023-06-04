import React, { useState } from "react";
import RoomDetail from "./RoomDetail";

const RoomRow = ({ room, index }) => {
    return (
        <>
            <tr key={index} className="">
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{index+1}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{room.nama}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{room.tipe}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">{room.lokasi}</td>
                <td className="py-3 bg-white-800 p-3 text-sm font-semibold tracking-wide">
                    <p className="cursor-pointer text-orange hover:text-yellow-300">Open</p>
                </td>
            </tr>
        </>
    );
}

export default RoomRow;
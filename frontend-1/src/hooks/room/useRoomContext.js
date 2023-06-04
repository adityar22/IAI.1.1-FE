import { useContext } from "react";
import {RoomContext} from "../../contexts/RoomContext";

export const useRoomContext = () => {
    const context = useContext(RoomContext);
    if (!context) {
        throw Error('Something bad occured on useRoomContext')
    };

    return context;
}
import { useContext } from "react";
import {RsvContext} from "../../contexts/RsvContext";

export const useRsvContext = () => {
    const context = useContext(RsvContext);
    if (!context) {
        throw Error('Something bad occured on useRsvContext')
    };

    return context;
}
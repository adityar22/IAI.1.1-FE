import { useContext } from "react";
import {RentContext} from "../../contexts/RentContext";

export const useRentContext = () => {
    const context = useContext(RentContext);
    if (!context) {
        throw Error('Something bad occured on useRentContext')
    };

    return context;
}
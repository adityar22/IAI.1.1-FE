import { useContext } from "react";
import {StudentContext} from "../../contexts/StudentContext";

export const useStudentContext = () => {
    const context = useContext(StudentContext);
    if (!context) {
        throw Error('Something bad occured on useStudentContext')
    };

    return context;
}
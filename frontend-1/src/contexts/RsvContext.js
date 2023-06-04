import { createContext, useReducer } from "react";

export const rsvContext = createContext();

export const rsvReducer = (state, action) => {
    switch(action.type){
        case 'GET_RSV':
            return{
                rsvs: action.payload
            }
        case 'ADD_RSV':
            return{
                rsvs:[action.payload, ...state.rsvs]
            }
        case 'EDIT_RSV':
            return{
                rsvs: state.rsvs.map((item)=>{
                    return item.id !== action.payload.id ? item:action.payload
                })
            }
        case 'DELETE_RSV':
            return{
                rsvs: state.rsvs.filter((item)=>{
                    return item.id !== action.payload.id
                })
            }
        default:
            return state
    }
}

const RsvContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(rsvReducer, {
        rsvs: null
    })

    return(
        <RsvContext.Provider value={{ ...state, dispatch}}>
            {children}
        </RsvContext.Provider>
    )
}

export default RsvContextProvider
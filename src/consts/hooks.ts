import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useGoBack = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return { goBack, navigate };
}

/** 
 * state with local storage
 */
export function useLocalStorageState<T>(key: string, value: T): [T, (value: T) => void]{
    // check if item already exists in localstorage
    const storageItem = localStorage.getItem(key);
    const localValue = storageItem != null && JSON.parse(storageItem);

    const initialValue = localValue ? localValue : value;
    
    const [localState, setLocalState] = useState<T>(initialValue);
    
    useEffect(() => {
        console.log("change state");
        console.log(localStorage)
        localStorage.setItem(key, JSON.stringify(localState));
    }, [localState]);


    return [localState, setLocalState];
}
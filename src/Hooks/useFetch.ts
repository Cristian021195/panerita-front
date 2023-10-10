import {useState} from "react";

export default function useFetch(){
    const [first, setfirst] = useState(false);



    return {
        first, setfirst
    }

}
import { useEffect, useState } from "react"
import { MENU_URL } from "./constants";

const useRestaurantCardMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    })

    const fetchData = async() =>{
        const data = await fetch(MENU_URL+resId);
        const json = data.json();
        setResInfo(json.data)

    }

    return resInfo;

}


export default useRestaurantCardMenu;
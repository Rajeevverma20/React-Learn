import { useEffect, useState } from "react";
const User = () =>{

    const [count] =useState(0);

    useEffect(()=>{
       getUserInfo();
    },[])


    const getUserInfo = async()=>{
        const data = await fetch("https://api.github.com/users/Rajeevverma20");

        const json = await data.json();

        console.log(json)
    }

    return(
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>name: Rajeev Verma</h2>
            <h3>Location: Delhi</h3>
            <h4>Contact: @rajeev</h4>
        </div>
    )
}

export default User;
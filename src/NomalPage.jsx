import React,{useEffect, useState} from "react";

const NomalPage = () =>{
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    const getData = async () =>{
        setLoading(true);
        let url = (`http://localhost:3004/posts`);
        let response = await fetch(url);
        let data = await response.json();
        setLoading(false);
        setData(data);
    }
    useEffect(()=>{
        getData()
    },[])

    return(
    <>
        {isLoading? 
        <h1>Loading...</h1>
        :
        <ul>
            {data&&data.map((item, key)=>(<li key={key}>{item.title}</li>))}
        </ul>
        }
    </>)
}

export default NomalPage;
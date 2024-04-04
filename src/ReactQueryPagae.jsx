import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const ReactQueryPage = () =>{

    const {data, isLoading,isError,error} = useQuery({ //데이터를 조회올때 사용함.
        queryKey:["posts"],
        queryFn:()=>axios.get("http://localhost:3004/posts"),
        retry:1,
        select:(data)=>{
            return data.data;
        },
        gcTime:5000
    })

    console.log("api호출을 통해 받은 데이터",data, isLoading);
    console.log("error",isError, error);

    if (isLoading) {
        return <h1>Loading....</h1>;
    } else if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <ul>
            {data.map((item, key) => (
                <li key={key}>{item.title}</li>
            ))}
        </ul>
    );

}


export default ReactQueryPage;
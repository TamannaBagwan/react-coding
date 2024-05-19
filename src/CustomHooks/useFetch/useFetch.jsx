
import { useState,useEffect } from "react";
const useFetch = (apiUrl) =>{
    const [data,setData] = useState([]) ;
    const [loading,setLoading] = useState(true) ;
    const [error,setError] = useState(null) ;

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                setLoading(true) ;
                const response = await fetch(apiUrl) ;
                 
                if(!response.ok){
                    throw new Error(`Error : ${response.status}`)
                }
                const result = await response.json() ;
                setData(result) ;
                setError(null); 
            }catch(err){
                setError(err.message);
                setData(null); 
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[url])

    return {data,loading,error}
}
export default useFetch ;
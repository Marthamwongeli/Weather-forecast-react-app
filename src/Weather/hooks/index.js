import {times} from "../Utils";
import { useState,useEffect } from "react";


export const times = () =>{
    const [weather,setWeather] = useState();
    const[errors,setErrors]= useState('');
    const[loading,setLoading] = useState(false);


    useEffect(()=>{
        const fetchWeather = async()=>{
            try{
                setLoading(true);
                const response = await times();
                setWeather(response.weather);
                setLoading(false);
            }
            catch(error){
                setLoading(false)
                setErrors(`Error: ${error.message}`)
            }
        }
        fetchWeather
    })

    return {weather,errors,loading}
}
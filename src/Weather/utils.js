const baseUrl = process.env.REACT_APP_BASE_URL;



export const getWeather = async() =>{
    try{
        const response= await fetch(`${baseUrl}$&aqi=no`)
    }
    catch(error){
        throw new Error(error.message)
    }
};
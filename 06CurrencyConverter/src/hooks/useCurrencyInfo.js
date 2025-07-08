import { useEffect, useState } from "react";

// custom React hook.
function useCurrencyInfo(currency){
    const [data,setData]= useState({}) 
    //Initializes data state to an empty object.
    useEffect(() => {
  fetch(`https://api.frankfurter.app/latest?from=${currency}`)
    .then((res) => res.json())
    .then((res) => {
      setData(res.rates);
    })
    .catch((err) => {
      console.error("Failed to fetch currency info:", err);
    });
}, [currency]);


    console.log(data);
    return data
}

export default useCurrencyInfo;
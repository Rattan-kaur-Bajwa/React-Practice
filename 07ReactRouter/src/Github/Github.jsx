import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData() //This hook retrieves the exact value returned from the loader function (githubInfoLoader) and stores it in data.

  // method-1
  // const [data,setData] = useState([])
  //   useEffect(()=>{
  //      fetch('https://api.github.com/users/Rattan-kaur-Bajwa')
  //      .then(response=> response.json())
  //      .then(data=>{
  //           setData(data)
  //      })
  //   },[])
  return (
    <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img  src={data.avatar_url} alt="git picture" width ={300} />
    </div>
  )
}

export default Github

//method-2
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Rattan-kaur-Bajwa')
  return response.json()
}

import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Home = () => {
    const [user,setUser]=useState([]);
    const Auth = localStorage.getItem('Auth');
useEffect(()=>{
  getUsers();
},[])

const getUsers = async()=>{
//   const res = await axios.get("https://dummyjson.com/users")
//   console.log(res);  
//   setUser(res.data.users)
    fetch('https://dummyjson.com/user/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${Auth}`, // Pass JWT via Authorization header
    },
    credentials: 'include' // Include cookies (e.g., accessToken) in the request
  })
  .then(res => res.json())
  .then(console.log);
}
  return (
    <div>
    <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold text-center m-auto'>ALL USERS</h1>
        {/* {
          user.map((users,ind)=>{
            console.log(users);
            return <p  className='text-2xl text-center' key={ind}>{users.firstName}</p>
          })
        } */}
      </div>
    </div>
  )
}

export default Home

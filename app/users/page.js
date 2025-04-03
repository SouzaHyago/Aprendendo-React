'use client'

import axios from "axios";
import { useEffect, useState } from "react";


export default function Sla(){

    const [users,setUsers] = useState([])
    
    async function listUsers() {
        const response = await axios.get("http://localhost:3001/api/users");
        console.log(response);
    }



    useEffect(()=>{
        listUsers()
    },[])

    return(
        <div>
            <h1 className="p-10 text-center text-indigo-700 bg-indigo-50 text-2xl">testando api usuarios</h1>
            <h2 className="p-10">Só testes lindos!!!</h2>
        </div>
    )

}
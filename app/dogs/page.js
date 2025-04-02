'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function Dogs(){

    const [dogs,setDogs] = useState([]);
    const [racas,setRacas] = useState([]);




    
    async function listarRacas() {
        const response = await axios.get("https://dog.ceo/api/breeds/list/all");
        console.log(Object.keys(response.data.message));
        setRacas(Object.keys(response.data.message));
    }


    async function listarDogs() {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random/50");
        console.log(response);
        setDogs(response.data.message);
    }

    async function listarPorRaca(raca) {
        const response = await axios.get("https://dog.ceo/api/breed/"+raca+"/images/random/10");
        console.log(response);
        setDogs(response.data.message);
    }


    useEffect(()=> {
        listarDogs();
        listarRacas();
    },[])

    return(
        <div>
            <h1 className="p-10 text-center text-indigo-700 bg-indigo-50 text-2xl">Lista de catoros</h1>
            <h2 className="p-10">Só catorinho lindo!!!</h2>

            
            
                    <div className="flex">

                        <div className="w-100">
                            <button onClick={()=> listarDogs} className="border bg-indigo-700 text-indigo-50 p-3 rounded-xl ml-2">Mostrar Tudo</button>

                            {racas.length > 0 &&

                                racas.map((i,index) => 

                                    <button key={index} onClick={()=> listarPorRaca(i)} className="border bg-indigo-700 text-indigo-50 p-3 rounded-xl ml-2">{i}</button>
                                
                                )
                            
                            }
                            



                        </div>

                        { dogs != 0 ?

                            <div className="flex flex-wrap mx-auto justify-center">
                                {
                                    dogs.map((i,index) =>
                                        <img key={index} src={i} width={200} className="mx-5 my-5" alt=""  />
                                    )
                                
                                }
                            </div>

                        :
                            <p>Carregando...</p>
                
                        }
                    </div>
        </div>


    );
}
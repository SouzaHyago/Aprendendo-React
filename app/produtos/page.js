'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function Produtos(){

    const [produtos,setProdutos] = useState ([])

    async function buscaProdutos() {
        const response = await axios.get("http://localhost:3001/api/produtos");
        console.log(response.data);
        setProdutos(response.data)

    }


    useEffect(()=>{
        buscaProdutos();
    },[])

    return(
        <div>

            <h1 className="p-10 text-center mb-10 text-indigo-700 bg-indigo-50 text-2xl">Lista de produtos</h1>


            <p>Estes são os produtos</p>
            <hr />
            <div className="mt-5">
                {
                    produtos.map((i,index) => 
                        <div key={index} className="border-2 border-indigo-500 mx-7 my-7 rounded-sm pr-7 pl-2 pt-3 pb-1">
                            <p> <strong>{i.nome}</strong> - R${i.preco}</p>
                            <p> <strong>registro: </strong>{i.registro}</p>
                        </div>
                    )
                }
                
            </div>
        </div>
    );
}
import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import FormularioAdmin from "./FormularioAdmin";

export default function TablaUsuarios() {

    //Consultas
    const [Users, setUsers] = useState([])
    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:3000/api/v1/users")
        setUsers(response.data)
        console.log('Datos de la api')
        console.log(response)
    }
    
    //Eliminar
    const HandeDelte = async (id) => {
        const response = await axios.delete(`http://localhost:3000/api/v1/users/${id}`)

        if (response.status == 200) {
            alert("Se borro correctamente")
        } else {
            alert("Un show medio raro")
        }
        fetchUsers()
    }
    const navigate = useNavigate()
    return (
        <div className="text-black flex flex-col">
            
            <div className="">
                <div className="bg-green-600 w-fit p-2 rounded-xl text-white font-bold flex flex-row items-center justify-center gap-2 cursor-pointer"><FormularioAdmin className="cursor-pointer"/><div className="border-white text-2xl font-black mb-1 cursor-pointer">+</div></div>
                
                <label className="text-gray-700 font-bold text-2xl">Tabla de usuarios</label>
            </div>
            
            <div className=" border-dashed">
                <div className="flex items-center justify-center h-fit mb-4 rounded flex-col gap-6">
                    <div className="container">
                        <div className="">
                            <table className="w-fit text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Nombre
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Correo
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Editar
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            eliminar
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {Users.map((users, contador) => (
                                        <tr key={users.id} className="border-b dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {contador + 1}
                                            </th>
                                            <td className="px-6 py-4">
                                                {users.nombre_usuario}
                                            </td>
                                            <td className="px-6 py-4">
                                                {users.correo_electronico}
                                            </td>
                                            <td className="px-6 py-4">
                                                <label className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onClick={() => navigate(`/editar-usuario/${users.id}`)}> Editar</label>
                                            </td>
                                            <td className="px-6 py-4">
                                                <label className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer" onClick={() => HandeDelte(users.id)}  >
                                                    Borrar
                                                </label>
                                            </td> 
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
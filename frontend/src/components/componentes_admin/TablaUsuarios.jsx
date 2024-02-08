import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import FormularioAdmin from "./FormularioAdmin";

export default function TablaUsuarios() {
    const [searchId, setSearchId] = useState('');
    const [searchedUser, setSearchedUser] = useState(null);

    //Consultas
    const [Users, setUsers] = useState([])
    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        const response = await axios.get("https://localhost:3000/api/v1/users")
        setUsers(response.data)
        console.log('Datos de la api')
        console.log(response)
    }

    //Eliminar
    const HandeDelte = async (id) => {
        const response = await axios.delete(`https://localhost:3000/api/v1/users/${id}`)

        if (response.status == 200) {
            alert("Se borro correctamente")
        } else {
            alert("Un show medio raro")
        }
        fetchUsers()
    }

    //Buscar 
    const handleSearch = () => {
        const foundUser = Users.filter(user => user.id === parseInt(searchId));
        if (foundUser.length > 0) {
            setSearchedUser(foundUser);
        } else {
            setSearchedUser([]);
            alert("Usuario no encontrado");
        }
    };

    // Vaciar búsqueda
    const handleClearSearch = () => {
        setSearchId('');
        setSearchedUser(null);
    };

    const navigate = useNavigate()
    return (
        <div className=" text-black flex flex-col ml-[6rem] mt-4">

            <div className="">
                <div className="gap-2 flex flex-row items-center w-fit">
                    <div className="bg-green-600 w-fit p-2 rounded-xl text-white font-bold flex flex-row items-center justify-center gap-2 cursor-pointer"><FormularioAdmin className="cursor-pointer" />
                        <div className="border-white text-2xl font-black mb-1 cursor-pointer">+</div>
                    </div>

                    <input
                        placeholder="Escriba aquí el ID"
                        className="w-[20rem] p-1 h-fit rounded-lg border-2 shadow-md shadow-[#4f4f4f] "
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />
                    <button className="bg-blue-600 p-2 font-bold rounded-lg text-white shadow-md shadow-[#4f4f4f]" onClick={handleSearch}>
                        Buscar por ID
                    </button>
                    <button className="bg-red-600 p-2 font-bold rounded-lg text-white shadow-md shadow-[#4f4f4f]" onClick={handleClearSearch}>
                        Vaciar búsqueda
                    </button>
                </div>

                <label className="text-gray-700 font-bold text-2xl">Tabla de usuarios</label>
            </div>

            <div className=" border-dashed">
                <div className="flex items-center justify-center h-fit mb-4 rounded flex-col gap-6">
                    <div className="container">
                        <div className="">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="w-fulltext-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
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
                                            Rol
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            eliminar
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {searchedUser ? (
                                        searchedUser.map((userss, contador) => (
                                            <tr key={userss.id} className="border-b dark:border-gray-700">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                    {contador + 1}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {userss.nombre_usuario}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {userss.correo_electronico}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {userss.role}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {userss.role !== 'admin' ? (
                                                        <label className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer" onClick={() => HandeDelte(user.id)}>
                                                            Borrar
                                                        </label>
                                                    ) : (
                                                        <span className="text-gray-400">No se puede borrar</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        Users.map((users, contador) => (
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
                                                    {users.role}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {users.role !== 'admin' ? (
                                                        <label className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer" onClick={() => HandeDelte(user.id)}>
                                                            Borrar
                                                        </label>
                                                    ) : (
                                                        <span className="text-gray-400">No se puede borrar</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
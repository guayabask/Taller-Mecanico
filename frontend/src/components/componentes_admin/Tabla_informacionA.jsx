import React, { useEffect, useState } from "react";
import axios from 'axios'
import FormularioAdmin from "./FormularioAdmin";
import FormularioAdminRegistro from "./FormularioAdminRegistros";

export default function TablaInformacionAdmin() {
    const [users, setUsers] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [searchedUser, setSearchedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/registro-de-trabajos");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    //Eliminar
    const HandeDelte = async (id) => {
        const response = await axios.delete(`http://localhost:3000/api/v1/registro-de-trabajos/${id}`)

        if (response.status === 200) {
            alert("Se borro correctamente")
        } else {
            alert("Un show medio raro")
        }
        fetchUsers()
    }

    //Buscar 
    const handleSearch = () => {
        const foundUser = users.find(user => user.id_registro === parseInt(searchId));
        if (foundUser) {
            setSearchedUser(foundUser);
        } else {
            setSearchedUser(null);
            alert("Usuario no encontrado");
        }
    };

    // Vaciar búsqueda
    const handleClearSearch = () => {
        setSearchId('');
        setSearchedUser(null);
    };

    return (
        <div className="text-black flex flex-col m-8">
            <div className="">
                <div className="w-full flex flex-row justify-between items-center gap-2 m-2">
                    <div className="bg-green-600 p-2 py-1 font-bold rounded-lg text-white flex flex-row items-center gap-2 shadow-md shadow-[#4f4f4f]">
                        <FormularioAdminRegistro />
                        <div className="border-white text-2xl font-black mb-1 cursor-pointer">+</div>
                    </div>
                    <div className="gap-2 flex ">
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
                </div>
                <label className="text-gray-700 font-bold text-2xl">Tabla de registros</label>
            </div>
            <div className=" border-dashed">
                <div className="flex items-center justify-center h-fit mb-4 rounded flex-col gap-6">
                    <div className="container">
                        <div className="">
                            <table className="w-fit text-sm text-left text-gray-500 dark:text-gray-400 shadow-md shadow-[#4f4f4f]">
                                <thead className="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400 p-2">
                                    <tr >
                                        <th className="p-1">Folio</th>
                                        <th className="p-1">Cliente</th>
                                        <th className="p-1">Teléfono</th>
                                        <th className="p-1">Correo</th>
                                        <th className="p-">Modelo vehiculo</th>
                                        <th className="p-1">Placas</th>
                                        <th className="p-1">AÑO</th>
                                        <th className="p-1">Color</th>
                                        <th className="p-1">horas</th>
                                        <th className="p-1">Costo total</th>
                                        <th className="p-1">Estatus</th>
                                        <th className="p-1">Fecha de llegada</th>
                                        <th></th>
                                        <th>Opciones</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchedUser ? (
                                        <tr>
                                            <td className="m-2 flex items-center justify-center">{searchedUser.id_registro}</td>
                                            <td>{searchedUser.nombre_cliente}</td>
                                            <td className="m-2 flex items-center justify-center">{searchedUser.telefono_celular}</td>
                                            <td >{searchedUser.correo_electronico}</td>
                                            <td className="m-2 flex items-center justify-center">{searchedUser.modelo_vehiculo}</td>
                                            <td >{searchedUser.placas}</td>
                                            <td className="m-2 flex items-center justify-center">{searchedUser.año_vehiculo}</td>
                                            <td>{searchedUser.color_vehiculo}</td>
                                            <td className="m-2 flex items-center justify-center">{searchedUser.cantidad_de_horas}</td>
                                            <td>{searchedUser.costo_total}</td>
                                            <td className="m-1 flex items-center justify-center">{searchedUser.tipoTrabajo_id}</td>
                                            <td>{searchedUser.fecha_de_inicio}</td>
                                            <td>
                                                <button className="m-2 bg-purple-800">Editar</button>
                                            </td>
                                            <td>
                                                <button onClick={() => HandeDelte(registro.id_registro)} className="m-2 bg-purple-800">Eliminar</button>
                                            </td>
                                            <td>
                                                <button className="m-2 bg-purple-800">Ver</button>
                                            </td>
                                        </tr>
                                    ) : (
                                        users.map((registro, index) => (
                                            <tr key={index}>
                                                <td className="m-2 flex items-center justify-center">{index + 1}</td>
                                                <td>{registro.nombre_cliente}</td>
                                                <td>{registro.telefono_celular}</td>
                                                <td>{registro.correo_electronico}</td>
                                                <td>{registro.modelo_vehiculo}</td>
                                                <td>{registro.placas}</td>
                                                <td>{registro.año_vehiculo}</td>
                                                <td>{registro.color_vehiculo}</td>
                                                <td>{registro.cantidad_de_horas}</td>
                                                <td>{registro.costo_total}</td>
                                                <td>{registro.tipoTrabajo_id}</td>
                                                <td>{registro.fecha_de_inicio}</td>
                                                <td>
                                                    <button className="m-2 bg-purple-800">Editar</button>
                                                </td>
                                                <td>
                                                    <button onClick={() => HandeDelte(registro.id_registro)} className="m-2 bg-purple-800">Eliminar</button>
                                                </td>
                                                <td>
                                                    <button className="m-2 bg-purple-800">Ver</button>
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
    );
}

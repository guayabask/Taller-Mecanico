import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function TablaInformacionUsuario() {
    const [users, setUsers] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [searchedUser, setSearchedUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://localhost:3000/api/v1/registro-de-trabajos");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

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

    return (<div className="p-8">

        {/*Nesesito que jalen de la api la informacion de la tabla esta es el api:

        localhost:3000/api/v1/registro-de-trabajos

        lo mismo de toda la vida un mapeo, pero el mapeo debe funcionar a base un codigo de busqueda
        el codigo de busqueda sera el id, donde se hara la validacion, aqui arriba hay un input y un boton de busqueda
        cuando se busque se muestran los datos de sus avances, pero tampocos muchos datos.
    */}
        <div className="w-full flex flex-row justify-end items-center gap-2 m-2">
            <input 
            placeholder="Escriba su nombre" 
            className="w-[20rem] p-1 h-fit rounded-lg border-2" 
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            />
            <button className="bg-blue-600 p-2 rounded-lg text-white" onClick={handleSearch}>Buscar</button>
        </div>

        <div className="w-full m-2">
            <div className="rounded-lg bg-gray-200 mb-2 text-normal p-4">
                <div className="flex flex-col gap-1">
                    <label className="text-xl font-bold ">Seguimiento de su vehículo por parte del Mecánico</label>
                    <p className="text-sm border-b">En este apartado usted proda estar al tanto de su vehiculo</p>
                </div>

                <table className="w-full text-sm text-center dark:text-gray-400 shadow-md shadow-[#4f4f4f] ">
                    <thead className="text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr className="">
                            <th className="pt-2 pb-2 pr-1 pl-1">Folio</th>
                            <th className="pr-1 pl-1">Cliente</th>
                            <th className="pr-1 pl-1">Vehiculo</th>
                            <th className="pr-1 pl-1">Placas</th>
                            <th className="pr-1 pl-1">AÑO</th>
                            <th className="pr-1 pl-1">Color</th>
                            <th className="pr-1 pl-1">horas</th>
                            <th className="pr-1 pl-1">Costo total</th>
                            <th className="pr-1 pl-1">Fecha de llegada</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchedUser ? (
                            <tr className="hover:bg-gray-300 hover:text-gray-800">
                                <td className="pt-2 pb-2 pr-1 pl-1">{searchedUser.id_registro}</td>
                                <td className="pr-1 pl-1">{searchedUser.nombre_cliente}</td>
                                <td className="pr-1 pl-1">{searchedUser.modelo_vehiculo}</td>
                                <td className="pr-1 pl-1">{searchedUser.placas}</td>
                                <td className="pr-1 pl-1">{searchedUser.año_vehiculo}</td>
                                <td className="pr-1 pl-1">{searchedUser.color_vehiculo}</td>
                                <td className="pr-1 pl-1">{searchedUser.cantidad_de_horas}</td>
                                <td className="pr-1 pl-1">{searchedUser.costo_total}</td>
                                <td className="pr-1 pl-1">{searchedUser.fecha_de_inicio.substring(0, 10)}</td>
                            </tr>
                        ) : (
                            users.map((registro, index) => (
                                <tr key={index} className="hover:bg-gray-300 hover:text-gray-800">
                                    <td className="pt-2 pb-2 pr-1 pl-1">{index + 1}</td>
                                    <td className="pr-1 pl-1">{registro.nombre_cliente}</td>
                                    <td className="pr-1 pl-1">{registro.modelo_vehiculo}</td>
                                    <td className="pr-1 pl-1">{registro.placas}</td>
                                    <td className="pr-1 pl-1">{registro.año_vehiculo}</td>
                                    <td className="pr-1 pl-1">{registro.color_vehiculo}</td>
                                    <td className="pr-1 pl-1">{registro.cantidad_de_horas} hrs</td>
                                    <td className="pr-1 pl-1">$ {registro.costo_total}</td>
                                    <td className="pr-1 pl-1">{registro.fecha_de_inicio.substring(0, 10)}</td>

                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}
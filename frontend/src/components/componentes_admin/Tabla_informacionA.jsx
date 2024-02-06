import React, { useEffect, useState } from "react";
import axios from 'axios'
import FormularioAdminRegistro from "./FormularioAdminRegistros";
import FormularioTipo_trabajo from "./FormularioTipo_trabajo";
import FormularioTipo_Estatus from "./FormularioTipo_estatus";
import { PiTrashSimpleFill } from "react-icons/pi";
import { LuFileEdit } from "react-icons/lu";
import { MdOutlineMenuBook } from "react-icons/md";
import FormularioTipo_vehuiculo from "./FormularioTipo_vehuiculo";
import { useNavigate } from "react-router-dom";

export default function TablaInformacionAdmin() {

    const navigate = useNavigate()

    const [users, setUsers] = useState([]);
    const [tipoTrabajo, setTipoTrabajo] = useState([]);
    const [tipoEstatus, setTipoEstatus] = useState([]);
    const [tipoVehiculo, setTipoVehiculo] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [searchedUser, setSearchedUser] = useState(null);
    const [searcheTrabajo, setSearchedTrabajo] = useState(null);
    const [searchedEstatus, setSearchedEstatus] = useState(null);
    const [searcheVehiculo, setSearcheVehiculo] = useState(null);

    useEffect(() => {
        fetchUsers();
        fetchTipoTrabajo();
        fetchTipoEstatus();
        fetchTipoVehiculo();
    }, []);


    const fetchTipoTrabajo = async () => {
        try {
            const response = await axios.get("https://localhost:3000/api/v1/tipos-de-trabajo");
            setTipoTrabajo(response.data);
        } catch (error) {
            console.error("Error fetching tipos de trabajo:", error);
        }
    };


    const fetchTipoEstatus = async () => {
        try {
            const response = await axios.get("https://localhost:3000/api/v1/estatus-trabajos");
            setTipoEstatus(response.data);
        } catch (error) {
            console.error("Error fetching tipos de estatus:", error);
        }
    };

    const fetchTipoVehiculo = async () => {
        try {
            const response = await axios.get("https://localhost:3000/api/v1/tipos-de-vehiculo");
            setTipoVehiculo(response.data);
        } catch (error) {
            console.error("Error fetching tipos de vehículo:", error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://localhost:3000/api/v1/registro-de-trabajos");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching registro:", error);
        }
    };

    //Eliminar
    const HandeDelte = async (id) => {
        const response = await axios.delete(`https://localhost:3000/api/v1/registro-de-trabajos/${id}`)

        if (response.status === 200) {
            alert("Se borro correctamente")
        } else {
            alert("Un show medio raro")
        }
        fetchUsers()
    }

    const trabajoDelte = async (id) => {
        const response = await axios.delete(`https://localhost:3000/api/v1/tipos-de-trabajo/${id}`)
        if (response.status === 200) {
            alert("se borro correctamente")
        } else {
            alert("Un show medio raro")
        }
        fetchTipoTrabajo()
    }

    const vehiculoDelete = async (id) => {
        const response = await axios.delete(`https://localhost:3000/api/v1/tipos-de-vehiculo/${id}`)

        if (response.status === 200) {
            alert("se borro correctamente")
        } else {
            alert("Un show ahi medio raro")
        }
        fetchTipoVehiculo()
    }

    const estatusDelete = async (id) => {
        const response = await axios.delete(`https://localhost:3000/api/v1/estatus-trabajos/${id}`)

        if (response.status === 200) {
            alert("se borro correctamente")
        } else {
            alert("Un show ahi medio raro")
        }
        fetchTipoEstatus()
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

    //numero con guines
    const formatPhoneNumber = (phoneNumber) => {
        if (phoneNumber.length === 10) {
            return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
        }
        return phoneNumber;
    };

    return (
        <div className="text-black flex flex-col ml-[6rem] mt-4 ">
            <div className="">
                <div className="w-full flex flex-row justify-between items-center gap-2 mt-3 mb-4">
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
            <div className="">
                <table className="w-full text-xs text-center dark:text-gray-400 shadow-md shadow-[#4f4f4f] ">
                    <thead className="text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr className="">
                            <th className="pt-1 pb-1">Folio</th>
                            <th className="">Cliente</th>
                            <th className="">Teléfono</th>
                            <th className="">Correo</th>
                            <th className="">Vehiculo</th>
                            <th className="">Placas</th>
                            <th className="">Color</th>
                            <th className="">horas</th>
                            <th className="">Costo total</th>
                            <th className="">Fecha de llegada</th>
                            <th className="">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchedUser ? (
                            <tr className="hover:bg-gray-300 hover:text-gray-800">
                                <td className="pt-2 pb-2 pr-1 pl-1">{searchedUser.id_registro}</td>
                                <td className="pr-1 pl-1">{searchedUser.nombre_cliente}</td>
                                <td className="pr-1 pl-1">{formatPhoneNumber(searchedUser.telefono_celular)}</td>
                                <td className="pr-1 pl-1">{searchedUser.correo_electronico}</td>
                                <td className="pr-1 pl-1">{searchedUser.modelo_vehiculo}</td>
                                <td className="pr-1 pl-1">{searchedUser.placas}</td>
                                <td className="pr-1 pl-1">{searchedUser.color_vehiculo}</td>
                                <td className="pr-1 pl-1">{searchedUser.cantidad_de_horas}</td>
                                <td className="pr-1 pl-1">{searchedUser.costo_total}</td>
                                <td className="pr-1 pl-1">{searchedUser.fecha_de_inicio.substring(0, 10)}</td>
                                <td className="pr-1 pl-1 flex flex-row items-center justify-center pt-2 gap-2">
                                    <button className="text-2xl text-emerald-700"><LuFileEdit /></button>
                                    <button className="text-2xl text-blue-700"><MdOutlineMenuBook /></button>
                                    <button onClick={() => HandeDelte(searchedUser.id_registro)} className="text-2xl text-red-500 hover:text-red-600"><PiTrashSimpleFill /></button>
                                </td>
                            </tr>
                        ) : (
                            users.map((registro, index) => (
                                <tr key={index} className="hover:bg-gray-300 hover:text-gray-800">
                                    <td className="pt-1 pb-1">{index + 1}</td>
                                    <td className="">{registro.nombre_cliente}</td>
                                    <td className="">{formatPhoneNumber(registro.telefono_celular)}</td>
                                    <td className="">{registro.correo_electronico}</td>
                                    <td className="">{registro.modelo_vehiculo}</td>
                                    <td className="">{registro.placas}</td>
                                    <td className="">{registro.color_vehiculo}</td>
                                    <td className="">{registro.cantidad_de_horas} hrs</td>
                                    <td className="">$ {registro.costo_total}</td>
                                    <td className="">{registro.fecha_de_inicio.substring(0, 10)}</td>
                                    <td className="flex flex-row items-center justify-center pt-2 gap-2">
                                        <button className="text-2xl text-emerald-700" onClick={() => navigate(`/editar-registro/${registro.id_registro}`)}><LuFileEdit /></button>
                                        <button className="text-2xl text-blue-700"><MdOutlineMenuBook /></button>
                                        <button onClick={() => HandeDelte(registro.id_registro)} className="text-2xl text-red-500 hover:text-red-600"><PiTrashSimpleFill /></button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

            </div>
            <div className="absolute flex flex-col gap-4 ml-[51rem] mb-4 w-[21rem] mt-4">
                <div className="flex flex-col gap-4 items-center">
                    <div className="bg-green-600 p-2 py-1 font-bold rounded-lg text-white flex flex-row items-center gap-2 shadow-md shadow-[#4f4f4f] w-fit">
                        <FormularioTipo_trabajo />
                    </div>
                    <table className="w-full text-sm text-center dark:text-gray-400 shadow-md shadow-[#4f4f4f] ">
                        <thead className="text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th>Id</th>
                                <th>tipo de trabajo</th>
                                <th>valor de tipo</th>
                                <th>opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tipoTrabajo.map((registro, index) => (
                                    <tr key={index} className="hover:bg-gray-300 hover:text-gray-800">
                                        <td className="pt-2 pb-2 pr-1 pl-1">{index + 1}</td>
                                        <td className="pt-2 pb-2 pr-1 pl-1">{registro.tipo_de_trabajo}</td>
                                        <td className="pt-2 pb-2 pr-1 pl-1">{registro.valor_de_tipo}</td>
                                        <td className="pr-1 pl-1 flex flex-row items-center justify-center pt-2 gap-2">
                                            <button onClick={() => trabajoDelte(registro.id)} className="text-2xl text-red-500 hover:text-red-600"><PiTrashSimpleFill /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <div className="bg-green-600 p-2 py-1 font-bold rounded-lg text-white flex flex-row items-center gap-2 shadow-md shadow-[#4f4f4f] w-fit">
                        <FormularioTipo_vehuiculo />
                    </div>
                    <table className="w-full text-sm text-center dark:text-gray-400 shadow-md shadow-[#4f4f4f] ">
                        <thead className="text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th>Id</th>
                                <th>tipo de vehiculo</th>
                                <th>opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tipoVehiculo.map((registro, index) => (
                                    <tr key={index} className="hover:bg-gray-300 hover:text-gray-800">
                                        <td className="pt-2 pb-2 pr-1 pl-1">{registro.id}</td>
                                        <td className="pt-2 pb-2 pr-1 pl-1">{registro.tipo_de_vehiculo}</td>
                                        <td className="pr-1 pl-1 flex flex-row items-center justify-center pt-2 gap-2">
                                            <button onClick={() => vehiculoDelete(registro.id)} className="text-2xl text-red-500 hover:text-red-600"><PiTrashSimpleFill /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <div className="bg-green-600 p-2 py-1 font-bold rounded-lg text-white flex flex-row items-center gap-2 shadow-md shadow-[#4f4f4f] w-fit">
                        <FormularioTipo_Estatus />
                    </div>
                    <table className="w-full text-sm text-center dark:text-gray-400 shadow-md shadow-[#4f4f4f]">
                        <thead className="text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th>Id</th>
                                <th>tipo estatus</th>
                                <th>opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tipoEstatus.map((registro, index) => (
                                    <tr key={index} className="hover:bg-gray-300 hover:text-gray-800">
                                        <td className="pt-2 pb-2 pr-1 pl-1">{registro.id}</td>
                                        <td className="pt-2 pb-2 pr-1 pl-1">{registro.tipo_estatus}</td>
                                        <td className="pr-1 pl-1 flex flex-row items-center justify-center pt-2 gap-2">
                                            <button onClick={() => estatusDelete(registro.id)} className="text-2xl text-red-500 hover:text-red-600"><PiTrashSimpleFill /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

import React, { useEffect, useState } from "react";
import axios from 'axios'
import FormularioAdminRegistro from "./FormularioAdminRegistros";
import { PiTrashSimpleFill } from "react-icons/pi";
import { LuFileEdit } from "react-icons/lu";
import { MdOutlineMenuBook } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";

export default function TablaInformacionAdmin() {
    const [show, setShow] = useState(false)
    const [selectedRecord, setSelectedRecord] = useState(null)

    const handleShow = (id, users) => {
        const record = users.find(user => user.id_registro === id)
        setSelectedRecord(record)
        setShow(true)
    };

    const navigate = useNavigate()

    const [users, setUsers] = useState([])
    const [searchId, setSearchId] = useState('')
    const [searchedUser, setSearchedUser] = useState(null)

    useEffect(() => {
        fetchUsers()
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://localhost:3000/api/v1/registro-de-trabajos");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching registro:", error);
        }
    };

    const HandeDelte = async (id) => {
        const response = await axios.delete(`https://localhost:3000/api/v1/registro-de-trabajos/${id}`)

        if (response.status === 200) {
            alert("Se borro correctamente")
        } else {
            alert("Un show medio raro")
        }
        fetchUsers()
    }

    const handleSearch = () => {
        const foundUser = users.find(user => user.id_registro === parseInt(searchId));
        if (foundUser) {
            setSearchedUser(foundUser);
        } else {
            setSearchedUser(null);
            alert("Usuario no encontrado");
        }
    };

    const handleClearSearch = () => {
        setSearchId('');
        setSearchedUser(null);
    };

    const formatPhoneNumber = (phoneNumber) => {
        if (phoneNumber.length === 10) {
            return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
        }
        return phoneNumber;
    };

    return (
        <div className="text-black flex flex-row gap-6 ml-[2rem] mt-4 ">
            <div>
                <div className="">
                    <div className="w-full flex flex-row justify-end items-center gap-2 mt-3 mb-4">
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
                                    <button className="text-2xl text-emerald-700" onClick={() => navigate(`/editar-registro-mecanico/${searchedUser.id_registro, users}`)}><LuFileEdit /></button>
                                        <button className="text-2xl text-blue-700" onClick={() => handleShow(searchedUser.id_registro, users)}><MdOutlineMenuBook /></button>
                                        {show && selectedRecord && (
                                                <div className="fixed flex bg-black bg-opacity-20 w-screen h-screen top-[0rem] left-0 justify-center items-center">
                                                    <div className="flex flex-col w-fit px-8 p-4 shadow-md rounded-xl items-center font-lalezar h-fit gap-2 bg-white">
                                                        <div className="flex flex-row justify-between w-full">
                                                            <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-lg md:w-1/2">Reporte de trabajo:</label>
                                                            <label onClick={() => setShow(false)} className="text-red-600 hover:text-red-900 cursor-pointer text-3xl mb-2 flex flex-row w-full justify-end"> <IoCloseCircle /></label>
                                                        </div>

                                                        <div className="w-fit h-fit p-6 bg-white border-[#9c9c9c] border-2">
                                                            <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 bg-gray-400 text-base">Datos de cliente:</label>
                                                            <div className="flex flex-row w-full gap-2">
                                                                <div className="md:w-1/3">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre del Cliente</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.nombre_cliente}</label>
                                                                </div>
                                                                <div className="md:w-1/3">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Teléfono Celular</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.telefono_celular}</label>
                                                                </div>
                                                                <div className="md:w-1/3">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Correo Electrónico</label>
                                                                    <label className="block tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.correo_electronico}</label>
                                                                </div>
                                                            </div>
                                                            <label className="block uppercase tracking-wide text-gray-800 font-bold mb-2 bg-gray-400 text-base">Información del vehiculo:</label>
                                                            <div className="flex flex-wrap ">
                                                                <div className="w-full md:w-1/4 px-2">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Modelo del Vehículo</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.modelo_vehiculo}</label>
                                                                </div>
                                                                <div className="w-full md:w-1/4 px-2">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Color del Vehículo</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.color_vehiculo}</label>
                                                                </div>
                                                                <div className="w-full md:w-1/2 px-2 flex flex-row">
                                                                    <div className="w-full md:w-5/6 px-2">
                                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Placas</label>
                                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.placas}</label>
                                                                    </div>
                                                                    <div className="w-full px-2">
                                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Año del vehiculo</label>
                                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.año_vehiculo}</label>
                                                                    </div>
                                                                </div>
                                                                <div className="w-full  px-2">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Tipo de vehiculo</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.tipo_vehiculo}</label>
                                                                </div>
                                                            </div>
                                                            <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 bg-gray-400 text-base">Información de trabajo:</label>
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full md:w-1/4 px-2">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Tipo de Trabajo</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.tipo_trabajo}</label>
                                                                </div>
                                                                <div className="w-full md:w-1/4 px-2 mb-6 md:mb-0 items-center flex flex-col">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Cantidad de Horas</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.cantidad_de_horas}</label>
                                                                </div>
                                                                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Precio de Material</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.precio_de_material}</label>
                                                                </div>
                                                                <div className="w-full md:w-1/4 px-2">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Estatus de Trabajo</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.estatus}</label>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full px-3 mb-6 md:mb-0">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Descripción de Trabajo</label>
                                                                    <label className="appearance-none block w-full h-[5rem] bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal">{selectedRecord.descripcion_de_trabajo}</label>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-row justify-center gap-8">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        <button onClick={() => HandeDelete(searchedUser.id_registro)} className="text-2xl text-red-500 hover:text-red-600"><PiTrashSimpleFill /></button>
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
                                            <button className="text-2xl text-emerald-700" onClick={() => navigate(`/editar-registro-mecanico/${registro.id_registro}`)}><LuFileEdit /></button>
                                            <button className="text-2xl text-blue-700" onClick={() => handleShow(registro.id_registro, users)}><MdOutlineMenuBook /></button>
                                            {show && selectedRecord && (
                                                <div className="fixed flex bg-black bg-opacity-20 w-screen h-screen top-[0rem] left-0 justify-center items-center">
                                                    <div className="flex flex-col w-fit px-8 p-4 shadow-md rounded-xl items-center font-lalezar h-fit gap-2 bg-white">
                                                        <div className="flex flex-row justify-between w-full">
                                                            <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-lg md:w-1/2">Reporte de trabajo:</label>
                                                            <label onClick={() => setShow(false)} className="text-red-600 hover:text-red-900 cursor-pointer text-3xl mb-2 flex flex-row w-full justify-end"> <IoCloseCircle /></label>
                                                        </div>

                                                        <div className="w-fit h-fit p-6 bg-white border-[#9c9c9c] border-2">
                                                            <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 bg-gray-400 text-base">Datos de cliente:</label>
                                                            <div className="flex flex-row w-full gap-2">
                                                                <div className="md:w-1/3">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre del Cliente</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.nombre_cliente}</label>
                                                                </div>
                                                                <div className="md:w-1/3">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Teléfono Celular</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.telefono_celular}</label>
                                                                </div>
                                                                <div className="md:w-1/3">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Correo Electrónico</label>
                                                                    <label className="block tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.correo_electronico}</label>
                                                                </div>
                                                            </div>
                                                            <label className="block uppercase tracking-wide text-gray-800 font-bold mb-2 bg-gray-400 text-base">Información del vehiculo:</label>
                                                            <div className="flex flex-wrap ">
                                                                <div className="w-full md:w-1/4 px-2">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Modelo del Vehículo</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.modelo_vehiculo}</label>
                                                                </div>
                                                                <div className="w-full md:w-1/4 px-2">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Color del Vehículo</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.color_vehiculo}</label>
                                                                </div>
                                                                <div className="w-full md:w-1/2 px-2 flex flex-row">
                                                                    <div className="w-full md:w-5/6 px-2">
                                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Placas</label>
                                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.placas}</label>
                                                                    </div>
                                                                    <div className="w-full px-2">
                                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Año del vehiculo</label>
                                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.año_vehiculo}</label>
                                                                    </div>
                                                                </div>
                                                                <div className="w-full  px-2">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Tipo de vehiculo</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.tipo_vehiculo}</label>
                                                                </div>
                                                            </div>
                                                            <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 bg-gray-400 text-base">Información de trabajo:</label>
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full md:w-1/4 px-2">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Tipo de Trabajo</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.tipo_trabajo}</label>
                                                                </div>
                                                                <div className="w-full md:w-1/4 px-2 mb-6 md:mb-0 items-center flex flex-col">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Cantidad de Horas</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.cantidad_de_horas}</label>
                                                                </div>
                                                                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Precio de Material</label>
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2">{selectedRecord.precio_de_material}</label>
                                                                </div>
                                                                <div className="w-full md:w-1/4 px-2">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Estatus de Trabajo</label>
                                                                    <label className="block uppercase text-blue-700 tracking-wide  text-xs font-bold mb-1" >{selectedRecord.estatus ? 'Finalizado' : 'En proceso'}</label>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-wrap">
                                                                <div className="w-full px-3 mb-6 md:mb-0">
                                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Descripción de Trabajo</label>
                                                                    <label className="appearance-none block w-full h-[5rem] bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal">{selectedRecord.descripcion_de_trabajo}</label>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-row justify-center gap-8">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <button onClick={() => HandeDelete(registro.id_registro)} className="text-2xl text-red-500 hover:text-red-600"><PiTrashSimpleFill /></button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
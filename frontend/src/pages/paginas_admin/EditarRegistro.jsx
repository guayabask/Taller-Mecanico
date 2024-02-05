import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { BsPlusCircleFill } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";

export default function EditarRegistro() {
    const [show, setShow] = useState(false);
    const [tipodVehiculo, setTipoVehiculo] = useState([]);
    const [tipodTrabajo, setTipoTrabajo] = useState([]);
    const [tipodEstatus, setTipoEstatus] = useState([]);
    const [Mecanico, setMecanico] = useState([]);
    const [PrecioH, setPrecioH] = useState([])

    useEffect(() => {
        fetchTipoVehiculo();
        fetchTipoTrabajo();
        fetchTipoEstatus();
        fetchMecanico();
        fetchPrecioH()
    }, []);

    const fetchTipoVehiculo = async () => {
        try {
            const response = await axios.get("https://localhost:3000/api/v1/tipos-de-vehiculo");
            setTipoVehiculo(response.data);
        } catch (error) {
            console.error("Error fetching tipo de vehículo:", error);
        }
    };

    const fetchTipoTrabajo = async () => {
        try {
            const response = await axios.get("https://localhost:3000/api/v1/tipos-de-trabajo");
            setTipoTrabajo(response.data);
        } catch (error) {
            console.error("Error fetching tipo de trabajo:", error);
        }
    };

    const fetchTipoEstatus = async () => {
        try {
            const response = await axios.get("https://localhost:3000/api/v1/estatus-trabajos");
            setTipoEstatus(response.data);
        } catch (error) {
            console.error("Error fetching tipo de estatus:", error);
        }
    };

    const fetchMecanico = async () => {
        try {
            const response = await axios.get("https://localhost:3000/api/v1/users");
            setMecanico(response.data);
        } catch (error) {
            console.error("Error fetching mecánicos:", error);
        }
    };

    const fetchPrecioH = async () => {
        try {
            const response = await axios.get("https://localhost:3000/api/v1/precio-horas");
            setPrecioH(response.data);
        } catch (error) {
            console.error("Error fetching mecánicos:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // Convertir solo los campos necesarios a números enteros
        const numericValue = name === 'precio_de_material' || name === 'precio_hora' ? parseInt(value, 10) : value;
    
        setValues(prevState => ({
            ...prevState,
            [name]: numericValue
        }));
    };
    const params = useParams()
    console.log(params)
    var id = params;
    console.log(id)

    const [Registros, SetRegistros] = useState({
        nombre_cliente: "",
        telefono_celular: "",
        correo_electronico: "",
        modelo_vehiculo: "",
        placas: "",
        año_vehiculo: "",
        color_vehiculo: "",
        descripcion_de_trabajo: "",
        cantidad_de_horas: "",
        precio_de_material: "",
        precio_fijo: "",
        costo_total: "",
        tipo: "",
        estatus: "",
        precio_hora: "",
        tipo_vehiculo: "",
        usuario_c: ""
    })

    useEffect(() => {

        const loadRegistro = async () => {
            const response = await axios.get(`https://localhost:3000/api/v1/registro-de-trabajos/${id}`)
            console.log(response);
            SetRegistros({
                nombre_cliente: response.data.nombre_cliente,
                telefono_celular: response.data.telefono_celular,
                correo_electronico: response.data.correo_electronico,
                modelo_vehiculo: response.data.modelo_vehiculo,
                placas: response.data.placas,
                año_vehiculo: response.data.año_vehiculo,
                color_vehiculo: response.data.color_vehiculo,
                descripcion_de_trabajo: response.data.descripcion_de_trabajo,
                cantidad_de_horas: response.data.cantidad_de_horas,
                precio_de_material: response.data.precio_de_material,
                precio_fijo: response.data.precio_fijo,
                costo_total: response.data.costo_total,
                tipo: response.data.tipo,
                estatus: response.data.estatus,
                precio_hora: response.data.precio_hora,
                tipo_vehiculo: response.data.tipo_vehiculo,
                usuario_c: response.data.usuario_c
            })
        };
        loadRegistro(); //Ejecutar el método buscar usuario
    }, []);

    const navigate = useNavigate()
    return (<>
        <Formik
            initialValues={Registros}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
                console.log(values)

                var res = await axios.patch(`https://localhost:3000/api/v1/registro-de-trabajos/${id}`, values)
                actions.resetForm()
                alert('Datos actualizados correctamente')
                if (res.status == 200) {
                    //Redirecciomar 
                    window.location = '/administrador';
                }
                else {
                    alert("Succedio un error")
                }
            }}>
            {({ handleChange, handleSubmit, values }) => (
                <form className="w-fit h-fit p-6 bg-white" onSubmit={handleSubmit}>
                    <div className="flex flex-row justify-between">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-base">Agregar nuevo registro</label>
                        <label onClick={() => setShow(false)} className="text-red-600 hover:text-red-900 cursor-pointer text-3xl mb-2"> <IoCloseCircle /></label>
                    </div>
                    <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 bg-gray-400 text-base">Datos de cliente:</label>
                    <div className="flex flex-row w-full gap-2">
                        <div className="md:w-1/3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre del Cliente</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" type="text" placeholder="Nombre del Cliente" name="nombre_cliente" onChange={handleChange} value={values.nombre_cliente} />
                        </div>
                        <div className="md:w-1/3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Teléfono Celular</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" type="text" placeholder="Teléfono Celular" name="telefono_celular" onChange={handleChange} value={values.telefono_celular} />
                        </div>
                        <div className="md:w-1/3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Correo Electrónico</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" type="text" placeholder="Correo Electrónico" name="correo_electronico" onChange={handleChange} value={values.correo_electronico} />
                        </div>
                    </div>
                    <label className="block uppercase tracking-wide text-gray-800 font-bold mb-2 bg-gray-400 text-base">Información del vehiculo:</label>
                    <div className="flex flex-wrap ">
                        <div className="w-full md:w-1/3 px-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Modelo del Vehículo</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" type="text" placeholder="Modelo del Vehículo" name="modelo_vehiculo" onChange={handleChange} value={values.modelo_vehiculo} />
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Color del Vehículo</label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" type="text" placeholder="Color del Vehículo" name="color_vehiculo" onChange={handleChange} value={values.color_vehiculo} />
                        </div>
                        <div className="w-full md:w-1/3 px-2 flex flex-row">
                            <div className="w-full md:w-5/6 px-2">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Placas</label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" type="text" placeholder="Placas" name="placas" onChange={handleChange} value={values.placas} />
                            </div>
                            <div className="w-full px-2">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Año del vehiculo</label>
                                <select
                                    className="md:w-5/6 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"
                                    name="año_vehiculo"
                                    value={values.año_vehiculo}
                                    onChange={handleChange}
                                >
                                    <option>Escoger año</option>
                                    <option value="2024">2024</option>
                                    <option value="2023">2023</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Tipo de vehiculo</label>
                            <select
                                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"
                                name="tipo_vehiculo"
                                value={values.tipo_vehiculo}
                                onChange={handleChange}
                            >
                                {tipodVehiculo.map((vehiculo) => (
                                    <option key={vehiculo.id} value={vehiculo.tipo_vehiculo}>{vehiculo.tipo_de_vehiculo}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 bg-gray-400 text-base">Información de trabajo:</label>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 px-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Tipo de Trabajo</label>
                            <select
                                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"
                                name="tipo"
                                value={values.tipo}
                                onChange={handleChange}
                            >
                                {tipodTrabajo.map((trabajo, index) => (
                                    <option key={index} value={trabajo.tipo}>{trabajo.tipo_de_trabajo}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full md:w-1/6 px-2 mb-6 md:mb-0 items-center flex flex-col">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Cantidad de Horas</label>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <input
                                    readOnly
                                    className="appearance-none block w-full bg-gray-200 md:w-1/3 text-gray-700 rounded py-2 px-2 mb-2 leading-tight focus:outline-none font-normal"
                                    name="cantidad_de_horas"
                                    value={values.cantidad_de_horas || 0}
                                    onChange={handleChange}
                                />
                                <button className="appearance-none block pb-2 px-2 leading-tight text-blue-600 cursor-pointer"
                                    type="button"
                                    onClick={() => handleChange({ target: { name: 'cantidad_de_horas', value: parseInt(values.cantidad_de_horas) + 1 || 1 } })}
                                >
                                    <BsPlusCircleFill className="text-2xl" />
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Precio de Material</label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"
                                type="number"
                                placeholder="Precio de Material"
                                name="precio_de_material"
                                min="0"
                                step="1" // Solo permite ingresar números enteros
                                onChange={(e) => {
                                    const value = parseInt(e.target.value); // Convertir a entero en lugar de flotante
                                    handleChange({
                                        target: {
                                            name: 'precio_de_material',
                                            value: isNaN(value) ? '' : value
                                        }
                                    });
                                }}
                                value={values.precio_de_material}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 px-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Mecanico a cargo</label>
                            <select
                                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"
                                name="usuario_c"
                                value={values.usuario_c}
                                onChange={handleChange}
                            >
                                {Mecanico.map((mecanico, index) => (
                                    <option key={index} value={mecanico.usuario_c}>{mecanico.nombre_usuario}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full md:w-1/3 px-2">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Estatus de Trabajo</label>
                            <select
                                className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"
                                name="estatus"
                                value={values.estatus}
                                onChange={handleChange}
                            >
                                {tipodEstatus.map((estatuss, index) => (
                                    <option key={index} value={estatuss.estatus}>{estatuss.tipo_estatus}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Descripción de Trabajo</label>
                            <textarea className="appearance-none block w-full h-[5rem] bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" placeholder="Descripción de Trabajo" name="descripcion_de_trabajo" onChange={handleChange} value={values.descripcion_de_trabajo} />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center gap-8">
                        <button className="bg-blue-600 p-2 font-bold rounded-lg text-white shadow-md shadow-[#4f4f4f]" type="submit">Agregar</button>
                    </div>
                </form>
            )}
        </Formik>
    </>)
}
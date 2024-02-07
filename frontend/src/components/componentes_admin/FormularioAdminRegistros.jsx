import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Formik } from 'formik'
import { BsPlusCircleFill } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";

export default function FormularioAdminRegistro({ }) {
    const [show, setShow] = useState(false)
    const [Shows, setShows] = useState(false)
    const [Mecanico, setMecanico] = useState([])

    useEffect(() => {
        fetchMecanico()
    }, []);
    const fetchMecanico = async () => {
        try {
            const response = await axios.get("https://localhost:3000/api/v1/users");
            setMecanico(response.data);
        } catch (error) {
            console.error("Error fetching mecánicos:", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const numericValue = name === 'precio_de_material' || name === 'precio_por_hora' ? parseInt(value, 10) : value
        setValues(prevState => ({
            ...prevState,
            [name]: numericValue
        }))
    }
    return (
        <>
            <label onClick={() => setShow(true)} className="cursor-pointer">Crear registro</label>
            {show &&
                <div className="text-black">
                    <div className="fixed flex bg-black/40 w-screen h-screen top-[0rem] left-0 justify-center items-center">
                        <Formik
                            initialValues={{
                                nombre_cliente: "",
                                telefono_celular: "",
                                correo_electronico: "",
                                modelo_vehiculo: "",
                                placas: "",
                                año_vehiculo: "",
                                descripcion_de_trabajo: "",
                                cantidad_de_horas: "",
                                precio_de_material: "",
                                costo_total: "",
                                precio_fijo: "",
                                precio_por_hora: "",
                                estatus: "",
                                tipo_trabajo: "",
                                tipo_vehiculo: "",
                                usuario_c: ""
                            }}
                            onSubmit={async (values, actions) => {
                                if (values.precio_fijo === "") {
                                    values.precio_fijo = 0
                                }
                                if (values.costo_total === "") {
                                    values.costo_total = 0
                                }
                                if (values.cantidad_de_horas === "") {
                                    values.cantidad_de_horas = 0
                                }
                                if (values.precio_de_material === "") {
                                    values.precio_de_material = 0
                                }
                                if (values.precio_por_hora === "") {
                                    values.precio_por_hora = 0
                                }
                                if (values.estatus === "") {
                                    values.estatus = false
                                }

                                console.log(values)
                                try {
                                    await axios.post('https://localhost:3000/api/v1/registro-de-trabajos', values);
                                    actions.resetForm();
                                    window.location = '/administrador';
                                } catch (error) {
                                    console.error('Error al crear el registro:', error);
                                }
                            }}
                            validate={(values) => {
                                const errors = {};
                                return errors;
                            }}
                        >
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
                                                    className="md:w-5/6 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"name="año_vehiculo"value={values.año_vehiculo}onChange={handleChange}>
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
                                                    className="md:w-5/6 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"name="tipo_vehiculo"value={values.tipo_vehiculo}onChange={handleChange}>
                                                    <option>Tipo de vehiculo</option>
                                                    <option value="Estandar">Estandar</option>
                                                    <option value="Automatico">Automatico</option>
                                                </select>
                                        </div>
                                    </div>
                                    <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 bg-gray-400 text-base">Información de trabajo:</label>
                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/3 px-2">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Trabajo a realizar</label>
                                            <select
                                                    className="md:w-5/6 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"name="tipo_trabajo"value={values.tipo_trabajo}onChange={handleChange}>
                                                    <option>Tipo de trabajo</option>
                                                    <option value="reparacion_mecanica">Reparación mecanica</option>
                                                    <option value="reparacion_chapa_pintura">Reparación chapa y pintura</option>
                                                    <option value="revision">Revisión general</option>
                                                </select>
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
                                                <option>Poner mecanico a cargo</option>
                                                {Mecanico.map((mecanico, index) => (
                                                    <option key={index} value={mecanico.usuario_c}>{mecanico.nombre_usuario}</option>
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
                                        <label className="bg-red-700 text-white p-2 px-4 font-bold hover:bg-red-900 rounded-xl cursor-pointer" onClick={() => setShows(true)}>Continuar</label>
                                        {Shows ?
                                            <div className="fixed flex bg-black/40 w-screen h-screen top-[0rem] left-0 justify-center items-center">
                                                <div className=" flex flex-col w-fit px-8 p-4 shadow-md rounded-xl items-center font-lalezar h-fit gap-2 " style={{ backgroundColor: "#D9D9D9" }}>
                                                    <label onClick={() => setShows(false)} className="text-red-600 hover:text-red-900 cursor-pointer text-3xl mb-2 flex flex-row w-full justify-end"> <IoCloseCircle /></label>
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Por el momento editar esta en mantenimiento y no padra editar</label>
                                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">¿Esta seguro de subir los datos?</label>
                                                    <button className="bg-blue-600 p-2 font-bold rounded-lg text-white shadow-md shadow-[#4f4f4f]" type="submit">Agregar</button>
                                                </div>
                                            </div>
                                            : null}
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div >
            }
        </>
    );
}

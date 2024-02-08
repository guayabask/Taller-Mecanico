import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { BsPlusCircleFill } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";

export default function EditarRegistroMecanico() {
    const [show, setShow] = useState(false);
    const [Mecanico, setMecanico] = useState([]);

    const [estatus, setEstatus] = useState(false);

    const handleFinalizarTrabajo = (event) => {
        event.preventDefault();
        setEstatus(true);
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
        costo_total: "",
        precio_fijo: "",
        precio_por_hora: "",
        estatus: false,
        tipo_trabajo: "",
        tipo_vehiculo: "",
        usuario_c: ""

    })

    useEffect(() => {
        const loadRegistro = async () => {
            const response = await axios.get(`https://localhost:3000/api/v1/registro-de-trabajos/${params.id}`);
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
                tipo_trabajo: response.data.tipo_trabajo,
                estatus: response.data.estatus,
                precio_por_hora: response.data.precio_por_hora,
                tipo_vehiculo: response.data.tipo_vehiculo,
                usuario_c: response.data.usuario_c
            });
        };
        loadRegistro();
    }, [params.id]);




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
    const handleFinalizar = () => {
        setSelectedEstatus("true");
    };

    const [selectedEstatus, setSelectedEstatus] = useState("")

    const handleChang = (event) => {
        setSelectedEstatus(event.target.value)
    };

    const handleAgregarClick = () => {
        
        console.log("Valor seleccionado:", selectedEstatus)
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        const numericValue = name === 'precio_de_material' || name === 'precio_por_hora' ? parseInt(value, 10) : value
        SetRegistros(prevState => ({
            ...prevState,
            [name]: numericValue
        }))
    }

    const navigate = useNavigate()
    return (<>
        <div className='fixed flex bg-black/40 w-screen h-screen top-[0rem] left-0 justify-center items-center'>
            <Formik
                initialValues={Registros}
                enableReinitialize={true}
                onSubmit={async (values, actions) => {

                    const precioFijo = values.cantidad_de_horas * values.precio_por_hora;
                    const updatedValues = {
                        ...values,
                        precio_fijo: precioFijo
                    }

                    if (values.tipo_trabajo === "reparacion_mecanica") {
                        const costoTotal = (values.precio_de_material * 1.1) + updatedValues.precio_fijo;
                        updatedValues.costo_total = costoTotal;
                        values.costo_total = costoTotal;
                    } else if (values.tipo_trabajo === "reparacion_chapa_pintura") {
                        const costoTotal = (values.precio_de_material * 1.3) + updatedValues.precio_fijo;
                        updatedValues.costo_total = costoTotal;
                        values.costo_total = costoTotal;
                    } else if (values.tipo_trabajo === "revision") {
                        const costoTotal = (updatedValues.precio_fijo + 450)
                        updatedValues.costo_total = costoTotal;
                        values.costo_total = costoTotal;
                    }
                    if (setSelectedEstatus === "true"){
                        values.estatus = true;
                    }

                    values.precio_fijo = updatedValues

                    if (values.estatus === "1") {
                        values.estatus = true
                    }

                    console.log(updatedValues);

                    var res = await axios.patch(`https://localhost:3000/api/v1/registro-de-trabajos/${params.id}`, values)

                    actions.resetForm()
                    alert('Datos actualizados correctamente')
                    if (res.status == 200) {
                        //Redirecciomar 
                        window.location = '/mecanico';
                    }
                    else {
                        alert("Succedio un error")
                    }
                }}>
                {({ handleChange, handleSubmit, values }) => (
                    <form className="w-fit h-fit p-6 bg-white" onSubmit={handleSubmit}>

                        {values.estatus ? (
                            <>
                                <div className="flex flex-row justify-between">
                                    <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-base">Editar registro</label>
                                    <Link to="/mecanico"><label className="text-red-600 hover:text-red-900 cursor-pointer text-3xl mb-2"> <IoCloseCircle /></label></Link>
                                </div>
                                <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 bg-gray-400 text-base">Datos de cliente:</label>
                                <div className="flex flex-row w-full gap-2">
                                    <div className="md:w-1/3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre del Cliente</label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" type="text" readOnly placeholder="Nombre del Cliente" name="nombre_cliente" onChange={handleChange} value={values.nombre_cliente} />
                                    </div>
                                    <div className="md:w-1/3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Teléfono Celular</label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" type="text"  readOnly placeholder="Teléfono Celular" name="telefono_celular" onChange={handleChange} value={values.telefono_celular} />
                                    </div>
                                    <div className="md:w-1/3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Correo Electrónico</label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" type="text" readOnly placeholder="Correo Electrónico" name="correo_electronico" onChange={handleChange} value={values.correo_electronico} />
                                    </div>
                                </div>
                                <label className="block uppercase tracking-wide text-gray-800 font-bold mb-2 bg-gray-400 text-base">Información del vehiculo:</label>
                                <div className="flex flex-wrap ">
                                    <div className="w-full md:w-1/3 px-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Modelo del Vehículo</label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" type="text" readOnly placeholder="Modelo del Vehículo" name="modelo_vehiculo" onChange={handleChange} value={values.modelo_vehiculo} />
                                    </div>
                                    <div className="w-full md:w-1/3 px-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Color del Vehículo</label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" type="text" readOnly placeholder="Color del Vehículo" name="color_vehiculo" onChange={handleChange} value={values.color_vehiculo} />
                                    </div>
                                    <div className="w-full md:w-1/3 px-2 flex flex-row">
                                        <div className="w-full md:w-5/6 px-2">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Placas</label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" type="text" readOnly placeholder="Placas" name="placas" onChange={handleChange} value={values.placas} />
                                        </div>
                                        <div className="w-full px-2">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 custom-dropdown">Año del vehiculo</label>
                                            <select disabled
                                                className="md:w-5/6 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"
                                                name="año_vehiculo"
                                                value={values.año_vehiculo}
                                                onChange={handleChange}
                                            >
                                                <option value="">Escoger año</option>
                                                <option value="2024">2024</option>
                                                <option value="2023">2023</option>
                                                <option value="2022">2022</option>
                                                <option value="2021">2021</option>
                                                <option value="2020">2020</option>
                                                <option value="2019">2019</option>
                                                <option value="2018">2018</option>
                                                <option value="2017">2017</option>
                                                <option value="2016">2016</option>
                                                <option value="2015">2015</option>
                                                <option value="2014">2014</option>
                                                <option value="2013">2013</option>
                                                <option value="2012">2012</option>
                                                <option value="2011">2011</option>
                                                <option value="2010">2010</option>
                                                <option value="2009">2009</option>
                                                <option value="2008">2008</option>
                                                <option value="2007">2007</option>
                                                <option value="2006">2006</option>
                                                <option value="2005">2005</option>
                                                <option value="2004">2004</option>
                                                <option value="2003">2003</option>
                                                <option value="2002">2002</option>
                                                <option value="2001">2001</option>
                                                <option value="2000">2000</option>
                                                <option value="1999">1999</option>
                                                <option value="1998">1998</option>
                                                <option value="1997">1997</option>
                                                <option value="1996">1996</option>
                                                <option value="1995">1995</option>
                                                <option value="1994">1994</option>
                                                <option value="1993">1993</option>
                                                <option value="1992">1992</option>
                                                <option value="1991">1991</option>
                                                <option value="1990">1990</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 px-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Tipo de vehiculo</label>
                                        <select disabled
                                            className="md:w-5/6 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" name="tipo_vehiculo" value={values.tipo_vehiculo} onChange={handleChange}>
                                            <option>Tipo de vehiculo</option>
                                            <option value="Estandar">Estandar</option>
                                            <option value="Automatico">Automatico</option>
                                        </select>
                                    </div>
                                </div>
                                <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 bg-gray-400 text-base">Información de trabajo:</label>
                                <div className="flex flex-wrap">
                                    <div className="w-full md:w-1/3 px-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Tipo de Trabajo</label>
                                        <select disabled
                                            className="md:w-5/6 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"
                                            name="tipo_trabajo"
                                            value={values.tipo_trabajo}
                                            onChange={handleChange}>
                                            <option>Tipo de trabajo</option>
                                            <option value="reparacion_mecanica">Reparación mecanica</option>
                                            <option value="reparacion_chapa_pintura">Reparación chapa y pintura</option>
                                            <option value="revision">Revisión general</option>
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
                                            
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Precio de Material</label>
                                        <input readOnly
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"
                                            type="number"
                                            placeholder="Precio de Material"
                                            name="precio_de_material"
                                            min="0"
                                            step="1"
                                            onChange={(e) => {
                                                const value = parseInt(e.target.value)
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
                                    <div className="w-full md:w-1/4 flex flex-col px-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" >Estatus de Trabajo</label>
                                        <div className='flex flex-row items-center gap-2'>
                                            <label className="block uppercase text-blue-700 tracking-wide  text-xs font-bold mb-1" >{values.estatus ? 'Finalizado' : 'En proceso'}</label>

                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-wrap">


                                </div>
                                <div className="flex flex-wrap">
                                    <div className="w-full px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Descripció de Trabajo</label>
                                        <textarea className="appearance-none block w-full h-[5rem] bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" readOnly placeholder="Descripción de Trabajo" name="descripcion_de_trabajo" onChange={handleChange} value={values.descripcion_de_trabajo} />
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center gap-8">
                                    <button className="bg-blue-600 p-2 font-bold rounded-lg text-white shadow-md shadow-[#4f4f4f]" type="submit">Agregar</button>
                                </div>
                            </>
                        ) : (
                            <div>
                                <div className="flex flex-row justify-between">
                                    <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-base">Editar registro</label>
                                    <Link to="/mecanico"><label className="text-red-600 hover:text-red-900 cursor-pointer text-3xl mb-2"> <IoCloseCircle /></label></Link>
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
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 custom-dropdown">Año del vehiculo</label>
                                            <select
                                                className="md:w-5/6 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"
                                                name="año_vehiculo"
                                                value={values.año_vehiculo}
                                                onChange={handleChange}
                                            >
                                                <option value="">Escoger año</option>
                                                <option value="2024">2024</option>
                                                <option value="2023">2023</option>
                                                <option value="2022">2022</option>
                                                <option value="2021">2021</option>
                                                <option value="2020">2020</option>
                                                <option value="2019">2019</option>
                                                <option value="2018">2018</option>
                                                <option value="2017">2017</option>
                                                <option value="2016">2016</option>
                                                <option value="2015">2015</option>
                                                <option value="2014">2014</option>
                                                <option value="2013">2013</option>
                                                <option value="2012">2012</option>
                                                <option value="2011">2011</option>
                                                <option value="2010">2010</option>
                                                <option value="2009">2009</option>
                                                <option value="2008">2008</option>
                                                <option value="2007">2007</option>
                                                <option value="2006">2006</option>
                                                <option value="2005">2005</option>
                                                <option value="2004">2004</option>
                                                <option value="2003">2003</option>
                                                <option value="2002">2002</option>
                                                <option value="2001">2001</option>
                                                <option value="2000">2000</option>
                                                <option value="1999">1999</option>
                                                <option value="1998">1998</option>
                                                <option value="1997">1997</option>
                                                <option value="1996">1996</option>
                                                <option value="1995">1995</option>
                                                <option value="1994">1994</option>
                                                <option value="1993">1993</option>
                                                <option value="1992">1992</option>
                                                <option value="1991">1991</option>
                                                <option value="1990">1990</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 px-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Tipo de vehiculo</label>
                                        <select
                                            className="md:w-5/6 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" name="tipo_vehiculo" value={values.tipo_vehiculo} onChange={handleChange}>
                                            <option>Tipo de vehiculo</option>
                                            <option value="Estandar">Estandar</option>
                                            <option value="Automatico">Automatico</option>
                                        </select>
                                    </div>
                                </div>
                                <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 bg-gray-400 text-base">Información de trabajo:</label>
                                <div className="flex flex-wrap">
                                    <div className="w-full md:w-1/3 px-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Tipo de Trabajo</label>
                                        <select
                                            className="md:w-5/6 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"
                                            name="tipo_trabajo"
                                            value={values.tipo_trabajo}
                                            onChange={handleChange}>
                                            <option>Tipo de trabajo</option>
                                            <option value="reparacion_mecanica">Reparación mecanica</option>
                                            <option value="reparacion_chapa_pintura">Reparación chapa y pintura</option>
                                            <option value="revision">Revisión general</option>
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
                                                onClick={() => handleChange({ target: { name: 'cantidad_de_horas', value: parseInt(values.cantidad_de_horas) + 1 || 1 } })}>
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
                                            step="1"
                                            onChange={(e) => {
                                                const value = parseInt(e.target.value)
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
                                    <div className="w-full md:w-1/4 flex flex-col px-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" >Estatus de Trabajo</label>
                                        <div className='flex flex-row items-center gap-2'>
                                            <label className="block uppercase text-blue-700 tracking-wide  text-xs font-bold mb-1" >{values.estatus ? 'Finalizado' : 'En proceso'}</label>
                                            <select
                                                className="md:w-5/6 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" name="estatus" value={values.estatus} onChange={handleChange}>
                                                <option>Editar estatus</option>
                                                <option value="1">Finalizar</option>
                                                <option value="1">En proceso</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-wrap">


                                </div>
                                <div className="flex flex-wrap">
                                    <div className="w-full px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Descripción de Trabajo</label>
                                        <textarea className="appearance-none block w-full h-[5rem] bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal" placeholder="Descripción de Trabajo" name="descripcion_de_trabajo" onChange={handleChange} value={values.descripcion_de_trabajo} />
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center gap-8">
                                    <button
                                        className="bg-blue-600 p-2 font-bold rounded-lg text-white shadow-md shadow-[#4f4f4f]"
                                        type="submit"
                                        onClick={handleAgregarClick}>
                                        Agregar
                                    </button>
                                </div>
                            </div>
                        )}

                    </form>
                )}
            </Formik>
        </div >

    </>)
}
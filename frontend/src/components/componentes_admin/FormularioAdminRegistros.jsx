import React, { useState } from "react";
import axios from 'axios'
import { Formik } from 'formik'

export default function FormularioAdminRegistro() {
    const [show, setShow] = useState(false);

    return (
        <>
            <label onClick={() => setShow(true)} className="cursor-pointer">Crear registro</label>
            {show &&
                <div className="text-black">
                    <div className="absolute flex bg-black/40 w-screen h-screen top-[0rem] left-0 justify-center items-center">
                        <Formik
                            initialValues={{
                                tipoTrabajo_id: "",
                                estatusTrabajo_id: "",
                                horaPrecio_id: "",
                                tipoDeVehiculo_id: "",
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
                                fecha_de_inicio: "",
                                fecha_de_finalizacion: "",
                                precio_fijo: "",
                                usuarioRegistro_id: ""
                            }}
                            onSubmit={async (values, actions) => {
                                console.log(values);

                                try {
                                    await axios.post('http://localhost:3000/api/v1/registro', values);
                                    actions.resetForm();
                                    alert('Registro creado correctamente');
                                    window.location = '/administrar-registros';
                                } catch (error) {
                                    console.error('Error al crear el registro:', error);
                                    // Puedes manejar el error de otra manera, como mostrando un mensaje al usuario
                                }
                            }}
                        >
                            {({ handleChange, handleSubmit, values }) => (
                                <form className="w-full max-w-xl h-[40rem] p-10 bg-white" onSubmit={handleSubmit}>
                                    <div className="flex flex-row -mx-3 mb-6">
                                        <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Tipo de Trabajo</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Tipo de Trabajo"
                                                name="tipoTrabajo_id"
                                                onChange={handleChange}
                                                value={values.tipoTrabajo_id}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Estatus de Trabajo</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Estatus de Trabajo"
                                                name="estatusTrabajo_id"
                                                onChange={handleChange}
                                                value={values.estatusTrabajo_id}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Hora Precio</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Hora Precio"
                                                name="horaPrecio_id"
                                                onChange={handleChange}
                                                value={values.horaPrecio_id}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Tipo de Vehículo</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Tipo de Vehículo"
                                                name="tipoDeVehiculo_id"
                                                onChange={handleChange}
                                                value={values.tipoDeVehiculo_id}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre del Cliente</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Nombre del Cliente"
                                                name="nombre_cliente"
                                                onChange={handleChange}
                                                value={values.nombre_cliente}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Teléfono Celular</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Teléfono Celular"
                                                name="telefono_celular"
                                                onChange={handleChange}
                                                value={values.telefono_celular}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Correo Electrónico</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Correo Electrónico"
                                                name="correo_electronico"
                                                onChange={handleChange}
                                                value={values.correo_electronico}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Modelo del Vehículo</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Modelo del Vehículo"
                                                name="modelo_vehiculo"
                                                onChange={handleChange}
                                                value={values.modelo_vehiculo}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Placas</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Placas"
                                                name="placas"
                                                onChange={handleChange}
                                                value={values.placas}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Año del Vehículo</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Año del Vehículo"
                                                name="año_vehiculo"
                                                onChange={handleChange}
                                                value={values.año_vehiculo}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Color del Vehículo</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Color del Vehículo"
                                                name="color_vehiculo"
                                                onChange={handleChange}
                                                value={values.color_vehiculo}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Descripción de Trabajo</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Descripción de Trabajo"
                                                name="descripcion_de_trabajo"
                                                onChange={handleChange}
                                                value={values.descripcion_de_trabajo}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Cantidad de Horas</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Cantidad de Horas"
                                                name="cantidad_de_horas"
                                                onChange={handleChange}
                                                value={values.cantidad_de_horas}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Precio de Material</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Precio de Material"
                                                name="precio_de_material"
                                                onChange={handleChange}
                                                value={values.precio_de_material}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Costo Total</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Costo Total"
                                                name="costo_total"
                                                onChange={handleChange}
                                                value={values.costo_total}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Fecha de Inicio</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Fecha de Inicio"
                                                name="fecha_de_inicio"
                                                onChange={handleChange}
                                                value={values.fecha_de_inicio}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        

                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Fecha de Finalización</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Fecha de Finalización"
                                                name="fecha_de_finalizacion"
                                                onChange={handleChange}
                                                value={values.fecha_de_finalizacion}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Precio Fijo</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Precio Fijo"
                                                name="precio_fijo"
                                                onChange={handleChange}
                                                value={values.precio_fijo}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/3 px-2 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Usuario de Registro ID</label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Usuario de Registro ID"
                                                name="usuarioRegistro_id"
                                                onChange={handleChange}
                                                value={values.usuarioRegistro_id}
                                            />
                                        </div>
                                        {/* Agrega más campos similares para los demás datos del formulario */}
                                    </div>
                                    <div className="flex flex-row justify-center gap-8">
                                        <button className="bg-[#257a8d] hover:bg-[#204a53] text-gray-300 font-semibold hover:text-white py-0 border border-gray-700 hover:border-transparent rounded" type='submit'>
                                            Agregar
                                        </button>
                                        <label onClick={() => setShow(false)} className="bg-[#8d2525] hover:bg-[#53202f] cursor-pointer text-gray-300 font-semibold hover:text-white p-2 border border-gray-700 hover:border-transparent rounded">
                                            Cancelar
                                        </label>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            }
        </>
    );
}

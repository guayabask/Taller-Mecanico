import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Formik } from 'formik';
import { BsPlusCircleFill } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";

const FormularioAdminRegistro = () => {
    const [show, setShow] = useState(false);
    const [tipodVehiculo, setTipoVehiculo] = useState([]);

    useEffect(() => {
        fetchTipoVehiculo();
    }, []);

    const fetchTipoVehiculo = async () => {
        try {
            const response = await axios.get("https://localhost:3000/api/v1/tipos-de-vehiculo");
            setTipoVehiculo(response.data);
        } catch (error) {
            console.error("Error fetching tipo de vehículo:", error);
        }
    };

    return (
        <>
            <label onClick={() => setShow(true)} className="cursor-pointer">Crear Tipo vehiculo</label>
            {show &&
                <div className="text-black">
                    <div className="absolute flex bg-black/40 w-screen h-screen top-[0rem] left-0 justify-center items-center">
                        <Formik
                            initialValues={{
                                tipo_vehiculo: "",
                            }}
                            onSubmit={async (values, actions) => {
                                try {
                                    // Puedes realizar la lógica para enviar la información del tipo de vehículo aquí
                                    console.log("Formulario enviado:", values);

                                    // Descomenta y ajusta la siguiente línea según tus necesidades
                                    // await axios.post('https://localhost:3000/api/v1/tipos-de-vehiculo', values);

                                    actions.resetForm();
                                    alert('Tipo de vehículo creado correctamente');
                                    setShow(false);
                                    fetchTipoVehiculo(); // Actualiza la lista de tipos de vehículo
                                } catch (error) {
                                    console.error('Error al crear el tipo de vehículo:', error);
                                }
                            }}
                            validate={(values) => {
                                const errors = {};
                                // Agrega lógica de validación si es necesario
                                return errors;
                            }}
                        >
                            {({ handleChange, handleSubmit, values }) => (
                                <form className="w-fit h-fit p-6 bg-white" onSubmit={handleSubmit}>
                                    <div className="flex justify-between items-center mb-4">
                                        <label className="block uppercase tracking-wide text-gray-700 font-bold text-base">Agregar Tipo de vehiculo</label>
                                        <label onClick={() => setShow(false)} className="text-red-600 hover:text-red-900 cursor-pointer text-3xl"> <IoCloseCircle /></label>
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
                                    <div className="flex flex-wrap">
                                    </div>
                                    <div className="flex flex-row justify-center gap-8 mt-4">
                                        <button className="bg-blue-600 p-2 font-bold rounded-lg text-white shadow-md shadow-[#4f4f4f]" type="submit">Agregar</button>
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

export default FormularioAdminRegistro;

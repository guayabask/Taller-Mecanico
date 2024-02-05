import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Formik } from 'formik';
import { IoCloseCircle } from "react-icons/io5";

const FormularioTipoEstatus = () => {
    const [show, setShow] = useState(false);
    const [tipoEstatus, setTipoEstatus] = useState([]);

    useEffect(() => {
        fetchTipoEstatus();
    }, []);

    const fetchTipoEstatus = async () => {
        try {
            const response = await axios.get("https://localhost:3000/api/v1/estatus-trabajos");
            setTipoEstatus(response.data);
        } catch (error) {
            console.error("Error fetching tipo de estatus:", error);
        }
    };

    return (
        <>
            <label onClick={() => setShow(true)} className="cursor-pointer">Crear Estatus</label>
            {show &&
                <div className="text-black">
                    <div className="absolute flex bg-black/40 w-screen h-screen top-[0rem] left-0 justify-center items-center">
                        <Formik
                            initialValues={{
                                estatus: "",
                            }}
                            onSubmit={async (values, actions) => {
                                try {
                                    // Puedes realizar la lógica para enviar la información del estatus aquí
                                    console.log("Formulario enviado:", values);

                                    // Descomenta y ajusta la siguiente línea según tus necesidades
                                    // await axios.post('https://localhost:3000/api/v1/estatus-trabajos', values);

                                    actions.resetForm();
                                    alert('Estatus creado correctamente');
                                    setShow(false);
                                    fetchTipoEstatus(); // Actualiza la lista de tipos de estatus
                                } catch (error) {
                                    console.error('Error al crear el estatus:', error);
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
                                    <div className="flex flex-row justify-between">
                                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-base">Agregar estatus</label>
                                        <label onClick={() => setShow(false)} className="text-red-600 hover:text-red-900 cursor-pointer text-3xl mb-2">
                                            <IoCloseCircle />
                                        </label>
                                    </div>
                                    <div className="w-full md:w-1/3 px-2">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">Estatus de Trabajo</label>
                                        <select
                                            className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-2 leading-tight focus:outline-none focus:bg-white font-normal"
                                            name="estatus"
                                            value={values.estatus}
                                            onChange={handleChange}
                                        >
                                            {tipoEstatus.map((estatus, index) => (
                                                <option key={index} value={estatus.estatus}>
                                                    {estatus.tipo_estatus}
                                                </option>
                                            ))}
                                        </select>
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

export default FormularioTipoEstatus;

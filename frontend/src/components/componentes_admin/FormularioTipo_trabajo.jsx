import React, { useState } from "react";
import axios from 'axios'
import { Formik } from 'formik'

export default function FormularioAdminRegistro() {
    const [show, setShow] = useState(false);

    return (
        <>
            <label onClick={() => setShow(true)} className="cursor-pointer">Crear Tipo de trabajo</label>
            {show &&
                <div className="text-black">
                    <div className="absolute flex bg-black/40 w-screen h-screen top-[0rem] left-0 justify-center items-center">
                        <Formik
                            initialValues={{
                                tipo_de_trabajo: "",
                                valor_de_tipo: "",
                            }}
                            onSubmit={async (values, actions) => {
                                try {
                                    // Convertir valor_de_tipo a entero solo si no está vacío
                                    if (values.valor_de_tipo.trim() !== "") {
                                        values.valor_de_tipo = parseInt(values.valor_de_tipo);
                                    }

                                    // Puedes realizar la lógica para enviar la información del tipo de trabajo aquí
                                    console.log("Formulario enviado:", values);

                                    // Ajusta la siguiente línea según tus necesidades
                                    await axios.post('https://localhost:3000/api/v1/tipos-de-trabajo', values);

                                    actions.resetForm();
                                    alert('Tipo de trabajo creado correctamente');
                                    setShow(false);
                                    window.location = '/administrador';
                                } catch (error) {
                                    console.error('Error al crear el tipo de trabajo:', error);
                                }
                            }}
                            validate={(values) => {
                                const errors = {};
                                // Agrega lógica de validación si es necesario
                                return errors;
                            }}
                        >
                            {({ handleChange, handleSubmit, values, setFieldValue }) => (
                                <form className="w-full max-w-lg h-[34rem] p-4 bg-white" onSubmit={handleSubmit}>
                                    <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2">Agregar Tipo de trabajo</label>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Tipo de Trabajo</label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Ingrese el tipo de trabajo" name="tipo_de_trabajo" onChange={handleChange} value={values.tipo_de_trabajo} />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                Tipo de Valor
                                            </label>
                                            <input
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                type="text"
                                                placeholder="Ingrese el tipo de valor"
                                                name="valor"
                                                onChange={(e) => setFieldValue("valor_de_tipo", e.target.value)}
                                                value={values.valor_de_tipo}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-center gap-8 mt-4">
                                        <button className="bg-blue-600 p-2 font-bold rounded-lg text-white shadow-md shadow-[#4f4f4f]" type="submit">Agregar</button>
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
    )
}

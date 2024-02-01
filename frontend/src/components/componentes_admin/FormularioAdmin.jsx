import React, { useState } from "react";
import axios from 'axios'
import { Formik } from 'formik'

export default function FormularioAdmin() {
  const [Show, setShow] = useState(false)
  return (<>
    <label onClick={() => setShow(true)} className="cursor-pointer">Crear user</label>
    {Show ?
      <div className="text-black">
        <div className="absolute flex bg-black/40 w-screen h-screen top-[0rem] left-0 justify-center items-center">
          <Formik
            initialValues={{
              nombre_usuario: "",
              correo_electronico: "",
              role: "",
              id_pregunta_id: "",
              Password: ""
            }}

            //ver los valores que agrega el usuario  
            onSubmit={async (values, actions) => {
              console.log(values)

              var res = await axios.post('http://localhost:3000/api/v1/users', values)
              actions.resetForm()
              alert('Datos agregados correctamente')
              window.location = '/administrar-usuarios';

            }}
          >
            {({ handleChange, handleSubmit, values }) => (

              <form className="w-full max-w-lg h-[34rem] p-4 bg-white" onSubmit={handleSubmit}>
                <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2">Crear usuario</label>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre</label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Carlos" name="Nombre" onChange={handleChange} value={values.nombre_usuario} />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Palabra token
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      placeholder="Jaguar"
                      name="Apellido"
                      onChange={handleChange}
                      value={values.id_pregunta_id}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">correo electronico</label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="email"
                      placeholder="ejemplo@email.com"
                      name="Email"
                      onChange={handleChange}
                      value={values.correo_electronico}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Contraseña</label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="password"
                      placeholder="******"
                      name="Password"
                      onChange={handleChange}
                      value={values.Password}
                    />

                    <p className="text-gray-600 text-xs italic">Mínimo 6 caracteres</p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  
                    
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Rol
                    </label>
                    <select className="block w-fit bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="Guayabo" name="role" onChange={handleChange} value={values.role}>
                      <option className="text-gray-700">admin</option>
                      <option className="text-gray-700">mecanico</option>
                      <option className="text-gray-700">cliente</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-8">
                  <button className="bg-[#257a8d] hover:bg-[#204a53]  text-gray-300 font-semibold hover:text-white py-0  border border-gray-700 hover:border-transparent rounded" type='onSubmit'>
                  Agregar
                </button>
                <label onClick={() => setShow(!true)} className="bg-[#8d2525] hover:bg-[#53202f] cursor-pointer text-gray-300 font-semibold hover:text-white p-2 border border-gray-700 hover:border-transparent rounded">
                  Cancelar
                </label>
                </div>
                
              </form>
            )}
          </Formik>
        </div>
      </div>
      : null}


  </>


  )
}





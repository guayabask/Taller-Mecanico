import React, { useState } from "react";
import inicio from "./../../assets/images/inicio.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoCloseCircle } from "react-icons/io5";

const FormularioAdmin = () => {
  const [Show, setShow] = useState(false)
  const [Shows, setShows] = useState(false)

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState('')
  const [confirmPassword, setConfirmPassword] = useState("");
  const [idPreguntaControl, setIdPreguntaControl] = useState("")

  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("https://localhost:3000/api/v1/auth/register", {
        nombre_usuario: username,
        correo_electronico: email,
        contraseña: password,
        id_pregunta_control_id: idPreguntaControl,
        role: rol
      });
      window.location = "/administrar-usuarios";
      console.log("Respuesta del servidor:", response.data);
      
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Error al conectar con el servidor.")
      }
      console.error("Error al registrar:", error);
    }
  };
  return (<>
    <label onClick={() => setShow(true)} className="cursor-pointer">Crear user</label>
    {Show ?
      <div className="text-black">

        <div className="absolute flex bg-black/40 w-screen h-screen top-[0rem] left-0 justify-center items-center">

          <div className=" flex flex-col w-fit px-8 p-4 shadow-md rounded-xl items-center font-lalezar h-fit gap-2 " style={{ backgroundColor: "#D9D9D9" }}>
            <div className="flex flex-row justify-between w-full">
              <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-base">Agregar nuevo registro</label>
              <label onClick={() => setShow(false)} className="text-red-600 hover:text-red-900 cursor-pointer text-3xl mb-2"> <IoCloseCircle /></label>
            </div>
            <div className="w-full flex flex-col gap-2 m-2">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre del usuario</label>
              <input type="text" name="nombre_usuario" className="border w-full p-2 px-3 rounded-lg" placeholder="Ingresa un nombre de usuario" onChange={(e) => setUsername(e.target.value)} />
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Correo electronico</label>
              <input type="email" name="correo_electronico" className="border w-full p-2 px-3 rounded-lg" placeholder="Ingresa tu correo electronico" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="w-full flex flex-col">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Contraseña</label>
              <div className="w-full flex flex-row gap-2">
                <input type="password" name="contraseña" className="border w-full p-2 px-3 rounded-lg" placeholder="Ingresa tu contraseña" onChange={(e) => setPassword(e.target.value)} />
                <input type="password" name="confirmar_contraseña" className="border w-full p-2 px-3 rounded-lg" placeholder="Confirma tu contraseña" onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>

            </div>
            <div>

            </div>
            <div className="w-full flex flex-col gap-2 m-2">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Pregunta control</label>
              <input type="text" name="id_pregunta_control" className="border w-full p-2 px-3 rounded-lg" placeholder="Ingresa algo para verificación de dos pasos" onChange={(e) => setIdPreguntaControl(e.target.value)} />
            </div>

            <div className="w-full flex flex-col gap-2 m-2">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Asignar rol</label>
              <select className="border w-full p-2 px-3 rounded-lg" onChange={(e) => setRol(e.target.value)}>
                <option value="">Selecciona un rol</option>
                <option value="admin">Admin</option>
                <option value="mecanico">Mecanico</option>
              </select>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button className="bg-red-700 text-white p-2 px-4 font-bold hover:bg-red-900 rounded-xl" onClick={() => setShows(true)}>Continuar</button>
            {Shows ?
              <div className="fixed flex bg-black/40 w-screen h-screen top-[0rem] left-0 justify-center items-center">
                <div className=" flex flex-col w-fit px-8 p-4 shadow-md rounded-xl items-center font-lalezar h-fit gap-2 " style={{ backgroundColor: "#D9D9D9" }}>
                  <label onClick={() => setShows(false)} className="text-red-600 hover:text-red-900 cursor-pointer text-3xl mb-2 flex flex-row w-full justify-end"> <IoCloseCircle /></label>
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Por el momento editar esta en mantenimiento y no padra editar</label>
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">¿Esta seguro de subir los datos?</label>
                  <button className="bg-red-700 text-white p-2 px-4 font-bold hover:bg-red-900 rounded-xl" onClick={handleRegister}>Registrar usuario</button>
                </div>

              </div>

              : null}
          </div>
        </div>
      </div>
      : null}


  </>


  )
}

export default FormularioAdmin;



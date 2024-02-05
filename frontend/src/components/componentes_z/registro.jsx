import React, { useState } from "react";
import inicio from "./../../assets/images/inicio.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Registro = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [idPreguntaControl, setIdPreguntaControl] = useState(""); // Nuevo estado

  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("https://localhost:3000/api/v1/auth/register", {
        nombre_usuario: username,
        correo_electronico: email,
        contraseña: password,
        id_pregunta_control_id: idPreguntaControl // Incluir id_pregunta_control_id en la solicitud POST
      });
      alert("En hora buena");
          window.location = "/";
      console.log("Respuesta del servidor:", response.data);
      // Aquí puedes hacer algo con la respuesta, como redirigir al usuario o mostrar un mensaje de éxito.
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message); // Si la API envía un mensaje de error, lo mostramos
      } else {
        setError("Error al conectar con el servidor."); // Si no hay respuesta de la API, mostramos un mensaje genérico
      }
      console.error("Error al registrar:", error);
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100 ">
        <div className=" flex flex-col w-fit px-8 p-4 shadow-md rounded-xl items-center font-lalezar h-fit gap-2 " style={{ backgroundColor: "#D9D9D9" }}>
          <div className="flex flex-col -mt-[6rem] fixed items-center">
            <img src={inicio} className="w-[80%]" alt="Inicio" />
          </div>
          <div className="flex flex-col items-center m-6 -mb-3 p-2 pt-24">
            <h2 className="text-5xl font-semibold tracking-normal text-center uppercase">Registra tu usuario</h2>
          </div>
          <h2 className="text-lg font-semibold">Por favor llena todos los campos</h2>
          <hr className="border-gray-700 w-72" />

          <div className="w-full flex flex-row gap-2 m-2">
            <input type="text" name="nombre_usuario" className="border w-full p-2 px-3 rounded-lg" placeholder="Ingresa un nombre de usuario" onChange={(e) => setUsername(e.target.value)} />
            <input type="email" name="correo_electronico" className="border w-full p-2 px-3 rounded-lg" placeholder="Ingresa tu correo electronico" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="w-full flex flex-row gap-2 m-2">
            <input type="password" name="contraseña" className="border w-full p-2 px-3 rounded-lg" placeholder="Ingresa tu contraseña" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" name="confirmar_contraseña" className="border w-full p-2 px-3 rounded-lg" placeholder="Confirma tu contraseña" onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <div>
            
          </div>
          <div className="w-full flex flex-row gap-2 m-2"> {/* Nuevo campo para id_pregunta_control_id */}
            <input type="text" name="id_pregunta_control" className="border w-full p-2 px-3 rounded-lg" placeholder="Ingresa algo que solo tu conozcas en caso de perder tu contraseña" onChange={(e) => setIdPreguntaControl(e.target.value)} />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button className="bg-red-700 text-white p-2 px-4 font-bold hover:bg-red-900 rounded-xl" onClick={handleRegister}>Registrarse</button>
          <div className=" p-1 flex flex-col">
            
            <div className=" w-full justify-center flex flex-row gap-2">
              <Link to="/"><p className="block text-left text-[#3a3a3a] text-sm font-workSans font-bold mb-2">Regresar al inicio de sesión</p></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;

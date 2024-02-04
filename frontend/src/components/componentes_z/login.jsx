import React, { useState } from "react";
import inicio from "./../../assets/images/inicio.png";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    axios.post(`https://localhost:3000/api/v1/auth/login`, {
      correo_electronico: email,
      contraseña: password
    })
      .then(response => {
        const { role } = response.data;
        localStorage.setItem('userRole', role); // Guarda el rol en el almacenamiento local
        handleRoleRedirect(role); // Redirige según el rol
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          alert("Correo electrónico o contraseña incorrectos. Por favor, inténtelo de nuevo.");
        } else {
          console.error("Error en el inicio de sesión:", error);
          alert("Se ha producido un error");
        }
      });
  };

  const handleRoleRedirect = (role) => {
    switch (role) {
      case "admin":
        window.location = "/administrador";
        break;
      case "mecanico":
        window.location = "/mecanico";
        break;
      case "cliente":
        window.location = "/cliente";
        break;
      default:
        alert("Rol desconocido");
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
        <div className=" flex flex-col w-fit p-4 shadow-md rounded-xl items-center font-lalezar h-fit gap-2" style={{ backgroundColor: "#D9D9D9" }}>
          <div className="flex flex-col -mt-[6rem] fixed items-center">
            <img src={inicio} className="w-[80%]" alt="Inicio" />
          </div>
          <div className="flex flex-col items-center m-6 -mb-3 p-2 pt-24">
            <h2 className="text-5xl font-semibold tracking-normal text-center ">BIENVENIDO</h2>
          </div>
          <h2 className="text-lg font-semibold">Ingreso al sistema</h2>
          <hr className="border-gray-700 w-40" />
          <div className="w-[18rem] flex flex-col gap-2 m-2">
            <input type="email" name="correo_electronico" className="border w-full p-2 px-3 rounded-lg" placeholder="Ingresa tu correo electronico" onChange={(event) => setEmail(event.target.value)} />
            <input type="password" name="contraseña" className="border w-full p-2 px-3 rounded-lg" placeholder="Ingresa tu contraseña" onChange={(event) => setPassword(event.target.value)} />
          </div>
          <button className="bg-red-700 text-white p-2 px-4 font-bold hover:bg-red-900 rounded-xl" onClick={loginUser}>Acceder</button>
          <div className=" p-1 flex flex-col">
            <div className=" w-full justify-center flex flex-row gap-2">
              <label className="font-workSans text-sm font-semibold">¿Se te olvidó tu contraseña?</label>
              <Link to="/maneras-de-iniciar-sesion"><label className="text-red-500 font-workSans text-sm font-bold cursor-pointer hover:text-red-900">Más opciones de inicio</label></Link>
            </div>
            <div className=" w-full justify-center flex flex-row gap-2">
              <p className="font-workSans text-sm font-semibold">¿No tienes una cuenta?</p>
              <Link to="/registro"><p className="text-red-500 font-workSans text-sm font-bold cursor-pointer hover:text-red-900">¡Crea una aqui!</p></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

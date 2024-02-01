import React, { useState } from "react";
import inicio from "./../../assets/images/inicio.png";
import { Link } from "react-router-dom";

const Registro = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    console.log('Usuario:', username, 'Correo:', email, 'Contraseña:', password, 'Confirmar Contraseña:', confirmPassword);
  };

  const handleMoreOptions = () => {
    // Agrega la lógica para manejar la función de "Más opciones de inicio"
    console.log('Más opciones de inicio');
  };

  const handleCreateAccount = () => {
    // Agrega la lógica para manejar la función de "Crea una aquí"
    console.log('Crea una cuenta');
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100 ">
        <div className=" flex flex-col w-fit px-8 p-4 shadow-md rounded-xl items-center font-lalezar h-fit gap-2 " style={{ backgroundColor: "#D9D9D9" }}>
          <div className="flex flex-col -mt-[6rem] fixed items-center">
            <img src={inicio} className="w-[80%]" />
          </div>
          <div className="flex flex-col items-center m-6 -mb-3 p-2 pt-24">
            <h2 className="text-5xl font-semibold tracking-normal text-center uppercase">Registra tu usuario</h2>

          </div>
          <h2 className="text-lg font-semibold">Por favor llena todos los campos</h2>
          <hr className="border-gray-700 w-72" />
          {/* Agregando el icono pequeño para "Ingresa tu usuario" 
            <div className="w-8" style={{ backgroundImage: "url(url_de_tu_icono_pequeno)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <div className="w-8" style={{ backgroundImage: "url(url_de_tu_icono_pequeno)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
          */}

          <div className="w-full flex flex-row gap-2 m-2">
            <input type="text" name="nombre_usuario" className="border w-full p-2 px-3 rounded-lg" placeholder="Ingresa un nombre de usuario"/>
            <input type="email" name="correo_electronico" className="border w-full p-2 px-3 rounded-lg" placeholder="Ingresa tu correo electronico"/>
          </div>
          <div className="w-full flex flex-row gap-2 m-2">
            <input type="password" name="contraseña" className="border w-full p-2 px-3 rounded-lg" placeholder="Ingresa tu contraseña"/>
            <input type="password" name="contraseña" className="border w-full p-2 px-3 rounded-lg" placeholder="Confirma tu contraseña"/>
          </div>

          <button className="bg-red-700 text-white p-2 px-4 font-bold hover:bg-red-900 rounded-xl">Registrarse</button>
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

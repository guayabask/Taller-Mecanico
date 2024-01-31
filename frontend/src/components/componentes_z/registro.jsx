import React, { useState } from "react";
import inicio from "./../../assets/images/inicio.png";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        className="relative w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/3 h-542 p-8 shadow-md rounded-xl text-center font-lalezar"
        style={{ backgroundColor: "#D9D9D9" }}
      >
        {/* Agregando el icono grande */}
        <img src={inicio} alt="Icono Grande" className="w-260 h-260 mx-auto mb-4 rounded-full" />

        <h2 className="text-6xl font-normal mb-4 leading-16 tracking-normal text-center">REGISTRA TU USUARIO</h2>
        <h2 className="text-xl font-semibold mb-4">Por favor llena todos los campos</h2>
        <hr className="border-gray-700 my-5" />

        <div className="mb-2 flex items-center justify-center">
          {/* Agregando el icono pequeño para "Ingresa tu usuario" */}
          <div className="w-8 h-8 mr-4" style={{ backgroundImage: "url(url_de_tu_icono_pequeno)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        </div>

        <div className="mb-2 flex justify-between">
          <div className="w-50">
            <input
              type="text"
              className="border w-full py-2 px-3 rounded"
              placeholder="Crea tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-50">
            <input
              type="text"
              className="border w-full py-2 px-3 rounded"
              placeholder="Registra un correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-2 flex justify-between">
          <div className="w-50">
            <input
              type="password"
              className="border w-full py-2 px-3 rounded"
              placeholder="Crea una contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-50">
            <input
              type="password"
              className="border w-full py-2 px-3 rounded"
              placeholder="Confirma la contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          className="bg-red-700 text-white py-2 px-8 font-bold hover:bg-red-800"
          onClick={handleLogin}
        >
          Registrarse
        </button>

        <div className="mt-4 flex items-center justify-center">
          <p className="text-base font-workSans font-semibold text-black">
            ¿Ya tienes una cuenta?
          </p>
          <p onClick={handleCreateAccount} className="text-base font-workSans font-semibold text-red-500 ml-2 cursor-pointer">
            Inicia sesión aquí
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registro;

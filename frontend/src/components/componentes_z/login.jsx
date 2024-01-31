import React, { useState } from "react";
import inicio from "./../../assets/images/inicio.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log('Usuario:', username, 'Contraseña:', password);
  };

  const handleForgotPassword = () => {
    
    console.log('Olvidé mi contraseña');
  };

  const handleMoreOptions = () => {
    
    console.log('Más opciones de inicio');
  };

  const handleCreateAccount = () => {
    
    console.log('Crea una cuenta');
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div
          className="relative w-495 h-542 top-306 left-713 p-8 shadow-md rounded-xl text-center font-lalezar"
          style={{ backgroundColor: "#D9D9D9" }}
        >
          {/* Agregando el icono grande */}
          <img src={inicio} alt="Icono Grande" className="w-260 h-260 mx-auto mb-4" />

          <h2 className="text-6xl font-normal mb-4 leading-16 tracking-normal text-center">BIENVENIDO</h2>
          <h2 className="text-xl font-semibold mb-4">Ingreso al sistema</h2>
          <hr className="border-gray-700 my-5" />
          <div className="mb-4 flex items-center justify-center">
            {/* Agregando el icono pequeño para "Ingresa tu usuario" */}
            <div className="w-8 h-8 mr-4" style={{ backgroundImage: "url(url_de_tu_icono_pequeno)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <h2 className="font-workSans text-base font-semibold mr-4">
              <>
                ¿Se te olvidó tu contraseña?
              </>
            </h2>
            <p onClick={handleMoreOptions} className="text-red-500 text-base font-workSans font-semibold cursor-pointer">
              Más opciones de inicio
            </p>
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="border w-full py-2 px-3 pl-12" // Ajusta el padding para dejar espacio para el icono
              placeholder="Ingresa tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <div className="w-8 h-8 mr-4" style={{ backgroundImage: "url(url_de_tu_icono_pequeno)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
            <input
              type="password"
              className="border w-full py-2 px-3 pl-12" // Ajusta el padding para dejar espacio para el icono
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-red-700 text-white py-2 px-8 font-bold hover:bg-red-800"
            onClick={handleLogin}
          >
            Acceder
          </button>

          <div className="mt-4 flex items-center justify-center">
            <p className="text-base font-workSans font-semibold text-black">
              ¿No tienes una cuenta?
            </p>
            <p onClick={handleCreateAccount} className="text-base font-workSans font-semibold text-red-500 ml-2 cursor-pointer">
              Crea una aquí
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

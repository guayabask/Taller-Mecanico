import React, { useState } from "react";
import inicio from "./../../assets/images/inicio.png";
import { Link } from "react-router-dom";

const Casi = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleLogin = () => {
    console.log('Pregunta:', selectedQuestion, 'Respuesta:', answer);
  };

  const questions = [
    "¿Cuál es el nombre de tu mascota?",
    "¿En qué ciudad naciste?",
    "¿Nombre de tu primer profesor?",
    // Agrega más preguntas según sea necesario
  ];

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100 ">
        <div className=" flex flex-col w-fit px-8 p-4 shadow-md rounded-xl items-center font-lalezar h-fit gap-2 " style={{ backgroundColor: "#D9D9D9" }}>
          <div className="flex flex-col -mt-[6rem] fixed items-center">
            <img src={inicio} className="w-[80%]" />
          </div>
          <div className="flex flex-col items-center mb-2 p-2 pt-24">
            <h2 className="text-5xl font-semibold tracking-normal text-center uppercase mt-4">opciones de inicio</h2>

          </div>
          <h2 className="text-lg font-semibold">Escoge el metodo que desees</h2>
          <hr className="border-gray-700 w-96" />
          <div className="w-full flex flex-col items-center gap-2 m-2 bg-[#b4b4b4] rounded-2xl p-2">
            <label className="block text-left text-[#3a3a3a] text-xl font-workSans font-bold mb-2"><Link to="">Pregunta de seguridad</Link></label>
            <hr className="border-gray-700 w-96" />
            <label className="block text-left text-[#3a3a3a] text-xl font-workSans font-bold mb-2"><Link to="">Correo electronico</Link></label>
          </div>

          <label className="block text-left text-[#3a3a3a] text-sm font-workSans font-bold mb-2"><Link to="/">Regresar a inicio de sesión</Link></label>
        </div>
      </div>
    </>
  );
};

export default Casi;


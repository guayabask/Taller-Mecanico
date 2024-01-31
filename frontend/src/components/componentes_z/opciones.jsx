import React, { useState } from "react";
import inicio from "./../../assets/images/inicio.png";

const Opciones = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    console.log('Opción seleccionada:', option);
    // Puedes realizar acciones adicionales según la opción seleccionada
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        className="relative w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/2 p-8 shadow-md rounded-xl text-center font-lalezar"
        style={{ backgroundColor: "#D9D9D9" }}
      >
        {/* Agregando el icono grande */}
        <img src={inicio} alt="Icono Grande" className="w-260 h-260 mx-auto mb-4 rounded-full" />

        <h2 className="text-6xl font-normal mb-4 leading-16 tracking-normal text-center">OPCIONES DE INICIO</h2>
        <h2 className="text-xl font-semibold mb-4">Escoge el metodo que desees</h2>
        <hr className="border-gray-700 my-5" />

        <div className="mb-4 flex flex-col gap-4 items-center">
          <button
            className="w-64 h-16 bg-gray-300 rounded-md text-base font-Poppins font-semibold border border-gray-400"
            onClick={() => handleOptionSelect("Opción 1")}
          >
            Pregunta de Seguridad
          </button>
          <button
            className="w-64 h-16 bg-gray-300 rounded-md text-base font-Poppins font-semibold border border-gray-400"
            onClick={() => handleOptionSelect("Opción 2")}
          >
            Codigo al correo electronico
          </button>
        </div>
      </div>
    </div>
  );
};

export default Opciones;

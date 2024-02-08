import React, { useState } from "react";
import inicio from "./../../assets/images/inicio.png";
import { Link } from "react-router-dom";

const Pregunta = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    console.log('Opción seleccionada:', option);
    // Puedes realizar acciones adicionales según la opción seleccionada
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100 ">
        <div className=" flex flex-col w-fit px-8 p-4 shadow-md rounded-xl items-center font-lalezar h-fit gap-2 " style={{ backgroundColor: "#D9D9D9" }}>
          <div className="flex flex-col -mt-[6rem] fixed items-center">
            <img src={inicio} className="w-[80%]" />
          </div>
          <div className="flex flex-col items-center mb-2 p-2 pt-24">
            <h2 className="text-5xl font-semibold tracking-normal text-center uppercase mt-4">¡Ya casi!</h2>

          </div>
          <h2 className="text-lg font-semibold">Responde una pregunta en caso de olvidar tu contraseña</h2>
          <hr className="border-gray-700 w-96" />

          <div className="w-full flex flex-col gap-2 m-2">
          <label className="block text-left text-base font-workSans font-semibold mb-2">Escoge tu pregunta:</label>
            <select class="form-select" aria-label="Default select example" className="w-full p-2 rounded-lg">
              <option selected>Selecciona la pregunta</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="w-full flex flex-row gap-2 m-2">
            <input type="text" name="pregunta" className="border w-full p-2 px-3 rounded-lg" placeholder="Añade tu respuesta"/>
          </div>


          <button className="bg-red-700 text-white p-2 px-4 font-bold hover:bg-red-900 rounded-xl">Iniciar sesión</button>
          <div className=" p-1 flex flex-col">

          </div>

        </div>
      </div>
    </>
  );
};

export default Pregunta;

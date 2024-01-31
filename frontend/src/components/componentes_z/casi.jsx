import React, { useState } from "react";
import inicio from "./../../assets/images/inicio.png";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        className="relative w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/2 p-8 shadow-md rounded-xl text-center font-lalezar"
        style={{ backgroundColor: "#D9D9D9" }}
      >
        {/* Agregando el icono grande */}
        <img src={inicio} alt="Icono Grande" className="w-260 h-260 mx-auto mb-4 rounded-full" />

        <h2 className="text-6xl font-normal mb-4 leading-16 tracking-normal text-center">¡YA CASI!</h2>
        <h2 className="text-xl font-semibold mb-4">Responde una pregunta en caso de olvidar tu contraseña</h2>
        <hr className="border-gray-700 my-5" />

        <div className="mb-4">
          <label className="block text-left text-base font-workSans font-semibold mb-2">Escoge tu pregunta:</label>
          <select
            className="border w-full py-2 px-3 rounded"
            value={selectedQuestion}
            onChange={(e) => setSelectedQuestion(e.target.value)}
          >
            <option value="" disabled>Selecciona una pregunta</option>
            {questions.map((question, index) => (
              <option key={index} value={question}>{question}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="border w-full py-2 px-3 pl-12 rounded"
            placeholder="Registrar tu respuesta"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>

        <button
          className="bg-red-700 text-white py-2 px-8 font-bold hover:bg-red-800 rounded"
          onClick={handleLogin}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default Casi;


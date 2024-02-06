import React, { useState } from "react";
import inicio from "./../../assets/images/inicio.png";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [verificationToken, setVerificationToken] = useState("");
  const navigate = useNavigate();

  const loginUser = () => {
    axios.post(`https://localhost:3000/api/v1/auth/login`, {
      correo_electronico: email,
      contraseña: password
    })
      .then(response => {
        const { token, role, userId } = response.data; // Asumiendo que obtienes el ID del usuario al iniciar sesión

        setToken(token); // Almacena el token en el estado
        localStorage.setItem('userRole', role); // Guarda el rol en el almacenamiento local

        if (role === "mecanico") {
          localStorage.setItem('userId', userId); // Guarda el ID del mecánico si el rol es "mecanico"
        }

        if (token) {
          setShowVerificationModal(true); // Muestra la ventana de verificación
          axios.post("https://localhost:3000/api/v1/correo", {
            correo: email,
          });
        } else {
          handleRoleRedirect(role); // Redirige según el rol
        }
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
      default:
        alert("Rol desconocido");
    }
  };

  const handleSubmitCodigo = async () => {
    // Validar que el código sea correcto
    try {
      const codigoValido = await axios.post(
        `https://localhost:3000/api/v1/correo/validar`,
        {
          codigo: verificationToken,
          correo: email,
        }
      );
      if (codigoValido.data) {
        Cookies.set("token", token, { expires: 1 / 8 }); // 3 horas de duración
        handleRoleRedirect(localStorage.getItem("userRole")); // Redirige según el rol almacenado
      }
    } catch (error) {
      console.error("Error al validar el código:", error);
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

        </div>
      </div>

      {showVerificationModal && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-semibold mb-4">Ingresa el código de verificación</h2>
            <input type="text" value={verificationToken} onChange={(e) => setVerificationToken(e.target.value)} className="border border-gray-400 rounded-lg px-4 py-2 mb-4" />
            <button onClick={handleSubmitCodigo} className="bg-red-700 text-white p-2 px-4 font-bold hover:bg-red-900 rounded-xl">Verificar</button>
          </div>
        </div>
      )}
    </>
  );
}

import React from "react";
import Inicio from "./../componentes_marco/inicio.png";

export default function Perfil() {
    const userData = {
        usuario: "Jonh200",
        nombre: "John",
        apellido: "Doe",
        correo: "john.doe@example.com",
        hobbies: ["Viajar", "Leer", "Deportes"]
    };

    return (
        <div className="flex">
            <div className="w-64 h-screen bg-red-900 p-10">
                <p className="text-white text-center text-xl mb-5">Taller Mécanico</p>
                <img
                    src={Inicio}
                    className="mx-auto mb-5 w-48"
                />
                <div className="flex flex-col">
                    <button className="text-white px-4 py-5 mb-3 text-xl" Link to ="/">Mi Perfil</button>
                    <button className="text-white px-4 py-5 mb-3 text-xl" Link to ="/">Nosotros</button>
                    <button className="text-white px-4 py-5 mb-3 text-xl" Link to ="/">Contactanos</button>
                </div>
            </div>


            <div className="flex-1 p-10">
                <div className="bg-white rounded-md shadow-md p-6">
                    <h2 className="text-3xl font-bold mb-4 text-center">Perfil de Usuario</h2>
                    <img
                        src={Inicio}
                        className="mx-auto mb-5 w-48"
                    />
                    <p className="mb-2 text-center"><strong>Nombre de usuario:</strong> {userData.usuario}</p>
                    <p className="mb-2 text-center"><strong>Nombre real:</strong> {userData.nombre} {userData.apellido}</p>
                    <p className="mb-2 text-center"><strong>Correo electrónico:</strong> {userData.correo}</p>
                    <p className="mb-2 text-center"><strong>Hobbies:</strong> {userData.hobbies.join(", ")}</p>
                </div>
            </div>
        </div>

    );
}

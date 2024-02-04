import React from "react";
import Inicio from "./../componentes_marco/inicio.png";

export default function Perfil() {
    
    

    return (
        <div className="flex">
            <div className="   p-10">
                <div className="bg-white flex flex-col rounded-md shadow-md p-6 items-center justify-center">
                    <h2 className="text-3xl font-bold mb-4 text-center">Perfil de Usuario</h2>
                    <img
                        src={Inicio}
                        className="mx-auto mb-5 w-48"
                    />
                    <p className="mb-2 text-center"><strong>Nombre de usuario:</strong> {userData.usuario}</p>
                    <p className="mb-2 text-center"><strong>Nombre real:</strong> {userData.nombre} {userData.apellido}</p>
                    <p className="mb-2 text-center"><strong>Correo electrónico:</strong> {userData.correo}</p>
                    <p className="mb-2 text-center"><strong>Hobbies:</strong> {userData.hobbies.join(", ")}</p>
                    <button className="w-fit bg-red-800 text-white rounded-lg p-2">Editar información</button>
                </div>
                
            </div>
        </div>

    );
}

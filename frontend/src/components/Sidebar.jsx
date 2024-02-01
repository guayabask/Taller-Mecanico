import React from "react";
import Inicio from './componentes_marco/inicio.png';

export default function Sidebar() {
    return (
        <div className="flex absolute">
            <div className="w-fit h-screen bg-red-950 p-8 gap-4 flex items-start">
                <div className="flex flex-col items-center justify-center">
                    <label className="text-white text-center text-3xl font-bold mb-5">Taller Mécanico</label>
                    <img src={Inicio}
                        className="mx-auto mb-5 w-[80%]" />
                    <div className="flex flex-col">
                        <button className="text-white px-4 py-5 mb-3 text-xl font-semibold">Mi Perfil</button>
                        <button className="text-white px-4 py-5 mb-3 text-xl font-semibold">Nosotros</button>
                        <button className="text-white px-4 py-5 mb-3 text-xl font-semibold">Contactanos</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
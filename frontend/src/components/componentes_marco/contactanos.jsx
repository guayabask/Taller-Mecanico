import React from "react";
import Inicio from "./../componentes_marco/inicio.png";

export default function Contactanos() {
    const empresaInfo = {
        nombre: "Taller Mécanico",
        directivo: "Juan Pérez",
        direccion: "123 Calle Principal, Ciudad XYZ",
        telefono: "+1 123 456 7890",
    };

    return (
        <div className="flex">
            <div className="w-64 h-screen bg-red-900 p-10">
                <p className="text-white text-center text-xl mb-5">{empresaInfo.nombre}</p>
                <img src={Inicio} className="mx-auto mb-5 w-48"/>
                <div className="flex flex-col">
                    <button className="text-white px-4 py-5 mb-3 text-xl"Link to ="/">Mi Perfil</button>
                    <button className="text-white px-4 py-5 mb-3 text-xl"Link to ="/" >Nosotros</button>
                    <button className="text-white px-4 py-5 mb-3 text-xl"Link to ="/">Contactanos</button>
                </div>
            </div>
            <div className="flex-grow p-10">
                <h1 className="text-3xl font-semibold mb-5">Contacta con nosotros</h1>
                <p>
                    ¡Estamos encantados de escucharte! Puedes contactarnos a través del siguiente formulario o visitarnos en nuestra dirección:
                </p>
                <div className="mt-4">
                    <p>
                        <strong>Nombre de la empresa:</strong> {empresaInfo.nombre}
                    </p>
                    <p>
                        <strong>Directivo:</strong> {empresaInfo.directivo}
                    </p>
                    <p>
                        <strong>Dirección:</strong> {empresaInfo.direccion}
                    </p>
                    <p>
                        <strong>Número de Teléfono:</strong> {empresaInfo.telefono}
                    </p>
                </div>
                <div className="mt-8">
                    <p>Síguenos en redes sociales:</p>
                    <span className="mx-2">•</span>
                    <a href="#" className="text-blue-500 hover:underline">Facebook</a>
                    <span className="mx-2">•</span>
                    <a href="#" className="text-blue-500 hover:underline">Twitter</a>
                    <span className="mx-2">•</span>
                    <a href="#" className="text-blue-500 hover:underline">Instagram</a>
                </div>
            </div>
        </div>
    );
}

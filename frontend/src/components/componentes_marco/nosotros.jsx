import React from "react";
import Inicio from './../componentes_marco/inicio.png';
import Mision from './../componentes_marco/mision.png';
import Vision from './../componentes_marco/vision.png';

export default function Nosotros() {
    return (
        <div className="flex">
            

            <div className="w-3/4 p-10">
                <div className="rounded-lg bg-gray-200 mb-2 text-normal p-4">
                    <h1 className="text-xl font-bold mb-4">Sobre Nosotros</h1>
                    <p>
                        Bienvenidos a Nuestra pagina "Nosotros". En esta empresa somo los mejores
                        reparando carros de cualquierer tipo de vehuiculo
                    </p>
                    <img src={Inicio}className="mx-auto mb-5 w-10"/>
                </div>
                <div className="rounded-lg bg-gray-200 mb-2 text-normal p-4">
                    <h1 className="text-xl font-bold mb-4">Mision</h1>
                    <p>
                    Nuestra misión en Taller Mercanido es proporcionar servicios de reparación
                    automotriz de alta calidad,garantizando
                    la satisfacción y seguridad de nuestros clientes.
                    </p>
                    <img
                        src={Mision}//imagen del Nosotros
                        className="mx-auto mb-5 w-10"
                    />
                </div>
                <div className="rounded-lg bg-gray-200 mb-2 text-normal p-4">
                    <h1 className="text-xl font-bold mb-4">Vision</h1>
                    <p>
                    Ser reconocidos como el taller mecánico líder en innovación y calidad,
                    brindando soluciones eficientes y confiables para nuestros clientes.
                    </p>
                    <img
                        src={Vision}//imagen del Nosotros
                        className="mx-auto mb-5 w-10"
                    />
                </div>
            </div>
        </div>
    )
}
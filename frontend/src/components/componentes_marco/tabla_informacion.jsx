import React from "react";
import inicio from './../componentes_marco/inicio.png'

export default function Inicio() {
    return (<>
        <div className="flex">
            {/* Sidebar */}
            <div className="w-64px h-screen bg-red-900 p-10 b-full">
                <p className="text-white text-center text-xl mb-5">Taller Mécanico</p>
                <img
                    src={inicio}
                    className="mx-auto mb-5 w-48"
                />
                <div className="flex flex-col">
                    <button className="text-white px-4 py-5 mb-3 text-xl" Link to ="/">Mi Perfil</button>
                    <button className="text-white px-4 py-5 mb-3 text-xl" Link to ="/">Nosotros</button>
                    <button className="text-white px-4 py-5 mb-3 text-xl" Link to ="/">Contactanos</button>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="w-3/4 p-20">
                <div className="rounded-lg bg-gray-200 p-10 mb-3 text-xl">
                    <p>Seguimiento de su Vehículo por Parte del Mecánico</p>
                    <p className="text-xs pb-2 border-b">En este apartado usted proda estar al tanto de su vehiculo</p>
                    <table className="w-full border-collapse mt-4 table-auto text-sm">
                        <thead className="bg-red-900 text-white">
                            <tr>
                                <th>Id</th>
                                <th>Foto</th>
                                <th>Contacto</th>
                                <th>Descripcion</th>
                                <th>Mecanico_encargado</th>
                                <th>$ x hora</th>
                                <th>Horas</th>
                                <th>Estatus</th>
                                <th>Costos</th>
                                <th>Material utilizado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Imagen</td>
                                <td>Nombre</td>
                                <td>Descripcion</td>
                                <td>Mecanico 1</td>
                                <td>10:00 AM</td>
                                <td>2</td>
                                <td>En Proceso</td>
                                <td>$ 1000</td>
                                <td>Piezas</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>)
}
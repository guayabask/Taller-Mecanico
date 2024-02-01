import React from "react";

export default function TablaInformacionUsuario() {
    return (<div className="p-8">

        {/*Nesesito que jalen de la api la informacion de la tabla esta es el api:

        localhost:3000/api/v1/registro-de-trabajos

        lo mismo de toda la vida un mapeo, pero el mapeo debe funcionar a base un codigo de busqueda
        el codigo de busqueda sera el id, donde se hara la validacion, aqui arriba hay un input y un boton de busqueda
        cuando se busque se muestran los datos de sus avances, pero tampocos muchos datos.
    */}
    <div className="w-full flex flex-row justify-end items-center gap-2 m-2">
        <input placeholder="Escriba aqui el folio de su vehiculo" className="w-[20rem] p-1 h-fit rounded-lg border-2"/>
        <button className="bg-blue-600 p-2 rounded-lg text-white">Buscar mi vehiculo</button>
    </div>

        <div className="w-full m-2">
            <div className="rounded-lg bg-gray-200 mb-2 text-normal p-4">
                <div className="flex flex-col gap-1">
                    <label className="text-xl font-bold ">Seguimiento de su vehículo por parte del Mecánico</label>
                    <p className="text-sm border-b">En este apartado usted proda estar al tanto de su vehiculo</p>
                </div>

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
    </div>)
}
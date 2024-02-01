import React, { useEffect, useState } from "react";
import { FaRegSquarePlus } from "react-icons/fa6";

export default function TablaInformacionAdmin() {
    const [codigoBusqueda, setCodigoBusqueda] = useState("");
    const [datosTabla, setDatosTabla] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/registro-de-trabajos?id=${codigoBusqueda}`)
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setDatosTabla(data);
                } else {
                    console.error("La respuesta de la API no es un array:", data);
                }
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [codigoBusqueda]);

    const handleBusquedaClick = () => {
        setDatosTabla([]);
    }

    return (<div className="p-8">

        {/*Nesesito que jalen de la api la informacion de la tabla esta es el api:

        localhost:3000/api/v1/registro-de-trabajos

        lo mismo de toda la vida un mapeo, pero el mapeo debe funcionar a base un codigo de busqueda
        el codigo de busqueda sera el id, donde se hara la validacion, aqui arriba hay un input y un boton de busqueda
        cuando se busque se muestran los datos de sus avances, pero tampocos muchos datos.
    */}

        <div className="flex flex-row items-center justify-between ">
            <div className="w-full bg-green-700 flex flex-row justify-start items-center gap-2 m-2 rounded-lg cursor-pointer">
                <FaRegSquarePlus className="ml-4 text-white cursor-pointer" /><label className=" p-2 rounded-lg text-white cursor-pointer">Añadir registro </label>
            </div>

            <div className="w-full  flex flex-row justify-start items-center gap-2 m-2">
                <input placeholder="Escriba aqui el folio del vehiculo" className="w-[25rem] p-1 h-fit rounded-lg border-2 m-2"
                    value={codigoBusqueda}
                    onChange={(e) => setCodigoBusqueda(e.target.value)}
                />
                <button className="bg-blue-600 p-2 rounded-lg text-white "
                    onClick={handleBusquedaClick}
                >Buscar</button>
            </div>
        </div>


        <div className="w-full m-2">
            <div className="rounded-lg bg-gray-200 mb-2 text-normal p-4">
                <div className="flex flex-col gap-1">
                    <label className="text-xl font-bold ">Seguimiento de vehiculos</label>
                    <p className="text-sm border-b">En este apartado usted proda estar al tanto de los vehiculos que este trabajando</p>
                </div>

                <table className="w-full border-collapse mt-4 table-auto text-sm">
                    <thead className="bg-red-900 text-white">
                        <tr>
                            <th>Id</th>
                            <th>nombre_cliente</th>
                            <th>telefono</th>
                            <th>correo</th>
                            <th>modelo</th>
                            <th>placas</th>
                            <th>año</th>
                            <th>color</th>
                            <th>descripcion</th>
                            <th>cantidad horas</th>
                            <th>precio material</th>
                            <th>precio fijo</th>
                            <th>total</th>
                            <th>inicio</th>
                            <th>finalizacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosTabla.map((registro) => (
                            <tr key={registro.id}></tr>,
                            <tr key={registro.nombre_cliente}></tr>,
                            <tr key={registro.telefono_celular}></tr>,
                            <tr key={registro.correo_electronico}></tr>,
                            <tr key={registro.modelo_vehiculo}></tr>,
                            <tr key={registro.placas}></tr>,
                            <tr key={registro.año_vehiculo}></tr>,
                            <tr key={registro.color_vehiculo}></tr>,
                            <tr key={registro.descripcion_de_trabajo}></tr>,
                            <tr key={registro.cantidad_de_horas}></tr>,
                            <tr key={registro.precio_de_material}></tr>,
                            <tr key={registro.precio_fijo}></tr>,
                            <tr key={registro.costo_total}></tr>,
                            <tr key={registro.tipo}></tr>,
                            <tr key={registro.estatus}></tr>,
                            <tr key={registro.precio_hora}></tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}
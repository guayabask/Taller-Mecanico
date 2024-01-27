
import React from "react"

export default function PantallaLogin() {
    return (<>
        <div className="w-[fit] h-[fit] flex flex-col px-[17rem] pt-[6rem] ">
            <label className="text-black text-2xl font-semibold">Bienvenido, Nombre_Usuario</label>
            <div className="w-full  flex flex-row justify-between items-center mt-6">
                <label className="text-white bg-[#696969] w-[30rem] rounded-lg px-3">Buscador</label>
                <label className="text-white bg-green-600 rounded-lg px-3 font-bold text-lg w-fit">Añadir Registros</label>
            </div>
            <div className="mt-6">
                <table >
                    <thead>
                        <tr className="bg-red-950 text-white ">
                            <th className="p-2">Nombre</th>
                            <th>Edad</th>
                            <th>País</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Juan</td>
                            <td>25</td>
                            <td>Argentina</td>
                        </tr>
                        <tr>
                            <td>María</td>
                            <td>30</td>
                            <td>España</td>
                        </tr>
                        <tr>
                            <td>Carlos</td>
                            <td>22</td>
                            <td>México</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}
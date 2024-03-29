import React from "react";
import Inicio from '../componentes_marco/inicio.png';
import { Link, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function SidebarAdmin() {
    const navigate = useNavigate();
    const cerrar = () => {
        Cookies.remove("token");
        localStorage.removeItem("userRoles");
        navigate("/");
    }
    return (
        <div className="flex absolute">
            <div className="w-[20rem] h-screen bg-red-950 flex flex-col gap-6 items-center justify-between fixed">
                <div className="w-full">
                    <div className="flex flex-col items-center gap-4">
                        <label className="text-white text-center justify-center text-xl pt-6 font-bold mb-2 uppercase">Dashboard administrador</label>
                        <img src={Inicio} className="mx-auto mb-5 w-[80%]" />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <button className="text-white text-lg font-semibold hover:bg-red-800 w-full p-4"><Link to="/administrador">Gestión de trabajos</Link></button>
                        <button className="text-white text-lg font-semibold hover:bg-red-800 w-full p-4"><Link to="/administrar-usuarios">Gestión de usuarios</Link></button>
                    </div>
                </div>

                <div className="w-full">
                    <button className="text-white text-lg font-semibold hover:bg-red-800 w-full p-4" onClick={cerrar}>Cerrar sesión</button>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}
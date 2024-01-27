
import React from "react";
import { Outlet } from "react-router-dom";


export default function NavbarAdmin() {
    return (<>
        <div className="w-full h-full flex flex-row absolute sombra-palabras">
            <div className="w-fit h-full flex flex-col items-center text-black bg-[#561C1C] bg-opacity-70">
                <div className=" px-[3rem] h-[7.4%] flex items-center">
                    
                    <label className="text-white text-2xl uppercase font-semibold border-[#e5e5e5] border-b-2">Dashboard</label>
                    
                </div>
                <div className=" w-full flex flex-col items-center gap-2 p-4">
                    <label className="text-[#e8e8e8] text-xl uppercase ">Perfil</label>
                    <img src={"src/assets/images/icono_dashboard.png"} alt="Foto de perfil del usuario" className="w-[10rem]"/>
                </div>
            </div>

            <div className="w-full h-fit bg-[#561C1C] flex flex-row items-center p-4 gap-4">
                <label className="text-3xl text-white font-bold uppercase">Taller Mecánico</label>
                <label className="text-xl text-[#B1B1B1] font-semibold uppercase"> / palabra clave</label>
            </div>
        </div>


        <Outlet />
    </>)
}
import React from "react"
import Modal from "../../components/componentes_olga/modal";
import { openModal } from "../../components/componentes_olga/modal";
import { GrAdd } from "react-icons/gr";
import { BsPencilSquare } from "react-icons/bs";
import Formulario from "../../components/componentes_olga/form_modal";
import { FaRegTrashCan } from "react-icons/fa6";
import { LiaEyeSolid } from "react-icons/lia";

const DashEjemplo = () => {
  return (
    <>
      <Modal id="crear-modal">
        <h1 className="text-2xl font-bold mb-7 text-black">
          CREAR REGISTRO
        </h1>
        <Formulario />
      </Modal>
      <Modal id="Edit-modal">
        <h1 className="text-2xl font-bold mb-7 text-black">
          EDITAR REGISTRO
        </h1>
        <Formulario />
      </Modal>

      <div className="w-full h-[70vh] flex flex-col items-center justify-center pt-[5rem]">
        <h1 className=" w-[70%] text-black mb-10 font-bold text-2xl">Bienvenido nombre_administrador</h1>


        <button onClick={() => openModal("crear-modal")} className="bg-lime-500 py-2 px-4 rounded-2xl text-xl text-white flex ml-auto mr-[5%]">
          <GrAdd className="mr-2 text-2xl" /> AÑADIR REGISTROS
        </button>


        <div className="flex items-center mb-5 justify-between w-[70%]">
          <input
            type="text"
            placeholder="buscar..."
            className="px-2 py-1 border border-gray-300 rounded-md mr-4"
          />
        </div>
        <br />

        <table className="w-full max-w-[80%] mr-[5%] bg-white border border-black rounded-md overflow-hidden shadow-md ml-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2">Id</th>
              <th className="py-2">Contacto</th>
              <th className="py-2">Descripcion</th>
              <th className="py-2">Mecanico_encargado</th>
              <th className="py-2">$ x hora</th>
              <th className="py-2">Horas</th>
              <th className="py-2">Estatus</th>
              <th className="py-2">Costos</th>
              <th className="py-2">Material utilizado</th>
              <th className="py-2">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 text-center"></td>
              <td className="py-2 text-center">Nombre</td>
              <td className="py-2 text-center">Descripcion</td>
              <td className="py-2 text-center">Mecanico 1</td>
              <td className="py-2 text-center">10:00 AM</td>
              <td className="py-2 text-center">2</td>
              <td className="py-2 text-center">En  Proceso</td>
              <td className="py-2 text-center">$ 1000</td>
              <td className="py-2 text-center">Piezas</td>
              <td className="py-2 flex items-center">
                <LiaEyeSolid className="text-2xl cursor-pointer ml-3" />
                <BsPencilSquare
                  className="text-2xl cursor-pointer ml-6"
                  onClick={() => openModal("Edit-modal")}
                />
                <FaRegTrashCan className="text-2xl cursor-pointer ml-5" />
              </td>

            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DashEjemplo
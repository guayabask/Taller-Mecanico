import React from "react"
import Modal from "../../components/componentes_olga/modal";
import { openModal } from "../../components/componentes_olga/modal";
import { GrAdd } from "react-icons/gr";
import { BsPencilSquare } from "react-icons/bs";

const DashEjemplo = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">

        <BsPencilSquare className="text-6xl cursor-pointer mr-3" onClick={() => openModal("Edit-modal")} />

        <button onClick={() => openModal("product-modal")} className="bg-lime-500 py-2 px-4 rounded-2xl text-xl text-white flex items-center">
          <GrAdd className="mr-2 text-2xl" /> AÑADIR REGISTROS
        </button>

      </div>

      <Modal id="Edit-modal">
        <h1 className="text-2xl font-semibold mb-7 text-white">Login</h1>
        <form className="w-[450px]">
          <div className="mb-5">
            <input
              className="w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-5">
            <input
              className="w-full py-2 px-4 rounded bg-[#4b5563] text-white  focus:outline-none"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="w-full text-white py-2 px-4 rounded text-[16px] bg-[#1c64f2]">
            Login to your account
          </button>
        </form>
      </Modal>

      <Modal id="product-modal">
        <h1 className="text-2xl font-bold mb-7 text-black">
          Crear Registro
        </h1>
        <form className="w-[1024px]">
          <div className="mb-5 flex items-center justify-between gap-5">
            <label className="text-xl font-semibold mb-7 text-black">Nombre dueño:</label>
            <input
              className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none"
              type="text"
              placeholder="Name"
            />
            <label className="text-xl font-semibold mb-7 text-black">Contacto:</label>
            <input
              className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none"
              type="number"
              placeholder="contacto"
            />
          </div>
          <div className="mb-5 flex items-center justify-between gap-5">
            <label className="text-xl font-semibold mb-7 text-black">Mecánico a cargo:</label>
            <select id="countries" className="py-2 px-2 rounded-xl bg-white text-black focus:outline-none text-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="seleccionar">
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
            <label className="text-xl font-semibold mb-7 text-black">Nombre dueño:</label>
            <input
              className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none"
              type="text"
              placeholder="Product Name"
            />
          </div>
          <div className="mb-5 flex items-center justify-between gap-5">
            <label className="text-xl font-semibold mb-7 text-black">Nombre dueño:</label>
            <input
              className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none"
              type="text"
              placeholder="Product Name"
            />
            <label className="text-xl font-semibold mb-7 text-black">Nombre dueño:</label>
            <input
              className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none"
              type="text"
              placeholder="Product Name"
            />
          </div>
          <div className="mb-5 flex items-center justify-between gap-5">
            <label className="text-xl font-semibold mb-7 text-black">Nombre dueño:</label>
            <input
              className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none"
              type="text"
              placeholder="Product Name"
            />
            <label className="text-xl font-semibold mb-7 text-black">Nombre dueño:</label>
            <input
              className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none"
              type="text"
              placeholder="Product Name"
            />
          </div>

          <button className=" text-white py-2 px-4 rounded text-[16px] bg-[#1c64f2]">
            Add a Product
          </button>
        </form>
      </Modal>
    </>
  );
}

export default DashEjemplo
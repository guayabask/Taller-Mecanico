import React from "react";


export default function Formulario() {
    return (
        
        <div>
            <form className=" w-full max-w-[1000px] p-6 bg-gray-200  rounded-xl shadow-md">
                <div className="mb-5 flex items-center justify-between gap-5">
                    <label className="text-xl font-semibold mb-7 text-black whitespace-nowrap">Nombre dueño:</label>
                    <input className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none whitespace-nowrap"
                        type="text"
                        placeholder="Name"
                        link= "/"
                    />
                    <label className="text-xl font-semibold mb-7 text-black whitespace-nowrap">Contacto:</label>
                    <input
                        className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none whitespace-nowrap"
                        type="number"
                        placeholder="contacto"
                        link= "/"
                    />
                </div>
                <div className="mb-5 flex items-center justify-between gap-5">
                    <label className="text-xl font-semibold mb-7 text-black whitespace-nowrap">Correo:</label>
                    <input
                        className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none whitespace-nowrap"
                        type="email"
                        placeholder="dev2@gmail.com"
                        link= "/"
                    />
                    <label className="text-xl font-semibold mb-7 text-black whitespace-nowrap">Mecánico a cargo:</label>
                    <select id="countries" className="py-2 px-2 rounded-xl bg-white text-gray-400 focus:outline-none text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 whitespace-nowrap"
                    >
                        <option>Seleccionar</option>
                        <option link= "/" className="text-black">United States</option>
                        <option link= "/" className="text-black">Canada</option>
                        <option link= "/" className="text-black">France</option>
                        <option link= "/" className="text-black">Germany</option>
                    </select>
                </div>
                <div className="mb-5 flex items-center justify-between gap-5">
                    <label className="text-xl font-semibold mb-7 text-black whitespace-nowrap">horas:</label>
                    <input
                        className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none whitespace-nowrap"
                        type="number"
                        placeholder="0"
                        link= "/"
                    />
                    <label className="text-xl font-semibold mb-7 text-black whitespace-nowrap">Estatus:</label>
                    <select id="countries" className="py-2 px-2 rounded-xl bg-white text-gray-400 focus:outline-none text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 whitespace-nowrap"
                    >
                        <option>Seleccionar</option>
                        <option link= "/" className="text-black">United States</option>
                        <option link= "/" className="text-black">Canada</option>
                        <option link= "/" className="text-black">France</option>
                        <option link= "/" className="text-black">Germany</option>
                    </select>
                </div>
                <div className="mb-5 flex items-center justify-between gap-5">
                    <label className="text-xl font-semibold mb-7 text-black whitespace-nowrap">Material utilizado / piezas:</label>
                    <textarea
                        className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none resize-none"
                        placeholder="Materiales con los que se trabajó"
                        rows={4}
                        link= "/"
                    />
                    <label className="text-xl font-semibold mb-7 text-black whitespace-nowrap">Precio material:</label>
                    <input
                        className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none whitespace-nowrap"
                        type="number"
                        placeholder="$"
                        link= "/"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-black">Información adicional:</h2>
                </div>
                <br />
                <div className="mb-5 flex items-center justify-between gap-5">
                    <label className="text-xl font-semibold mb-7 text-black whitespace-nowrap">vehículo:</label>
                    <input
                        className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none whitespace-nowrap"
                        type="text"
                        placeholder="Volkswagen"
                        link= "/"
                    />
                    <label className="text-xl font-semibold mb-7 text-black whitespace-nowrap">Modelo:</label>
                    <input
                        className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none whitespace-nowrap"
                        type="text"
                        placeholder="Jetta"
                        link= "/"
                    />
                    <label className="text-xl font-semibold mb-7 text-black whitespace-nowrap">Color:</label>
                    <input
                        className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none whitespace-nowrap"
                        type="text"
                        placeholder="Negro"
                        link= "/"
                    />
                    <label className="text-xl font-semibold mb-7 text-black whitespace-nowrap">Año:</label>
                    <input
                        className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none whitespace-nowrap"
                        type="text"
                        placeholder="2022"
                        link= "/"
                    />
                    <label className="text-xl font-semibold mb-7 text-black whitespace-nowrap">Placas:</label>
                    <input
                        className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none whitespace-nowrap"
                        type="text"
                        placeholder="A00-AAA"
                        link= "/"
                    />
                </div>
                <div className="mb-5 flex items-center justify-between gap-5">
                    <label className="text-xl font-semibold mb-7 text-black whitespace-nowrap">Tipo:</label>
                    <select id="countries" className="py-2 px-2 rounded-xl bg-white text-gray-400 focus:outline-none text-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 whitespace-nowrap"
                    >
                        <option>Seleccionar</option>
                        <option link= "/" className="text-black">United States</option>
                        <option link= "/" className="text-black">Canada</option>
                        <option link= "/" className="text-black">France</option>
                        <option link= "/" className="text-black">Germany</option>
                    </select>
                    <button className="bg-red-700  rounded-full text-white py-2 px-2">Finalizar</button>
                </div>
                <div className="mb-5 flex items-center justify-between gap-5">
                    <label className="text-xl font-semibold mb-7 text-black">Descripción:</label>
                    <textarea
                        className="w-full py-2 px-2 rounded-xl bg-white text-black focus:outline-none resize-none"
                        placeholder="Añadir descripción del problema"
                        rows={4}
                        link= "/"
                    />
                </div>
                <div className="flex justify-center">
                    <button className="text-white py-3 px-5 rounded text-[20px] bg-[#ce1cf2]">
                        Confirmar
                    </button>
                </div>
            </form>
        </div>
    )
}
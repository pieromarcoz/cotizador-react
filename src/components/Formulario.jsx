import { marcas, years, planes } from "../constants"
import { Fragment, useContext } from "react"
import CotizadorContext from "../context/CotizadorProvider"

function Formulario() {
    const { hola } = useContext(CotizadorContext)
    console.log(hola);
  return (
    <>
        <form action="">
            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
                <select name=",arcar" id="" className="w-full p-3 bg-white border border-gray-200">
                    <option value="">--Selecciona Marca --</option>
                    {marcas.map(marca => (
                        <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
                <select name=",arcar" id="" className="w-full p-3 bg-white border border-gray-200">
                    <option value="">--Selecciona Año--</option>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label htmlFor="" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
                <div className="flex gap-3 items-center">
                    {planes.map(plan =>(
                        <Fragment key={plan.id}>
                            <label htmlFor="">{plan.nombre}</label>
                            <input type="radio" name="plan" value={plan.id}/>
                        </Fragment>
                    ))}
                </div>
            </div>
            <input type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 font-bold uppercase" value={'Cotizar'}/>
        </form>
    </>
  )
}

export default Formulario
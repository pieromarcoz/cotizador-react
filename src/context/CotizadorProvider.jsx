import { createContext } from "react";

const CotizadorContext = createContext()
const CotizadorProvider = ({children}) => {
    const hola = "HOla"

    return(
        <CotizadorContext.Provider value={{
            hola
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext 
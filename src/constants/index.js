export const marcas = [
    { id: 1, nombre: "Europeo"},
    { id: 2, nombre: "Americano"},
    { id: 3, nombre: "Asìatico"},
]

const yearmax = new Date().getFullYear()
export const years = Array.from(new Array(20), (valor, index) => yearmax - index);

export const planes = [
    { id: 1, nombre: "Bàsico"},
    { id: 2, nombre: "Completo"},
    
]

import datos from '../data/data_2'

const pedirDatos_2 = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(datos)
        }, 2000);
    } )
} 

export default pedirDatos_2
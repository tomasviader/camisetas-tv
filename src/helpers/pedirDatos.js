import stock from '../data/data'

const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 2000);
    } )
} 

export default pedirDatos
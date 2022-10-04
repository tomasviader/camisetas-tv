import { addDoc, collection, writeBatch } from "firebase/firestore"
import Swal from "sweetalert2"
import { db } from "../../firebase/config"
import useForm from "../../hooks/useForm"

const FormAddProduct = () => {

    const terminarAdd = (nombre) => {
        Swal.fire({
            title: `Se registro con exito el producto "${nombre}" en la base de datos`,
            icon: 'sucess',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Genial!'
        })
    }

    const handleSubmit =  (e) => {
        e.preventDefault()
        const producto = {
            nombre: values.nombre,
            precio: values.precio,
            stock: values.stock,
            category: values.category
        }

        const batch = writeBatch(db)
        const productosRef = collection(db, 'productos')
        batch.commit()
        .then(() =>{
                addDoc(productosRef, producto)
                terminarAdd(producto.nombre)
        })
    }

    const {values, handleInputChange} = useForm({
        category: '',
        nombre: '',
        precio: '',
        stock: ''
    })
    
    return (
        
        <div>
            <h2>Agregar Productos</h2>
            <hr/>

            <form onSubmit={handleSubmit} name="formAdding">

                <input
                name="nombre" 
                value={values.nombre}
                onChange={handleInputChange}
                type={'text'} 
                placeholder='Nombre del producto'
                />

                <input
                name="category" 
                value={values.category}
                onChange={handleInputChange}
                type={'text'}
                placeholder='Categoria del producto' 
                />

                <input 
                name="precio" 
                value={values.precio}
                onChange={handleInputChange}
                type={'number'} 
                placeholder='Precio del producto'
                />

                <input 
                name="stock" 
                value={values.stock}
                onChange={handleInputChange}
                type={'number'} 
                placeholder='Stock del producto'
                />
                <button type="submit">Enviar</button>

            </form>
        </div>
    )
}

export default FormAddProduct
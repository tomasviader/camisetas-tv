import './Contacto.scss'

const Contacto = () => {

    return (

    <div>
        <h1>Contacto</h1>
        
        <form id="form"  action="https://formspree.io/f/xrgderae" method="POST" >
            <input type="hidden" name="_cc" value="tomasviader5@gmail.com"/>
            <div className='div-form'>
                <div className='div-inputs'>
                    <p>Nombre</p>
                    <input name="nombre" type={'text'}/>
                    
                    <p className='p-email'>Email</p>
                    <input name="email" type={'email'}/>
                </div>
                <div className='div-textarea'>
                    <textarea placeholder="Escriba su consulta" name="message" id="message"></textarea>
                    <button type="submit">Enviar</button>
                </div>

            </div>
        </form>
    </div>


    )
}

export default Contacto
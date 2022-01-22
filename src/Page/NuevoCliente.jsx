import Formulario from '../components/Formulario'

const NuevoCliente = () => {
    return (
        <>
            <h1 className='font-black text-4xl text-blue-900 mt-3 px-3'>Nuevo Cliente</h1>
            <p className='px-4'>Llene los siguientes campos para registrar un cliente</p>
            <Formulario />
        </>
    )
}

export default NuevoCliente

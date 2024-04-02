

const Registro = () =>{

    return(
        <div>
            <form action="">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" placeholder="Primer Nombre"/>

                <label htmlFor="nombre2">segundo Nombre</label>
                <input type="text" name="nombre2" placeholder="opcional" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Correo electronico"/>

                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" placeholder="*************" />

                <button>Registrar</button>
            </form>
        </div>
    );
}

export default Registro;
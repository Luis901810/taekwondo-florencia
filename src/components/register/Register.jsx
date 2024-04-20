import styles from "./Register.module.css"

export default function Register () {

    return (
        <div className={styles.container}>
            <h1>Bienvenidos al Registro</h1>
        <form className={styles.form} action="">
        
        <label htmlFor="nombre"> Nombre </label>
        <input type="text" name="nombre" id="nombre"  placeholder="Nombre"/>
        <label htmlFor="apellido"> Apellido </label>
        <input type="text" name="apellido" id="apellido" placeholder="Apellido"/>
        <label htmlFor="direccion"> Direccion </label>
        <input type="text" name="direccion" id="direccion" placeholder="lugar de residencia" />
        <label htmlFor="correo"> Correo </label>
        <input type="email" name="correo" id="correo" placeholder="correo electronico" />
        <label htmlFor="password"> Contraseña </label>
        <input type="password"  name="password" id="password" placeholder="nueva contraseña"/>
        <label htmlFor="rep password"> Confirme Contraseña </label>
        <input type="password" name="rep password" id="rep password" placeholder="confirme contraseña" />
        <label >
            <i className="bx bx-user"></i>
            <input type="text" placeholder="prueba" />
        </label>
        <button> Registrar </button>

     </form>

     </div>
    )
}
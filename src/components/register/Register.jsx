import styles from "./Register.module.css"

export default function Register () {

    return (
        <div className={styles.container}>
            <div className={styles.information}>
                <div className={styles.infor}>
                <div className={styles.childs}>
                    <h2>Bienvenidos</h2>
                    <p>Para unirte a nuestra comudidad de Teakwondo te invitamos a Iniciar sesion con tus datos</p>
                    <input type="button" value="Iniciar sesion" />
                </div>

                </div>
            

            <div className={styles.formInf}>
                <div className={styles.formChilds}>
                    <h2> Crear Cuenta</h2>
                    <div className={styles.icon}>
                    <i className='bx bxl-google'></i>
                    <i className='bx bxl-facebook-circle'></i>
                    </div>
                <p>O usa un Correo para Registrarse</p>

            <form className={styles.form}  action="">
                <label>
                    <i className='bx bx-user'></i> 
                    <input type="text" placeholder="Nombre Completo" />
                </label>
                <label >
                <i className='bx bx-envelope'></i>
                <input type="email" placeholder="Correo electronico" />
                </label>
                <label htmlFor="">
                <i className='bx bx-lock-alt'></i>
                <input type="password" placeholder="**********" />
                </label>
                <input className={styles.boton} type="submit" value="Registrarse" />
            </form>
            </div>
            </div>
            </div>
    </div>
    )
}
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
             

            <div className={styles.form}>
                <div className={styles.formChilds}>
                    <h2> Crear Cuenta</h2>
                    <div className={styles.icon}>
                    <i class='bx bxl-google'></i>
                    <i class='bx bxl-facebook-circle'></i>
                    </div>
                <p>O usa un Correo para Registrarse</p>

            <form action="">
                <label htmlFor="">
                    <i class='bx bx-user'></i> 
                    <input type="text" placeholder="Nombre Completo" />
                </label>
                <label htmlFor="">
                <i class='bx bx-envelope'></i>
                <input type="email" placeholder="Correo electronico" />
                </label>
                <label htmlFor="">
                <i class='bx bx-lock-alt'></i>
                <input type="password" placeholder="**********" />
                </label>
                <input type="submit" value="Registrarse" />
            </form>
            </div>
            </div>
            </div>
    </div>
    )
}
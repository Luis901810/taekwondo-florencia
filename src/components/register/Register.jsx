
import { useState } from "react"
import styles from "./Register.module.css"
import { useNavigate } from "react-router-dom";


export default function Register () {

        const [ isLoginForm, setIsLoginForm ] = useState(true);

        const toggleFormVisibility = () =>{
            setIsLoginForm(!isLoginForm);
        }

        const navigate = useNavigate();


    return (
        <div className={styles.container}>
            <div className={`${styles.information}  ${isLoginForm ? styles.hide :"" } register`}>
                <div className={styles.infor}>
                <div className={styles.childs}>
                    <h2>Bienvenidos</h2>
                    <p>Para unirte a nuestra comudidad de Teakwondo te invitamos a Iniciar sesion con tus datos</p>
                    <input type="button" value="Iniciar sesion" onClick={toggleFormVisibility}  id="sign-in"/>
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
                <label htmlFor="">
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

            {/* //----------------------------------------------------------------------------------  */}

        <div className={`${styles.information} ${isLoginForm ? "": styles.hide}  login`}>
                <div className={styles.infor}>
                <div className={styles.childs}>
                    <h2>!! Bienvenidos Nuevamente</h2>
                <p>Si aun no tienes una cuenta por favor registrate Aqui</p>
                    <input type="button" value="Registrarse" onClick={toggleFormVisibility} id="sign-up"/>
                </div>

                </div>
            

            <div className={styles.formInf}>
                <div className={styles.formChilds}>
                    <h2>Iniciar Sesion</h2>
                    <div className={styles.icon}>
                    <i className='bx bxl-google'></i>
                <i className='bx bxl-facebook-circle'></i>
                    </div>
                <p>O inicia sesion con una cuenta</p>

            <form className={styles.form}  action="">
                <label >
                <i className='bx bx-envelope'></i>
                <input type="email" placeholder="Correo electronico" />
                </label>
                <label htmlFor="">
                <i className='bx bx-lock-alt'></i>
                <input type="password" placeholder="**********" />
                </label>
            <input className={styles.boton} type="submit" value="Iniciar Sesion" />
            </form>
            </div>
            </div>
            </div>
    </div>




    )
}
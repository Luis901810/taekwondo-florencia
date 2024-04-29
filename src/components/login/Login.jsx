

const Login = () =>{
    const [ isLoginForm, setIsLoginForm ] = useState(true);

    const toggleFormVisibility = () =>{
        setIsLoginForm(!isLoginForm);
    }

    return(
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
    );
}

export default Login;
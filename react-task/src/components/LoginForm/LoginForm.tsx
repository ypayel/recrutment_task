import "./LoginForm.scss"
export const LoginForm = () => {
    return (
        <>
            <div className="content-conteiner">
            <div className="cross-button-conteiner">
                <button className="cross-button"><img src="/images/cross.png" alt="cross" className="cross-icon"/></button>
            </div>
            <div className="form">
                <h3 className="header">Войти в систему</h3>
                <div className="inputs-conteiner">
                <label>
                    <input type="text" placeholder="Emal/Телефон" className="login-input"/>
                </label>
                <label>
                    <input type="text" placeholder="Пароль" className="password-input" />
                </label>
                </div>
                <p className="save-password"><img src="/images/apply-icon.png" alt="icon" className="apply-icon" />Запомнить пароль</p>
                <div className="footer">
                <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="restore-link">Восстановить</a>
                <button className="sing-button">Войти</button>
                <button className="register-button">Зарегистрироваться</button>
                </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm;
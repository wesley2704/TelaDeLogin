import logo from './img/logo.svg'
import "./global.css"

 

export function App() {
  return <div className="container">
    <header className="header">
      <img src={logo} alt="" />
      <span>Por favor entre com as Informações para entrar.</span>

    </header>

    <form>
      
     
    <div className="inputcontainer">
        <label htmlFor="email">E-mail</label>
        <input type="text" 
        name="email" 
        id="email" 
        placeholder="wesleynatan.natan@gmail.com"/>
    </div>

          
    <div className="inputcontainer">
        <label htmlFor="password">Password</label>
        <input type=" password" 
        name="password" 
        id="password" 
        placeholder="******************"/>
    </div>

    <a href="mot de passe oublie">  Esqueceu Sua Senha </a>
    <button className="button">
      Conectar 
      <img src="" alt="" />
    </button>

    <div className="footer">
      <p>Você não tem uma conta ?</p>
      <a href="#">Criar conta</a>
    </div>




    </form>
  </div>
   

}


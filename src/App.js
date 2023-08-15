import { useState } from "react";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles.styled";
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext";

function App() {

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [loginEmail, setLoginEmail] = useState()
  const [loginSenha, setLoginSenha] = useState()
  const [token, setToken] = useState()
  const [apelido, setApelido] = useState()
  const [post, setPost] = useState([])
  const [searchPost,setSearchPost] = useState()
  const [comments, setComments] = useState([])
  

  const context = {
    email: email,
    setEmail: setEmail,
    senha: senha,
    setSenha: setSenha,
    token: token, 
    setToken: setToken,
    apelido: apelido, 
    setApelido: setApelido,
    loginEmail: loginEmail, 
    setLoginEmail: setLoginEmail,
    loginSenha: loginSenha, 
    setLoginSenha: setLoginSenha,
    post: post, 
    setPost: setPost,
    searchPost: searchPost,
    setSearchPost: setSearchPost,
    comments: comments, 
    setComments: setComments
  }
  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyle/>
      <Router/>
    </GlobalContext.Provider>
  );
}

export default App;

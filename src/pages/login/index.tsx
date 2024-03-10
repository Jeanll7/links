import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'



export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (email === '' || password === '') {
      alert("Preencha todos os campos!");
      return;
    }     

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/admin", { replace: true })
        console.log("Usuário logado com sucesso:");
      })
      .catch((error) => {
        alert('Usuário não autorizado')
        console.error("Erro ao fazer login:", error.message);
      });

    setEmail('');
    setPassword('');    
  }

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">My
          <span className="bg-gradient-to-t from-blue-500 to-blue-200 bg-clip-text text-transparent">Link</span>
        </h1>
      </Link>

      
      <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">    
        <Input 
          placeholder="Digite o seu email..."
          type="email"
          value={email}
          onChange={ (e) => setEmail(e.target.value) }
          autoComplete="current-email"
        />

        <Input 
          placeholder="********"
          type="password"
          value={password}
          onChange={ (e) => setPassword(e.target.value) }
          autoComplete="current-password"
        />

        <button 
          type="submit"
          className="h-9 bg-blue-600 rounded text-lg font-medium text-white">
          Acessar
        </button>
      </form>
    </div>
  )
}
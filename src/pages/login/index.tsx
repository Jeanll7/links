import { Link } from "react-router-dom";
import { Input } from "../../components/Input";


export function Login() {
  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">My
          <span className="bg-gradient-to-t from-blue-500 to-blue-200 bg-clip-text text-transparent">Link</span>
        </h1>
      </Link>

      
      <form className="w-full max-w-xl flex flex-col px-2">    
        <Input 
          placeholder="Digite o seu email..."
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
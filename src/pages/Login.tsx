import { FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";

export function Login() {

    const [ input01, setInput01] = useState('')

    const [ input02, setInput02] = useState('')

    function handleSubmitLogin(event: FormEvent) {
        event.preventDefault()
    }
    
    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex w-1/4 justify-center">
                <form onSubmit={handleSubmitLogin} className="w-full flex flex-col items-center mb-12">
                    <p className="text-2xl font-bold text-zinc-600 text-center m-10 w-full">Login</p>
                    <FormInput
                    mandatory="*"
                    title="E-mail:"
                    type="email"
                    placeholder="Digite aqui o seu e-mail"
                    handleOnChange={event => setInput01(event.target.value)}
                     />
                    <FormInput
                    mandatory="*"
                    title="Senha:"
                    type="password"
                    placeholder="Digite aqui a sua senha"
                    handleOnChange={event => setInput02(event.target.value)}
                    />
                    <p className="w-full text-sm text-zinc-500 mb-5">
                        <NavLink to="/esqueciminhasenha" className="underline opacity-75 hover:opacity-100">Esqueci minha senha</NavLink>
                    </p>
                    <p className="w-full text-sm text-zinc-500 mb-5">
                        Não possui cadastro conosco?  
                        <NavLink to="/registrar" className="text-orange-500 underline opacity-75 hover:opacity-100 ml-1 ">Cadastre-se aqui!</NavLink>
                    </p>
                    <FormButton 
                    text="Entrar"
                    disabled={input01.length ===0 || input02.length === 0} 
                    />
                </form>
            </div>
        </div>
    )
}
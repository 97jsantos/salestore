import { FormEvent } from "react";
import { NavLink } from "react-router-dom";

import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";

export function Login() {

    function handleSubmitLogin(event: FormEvent) {
        event.preventDefault()
    }
    
    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex justify-center">
                <form onSubmit={handleSubmitLogin} className="w-full flex flex-col items-center mb-12">
                    <p className="text-2xl font-bold text-zinc-600 text-center m-10 w-full">Login</p>
                    <FormInput
                    name="email"
                    mandatory={true}
                    title="E-mail:"
                    type="email"
                    placeholder="Digite aqui o seu e-mail"
                     />
                    <FormInput
                    name="password"
                    mandatory={true}
                    title="Senha:"
                    type="password"
                    placeholder="Digite aqui a sua senha"
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
                    />
                </form>
            </div>
        </div>
    )
}
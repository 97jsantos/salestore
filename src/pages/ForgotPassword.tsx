import { FormEvent } from "react";

import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";

export function ForgotPassword() {

    function handleSubmitForgotPassword(event: FormEvent) {
        event.preventDefault()
    }

    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex justify-center">
                <form onSubmit={handleSubmitForgotPassword} className="w-full flex flex-col items-center mb-12">
                    <p className="text-2xl font-bold text-zinc-600 text-center m-10 w-full">Esqueci minha senha</p>
                    <FormInput
                    name="email"
                    mandatory={true}
                    title="E-mail:"
                    type="email"
                    placeholder="Digite aqui o seu e-mail"
                     />
                    <FormButton 
                    text="Prosseguir"
                     />
                </form>
            </div>
        </div>
    )
}
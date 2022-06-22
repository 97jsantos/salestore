import { FormEvent, useState } from "react";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";

export function ForgotPassword() {

    const [ input, setInput ] = useState('')

    function handleSubmitForgotPassword(event: FormEvent) {
        event.preventDefault()
    }

    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex justify-center">
                <form onSubmit={handleSubmitForgotPassword} className="w-full flex flex-col items-center mb-12">
                    <p className="text-2xl font-bold text-zinc-600 text-center m-10 w-full">Esqueci minha senha</p>
                    <FormInput
                    mandatory="*"
                    title="E-mail:"
                    type="email"
                    placeholder="Digite seu e-mail"
                    handleOnChange={event => setInput(event.target.value)} />
                    <FormButton 
                    text="Prosseguir"
                    disabled={input.length === 0} />
                </form>
            </div>
        </div>
    )
}
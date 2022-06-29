import { FormEvent } from "react";

import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";

export function Register() {

    function handleSubmitRegister(event:FormEvent) {
        event.preventDefault
    }
    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex justify-center">
                <form onSubmit={handleSubmitRegister} className="w-full flex flex-col items-center mb-12">
                    <p className="text-2xl font-bold text-zinc-600 text-center m-10 w-full">Cadastre-se</p>
                    <FormInput
                    name="name"
                    placeholder="Digite aqui o seu nome completo"
                    mandatory={true}
                    title="Nome Completo:"
                    type="text" />
                    <div className="w-full">
                        <div className="mb-1"><span className='mr-1 text-orange-500 font-extrabold'>*</span>Gênero:</div>
                        <div className="flex items-center w-full mb-5 gap-2">
                            <input type="radio" id="masc" value="masc" name="gender" className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange-500 ring-2 ring-zinc-100 checked:ring-offset-1 checked:ring-orange-500 checked:border-white transition duration-200 cursor-pointer" defaultChecked />
                            <label htmlFor="masc">Masculino</label>
                            <input type="radio" id="fem" value="fem" name="gender" className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange-500 ring-2 ring-zinc-100 checked:ring-offset-1 checked:ring-orange-500 checked:border-white transition duration-200 cursor-pointer ml-5" />
                            <label htmlFor="fem">Feminino</label>
                            <input type="radio" id="Other" value="Other" name="gender" className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange-500 ring-2 ring-zinc-100 checked:ring-offset-1 checked:ring-orange-500 checked:border-white transition duration-200 cursor-pointer ml-5" />
                            <label htmlFor="Other">Outro</label>
                        </div>
                    </div>
                    <FormInput
                    name="date"    
                    mandatory={true}
                    title="Data de nascimento:"
                    type="date" 
                    />
                    <FormInput
                    name="cpf"
                    mandatory={true}
                    title="CPF:"
                    mask="999.999.999-99"
                    type="tel"
                    placeholder="999.999.999-99"
                    />
                    <FormInput
                    name="tel"
                    mandatory={true}
                    title="Telefone:"
                    mask="(99) 99999-9999"
                    type="tel"
                    placeholder="(99) 99999-9999"
                    />
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
                    <FormInput
                    name="password"
                    mandatory={true}
                    title="Confirme sua senha:"
                    type="password"
                    placeholder="Digite aqui a sua senha"
                    />
                    <FormButton 
                    text="Criar cadastro"
                    />
                </form>
            </div>
        </div>
    )
}
import { FormEvent, useState } from "react";
import { FormButton } from "../components/FormButton";
import { FormInput } from "../components/FormInput";

export function Register() {

    const [input1, setInput1 ] = useState('')

    const [input2, setInput2 ] = useState('')

    const [input3, setInput3 ] = useState('')

    const [input4, setInput4 ] = useState('')

    const [input5, setInput5 ] = useState('')

    const [input6, setInput6 ] = useState('')

    const [input7, setInput7 ] = useState('')

    function handleSubmitRegister(event:FormEvent) {
        event.preventDefault
    }
    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex w-1/4 justify-center">
                <form onSubmit={handleSubmitRegister} className="w-full flex flex-col items-center mb-12">
                    <p className="text-2xl font-bold text-zinc-600 text-center m-10 w-full">Cadastre-se</p>
                    <FormInput
                    mandatory="*"
                    title="Nome Completo:"
                    type="text"
                    handleOnChange={event => setInput1(event.target.value)} />
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
                    mandatory="*"
                    title="Data de nascimento:"
                    type="date" 
                    handleOnChange={event => setInput2(event.target.value)}
                    />
                    <FormInput
                    mandatory="*"
                    title="CPF:"
                    mask="999.999.999-99"
                    type="tel"
                    placeholder="999.999.999-99"
                    handleOnChange={event => setInput3(event.target.value)}
                    />
                    <FormInput
                    mandatory="*"
                    title="Telefone:"
                    mask="(99) 99999-9999"
                    type="tel"
                    placeholder="(99) 99999-9999"
                    handleOnChange={event => setInput4(event.target.value)}
                    />
                    <FormInput
                    mandatory="*"
                    title="E-mail:"
                    type="email"
                    placeholder="Digite aqui o seu e-mail" 
                    handleOnChange={event => setInput5(event.target.value)}
                    />
                    <FormInput
                    mandatory="*"
                    title="Senha:"
                    type="password"
                    placeholder="Digite aqui a sua senha"
                    handleOnChange={event => setInput6(event.target.value)}
                    />
                    <FormInput
                    mandatory="*"
                    title="Confirme sua senha:"
                    type="password"
                    placeholder="Digite aqui a sua senha"
                    handleOnChange={event => setInput7(event.target.value)}
                    />
                    <FormButton 
                    text="Criar cadastro"
                    disabled={input1.length === 0 || input2.length === 0 || input3.length === 0 || input4.length === 0 || input5.length === 0 || input6.length === 0 || input7.length === 0} />
                </form>
            </div>
        </div>
    )
}
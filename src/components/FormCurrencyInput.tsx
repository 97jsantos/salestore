import CurrencyInput from 'react-currency-masked-input'

interface FormCurrencyInputProps{
    name: string
    mandatory: boolean
    title: string
    type: string
    placeholder: string
    handleOnChange: any
    value: any
}

export function FormCurrencyInput({ name, mandatory, title, type, placeholder, handleOnChange, value}:FormCurrencyInputProps) {
    return (
        <div className="w-full">
            <div className="w-full mb-1">
                <label htmlFor={name} className='mr-1 text-orange-500 font-extrabold'>{mandatory ? true && '*' : ''}</label>{title}
            </div>
                <CurrencyInput 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder} 
                onChange={handleOnChange}
                value={value}
                required
                className='h-10 border border-zinc-300 outline-none w-full rounded-md mb-7 p-5' />
            </div>
    )
}
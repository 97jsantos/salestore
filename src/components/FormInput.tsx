import InputMask from 'react-input-mask'

interface FormInputProps{
    name?: string
    mandatory?: string
    title: string
    mask?: any
    type: string
    placeholder?: string
    handleOnChange: any
    value?: any
}

export function FormInput({ name, mandatory, title, mask, type, placeholder, handleOnChange, value}:FormInputProps) {
    return (
        <div className="w-full">
            <div className="w-full mb-1">
                <label htmlFor={name} className='mr-1 text-orange-500 font-extrabold'>{mandatory}</label>{title}
            </div>
                <InputMask 
                mask={mask}
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
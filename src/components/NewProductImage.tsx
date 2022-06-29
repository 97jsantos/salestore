import InputMask from 'react-input-mask'
interface InputProps{
    name: string
    mandatory: boolean
    title: string;
    mask: any
    type: string;
    placeholder: string
    handleOnChange: any
    value: any
}

export function NewProductImage({ name, mandatory, title, mask, type, placeholder, handleOnChange, value }:InputProps) {
    return (
        <div className="w-full">
            <div className="w-full mb-1">
                <label htmlFor={name} className='mr-1 text-orange-500 font-extrabold'>{mandatory ? true && '*' : ''}</label>{title}
            </div>
                <InputMask 
                mask={mask} 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder} 
                onChange={handleOnChange}
                value={value}
                accept="image/png, image/jpeg"
                className='bg-white border border-zinc-300 outline-none w-full rounded-md mb-7 p-2' />
        </div>
    )
}
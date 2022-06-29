interface NewProductSelectProps {
    mandatory: boolean
    title: string
    name: string
    options: any
    handleOnChange: any
    value: any
    selectName: string
}

export function NewProductSelect({ mandatory, title, name, options, handleOnChange, value, selectName }:NewProductSelectProps) {
    return (
        <div className="w-full">
            <div className="w-full mb-1">
                <label htmlFor={name} className='mr-1 text-orange-500 font-extrabold'>{mandatory ? true && '*' : ''}</label>{title}
            </div>
            <select name={name} id={name} onChange={handleOnChange} value={value} required className='h-10 border border-zinc-300 outline-none w-full rounded-md mb-7 px-4'>
                <option value="">{selectName}</option>
                {options.map((option) => (
                    <option value={option.url} key={option.url}>
                        {option.name}
                    </option>
                ))}
            </select> 
        </div>
    )
}
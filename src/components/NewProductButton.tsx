interface NewProductButtonProps {
    type: any
    title: string
}

export function NewProductButton({ type, title }:NewProductButtonProps) {
    return (
            <button type={type} className="w-full bg-orange-500 h-10 rounded-md text-white mb-12 opacity-90 hover:opacity-100 disabled:opacity-50">{title}</button>
    )
}
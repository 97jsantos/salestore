interface FormButtonProps {
    text: string
}

export function FormButton({ text }:FormButtonProps) {
    return (
        <button type="submit" className="w-full bg-orange-500 h-10 rounded-md text-white opacity-90 hover:opacity-100 disabled:opacity-50">{text}</button>
    )
}
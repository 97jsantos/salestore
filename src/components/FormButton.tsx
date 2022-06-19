interface FormButtonProps {
    text: string;
    disabled?: any
}

export function FormButton({ text, disabled }:FormButtonProps) {
    return (
        <button type="submit" disabled={disabled} className="w-full bg-orange-500 h-10 rounded-md text-white opacity-90 hover:opacity-100 disabled:opacity-50">{text}</button>
    )
}
interface InputProps {
    label: string
    id: string
    type?: string
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
}) => {
    return (
        <div className="flex flex-col mb-5">
            <label htmlFor={id} className='text-lg my-2'>{label} <span className="text-primary">*</span></label>
            <div className="relative">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    required
                    className="form-input w-full px-4 py-2 text-lg ring-1 ring-gray ring-opacity-30 border-0 rounded-md bg-dark outline-none focus:ring-primary" />
            </div>
        </div>
    )
}

export default Input
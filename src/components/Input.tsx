import { JSXElementConstructor } from 'react'
import { TEInput } from 'tw-elements-react'

interface IInput {
	type: string
	label?: string
	name?: string
	id?: string
	placeholder?: string
	className?: string
}


const Input: JSXElementConstructor<IInput> = ({ type, label, name, id, placeholder, className }: IInput) => {
	return (
		<TEInput
			type={type}
			label={label}
			name={name}
			id={id}
			placeholder={placeholder}
			className={className}

		></TEInput>
	)
}

export default Input
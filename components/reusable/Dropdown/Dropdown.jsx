import Select from 'react-select';

function Dropdown({
	containerStyle,
	values,
	isMulti = false,

	placeholder = 'Enter Value',
	...props
}) {
	return (
		<Select
			options={values.map((value) => ({
				label: value.label,
				value: value.value,
			}))}
			styles={{
				container: (provided, state) => ({
					...provided,
					width: '100%',
					...containerStyle,
				}),
				control: (provided, state) => ({
					...provided,
					paddingBlock: 10,
				}),
				placeholder: (provided) => ({
					...provided,
					color: '#ccc',
				}),
			}}
			isClearable
			placeholder={placeholder}
			escapeClearsValue
			backspaceRemovesValue
			noOptionsMessage={() => 'No option found at the moment'}
			isMulti
			{...props}
		/>
	);
}

export default Dropdown;

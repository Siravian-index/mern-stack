interface Props {
  value: string
  setState: React.Dispatch<React.SetStateAction<string>>
  label: string
  type?: 'text' | 'number'
}

const Input = ({ value, setState, label, type = 'text' }: Props) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setState(value)
  }

  return (
    <div>
      <label>
        {label}
        <input name={label} value={value} onChange={handleChange} type={type} />
      </label>
    </div>
  )

}

export default Input
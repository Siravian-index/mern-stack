interface Props {
  value: string
  setState: React.Dispatch<React.SetStateAction<string>>
  label: string
  type?: 'text' | 'number'
  className?: string
}

const Input = ({ value, setState, label, type = 'text', className }: Props) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (type === 'number') {
      console.log("number input")
      setState((prev) => parseInt(prev) > 0 ? value : String(1))
    } else {
      setState(value)
    }
  }

  return (
    <label>
      {label}
      <input name={label} value={value} onChange={handleChange} type={type} />
    </label>
  )

}

export default Input
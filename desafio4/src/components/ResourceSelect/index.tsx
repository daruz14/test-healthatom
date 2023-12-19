import OPTIONS from "@/constants/options"

type Props = {
  resource: string
  onChange: (newValue: string) => void
}

export default function ResourceSelect(props: Props) {
  const { resource, onChange } = props

  const selectOnChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const newValue = event.target.value;
    if (onChange) {
      onChange(newValue);
    }
  }


  return (
    <select key="resource-select" value={resource} onChange={selectOnChange} className="p-2 border-2 border-black rounded-md w-64">
      <option value="" key="null-value">Selecciona Recurso</option>
      {Object.keys(OPTIONS).map((key) => <option value={key} key={key}>{key}</option>)}
    </select>
  )
}